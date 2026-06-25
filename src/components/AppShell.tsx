"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sidebar } from "./Sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen md:flex">
      {/* Mobile top bar */}
      <header className="flex items-center justify-between border-b border-border px-4 py-3 md:hidden">
        <span className="text-base font-bold text-foreground">
          Healthcare <span className="text-primary">Design System</span>
        </span>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
            <path d="M3 5.5H17M3 10H17M3 14.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </Button>
      </header>
      {open && (
        <div className="border-b border-border md:hidden">
          <Sidebar />
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 border-t border-r border-border md:block">
        <div className="sticky top-0 h-screen overflow-y-auto">
          <Sidebar />
        </div>
      </aside>

      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
