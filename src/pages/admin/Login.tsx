// src/pages/admin/Login.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminSignIn } from "@/lib/admin-api";
import Button from "@/components/ui/Button";

export default function AdminLogin() {
  const navigate          = useNavigate();
  const [email, setEmail] = useState("");
  const [pass,  setPass]  = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await adminSignIn(email, pass);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-antara-navy flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <p className="text-2xl font-bold text-antara-white">
            Antara <span className="text-antara-gold">Admin</span>
          </p>
          <p className="text-antara-muted text-sm mt-2">Sign in to your dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 bg-antara-surface border border-antara-border rounded-2xl p-8">
          <div>
            <label className="text-antara-muted text-xs uppercase tracking-wider block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-antara-dark border border-antara-border text-antara-text focus:outline-none focus:border-antara-gold text-sm"
              placeholder="admin@antaraglobal.com"
            />
          </div>
          <div>
            <label className="text-antara-muted text-xs uppercase tracking-wider block mb-2">Password</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-antara-dark border border-antara-border text-antara-text focus:outline-none focus:border-antara-gold text-sm"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <Button type="submit" loading={loading} className="w-full" size="lg">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
