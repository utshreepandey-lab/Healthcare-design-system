import { PageHeader } from "@/components/PageHeader";
import { SpacingRow } from "@/components/SpacingRow";
import { spacingScale } from "@/lib/tokens";

export default function SpacingPage() {
  return (
    <div className="flex flex-col gap-8 px-6 pt-12 pb-16 md:px-12">
      <PageHeader
        eyebrow="Foundations"
        title="Spacing"
        description="The spacing scale drives padding, gaps, and margins across every component."
      />

      <div className="flex flex-col">
        {spacingScale.map((s) => (
          <SpacingRow key={s.token} token={s.token} value={s.value} />
        ))}
      </div>
    </div>
  );
}
