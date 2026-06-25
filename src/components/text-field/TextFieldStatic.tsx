import type { FieldVariant } from "./StateChips";

function ErrorIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" className="shrink-0 text-destructive-foreground">
      <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function TextFieldStatic({ variant }: { variant: FieldVariant }) {
  const floated = variant === "active" || variant === "filled";
  const value = variant === "filled" ? "Priya Sharma" : "";

  const labelClass = variant === "disabled" ? "text-faint" : "text-muted-foreground";

  const containerClass =
    variant === "disabled"
      ? "cursor-not-allowed border border-line bg-muted"
      : variant === "error"
        ? "border border-destructive bg-background"
        : variant === "active"
          ? "border-2 border-primary bg-background"
          : "border border-border bg-background shadow-center-small";

  const helperText = variant === "error" ? "This field is required" : "Please enter your full name";

  const helperClass =
    variant === "disabled"
      ? "text-faint"
      : variant === "error"
        ? "text-destructive-foreground"
        : "text-placeholder";

  return (
    <div className="flex w-full max-w-[343px] flex-col gap-1">
      <div className={`relative flex h-14 items-center rounded px-4 ${containerClass}`}>
        <div className="relative flex min-w-0 flex-1 flex-col justify-center">
          {floated && (
            <span className={`text-xs leading-[14px] ${labelClass}`}>
              Full Name <span className="text-destructive-foreground">*</span>
            </span>
          )}
          <span
            className={`font-sans text-base leading-5 ${
              variant === "disabled" ? "text-faint" : "text-input-foreground"
            }`}
          >
            {value}
          </span>
          {!floated && variant !== "disabled" && (
            <span className="pointer-events-none absolute left-0 font-sans text-base leading-5 text-placeholder">
              Full Name <span className="text-destructive-foreground">*</span>
            </span>
          )}
          {!floated && variant === "disabled" && (
            <span className="pointer-events-none absolute left-0 font-sans text-base leading-5 text-faint">
              Full Name <span className="text-faint">*</span>
            </span>
          )}
        </div>
        {variant === "error" && <ErrorIcon />}
      </div>
      <span className={`text-xs leading-[14px] ${helperClass}`}>{helperText}</span>
    </div>
  );
}
