import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { DataTable, DataTableColumnHeader, Badge, Button } from '@nicorp/nui';
import type { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { useDocLang } from '../../i18n';

// Sample data types
type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
};

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
};

// Sample data
const userData: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'inactive' },
  { id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'Manager', status: 'active' },
  { id: '5', name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'active' },
];

const productData: Product[] = [
  { id: 'P001', name: 'Laptop', category: 'Electronics', price: 999, stock: 15 },
  { id: 'P002', name: 'Mouse', category: 'Electronics', price: 29, stock: 50 },
  { id: 'P003', name: 'Keyboard', category: 'Electronics', price: 79, stock: 35 },
  { id: 'P004', name: 'Monitor', category: 'Electronics', price: 299, stock: 20 },
  { id: 'P005', name: 'Desk', category: 'Furniture', price: 399, stock: 8 },
  { id: 'P006', name: 'Chair', category: 'Furniture', price: 249, stock: 12 },
  { id: 'P007', name: 'Lamp', category: 'Furniture', price: 49, stock: 25 },
  { id: 'P008', name: 'Webcam', category: 'Electronics', price: 89, stock: 18 },
];

export default function DataTablePage() {
  const { t } = useDocLang();
  // Basic columns
  const basicColumns: ColumnDef<User>[] = [
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'role',
      header: 'Role',
    },
  ];

  // Sortable columns
  const sortableColumns: ColumnDef<User>[] = [
    {
      accessorKey: 'name',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name" />
      ),
    },
    {
      accessorKey: 'email',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Email" />
      ),
    },
    {
      accessorKey: 'role',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Role" />
      ),
    },
  ];

  // Columns with custom rendering
  const styledColumns: ColumnDef<User>[] = [
    {
      accessorKey: 'name',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name" />
      ),
    },
    {
      accessorKey: 'email',
      header: 'Email',
      cell: ({ row }) => (
        <div className="text-muted-foreground">{row.getValue('email')}</div>
      ),
    },
    {
      accessorKey: 'role',
      header: 'Role',
      cell: ({ row }) => {
        const role = row.getValue('role') as string;
        return (
          <Badge variant={role === 'Admin' ? 'default' : 'secondary'}>
            {role}
          </Badge>
        );
      },
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        const status = row.getValue('status') as string;
        return (
          <Badge variant={status === 'active' ? 'default' : 'outline'}>
            {status}
          </Badge>
        );
      },
    },
  ];

  // Product columns with formatting
  const productColumns: ColumnDef<Product>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'name',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Product" />
      ),
    },
    {
      accessorKey: 'category',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Category" />
      ),
    },
    {
      accessorKey: 'price',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Price" />
      ),
      cell: ({ row }) => {
        const price = parseFloat(row.getValue('price'));
        return <div className="font-medium">${price.toFixed(2)}</div>;
      },
    },
    {
      accessorKey: 'stock',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Stock" />
      ),
      cell: ({ row }) => {
        const stock = row.getValue('stock') as number;
        return (
          <Badge variant={stock > 20 ? 'default' : stock > 10 ? 'secondary' : 'destructive'}>
            {stock} units
          </Badge>
        );
      },
    },
  ];

  // Columns with actions
  const columnsWithActions: ColumnDef<User>[] = [
    {
      accessorKey: 'name',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name" />
      ),
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'role',
      header: 'Role',
      cell: ({ row }) => {
        const role = row.getValue('role') as string;
        return (
          <Badge variant={role === 'Admin' ? 'default' : 'secondary'}>
            {role}
          </Badge>
        );
      },
    },
    {
      id: 'actions',
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={() => alert(`Edit ${row.original.name}`)}>
            Edit
          </Button>
          <Button variant="ghost" size="sm" onClick={() => alert(`Delete ${row.original.name}`)}>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">DataTable</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.dataTable.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.dataTable.preview1Title')}
          description={t('pages.dataTable.preview1Desc')}
          code={`const columns: ColumnDef<User>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'role', header: 'Role' },
];

<DataTable columns={columns} data={userData} />`}
        >
          <DataTable columns={basicColumns} data={userData} />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.dataTable.preview2Title')}
          description={t('pages.dataTable.preview2Desc')}
          code={`import { DataTableColumnHeader } from '@nicorp/nui';

const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  // ... more columns
];

<DataTable columns={columns} data={userData} />`}
        >
          <DataTable columns={sortableColumns} data={userData} />
        </ComponentPreview>

        <ComponentPreview
          title="With Search"
          description="Filter table data by searching a specific column"
          code={`<DataTable
  columns={columns}
  data={userData}
  searchKey="name"
  searchPlaceholder="Search by name..."
/>`}
        >
          <DataTable
            columns={sortableColumns}
            data={userData}
            searchKey="name"
            searchPlaceholder="Search by name..."
          />
        </ComponentPreview>

        <ComponentPreview
          title="Custom Cell Rendering"
          description="Use Badge and custom styling in cells"
          code={`const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => {
      const role = row.getValue('role') as string;
      return (
        <Badge variant={role === 'Admin' ? 'default' : 'secondary'}>
          {role}
        </Badge>
      );
    },
  },
  // ... more columns
];`}
        >
          <DataTable columns={styledColumns} data={userData} />
        </ComponentPreview>

        <ComponentPreview
          title="With Custom Page Size"
          description="Control number of rows per page"
          code={`<DataTable
  columns={columns}
  data={productData}
  pageSize={5}
  searchKey="name"
  searchPlaceholder="Search products..."
/>`}
        >
          <DataTable
            columns={productColumns}
            data={productData}
            pageSize={5}
            searchKey="name"
            searchPlaceholder="Search products..."
          />
        </ComponentPreview>

        <ComponentPreview
          title="With Action Buttons"
          description="Add custom actions to each row"
          code={`const columns: ColumnDef<User>[] = [
  // ... data columns
  {
    id: 'actions',
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button variant="ghost" size="sm" onClick={() => alert('Edit')}>
          Edit
        </Button>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
];`}
        >
          <DataTable
            columns={columnsWithActions}
            data={userData}
            searchKey="email"
            searchPlaceholder="Search by email..."
          />
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              {
                name: 'columns',
                type: 'ColumnDef<TData, TValue>[]',
                default: '-',
                description: 'Column definitions from TanStack Table',
              },
              {
                name: 'data',
                type: 'TData[]',
                default: '-',
                description: 'Array of data to display',
              },
              {
                name: 'searchKey',
                type: 'string',
                default: '-',
                description: 'Column key to enable search filtering',
              },
              {
                name: 'searchPlaceholder',
                type: 'string',
                default: '"Search..."',
                description: 'Placeholder text for search input',
              },
              {
                name: 'pageSize',
                type: 'number',
                default: '10',
                description: 'Number of rows per page',
              },
            ]}
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Column Definition</h2>
          <p className="text-muted-foreground mb-4">
            DataTable uses TanStack Table's ColumnDef type. Key properties:
          </p>
          <PropsTable
            props={[
              {
                name: 'accessorKey',
                type: 'string',
                default: '-',
                description: 'Key to access data from row object',
              },
              {
                name: 'header',
                type: 'string | Component',
                default: '-',
                description: 'Column header text or component',
              },
              {
                name: 'cell',
                type: '(context) => ReactNode',
                default: '-',
                description: 'Custom cell renderer function',
              },
              {
                name: 'id',
                type: 'string',
                default: '-',
                description: 'Unique column identifier (for non-accessor columns)',
              },
            ]}
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">DataTableColumnHeader</h2>
          <p className="text-muted-foreground mb-4">
            Helper component for sortable column headers:
          </p>
          <PropsTable
            props={[
              {
                name: 'column',
                type: 'Column',
                default: '-',
                description: 'Column instance from TanStack Table',
              },
              {
                name: 'title',
                type: 'string',
                default: '-',
                description: 'Display title for the column',
              },
              {
                name: 'className',
                type: 'string',
                default: '-',
                description: 'Additional CSS classes',
              },
            ]}
          />
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>TanStack Table:</strong> Built on powerful React Table library
            </li>
            <li>
              <strong>Sorting:</strong> Click headers to sort ascending/descending
            </li>
            <li>
              <strong>Filtering:</strong> Built-in search by any column key
            </li>
            <li>
              <strong>Pagination:</strong> Automatic pagination with Previous/Next controls
            </li>
            <li>
              <strong>Custom Rendering:</strong> Full control over cell display with render functions
            </li>
            <li>
              <strong>Row Selection:</strong> Built-in support for selecting rows (via internal state)
            </li>
            <li>
              <strong>Column Visibility:</strong> Show/hide columns dynamically
            </li>
            <li>
              <strong>Accessible:</strong> Proper table semantics and keyboard navigation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
