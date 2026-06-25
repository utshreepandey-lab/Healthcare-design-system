"use client";

import { forwardRef, useState } from "react";

function ErrorIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" className="shrink-0 text-destructive-foreground">
      <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export const TextField = forwardRef<
  HTMLInputElement,
  {
    value: string;
    onChange: (v: string) => void;
    error?: boolean;
    disabled?: boolean;
    helperText: string;
    helperClassName: string;
  }
>(function TextField({ value, onChange, error, disabled, helperText, helperClassName }, ref) {
  const [focused, setFocused] = useState(false);
  const floated = !disabled && (focused || value.length > 0);

  const labelClass = disabled ? "text-faint" : floated ? "text-muted-foreground" : "text-placeholder";

  const containerClass = disabled
    ? "cursor-not-allowed border border-line bg-muted"
    : error
      ? "border border-destructive bg-background"
      : focused
        ? "border-2 border-primary bg-background"
        : "border border-border bg-background shadow-center-small";

  return (
    <div className="flex w-full max-w-[343px] flex-col gap-1">
      <div className={`relative flex h-14 items-center rounded px-4 transition-colors ${containerClass}`}>
        <div className="relative flex min-w-0 flex-1 flex-col justify-center">
          {floated && (
            <span className={`text-xs leading-[14px] ${labelClass}`}>
              Full Name <span className="text-destructive-foreground">*</span>
            </span>
          )}
          <input
            ref={ref}
            type="text"
            value={value}
            disabled={disabled}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => onChange(e.target.value)}
            aria-label="Full Name"
            className={`w-full bg-transparent font-sans text-base leading-5 outline-none disabled:cursor-not-allowed ${
              disabled ? "text-faint" : "text-input-foreground"
            }`}
          />
          {!floated && !disabled && (
            <span className="pointer-events-none absolute left-0 font-sans text-base leading-5 text-placeholder">
              Full Name <span className="text-destructive-foreground">*</span>
            </span>
          )}
        </div>
        {error && <ErrorIcon />}
      </div>
      <span className={`text-xs leading-[14px] ${helperClassName}`}>{helperText}</span>
    </div>
  );
});
