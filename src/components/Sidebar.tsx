"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Overview" },
  {
    href: "/foundations",
    label: "Foundations",
    children: [
      { href: "/foundations/colours", label: "Colours" },
      { href: "/foundations/typography", label: "Typography" },
      { href: "/foundations/spacing", label: "Spacing" },
      { href: "/foundations/border-radius", label: "Border Radius" },
      { href: "/foundations/border-width", label: "Border Width" },
      { href: "/foundations/elevation", label: "Elevation" },
    ],
  },
  {
    href: "/components",
    label: "Components",
    children: [
      { href: "/components/text-field", label: "Text Field" },
      { href: "/components/accordion", label: "Accordion" },
      { href: "/components/button", label: "Button" },
    ],
  },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "block rounded-md px-3 py-2 text-sm transition-colors",
        active
          ? "bg-accent font-medium text-accent-foreground"
          : "text-foreground/70 hover:bg-muted",
      )}
    >
      {label}
    </Link>
  );
}

export function Sidebar() {
  return (
    <nav className="flex flex-col gap-6 p-4">
      <Link href="/" className="px-3 py-2 text-base font-bold text-foreground">
        Healthcare <span className="text-primary">Design System</span>
      </Link>
      <div className="flex flex-col gap-5">
        {nav.map((section) =>
          "children" in section ? (
            <div key={section.label} className="flex flex-col gap-1">
              <Link
                href={section.href}
                className="px-3 text-xs font-bold text-muted-foreground uppercase tracking-[0.08em] hover:text-foreground"
              >
                {section.label}
              </Link>
              {section.children?.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} />
              ))}
            </div>
          ) : (
            <NavLink key={section.href} href={section.href} label={section.label} />
          ),
        )}
      </div>
    </nav>
  );
}
