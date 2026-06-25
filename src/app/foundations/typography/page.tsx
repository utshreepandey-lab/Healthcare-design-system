"use client";

import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { TypeStyleRow } from "@/components/TypeStyleRow";
import { ViewportToggle, type Viewport } from "@/components/ViewportToggle";
import { typeStyles } from "@/lib/tokens";

const GROUP_ORDER = ["Display", "Heading", "Body", "Label", "Caption"];

export default function TypographyPage() {
  const [viewport, setViewport] = useState<Viewport>("desktop");

  return (
    <div className="flex flex-col gap-10 px-6 pt-12 pb-16 md:px-12">
      <PageHeader
        eyebrow="Foundations"
        title="Typography"
        description="Every type style below renders at its real size and weight."
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
          Font family: <span className="font-medium text-foreground">Roboto</span> — Regular 400,
          Medium 500, Bold 700
        </div>
        <ViewportToggle value={viewport} onChange={setViewport} />
      </div>

      <div className="flex flex-col gap-12">
        {GROUP_ORDER.map((group) => {
          const styles = typeStyles.filter((s) => s.group === group);
          if (styles.length === 0) return null;
          return (
            <section key={group} className="flex flex-col gap-1">
              <h2 className="text-xs font-bold uppercase tracking-[1px] text-faint">{group}</h2>
              <div className="flex flex-col">
                {styles.map((style) => (
                  <TypeStyleRow
                    key={`${style.group}-${style.name}`}
                    style={style}
                    viewport={viewport}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
