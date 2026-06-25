"use client";

import { Button } from "@/components/ui/button";

export type Viewport = "desktop" | "mobile";

export function ViewportToggle({
  value,
  onChange,
}: {
  value: Viewport;
  onChange: (v: Viewport) => void;
}) {
  return (
    <div className="inline-flex gap-2">
      {(["desktop", "mobile"] as const).map((v) => {
        const active = value === v;
        return (
          <Button
            key={v}
            type="button"
            variant={active ? "default" : "outline"}
            onClick={() => onChange(v)}
            aria-pressed={active}
            className="rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors duration-200 ease-in-out"
          >
            {v}
          </Button>
        );
      })}
    </div>
  );
}
