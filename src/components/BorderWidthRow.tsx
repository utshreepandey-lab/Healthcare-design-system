export function BorderWidthRow({
  token,
  value,
  widthPx,
  isNone,
}: {
  token: string;
  value: string;
  widthPx: number;
  isNone?: boolean;
}) {
  return (
    <div className="flex items-center gap-6 border-b border-border py-8 last:border-b-0">
      <span className="w-28 shrink-0 font-mono text-xs font-medium text-primary">{token}</span>
      <div className="flex flex-1 items-center">
        {isNone ? (
          <div className="h-0 w-full border-t-2 border-dashed border-line" />
        ) : (
          <div className="w-full bg-primary" style={{ height: `${widthPx}px` }} />
        )}
      </div>
      <span className="w-28 shrink-0 text-right font-mono text-xs text-foreground">
        {isNone ? "0px / none" : value}
      </span>
    </div>
  );
}
