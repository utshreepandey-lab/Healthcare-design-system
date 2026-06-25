import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type TokenTableRow = {
  token: string;
  value: string;
  usedFor: string;
};

export function TokenTable({ rows }: { rows: TokenTableRow[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/40 hover:bg-muted/40">
            <TableHead className="text-foreground">Token</TableHead>
            <TableHead className="text-foreground">Value</TableHead>
            <TableHead className="text-foreground">Used for</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.token}>
              <TableCell className="font-mono text-xs font-medium text-primary">
                {r.token}
              </TableCell>
              <TableCell className="font-mono text-xs text-foreground">{r.value}</TableCell>
              <TableCell className="text-muted-foreground">{r.usedFor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
