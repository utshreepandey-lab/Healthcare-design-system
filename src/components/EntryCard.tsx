import Link from "next/link";
import { Card } from "@/components/ui/card";

export function EntryCard({
  href,
  eyebrow,
  title,
  description,
}: {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Link href={href} className="group">
      <Card className="rounded-lg p-6 shadow-bottom-small ring-border transition-shadow hover:shadow-bottom-large">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-[1px] text-primary">{eyebrow}</span>
          <span className="text-xl font-bold text-foreground">{title}</span>
          <span className="text-sm text-muted-foreground">{description}</span>
          <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
            Explore
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </Card>
    </Link>
  );
}
