import { EntryCard } from "@/components/EntryCard";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border bg-muted/40 px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-3xl text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-[1px] text-primary">
            Healthcare
          </span>
          <h1 className="mt-3 text-[42px] leading-[48px] font-bold text-foreground md:text-[48px] md:leading-[56px]">
            Healthcare Design System
          </h1>
          <p className="mt-4 max-w-xl text-base leading-5 text-muted-foreground md:text-lg md:leading-6">
            Tokens and components — built in Figma, documented here.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          <EntryCard
            href="/foundations"
            eyebrow="Start here"
            title="Foundations"
            description="Colour, typography, spacing, radius, border width, and elevation tokens."
          />
          <EntryCard
            href="/components"
            eyebrow="Coming soon"
            title="Components"
            description="Buttons, inputs, cards, and patterns built from the foundation tokens."
          />
        </div>
        <p className="mt-12 text-center text-sm text-faint">
          Built by Utshree Pandey &middot; Healthcare Design System &middot; 2026
        </p>
      </section>
    </div>
  );
}
