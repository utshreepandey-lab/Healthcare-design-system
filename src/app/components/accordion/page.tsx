import { PageHeader } from "@/components/PageHeader";
import { CodePreview } from "@/components/CodePreview";
import { AccordionDemo } from "@/components/accordion-demo/AccordionDemo";
import { AccordionStatic } from "@/components/accordion-demo/AccordionStatic";
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
    prop: "items",
    type: "{ question: string; answer: string }[]",
    defaultValue: "—",
    description: "The list of question/answer pairs to render.",
  },
  {
    prop: "defaultValue",
    type: "string",
    defaultValue: '"item-1"',
    description: "The id of the item expanded by default.",
  },
  {
    prop: "multiple",
    type: "boolean",
    defaultValue: "false",
    description: "Whether more than one item can be open at the same time.",
  },
];

type StaticState = "collapsed" | "expanded";

const STATES: StaticState[] = ["collapsed", "expanded"];

const LABELS: Record<StaticState, string> = {
  collapsed: "Collapsed",
  expanded: "Expanded",
};

function codeFor(state: StaticState): string {
  const props = state === "expanded" ? ' defaultValue="item-1"' : "";
  return `import { Accordion } from "@/components/ui/accordion"

export function Accordion${LABELS[state]}() {
  return <Accordion items={faqItems}${props} />
}`;
}

export default function AccordionPage() {
  return (
    <div className="flex flex-col gap-8 px-6 pt-12 pb-16 md:px-12">
      <PageHeader
        eyebrow="Components"
        title="Accordion"
        description="Expandable content panels used to show and hide information progressively. Commonly used for FAQs and structured content."
      />

      <AccordionDemo />

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
          {STATES.map((s) => (
            <CodePreview
              key={s}
              title={LABELS[s]}
              preview={<AccordionStatic expanded={s === "expanded"} />}
              code={codeFor(s)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
