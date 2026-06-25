import { Badge } from "@/components/ui/badge";
import { CopyButton } from "./CopyButton";
import type { ColorRamp as ColorRampType } from "@/lib/tokens";

const LIGHT_TEXT_STOPS = new Set(["500", "600", "700", "800", "900"]);

export function ColorRamp({ ramp }: { ramp: ColorRampType }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="flex items-baseline gap-2">
          <h3 className="text-xl font-bold text-foreground">{ramp.name}</h3>
          <Badge className="rounded-md bg-accent uppercase tracking-[0.5px] text-accent-foreground">
            {ramp.semanticRole}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{ramp.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 md:grid-cols-10">
        {ramp.stops.map((s) => (
          <div key={s.stop} className="flex flex-col gap-1.5">
            <div
              className="group relative flex h-16 items-end rounded-lg p-2"
              style={{ backgroundColor: s.hex }}
            >
              <span
                className={`text-xs font-bold ${
                  LIGHT_TEXT_STOPS.has(s.stop) ? "text-white" : "text-black"
                }`}
              >
                {s.stop}
              </span>
              <span className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-foreground/85 px-2 py-1 font-mono text-[10px] text-background opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                {s.primitiveToken}
              </span>
            </div>
            <div className="flex flex-col gap-0.5 font-mono text-[11px]">
              <CopyButton value={s.hex} label={s.hex} className="text-foreground" />
              <CopyButton value={s.semanticToken} label={s.semanticToken} className="text-primary" />
              <span className="truncate px-1.5 text-muted-foreground" title={s.primitiveToken}>
                {s.primitiveToken}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
