// src/components/interactive/ChatBot.tsx
// Chat widget placeholder — to be wired to a live chat / AI provider
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-antara-gold text-antara-navy flex items-center justify-center shadow-gold hover:opacity-90 transition-opacity"
        aria-label="Open chat"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Chat window skeleton */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 rounded-2xl bg-antara-surface border border-antara-border shadow-glass flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b border-antara-border bg-antara-dark">
            <p className="text-sm font-semibold text-antara-white">Antara Support</p>
            <p className="text-xs text-antara-muted">We reply within a few hours</p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <p className="text-antara-muted text-sm">Chat coming soon…</p>
          </div>
        </div>
      )}
    </>
  );
}
