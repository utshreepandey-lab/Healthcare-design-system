import { ColorRamp } from "@/components/ColorRamp";
import { CopyButton } from "@/components/CopyButton";
import { PageHeader } from "@/components/PageHeader";
import { TierDiagram } from "@/components/TierDiagram";
import { colorRamps, neutralExtremes } from "@/lib/tokens";

export default function ColoursPage() {
  return (
    <div className="flex flex-col gap-12 px-6 pt-12 pb-16 md:px-12">
      <PageHeader
        eyebrow="Foundations"
        title="Colours"
        description="Every colour ramp resolves through a 3-tier architecture: a raw primitive value, a named semantic role, and the class used in code."
      />

      <section className="flex flex-col gap-4 rounded-lg border border-border bg-muted/30 p-6">
        <h2 className="text-sm font-bold uppercase tracking-[1px] text-muted-foreground">
          Token architecture
        </h2>
        <TierDiagram />
      </section>

      <section className="flex flex-col gap-10">
        {colorRamps.map((ramp) => (
          <ColorRamp key={ramp.name} ramp={ramp} />
        ))}
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-xl font-bold text-foreground">Neutral extremes</h3>
        <div className="flex flex-wrap gap-4">
          {neutralExtremes.map((c) => (
            <div key={c.name} className="flex flex-col gap-1.5">
              <div
                className="flex h-16 w-32 items-end rounded-lg border border-border p-2"
                style={{ backgroundColor: c.hex }}
              >
                <span className={`text-xs font-bold ${c.name === "White" ? "text-black" : "text-white"}`}>
                  {c.name}
                </span>
              </div>
              <div className="flex flex-col gap-0.5 font-mono text-[11px]">
                <CopyButton value={c.hex} label={c.hex} className="text-foreground" />
                <CopyButton value={c.semanticToken} label={c.semanticToken} className="text-primary" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
