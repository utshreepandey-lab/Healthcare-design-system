export type ColorStop = {
  stop: string;
  hex: string;
  primitiveToken: string;
  semanticToken: string;
};

export type ColorRamp = {
  name: string;
  semanticRole: string;
  description: string;
  stops: ColorStop[];
};

const STOPS = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"] as const;

function buildRamp(
  primitiveName: string,
  semanticName: string,
  hexes: string[],
): ColorStop[] {
  return STOPS.map((stop, i) => ({
    stop,
    hex: hexes[i],
    primitiveToken: `color.${primitiveName}.${stop}`,
    semanticToken: `Color.${semanticName}.${stop}`,
  }));
}

export const colorRamps: ColorRamp[] = [
  {
    name: "Gray",
    semanticRole: "Neutral",
    description: "Text, borders, surfaces, and disabled states.",
    stops: buildRamp("gray", "Neutral", [
      "#e8e8e8",
      "#d4d4d4",
      "#bfbfbf",
      "#ababab",
      "#969696",
      "#828282",
      "#6e6e6e",
      "#595959",
      "#454545",
      "#303030",
    ]),
  },
  {
    name: "Green",
    semanticRole: "Primary + Success",
    description: "Main brand colour — CTAs, active states, and success feedback.",
    stops: buildRamp("Green", "Primary", [
      "#dff6ec",
      "#ccf0e0",
      "#a8e6cb",
      "#88ddb8",
      "#65d2a3",
      "#41c88e",
      "#32ae79",
      "#298e63",
      "#0e814f",
      "#165a3d",
    ]),
  },
  {
    name: "Blue",
    semanticRole: "Secondary",
    description: "Secondary actions and supporting UI accents.",
    stops: buildRamp("blue", "Secondary", [
      "#e8f3fc",
      "#c3e0f8",
      "#9fcdf4",
      "#7abaf0",
      "#55a7ec",
      "#3094e8",
      "#1880d8",
      "#006cc7",
      "#00569f",
      "#003f75",
    ]),
  },
  {
    name: "Yellow",
    semanticRole: "Background / Accent",
    description: "Accent and highlight colour — not used as a page background.",
    stops: buildRamp("yellow", "Background", [
      "#fcfbe4",
      "#fbf8c6",
      "#f9f59f",
      "#f6f179",
      "#f4ed4e",
      "#f1e022",
      "#ebcf00",
      "#c2a800",
      "#8a750f",
      "#6b5900",
    ]),
  },
  {
    name: "Red",
    semanticRole: "Error",
    description: "Errors, destructive actions, and critical warnings.",
    stops: buildRamp("red", "Error", [
      "#ffe5e6",
      "#ffbdbe",
      "#ff9496",
      "#ff6b6e",
      "#ec5558",
      "#e83034",
      "#e20c10",
      "#c70003",
      "#9e0003",
      "#6f0608",
    ]),
  },
];

export const neutralExtremes = [
  { name: "White", hex: "#ffffff", primitiveToken: "color.White", semanticToken: "Color.White" },
  { name: "Black", hex: "#000000", primitiveToken: "color.Black", semanticToken: "Color.Black" },
];

export type TypeStyle = {
  group: string;
  name: string;
  desktopSize: string;
  lineHeight: string;
  mobileSize?: string;
  weights: string[];
  notes?: string;
};

export const typeStyles: TypeStyle[] = [
  { group: "Display", name: "d1", desktopSize: "48px", lineHeight: "56px", mobileSize: "42px", weights: ["Bold 700"] },
  { group: "Display", name: "d2", desktopSize: "40px", lineHeight: "48px", mobileSize: "36px", weights: ["Bold 700"] },
  { group: "Heading", name: "h1", desktopSize: "32px", lineHeight: "40px", mobileSize: "28px", weights: ["Bold 700", "Medium 500", "Regular 400"] },
  { group: "Heading", name: "h2", desktopSize: "28px", lineHeight: "40px", mobileSize: "24px", weights: ["Bold 700", "Medium 500", "Regular 400"] },
  { group: "Heading", name: "h3", desktopSize: "24px", lineHeight: "28px", mobileSize: "20px", weights: ["Bold 700", "Medium 500", "Regular 400"] },
  { group: "Heading", name: "h4", desktopSize: "20px", lineHeight: "24px", mobileSize: "16px", weights: ["Bold 700", "Medium 500", "Regular 400"] },
  { group: "Body", name: "b1", desktopSize: "16px", lineHeight: "20px", mobileSize: "14px", weights: ["Medium 500", "Regular 400"] },
  { group: "Body", name: "b2", desktopSize: "14px", lineHeight: "16px", mobileSize: "12px", weights: ["Medium 500", "Regular 400"] },
  { group: "Body", name: "Overline", desktopSize: "14px", lineHeight: "16px", mobileSize: "12px", weights: ["small-caps"], notes: "letter-spacing 1px" },
  { group: "Label", name: "Label", desktopSize: "12px", lineHeight: "14px", mobileSize: "10px", weights: ["Bold 700", "Regular 400"] },
  { group: "Caption", name: "Caption", desktopSize: "8px", lineHeight: "8px", mobileSize: "8px", weights: ["Medium 500", "Regular 400"] },
];

