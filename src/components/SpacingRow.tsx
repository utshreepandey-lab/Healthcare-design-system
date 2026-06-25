function pxToNumber(value: string): number {
  return Number(value.replace("px", ""));
}

export function SpacingRow({ token, value }: { token: string; value: string }) {
  const px = pxToNumber(value);
  const barWidth = px === 0 ? 1 : px;

  return (
    <div className="flex items-center gap-4 border-b border-border py-3 last:border-b-0">
      <span className="w-28 shrink-0 font-mono text-xs font-medium text-primary">{token}</span>
      <div className="flex h-6 flex-1 items-center">
        <div
          className="h-3 rounded-sm bg-primary"
          style={{ width: `${barWidth}px`, minWidth: "1px" }}
        />
      </div>
      <span className="w-12 shrink-0 text-right font-mono text-xs text-foreground">{value}</span>
    </div>
  );
}
