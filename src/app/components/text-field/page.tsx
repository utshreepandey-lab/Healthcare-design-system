import { PageHeader } from "@/components/PageHeader";
import { CodePreview } from "@/components/CodePreview";
import { TextFieldDemo } from "@/components/text-field/TextFieldDemo";
import { TextFieldStatic } from "@/components/text-field/TextFieldStatic";
import type { FieldVariant } from "@/components/text-field/StateChips";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PREVIEW_VARIANTS: FieldVariant[] = ["default", "active", "filled", "error", "disabled"];

const LABELS: Record<FieldVariant, string> = {
  default: "Default",
  active: "Active",
  filled: "Filled",
  error: "Error",
  disabled: "Disabled",
};

const EXAMPLE_VALUE: Record<FieldVariant, string | undefined> = {
  default: undefined,
  active: undefined,
  filled: "Priya Sharma",
  error: undefined,
  disabled: undefined,
};

const PROPS_ROWS = [
  {
    prop: "variant",
    type: '"default" | "active" | "filled" | "error" | "disabled"',
    defaultValue: '"default"',
    description: "Controls the visual state of the field.",
  },
  {
    prop: "value",
    type: "string",
    defaultValue: '""',
    description: "The current input value (controlled).",
  },
  {
    prop: "onChange",
    type: "(value: string) => void",
    defaultValue: "—",
    description: "Called with the new value on every keystroke.",
  },
  {
    prop: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Prevents focus and input when true.",
  },
];

function codeFor(variant: FieldVariant): string {
  const value = EXAMPLE_VALUE[variant];
  const props = [`variant="${variant}"`, value ? `value="${value}"` : null].filter(Boolean).join(" ");
  return `import { TextField } from "@/components/text-field/TextField"

export function TextField${LABELS[variant]}() {
  return <TextField ${props} />
}`;
}

export default function TextFieldPage() {
  return (
    <div className="flex flex-col gap-8 px-6 pt-12 pb-16 md:px-12">
      <PageHeader
        eyebrow="Components"
        title="Text Field"
        description="A single-line input for collecting user information. Supports required fields, helper text, and multiple interaction states."
      />

      <div className="rounded-lg bg-muted p-8">
        <TextFieldDemo />
      </div>

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

        <div className="grid grid-cols-1 gap-10 pt-2 sm:grid-cols-2">
          {PREVIEW_VARIANTS.map((v) => (
            <CodePreview
              key={v}
              title={LABELS[v]}
              preview={<TextFieldStatic variant={v} />}
              code={codeFor(v)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
