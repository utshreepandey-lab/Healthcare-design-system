import { PageHeader } from "@/components/PageHeader";
import { EntryCard } from "@/components/EntryCard";

const FOUNDATIONS = [
  {
    href: "/foundations/colours",
    title: "Colours",
    description:
      "Every colour ramp resolves through a 3-tier architecture: a raw primitive value, a named semantic role, and the class used in code.",
  },
  {
    href: "/foundations/typography",
    title: "Typography",
    description: "Every type style renders at its real size and weight, with a desktop/mobile comparison.",
  },
  {
    href: "/foundations/spacing",
    title: "Spacing",
    description: "The spacing scale drives padding, gaps, and margins across every component.",
  },
  {
    href: "/foundations/border-radius",
    title: "Border Radius",
    description:
      "Radius tokens map back to the spacing scale, except radius-round which is a fixed pill value.",
  },
  {
    href: "/foundations/border-width",
    title: "Border Width",
    description: "Border width tokens control the thickness of strokes and outlines across all components.",
  },
  {
    href: "/foundations/elevation",
    title: "Elevation",
    description:
      "Elevation tokens define how surfaces cast shadows, creating a sense of depth and hierarchy.",
  },
];

export default function FoundationsPage() {
  return (
    <div className="flex flex-col gap-8 px-6 pt-12 pb-16 md:px-12">
      <PageHeader
        eyebrow="Foundations"
        title="Foundations"
        description="The raw design tokens — colour, typography, spacing, radius, border width, and elevation — that every component is built from."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FOUNDATIONS.map((f) => (
          <EntryCard key={f.href} href={f.href} eyebrow="Foundation" title={f.title} description={f.description} />
        ))}
      </div>
    </div>
  );
}
