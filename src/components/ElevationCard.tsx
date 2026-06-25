export function ElevationCard({
  direction,
  size,
  shadow,
}: {
  direction: string;
  size: string;
  shadow: string;
}) {
  return (
    <div
      className="flex h-[100px] w-40 flex-col items-center justify-center gap-1 rounded-lg bg-card px-3 text-center"
      style={{ boxShadow: shadow }}
    >
      <span className="font-mono text-sm font-medium text-foreground">
        {direction} / {size}
      </span>
      <span className="break-all font-mono text-[10px] text-muted-foreground">{shadow}</span>
    </div>
  );
}
