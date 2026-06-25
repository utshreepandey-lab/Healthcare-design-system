export type ButtonType = "primary" | "secondary" | "outline" | "ghost" | "success" | "error";
export type ButtonSize = "lg" | "md" | "sm";
export type ButtonState = "default" | "hover" | "focused" | "disabled";

export const BUTTON_TYPES: ButtonType[] = ["primary", "secondary", "outline", "ghost", "success", "error"];
export const BUTTON_SIZES: ButtonSize[] = ["lg", "md", "sm"];
export const BUTTON_STATES: ButtonState[] = ["default", "hover", "focused", "disabled"];

export const TYPE_LABELS: Record<ButtonType, string> = {
  primary: "Primary",
  secondary: "Secondary",
  outline: "Outline",
  ghost: "Ghost",
  success: "Success",
  error: "Error",
};

export const SIZE_LABELS: Record<ButtonSize, string> = {
  lg: "Large",
  md: "Medium",
  sm: "Small",
};

export const STATE_LABELS: Record<ButtonState, string> = {
  default: "Default",
  hover: "Hover",
  focused: "Focused",
  disabled: "Disabled",
};

type StateStyle = {
  default: string;
  hover: string;
  focused: string;
  focusRing: string;
  disabled: string;
};

export const STATE_STYLES: Record<ButtonType, StateStyle> = {
  primary: {
    default: "bg-emphasis text-white border-2 border-transparent",
    hover: "bg-primary-hover text-white border-2 border-transparent",
    focused: "bg-emphasis text-white border-2 border-emphasis",
    focusRing: "shadow-[0_0_0_2px_#ffffff,0_0_0_4px_var(--emphasis)]",
    disabled: "bg-line text-faint border-2 border-transparent cursor-not-allowed",
  },
  secondary: {
    default: "bg-background text-emphasis border-2 border-emphasis",
    hover: "bg-accent text-emphasis border-2 border-emphasis",
    focused: "bg-background text-emphasis border-2 border-emphasis",
    focusRing: "shadow-[0_0_0_2px_#ffffff,0_0_0_4px_var(--emphasis)]",
    disabled: "bg-background text-faint border-2 border-line cursor-not-allowed",
  },
  outline: {
    default: "bg-transparent text-emphasis border-2 border-emphasis",
    hover: "bg-emphasis text-white border-2 border-emphasis",
    focused: "bg-transparent text-emphasis border-2 border-emphasis",
    focusRing: "shadow-[0_0_0_2px_#ffffff,0_0_0_4px_var(--emphasis)]",
    disabled: "bg-transparent text-faint border-2 border-line cursor-not-allowed",
  },
  ghost: {
    default: "bg-transparent text-emphasis border-2 border-transparent",
    hover: "bg-accent text-emphasis border-2 border-transparent",
    focused: "bg-transparent text-emphasis border-2 border-transparent",
    focusRing: "shadow-[0_0_0_2px_#ffffff,0_0_0_4px_var(--emphasis)]",
    disabled: "bg-transparent text-faint border-2 border-transparent cursor-not-allowed",
  },
  success: {
    default: "bg-success-foreground text-white border-2 border-transparent",
    hover: "bg-success-hover text-white border-2 border-transparent",
    focused: "bg-success-foreground text-white border-2 border-success-foreground",
    focusRing: "shadow-[0_0_0_2px_#ffffff,0_0_0_4px_var(--success-foreground)]",
    disabled: "bg-line text-faint border-2 border-transparent cursor-not-allowed",
  },
  error: {
    default: "bg-destructive text-white border-2 border-transparent",
    hover: "bg-error-hover text-white border-2 border-transparent",
    focused: "bg-destructive text-white border-2 border-destructive",
    focusRing: "shadow-[0_0_0_2px_#ffffff,0_0_0_4px_var(--destructive)]",
    disabled: "bg-line text-faint border-2 border-transparent cursor-not-allowed",
  },
};

type SizeStyle = {
  height: string;
  square: string;
  padding: string;
  text: string;
  iconSize: string;
};

export const SIZE_STYLES: Record<ButtonSize, SizeStyle> = {
  lg: { height: "h-[60px]", square: "h-[60px] w-[60px]", padding: "px-8 py-4", text: "text-xl", iconSize: "text-[28px]" },
  md: { height: "h-14", square: "h-14 w-14", padding: "px-7 py-3.5", text: "text-lg", iconSize: "text-[24px]" },
  sm: { height: "h-12", square: "h-12 w-12", padding: "px-6 py-3", text: "text-base", iconSize: "text-[20px]" },
};

export function prefixUtilities(classes: string, prefix: string): string {
  return classes
    .split(" ")
    .filter(Boolean)
    .map((c) => `${prefix}:${c}`)
    .join(" ");
}
