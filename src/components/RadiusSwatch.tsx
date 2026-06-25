export function RadiusSwatch({
  token,
  value,
  radiusPx,
}: {
  token: string;
  value: string;
  radiusPx: number;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="h-20 w-20 border-2 border-primary bg-background"
        style={{ borderRadius: `${radiusPx}px` }}
      />
      <div className="flex flex-col items-center gap-0.5">
        <span className="font-mono text-xs font-medium text-primary">{token}</span>
        <span className="font-mono text-xs text-muted-foreground">{value}</span>
      </div>
    </div>
  );
}
