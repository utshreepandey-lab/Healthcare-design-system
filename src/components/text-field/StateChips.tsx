"use client";

import { Button } from "@/components/ui/button";

export type FieldVariant = "default" | "active" | "filled" | "error" | "disabled";

const VARIANTS: { value: FieldVariant; label: string }[] = [
  { value: "default", label: "Default" },
  { value: "active", label: "Active" },
  { value: "filled", label: "Filled" },
  { value: "error", label: "Error" },
  { value: "disabled", label: "Disabled" },
];

export function StateChips({
  value,
  onChange,
}: {
  value: FieldVariant;
  onChange: (v: FieldVariant) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {VARIANTS.map((v) => {
        const active = v.value === value;
        return (
          <Button
            key={v.value}
            type="button"
            variant={active ? "default" : "outline"}
            onClick={() => onChange(v.value)}
            aria-pressed={active}
            className="rounded-full px-4 py-1.5 text-sm font-medium"
          >
            {v.label}
          </Button>
        );
      })}
    </div>
  );
}
