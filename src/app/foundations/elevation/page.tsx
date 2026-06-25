import { Button } from "@/components/ui/button";
import { ElevationCard } from "@/components/ElevationCard";
import { PageHeader } from "@/components/PageHeader";
import { elevationGroups } from "@/lib/tokens";

const USE_CASES: Record<string, string> = {
  Bottom: "Cards, buttons, dropdowns",
  Top: "Sticky headers, bottom sheets",
  Center: "Modals, popovers, tooltips",
};

const FOCUS_RING_VALUE = "0 0 0 2px #ffffff, 0 0 0 4px #0e814f";

export default function ElevationPage() {
  return (
    <div className="flex flex-col gap-12 px-6 pt-12 pb-16 md:px-12">
      <PageHeader
        eyebrow="Foundations"
        title="Elevation"
        description="Elevation tokens define how surfaces cast shadows, creating a sense of depth and hierarchy. This system uses three shadow directions and three intensities."
      />

      <div className="flex flex-col gap-12">
        {elevationGroups.map((g) => (
          <section key={g.group} className="flex flex-col gap-4">
            <div className="flex flex-col gap-0.5">
              <h2 className="text-xl font-bold text-foreground">{g.group} elevation</h2>
              <p className="text-sm text-muted-foreground">{USE_CASES[g.group]}</p>
            </div>
            <div className="flex flex-wrap gap-8 rounded-lg bg-muted p-10">
              {g.tokens.map((t) => (
                <ElevationCard
                  key={t.token}
                  direction={g.group.toLowerCase()}
                  size={t.token.split("-")[1]}
                  shadow={t.value}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-foreground">Focus ring</h2>
        <div className="flex flex-col items-start gap-4 rounded-lg bg-muted p-10">
          <Button
            type="button"
            className="rounded-lg px-6 py-2.5 text-sm font-medium outline-none transition-shadow duration-150 focus-visible:ring-0 focus-visible:shadow-[0_0_0_2px_#ffffff,0_0_0_4px_var(--ring)]"
          >
            Focus me
          </Button>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-medium text-foreground">
              primary-focus-ring — used for keyboard accessibility
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">{FOCUS_RING_VALUE}</span>
            <span className="mt-1 text-xs text-muted-foreground">
              Press Tab to focus the button and see the focus ring appear
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
