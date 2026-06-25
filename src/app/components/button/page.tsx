import { PageHeader } from "@/components/PageHeader";
import { ButtonPlayground } from "@/components/button-demo/ButtonPlayground";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PROPS_ROWS = [
  {
    prop: "type",
    type: '"primary" | "secondary" | "outline" | "ghost" | "success" | "error"',
    defaultValue: '"primary"',
    description: "Controls the visual style and colour of the button.",
  },
  {
    prop: "size",
    type: '"lg" | "md" | "sm"',
    defaultValue: '"lg"',
    description: "Controls height, padding, font size, and icon size.",
  },
  {
    prop: "iconOnly",
    type: "boolean",
    defaultValue: "false",
    description: "Renders a square button with a single centred icon and no label.",
  },
  {
    prop: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Prevents interaction and applies the disabled visual state.",
  },
  {
    prop: "showLeftIcon",
    type: "boolean",
    defaultValue: "true",
    description: "Shows or hides the leading icon. Ignored when iconOnly is true.",
  },
  {
    prop: "showRightIcon",
    type: "boolean",
    defaultValue: "true",
    description: "Shows or hides the trailing icon. Ignored when iconOnly is true.",
  },
  {
    prop: "label",
    type: "string",
    defaultValue: '"Button"',
    description: "The button's text content.",
  },
];

export default function ButtonPage() {
  return (
    <div className="flex flex-col gap-8 px-6 pt-12 pb-16 md:px-12">
      <PageHeader
        eyebrow="Components"
        title="Button"
        description="Buttons trigger actions. This system uses 6 types, 3 sizes, and 4 states — all built from design tokens."
      />

      <ButtonPlayground />

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold text-foreground">Props</h3>
        <div className="overflow-hidden rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/40 hover:bg-muted/40">
                <TableHead className="text-foreground">Prop</TableHead>
                <TableHead className="text-foreground">Type</TableHead>
                <TableHead className="text-foreground">Default</TableHead>
                <TableHead className="text-foreground">Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {PROPS_ROWS.map((r) => (
                <TableRow key={r.prop}>
                  <TableCell className="font-mono text-xs font-medium text-primary">{r.prop}</TableCell>
                  <TableCell className="font-mono text-xs text-foreground">{r.type}</TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {r.defaultValue}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{r.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
