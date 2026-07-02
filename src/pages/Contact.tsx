// src/pages/Contact.tsx
import { useState } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionWrapper from "@/sections/common/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { submitContact, bookCall } from "@/lib/api";
import { Mail, Phone, MapPin } from "lucide-react";

type Mode = "contact" | "call";

export default function Contact() {
  const [mode, setMode]       = useState<Mode>("contact");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    try {
      if (mode === "contact") {
        await submitContact({
          name:    fd.get("name")    as string,
          email:   fd.get("email")   as string,
          phone:   fd.get("phone")   as string,
          company: fd.get("company") as string,
          message: fd.get("message") as string,
          source:  "contact-page",
        });
      } else {
        await bookCall({
          name:    fd.get("name")    as string,
          email:   fd.get("email")   as string,
          phone:   fd.get("phone")   as string,
          company: fd.get("company") as string,
          message: fd.get("message") as string,
        });
      }
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <SectionWrapper>
        <SectionHeader
          eyebrow="Get In Touch"
          heading="Connect With Antara Global"
          subtext="Whether you're ready to start your growth journey or just want to learn more — we'd love to hear from you."
        />

        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            {[
              { icon: Mail,    label: "Email",    value: "hello@antaraglobal.com" },
              { icon: Phone,   label: "Phone",    value: "+91 XXXXX XXXXX" },
              { icon: MapPin,  label: "Location", value: "India" },
            ].map(({ icon: Icon, label, value }) => (
              <GlassCard key={label} className="p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-antara-gold/10 border border-antara-gold/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-antara-gold" />
                </div>
                <div>
                  <p className="text-antara-muted text-xs uppercase tracking-wider">{label}</p>
                  <p className="text-antara-white text-sm font-medium">{value}</p>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Form */}
          <GlassCard className="lg:col-span-2 p-8">
            {/* Tab switcher */}
            <div className="flex gap-2 mb-8">
              {(["contact", "call"] as Mode[]).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    mode === m
                      ? "bg-antara-gold text-antara-navy"
                      : "bg-antara-border/50 text-antara-muted hover:text-antara-text"
                  }`}
                >
                  {m === "contact" ? "Send Message" : "Book a Call"}
                </button>
              ))}
            </div>

            {success ? (
              <div className="text-center py-8">
                <p className="text-2xl mb-2">✅</p>
                <p className="text-antara-white font-semibold">Thank you!</p>
                <p className="text-antara-muted text-sm mt-2">
                  We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 text-antara-gold text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field name="name"    label="Full Name"    type="text"  required />
                  <Field name="email"   label="Email"        type="email" required />
                  <Field name="phone"   label="Phone"        type="tel" />
                  <Field name="company" label="Company Name" type="text" />
                </div>
                <div>
                  <label className="text-antara-muted text-xs uppercase tracking-wider block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your business and what you're looking for..."
                    className="w-full px-4 py-3 rounded-xl bg-antara-dark border border-antara-border text-antara-text placeholder-antara-muted/60 focus:outline-none focus:border-antara-gold text-sm resize-none"
                  />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <Button type="submit" loading={loading} className="w-full" size="lg">
                  {mode === "contact" ? "Send Message" : "Request a Call"}
                </Button>
              </form>
            )}
          </GlassCard>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
}

function Field({
  name, label, type, required,
}: { name: string; label: string; type: string; required?: boolean }) {
  return (
    <div>
      <label className="text-antara-muted text-xs uppercase tracking-wider block mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-antara-dark border border-antara-border text-antara-text placeholder-antara-muted/60 focus:outline-none focus:border-antara-gold text-sm"
        placeholder={label}
      />
    </div>
  );
}
