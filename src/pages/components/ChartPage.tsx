import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { ChartContainer, ChartTooltip, ChartLegend } from '@nicorp/nui';
import { useDocLang } from '../../i18n';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

// Sample data
const monthlyData = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 2000, expenses: 9800 },
  { month: 'Apr', revenue: 2780, expenses: 3908 },
  { month: 'May', revenue: 1890, expenses: 4800 },
  { month: 'Jun', revenue: 2390, expenses: 3800 },
];

const salesData = [
  { name: 'Mon', sales: 120 },
  { name: 'Tue', sales: 210 },
  { name: 'Wed', sales: 180 },
  { name: 'Thu', sales: 240 },
  { name: 'Fri', sales: 300 },
  { name: 'Sat', sales: 280 },
  { name: 'Sun', sales: 190 },
];

const trafficData = [
  { hour: '00:00', visitors: 20 },
  { hour: '04:00', visitors: 10 },
  { hour: '08:00', visitors: 50 },
  { hour: '12:00', visitors: 80 },
  { hour: '16:00', visitors: 90 },
  { hour: '20:00', visitors: 60 },
  { hour: '24:00', visitors: 30 },
];

const categoryData = [
  { name: 'Electronics', value: 400 },
  { name: 'Clothing', value: 300 },
  { name: 'Food', value: 200 },
  { name: 'Books', value: 100 },
];

const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--accent))', 'hsl(var(--muted))'];

