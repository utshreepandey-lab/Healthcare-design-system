import { PageHeader } from "@/components/PageHeader";
import { EntryCard } from "@/components/EntryCard";

const COMPONENTS = [
  {
    href: "/components/text-field",
    title: "Text Field",
    description:
      "A single-line input for collecting user information. Supports required fields, helper text, and multiple interaction states.",
  },
  {
    href: "/components/accordion",
    title: "Accordion",
    description:
      "Expandable content panels used to show and hide information progressively. Commonly used for FAQs and structured content.",
  },
  {
    href: "/components/button",
    title: "Button",
    description:
      "Buttons trigger actions. This system uses 6 types, 3 sizes, and 4 states — all built from design tokens.",
  },
];

export default function ComponentsPage() {
  return (
    <div className="flex flex-col gap-8 px-6 pt-12 pb-16 md:px-12">
      <PageHeader
        eyebrow="Components"
        title="Components"
        description="Interactive building blocks built from the foundation tokens — buttons, inputs, and structured content patterns."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COMPONENTS.map((c) => (
          <EntryCard key={c.href} href={c.href} eyebrow="Component" title={c.title} description={c.description} />
        ))}
      </div>
    </div>
  );
}
