// src/pages/admin/Dashboard.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { getContacts, getBookCalls, getApplications, adminSignOut } from "@/lib/admin-api";
import { Users, Phone, Briefcase, LogOut } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

interface Counts { contacts: number; calls: number; applications: number }

export default function AdminDashboard() {
  const { session, loading } = useAuth();
  const navigate             = useNavigate();
  const [counts, setCounts]  = useState<Counts>({ contacts: 0, calls: 0, applications: 0 });
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && !session) navigate("/admin/login");
  }, [session, loading, navigate]);

  useEffect(() => {
    if (!session) return;
    Promise.all([getContacts(), getBookCalls(), getApplications()])
      .then(([c, b, a]) => setCounts({ contacts: c.length, calls: b.length, applications: a.length }))
      .catch(console.error)
      .finally(() => setFetching(false));
  }, [session]);

  const handleSignOut = async () => {
    await adminSignOut();
    navigate("/admin/login");
  };

  if (loading || fetching) {
    return (
      <div className="min-h-screen bg-antara-navy flex items-center justify-center">
        <p className="text-antara-muted">Loading dashboard…</p>
      </div>
    );
  }

  const STATS = [
    { label: "Contact Enquiries", value: counts.contacts,     icon: Users,    color: "text-blue-400" },
    { label: "Book Call Requests", value: counts.calls,       icon: Phone,    color: "text-antara-gold" },
    { label: "Career Applications", value: counts.applications, icon: Briefcase, color: "text-emerald-400" },
  ];

  return (
    <div className="min-h-screen bg-antara-navy">
      {/* Top bar */}
      <header className="bg-antara-dark border-b border-antara-border px-6 py-4 flex items-center justify-between">
        <p className="text-antara-white font-semibold">
          Antara <span className="text-antara-gold">Admin</span>
        </p>
        <Button variant="ghost" size="sm" onClick={handleSignOut}>
          <LogOut size={16} /> Sign Out
        </Button>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-antara-white mb-8">Dashboard</h1>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {STATS.map(({ label, value, icon: Icon, color }) => (
            <GlassCard key={label} className="p-6 flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-antara-dark flex items-center justify-center flex-shrink-0">
                <Icon size={22} className={color} />
              </div>
              <div>
                <p className="text-3xl font-bold text-antara-white">{value}</p>
                <p className="text-antara-muted text-sm mt-0.5">{label}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Placeholder sections */}
        <GlassCard className="p-8 text-center">
          <p className="text-antara-muted">
            Full data tables coming in Phase 2 — Founder Dashboard build.
          </p>
        </GlassCard>
      </main>
    </div>
  );
}
