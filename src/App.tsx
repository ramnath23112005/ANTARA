// src/App.tsx
// Central router — Antara Global
// 3-layer system: Data → Sections → Pages (no logic in pages, no content in sections)

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import CursorFollower from "@/components/interactive/CursorFollower";
import ChatBot from "@/components/interactive/ChatBot";

// Pages
import Home        from "@/pages/Home";
import About       from "@/pages/About";
import Services    from "@/pages/Services";
import Audience    from "@/pages/Audience";
import Ecosystem   from "@/pages/Ecosystem";
import Values      from "@/pages/Values";
import Positioning from "@/pages/Positioning";
import Blogs       from "@/pages/Blogs";
import Careers     from "@/pages/Careers";
import Works       from "@/pages/Works";
import Contact     from "@/pages/Contact";

// Admin
import AdminLogin     from "@/pages/admin/Login";
import AdminDashboard from "@/pages/admin/Dashboard";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          {/* Global interactive overlays */}
          <CursorFollower />
          <ChatBot />

          <Routes>
            {/* Public routes */}
            <Route path="/"            element={<Home />} />
            <Route path="/about"       element={<About />} />
            <Route path="/services"    element={<Services />} />
            <Route path="/audience"    element={<Audience />} />
            <Route path="/ecosystem"   element={<Ecosystem />} />
            <Route path="/values"      element={<Values />} />
            <Route path="/positioning" element={<Positioning />} />
            <Route path="/blogs"       element={<Blogs />} />
            <Route path="/careers"     element={<Careers />} />
            <Route path="/works"       element={<Works />} />
            <Route path="/contact"     element={<Contact />} />

            {/* Admin routes */}
            <Route path="/admin"           element={<Navigate to="/admin/login" replace />} />
            <Route path="/admin/login"     element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
