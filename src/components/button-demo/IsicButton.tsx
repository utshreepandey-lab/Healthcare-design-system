import {
  prefixUtilities,
  SIZE_STYLES,
  STATE_STYLES,
  type ButtonSize,
  type ButtonState,
  type ButtonType,
} from "./buttonStyles";

export function IsicButton({
  type,
  size,
  iconOnly,
  disabled,
  showLeftIcon = true,
  showRightIcon = true,
  forcedState,
  label = "Button",
}: {
  type: ButtonType;
  size: ButtonSize;
  iconOnly?: boolean;
  disabled?: boolean;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  forcedState?: ButtonState;
  label?: string;
}) {
  const s = STATE_STYLES[type];
  const sz = SIZE_STYLES[size];

  let stateClasses: string;
  if (disabled) {
    stateClasses = s.disabled;
  } else if (forcedState) {
    stateClasses =
      forcedState === "hover"
        ? s.hover
        : forcedState === "focused"
          ? `${s.focused} ${s.focusRing}`
          : forcedState === "disabled"
            ? s.disabled
            : s.default;
  } else {
    stateClasses = `${s.default} ${prefixUtilities(s.hover, "hover")} ${prefixUtilities(`${s.focused} ${s.focusRing}`, "focus-visible")} ${prefixUtilities(s.disabled, "disabled")}`;
  }

  const sizeClasses = iconOnly ? `${sz.square} p-0` : `${sz.height} ${sz.padding}`;

  return (
    <button
      type="button"
      disabled={disabled || forcedState === "disabled"}
      className={`inline-flex items-center justify-center gap-2 rounded-md font-sans font-medium transition-all duration-200 ease-in-out outline-none ${sz.text} ${sizeClasses} ${stateClasses}`}
    >
      {(iconOnly || showLeftIcon) && (
        <span aria-hidden className={sz.iconSize}>
          ←
        </span>
      )}
      {!iconOnly && <span>{label}</span>}
      {!iconOnly && showRightIcon && (
        <span aria-hidden className={sz.iconSize}>
          →
        </span>
      )}
    </button>
  );
}