export default function ChartPage() {
  const { t } = useDocLang();
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Chart</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.chart.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.chart.preview1Title')}
          description={t('pages.chart.preview1Desc')}
          code={`import { ChartContainer } from '@nicorp/nui';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const data = [
  { name: 'Mon', sales: 120 },
  { name: 'Tue', sales: 210 },
  // ... more data
];

<ChartContainer>
  <LineChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Line type="monotone" dataKey="sales" stroke="hsl(var(--primary))" />
  </LineChart>
</ChartContainer>`}
        >
          <ChartContainer className="h-[300px]">
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <ChartTooltip />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--primary))' }}
              />
            </LineChart>
          </ChartContainer>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.chart.preview2Title')}
          description={t('pages.chart.preview2Desc')}
          code={`<ChartContainer>
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <ChartTooltip />
    <Bar dataKey="sales" fill="hsl(var(--primary))" />
  </BarChart>
</ChartContainer>`}
        >
          <ChartContainer className="h-[300px]">
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <ChartTooltip />
              <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.chart.preview3Title')}
          description={t('pages.chart.preview3Desc')}
          code={`<ChartContainer>
  <AreaChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="hour" />
    <YAxis />
    <ChartTooltip />
    <Area
      type="monotone"
      dataKey="visitors"
      stroke="hsl(var(--primary))"
      fill="hsl(var(--primary))"
      fillOpacity={0.3}
    />
  </AreaChart>
</ChartContainer>`}
        >
          <ChartContainer className="h-[300px]">
            <AreaChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <ChartTooltip />
              <Area
                type="monotone"
                dataKey="visitors"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.3}
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.chart.preview4Title')}
          description={t('pages.chart.preview4Desc')}
          code={`<ChartContainer>
  <LineChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip />
    <ChartLegend />
    <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" />
    <Line type="monotone" dataKey="expenses" stroke="hsl(var(--destructive))" />
  </LineChart>
</ChartContainer>`}
        >
          <ChartContainer className="h-[350px]">
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <ChartTooltip />
              <ChartLegend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--primary))' }}
              />
              <Line
                type="monotone"
                dataKey="expenses"
                stroke="hsl(var(--destructive))"
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--destructive))' }}
              />
            </LineChart>
          </ChartContainer>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.chart.preview5Title')}
          description={t('pages.chart.preview5Desc')}
          code={`<ChartContainer>
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip />
    <ChartLegend />
    <Bar dataKey="revenue" stackId="a" fill="hsl(var(--primary))" />
    <Bar dataKey="expenses" stackId="a" fill="hsl(var(--secondary))" />
  </BarChart>
</ChartContainer>`}
        >
          <ChartContainer className="h-[350px]">
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <ChartTooltip />
              <ChartLegend />
              <Bar dataKey="revenue" stackId="a" fill="hsl(var(--primary))" radius={[0, 0, 0, 0]} />
              <Bar dataKey="expenses" stackId="a" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.chart.preview6Title')}
          description={t('pages.chart.preview6Desc')}
          code={`<ChartContainer>
  <PieChart>
    <Pie
      data={data}
      cx="50%"
      cy="50%"
      labelLine={false}
      label={({ name, percent }) => 
        \`\${name} \${(percent * 100).toFixed(0)}%\`
      }
      outerRadius={80}
      fill="hsl(var(--primary))"
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={\`cell-\${index}\`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <ChartTooltip />
  </PieChart>
</ChartContainer>`}
        >
          <ChartContainer className="h-[350px]">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="hsl(var(--primary))"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <ChartTooltip />
            </PieChart>
          </ChartContainer>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Components</h2>
          
          <h3 className="text-lg font-semibold mb-2 mt-4">ChartContainer</h3>
          <PropsTable
            props={[
              {
                name: 'children',
                type: 'ReactElement',
                default: '-',
                description: 'Recharts chart component (LineChart, BarChart, etc.)',
              },
              {
                name: 'className',
                type: 'string',
                default: '"w-full h-full min-h-[300px]"',
                description: 'Additional CSS classes',
              },
            ]}
          />

          <h3 className="text-lg font-semibold mb-2 mt-6">ChartTooltip</h3>
          <p className="text-muted-foreground mb-4">
            Re-export of Recharts Tooltip component. Accepts all Recharts Tooltip props.
          </p>

          <h3 className="text-lg font-semibold mb-2 mt-6">ChartLegend</h3>
          <p className="text-muted-foreground mb-4">
            Re-export of Recharts Legend component. Accepts all Recharts Legend props.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <p className="text-muted-foreground mb-4">
            Import chart types directly from Recharts:
          </p>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{`import { ChartContainer, ChartTooltip, ChartLegend } from '@nicorp/nui';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  // ... more data
];

<ChartContainer className="h-[300px]">
  <LineChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <ChartTooltip />
    <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" />
  </LineChart>
</ChartContainer>`}</code>
          </pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Styling with CSS Variables</h2>
          <p className="text-muted-foreground mb-4">
            Use design system tokens for consistent theming:
          </p>
          <PropsTable
            props={[
              {
                name: 'hsl(var(--primary))',
                type: 'color',
                default: '-',
                description: 'Primary brand color',
              },
              {
                name: 'hsl(var(--secondary))',
                type: 'color',
                default: '-',
                description: 'Secondary color',
              },
              {
                name: 'hsl(var(--destructive))',
                type: 'color',
                default: '-',
                description: 'Error/negative color',
              },
              {
                name: 'hsl(var(--border))',
                type: 'color',
                default: '-',
                description: 'Border/grid lines color',
              },
              {
                name: 'hsl(var(--muted-foreground))',
                type: 'color',
                default: '-',
                description: 'Axis labels color',
              },
            ]}
          />
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Recharts Integration:</strong> Full access to Recharts library features
            </li>
            <li>
              <strong>Responsive Container:</strong> Automatically fills parent width/height
            </li>
            <li>
              <strong>Multiple Chart Types:</strong> Line, Bar, Area, Pie, and more from Recharts
            </li>
            <li>
              <strong>Tooltips:</strong> Interactive tooltips on hover
            </li>
            <li>
              <strong>Legends:</strong> Show data series labels
            </li>
            <li>
              <strong>Theme-Aware:</strong> Uses CSS variables for consistent theming
            </li>
            <li>
              <strong>Customizable:</strong> Full control over colors, sizes, and styles
            </li>
            <li>
              <strong>Accessible:</strong> Semantic SVG elements with proper labels
            </li>
          </ul>
        </div>

        <div className="rounded-lg border p-6 bg-amber-500/10 border-amber-500/20">
          <h3 className="font-semibold mb-2 text-amber-900 dark:text-amber-100">Note</h3>
          <p className="text-sm text-amber-900/80 dark:text-amber-100/80">
            Make sure to install Recharts in your project: <code className="bg-amber-500/20 px-1 py-0.5 rounded">npm install recharts</code>
          </p>
        </div>
      </div>
    </div>
  );
}
