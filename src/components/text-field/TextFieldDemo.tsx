"use client";

import { useEffect, useRef, useState } from "react";
import { StateChips, type FieldVariant } from "./StateChips";
import { TextField } from "./TextField";

const PREFILLED_NAME = "Priya Sharma";

function initialValueFor(variant: FieldVariant): string {
  return variant === "filled" ? PREFILLED_NAME : "";
}

function TextFieldInstance({ variant }: { variant: FieldVariant }) {
  const [value, setValue] = useState(() => initialValueFor(variant));
  const [errorCleared, setErrorCleared] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (variant === "active") inputRef.current?.focus();
  }, [variant]);

  const isErrorShown = variant === "error" && !errorCleared;
  const isDisabled = variant === "disabled";

  function handleChange(v: string) {
    setValue(v);
    if (isErrorShown && v.length > 0) setErrorCleared(true);
  }

  const helperText = isErrorShown ? "This field is required" : "Please enter your full name";

  const helperClassName = isDisabled
    ? "text-faint"
    : isErrorShown
      ? "text-destructive-foreground"
      : "text-placeholder";

  return (
    <TextField
      ref={inputRef}
      value={value}
      onChange={handleChange}
      error={isErrorShown}
      disabled={isDisabled}
      helperText={helperText}
      helperClassName={helperClassName}
    />
  );
}

export function TextFieldDemo() {
  const [variant, setVariant] = useState<FieldVariant>("default");

  return (
    <div className="flex flex-col gap-6">
      <TextFieldInstance key={variant} variant={variant} />
      <StateChips value={variant} onChange={setVariant} />
    </div>
  );
}
