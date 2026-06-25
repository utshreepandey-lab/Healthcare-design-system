import { BorderWidthRow } from "@/components/BorderWidthRow";
import { PageHeader } from "@/components/PageHeader";
import { borderWidthTokens } from "@/lib/tokens";

export default function BorderWidthPage() {
  return (
    <div className="flex flex-col gap-8 px-6 pt-12 pb-16 md:px-12">
      <PageHeader
        eyebrow="Foundations"
        title="Border Width"
        description="Border width tokens control the thickness of strokes and outlines across all components."
      />

      <div className="flex flex-col">
        {borderWidthTokens.map((b) => (
          <BorderWidthRow
            key={b.token}
            token={b.token}
            value={b.value}
            widthPx={Number(b.value.replace("px", ""))}
            isNone={b.token === "border-none"}
          />
        ))}
      </div>
    </div>
  );
}
