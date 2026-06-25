import type { TypeStyle } from "@/lib/tokens";
import type { Viewport } from "./ViewportToggle";

function previewWeight(style: TypeStyle): number {
  const withNumber = style.weights.find((w) => /\d/.test(w));
  if (withNumber) return Number(withNumber.match(/\d+/)?.[0] ?? 400);
  return 500;
}

const PREVIEW_TEXT = "The quick brown fox jumps over the lazy dog";

export function TypeStyleRow({ style, viewport }: { style: TypeStyle; viewport: Viewport }) {
  const isOverline = style.name === "Overline";
  const weight = previewWeight(style);
  const activeSize = viewport === "desktop" ? style.desktopSize : style.mobileSize;

  return (
    <div className="flex flex-col gap-4 border-b border-border py-6 last:border-b-0 md:flex-row md:items-start md:gap-8">
      <div className="w-full shrink-0 md:w-40">
        <span className="font-mono text-xs font-medium text-primary">
          {style.group} / {style.name}
        </span>
      </div>

      <div className="min-w-0 flex-1 overflow-hidden">
        <p
          className="truncate text-foreground transition-[font-size] duration-200 ease-out"
          style={{
            fontSize: activeSize,
            lineHeight: style.lineHeight,
            fontWeight: weight,
            fontVariantCaps: isOverline ? "small-caps" : undefined,
            letterSpacing: isOverline ? "1px" : undefined,
          }}
        >
          {PREVIEW_TEXT}
        </p>
      </div>

      <div className="grid w-full shrink-0 grid-cols-2 gap-x-4 gap-y-1 text-xs text-muted-foreground md:w-56 md:grid-cols-1">
        <span>
          Desktop:{" "}
          <span className={`font-mono ${viewport === "desktop" ? "font-bold text-primary" : "text-foreground"}`}>
            {style.desktopSize}
          </span>
        </span>
        <span>
          Mobile:{" "}
          <span className={`font-mono ${viewport === "mobile" ? "font-bold text-primary" : "text-foreground"}`}>
            {style.mobileSize}
          </span>
        </span>
        <span>
          Line-height: <span className="font-mono text-foreground">{style.lineHeight}</span>
        </span>
        <span>
          Weight: <span className="font-mono text-foreground">{style.weights.join(", ")}</span>
        </span>
        {style.notes && (
          <span>
            Notes: <span className="font-mono text-foreground">{style.notes}</span>
          </span>
        )}
      </div>
    </div>
  );
}
