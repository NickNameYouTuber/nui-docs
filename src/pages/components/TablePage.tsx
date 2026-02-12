import {
  Table, TableBody, TableCaption, TableCell,
  TableHead, TableHeader, TableRow,
  Badge
} from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';

const invoices = [
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
  { invoice: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
];

function StatusBadge({ status }: { status: string }) {
  const variant = status === 'Paid' ? 'default' : status === 'Pending' ? 'secondary' : 'destructive';
  return <Badge variant={variant as any}>{status}</Badge>;
}

export function TablePage() {
  return (
    <div>
      <PageHeader
        title="Table"
        description="A responsive HTML table with styled headers, rows, and cells. For advanced features like sorting and filtering, see DataTable."
        badge="Data"
      />

      <ComponentPreview
        title="Basic Table"
        code={`<Table>
  <TableCaption>A list of recent invoices</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell><Badge>Paid</Badge></TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
    {/* ... */}
  </TableBody>
</Table>`}
      >
        <div className="w-full overflow-auto">
          <Table>
            <TableCaption>A list of recent invoices</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((inv) => (
                <TableRow key={inv.invoice}>
                  <TableCell className="font-medium">{inv.invoice}</TableCell>
                  <TableCell><StatusBadge status={inv.status} /></TableCell>
                  <TableCell>{inv.method}</TableCell>
                  <TableCell className="text-right">{inv.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ComponentPreview>

      <PropsTable
        title="Table Sub-components"
        props={[
          { name: 'Table', type: 'Component', description: 'The root table wrapper with responsive overflow.' },
          { name: 'TableHeader', type: 'Component', description: 'The table header section (<thead>).' },
          { name: 'TableBody', type: 'Component', description: 'The table body section (<tbody>).' },
          { name: 'TableRow', type: 'Component', description: 'A table row (<tr>) with hover state.' },
          { name: 'TableHead', type: 'Component', description: 'A header cell (<th>) with muted foreground.' },
          { name: 'TableCell', type: 'Component', description: 'A body cell (<td>) with padding.' },
          { name: 'TableCaption', type: 'Component', description: 'Caption displayed at the bottom of the table.' },
          { name: 'TableFooter', type: 'Component', description: 'The table footer section (<tfoot>).' },
        ]}
      />
    </div>
  );
}
