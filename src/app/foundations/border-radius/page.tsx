import { PageHeader } from "@/components/PageHeader";
import { RadiusSwatch } from "@/components/RadiusSwatch";
import { borderRadiusTokens } from "@/lib/tokens";

export default function BorderRadiusPage() {
  return (
    <div className="flex flex-col gap-8 px-6 pt-12 pb-16 md:px-12">
      <PageHeader
        eyebrow="Foundations"
        title="Border Radius"
        description="Radius tokens map back to the spacing scale, except radius-round which is a fixed pill value."
      />

      <div className="flex flex-wrap items-end gap-8">
        {borderRadiusTokens.map((r) => (
          <RadiusSwatch
            key={r.token}
            token={r.token}
            value={r.value}
            radiusPx={Number(r.value.replace("px", ""))}
          />
        ))}
      </div>
    </div>
  );
}
