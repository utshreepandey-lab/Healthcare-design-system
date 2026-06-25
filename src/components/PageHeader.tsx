export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-[1px] text-primary">{eyebrow}</span>
        <h1 className="text-[32px] leading-10 font-bold text-foreground">{title}</h1>
        <p className="max-w-2xl text-base leading-5 font-normal text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="h-px w-full bg-border" />
    </div>
  );
}
