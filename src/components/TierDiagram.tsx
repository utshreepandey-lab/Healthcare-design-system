import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const ACCENT_CLASSES: Record<string, string> = {
  muted: "bg-muted text-muted-foreground",
  primary: "bg-accent text-accent-foreground",
  secondary: "bg-secondary/10 text-secondary",
};

function TierBox({
  label,
  example,
  description,
  accent,
}: {
  label: string;
  example: string;
  description: string;
  accent: keyof typeof ACCENT_CLASSES;
}) {
  return (
    <Card className="flex-1 rounded-lg ring-border">
      <CardContent className="flex flex-col gap-1.5">
        <Badge className={`w-fit rounded-md uppercase tracking-[1px] ${ACCENT_CLASSES[accent]}`}>
          {label}
        </Badge>
        <code className="font-mono text-sm font-medium text-foreground">{example}</code>
        <span className="text-sm text-muted-foreground">{description}</span>
      </CardContent>
    </Card>
  );
}

function Arrow() {
  return (
    <div className="flex shrink-0 items-center justify-center px-1 text-border md:px-0">
      <svg viewBox="0 0 16 16" width="18" height="18" fill="none" className="rotate-90 md:rotate-0">
        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function TierDiagram() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-stretch md:gap-2">
      <TierBox
        label="Primitive"
        example="color.Green.500"
        description="Raw value: #41c88e"
        accent="muted"
      />
      <Arrow />
      <TierBox
        label="Semantic"
        example="Color.Primary.500"
        description="Named role: brand colour"
        accent="primary"
      />
      <Arrow />
      <TierBox
        label="Use"
        example="bg-primary"
        description="Applied in components"
        accent="secondary"
      />
    </div>
  );
}