export const spacingScale = [
  { token: "scale-0", value: "0px" },
  { token: "scale-25", value: "1px" },
  { token: "scale-50", value: "2px" },
  { token: "scale-100", value: "4px" },
  { token: "scale-200", value: "8px" },
  { token: "scale-300", value: "12px" },
  { token: "scale-350", value: "14px" },
  { token: "scale-400", value: "16px" },
  { token: "scale-500", value: "20px" },
  { token: "scale-600", value: "24px" },
  { token: "scale-700", value: "28px" },
  { token: "scale-800", value: "32px" },
  { token: "scale-900", value: "36px" },
  { token: "scale-1000", value: "40px" },
  { token: "scale-1100", value: "48px" },
  { token: "scale-1200", value: "56px" },
];

export const borderRadiusTokens = [
  { token: "radius-none", value: "0px", mapsTo: "scale-0" },
  { token: "radius-50", value: "2px", mapsTo: "scale-50" },
  { token: "radius-100", value: "4px", mapsTo: "scale-100" },
  { token: "radius-200", value: "8px", mapsTo: "scale-200" },
  { token: "radius-300", value: "12px", mapsTo: "scale-300" },
  { token: "radius-400", value: "16px", mapsTo: "scale-400" },
  { token: "radius-round", value: "999px", mapsTo: "—" },
];

export const borderWidthTokens = [
  { token: "border-none", value: "0px", mapsTo: "scale-0" },
  { token: "border-xs", value: "1px", mapsTo: "scale-25" },
  { token: "border-sm", value: "2px", mapsTo: "scale-50" },
  { token: "border-md", value: "4px", mapsTo: "scale-100" },
  { token: "border-lg", value: "8px", mapsTo: "scale-200" },
];

export type ShadowToken = {
  token: string;
  value: string;
};

export const elevationGroups: { group: string; description: string; tokens: ShadowToken[] }[] = [
  {
    group: "Bottom",
    description: "Cards lifting upward — the most common elevation direction.",
    tokens: [
      { token: "bottom-small", value: "0px 4px 8px 0px rgba(0,0,0,0.08)" },
      { token: "bottom-medium", value: "0px 4px 12px 0px rgba(0,0,0,0.12)" },
      { token: "bottom-large", value: "0px 4px 16px 0px rgba(0,0,0,0.16)" },
    ],
  },
  {
    group: "Top",
    description: "Elements floating above — e.g. sticky headers.",
    tokens: [
      { token: "top-small", value: "0px -4px 8px 0px rgba(0,0,0,0.04)" },
      { token: "top-medium", value: "0px -4px 12px 0px rgba(0,0,0,0.04)" },
      { token: "top-large", value: "0px -4px 16px 0px rgba(0,0,0,0.16)" },
    ],
  },
  {
    group: "Center",
    description: "Modals and overlays.",
    tokens: [
      { token: "center-small", value: "0px 0px 8px 0px rgba(0,0,0,0.04)" },
      { token: "center-medium", value: "0px 0px 12px 0px rgba(0,0,0,0.04)" },
      { token: "center-large", value: "0px 0px 16px 0px rgba(0,0,0,0.16)" },
    ],
  },
];

export const focusRingToken = {
  token: "primary-focus-ring",
  description: "0 0 0 4px Green.800 + 0 0 0 2px white (double ring)",
};
