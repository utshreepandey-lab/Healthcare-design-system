"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { IsicButton } from "./IsicButton";
import {
  BUTTON_SIZES,
  BUTTON_TYPES,
  SIZE_LABELS,
  TYPE_LABELS,
  type ButtonSize,
  type ButtonType,
} from "./buttonStyles";

type LayoutMode = "icon-text" | "icon-only";

function BooleanControl({
  id,
  label,
  checked,
  onCheckedChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} />
      <Label htmlFor={id} className="text-sm font-normal text-foreground">
        {label}
      </Label>
    </div>
  );
}

export function ButtonPlayground() {
  const [type, setType] = useState<ButtonType>("primary");
  const [size, setSize] = useState<ButtonSize>("lg");
  const [layout, setLayout] = useState<LayoutMode>("icon-text");
  const [disabled, setDisabled] = useState(false);
  const [showLeftIcon, setShowLeftIcon] = useState(true);
  const [showRightIcon, setShowRightIcon] = useState(true);

  const iconOnly = layout === "icon-only";

  return (
    <div className="flex flex-col gap-6 rounded-lg bg-muted p-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">
            Type
          </span>
          <div className="flex flex-wrap gap-2">
            {BUTTON_TYPES.map((t) => (
              <Button
                key={t}
                type="button"
                variant={t === type ? "default" : "outline"}
                onClick={() => setType(t)}
                aria-pressed={t === type}
                className="rounded-full px-4 py-1.5 text-sm font-medium"
              >
                {TYPE_LABELS[t]}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">
            Size
          </span>
          <div className="flex flex-wrap gap-2">
            {BUTTON_SIZES.map((s) => (
              <Button
                key={s}
                type="button"
                variant={s === size ? "default" : "outline"}
                onClick={() => setSize(s)}
                aria-pressed={s === size}
                className="rounded-full px-4 py-1.5 text-sm font-medium"
              >
                {SIZE_LABELS[s]}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">
            Button Type
          </span>
          <div className="flex flex-wrap gap-2">
            {(["icon-text", "icon-only"] as const).map((l) => (
              <Button
                key={l}
                type="button"
                variant={l === layout ? "default" : "outline"}
                onClick={() => setLayout(l)}
                aria-pressed={l === layout}
                className="rounded-full px-4 py-1.5 text-sm font-medium"
              >
                {l === "icon-text" ? "Icon + Text" : "Icon Only"}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">
            Options
          </span>
          <div className="flex flex-wrap gap-6">
            <BooleanControl id="disabled" label="Disabled" checked={disabled} onCheckedChange={setDisabled} />
            <BooleanControl
              id="show-left-icon"
              label="Show Left Icon"
              checked={showLeftIcon}
              onCheckedChange={setShowLeftIcon}
            />
            <BooleanControl
              id="show-right-icon"
              label="Show Right Icon"
              checked={showRightIcon}
              onCheckedChange={setShowRightIcon}
            />
          </div>
        </div>
      </div>

      <div className="flex min-h-[140px] items-center justify-center rounded-lg bg-background p-10">
        <IsicButton
          type={type}
          size={size}
          iconOnly={iconOnly}
          disabled={disabled}
          showLeftIcon={showLeftIcon}
          showRightIcon={showRightIcon}
        />
      </div>
    </div>
  );
}
