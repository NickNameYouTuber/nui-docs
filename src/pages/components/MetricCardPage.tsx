import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { MetricCard } from '@nicorp/nui';
import { DollarSign, Users, Activity, CreditCard } from 'lucide-react';

export default function MetricCardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">MetricCard</h1>
        <p className="text-xl text-muted-foreground">
          A dashboard metric card component displaying key statistics with optional trends and icons.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Basic Metric"
          description="Simple metric card with title and value"
          code={`<MetricCard
  title="Total Revenue"
  value="$45,231"
/>`}
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="Total Revenue" value="$45,231" />
            <MetricCard title="Active Users" value="2,350" />
            <MetricCard title="Conversion Rate" value="12.5%" />
            <MetricCard title="Avg. Order Value" value="$89" />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With Icons"
          description="Add icons from lucide-react"
          code={`import { DollarSign, Users } from 'lucide-react';

<MetricCard
  title="Total Revenue"
  value="$45,231"
  icon={<DollarSign className="h-4 w-4" />}
/>

<MetricCard
  title="Active Users"
  value="2,350"
  icon={<Users className="h-4 w-4" />}
/>`}
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              title="Total Revenue"
              value="$45,231"
              icon={<DollarSign className="h-4 w-4" />}
            />
            <MetricCard
              title="Active Users"
              value="2,350"
              icon={<Users className="h-4 w-4" />}
            />
            <MetricCard
              title="Total Sales"
              value="12,234"
              icon={<Activity className="h-4 w-4" />}
            />
            <MetricCard
              title="Transactions"
              value="573"
              icon={<CreditCard className="h-4 w-4" />}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With Trend Indicators"
          description="Show percentage change with trend arrows"
          code={`<MetricCard
  title="Total Revenue"
  value="$45,231"
  trend={20.1}
  trendLabel="from last month"
  icon={<DollarSign className="h-4 w-4" />}
/>

<MetricCard
  title="Active Users"
  value="2,350"
  trend={-5.4}
  trendLabel="from last month"
  icon={<Users className="h-4 w-4" />}
/>`}
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              title="Total Revenue"
              value="$45,231"
              trend={20.1}
              trendLabel="from last month"
              icon={<DollarSign className="h-4 w-4" />}
            />
            <MetricCard
              title="Active Users"
              value="2,350"
              trend={-5.4}
              trendLabel="from last month"
              icon={<Users className="h-4 w-4" />}
            />
            <MetricCard
              title="Total Sales"
              value="12,234"
              trend={12.3}
              trendLabel="from last week"
              icon={<Activity className="h-4 w-4" />}
            />
            <MetricCard
              title="Bounce Rate"
              value="42.3%"
              trend={0}
              trendLabel="unchanged"
              icon={<Activity className="h-4 w-4" />}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With Descriptions"
          description="Add context instead of trends"
          code={`<MetricCard
  title="Total Revenue"
  value="$45,231"
  description="Total sales this month"
  icon={<DollarSign className="h-4 w-4" />}
/>`}
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <MetricCard
              title="Total Revenue"
              value="$45,231"
              description="Total sales this month"
              icon={<DollarSign className="h-4 w-4" />}
            />
            <MetricCard
              title="New Customers"
              value="184"
              description="Signed up this week"
              icon={<Users className="h-4 w-4" />}
            />
            <MetricCard
              title="Orders"
              value="1,429"
              description="Completed orders"
              icon={<CreditCard className="h-4 w-4" />}
            />
          </div>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              {
                name: 'title',
                type: 'string',
                default: '-',
                description: 'Metric title (required)',
              },
              {
                name: 'value',
                type: 'string | number',
                default: '-',
                description: 'Metric value (required)',
              },
              {
                name: 'description',
                type: 'string',
                default: '-',
                description: 'Additional context or description',
              },
              {
                name: 'trend',
                type: 'number',
                default: '-',
                description: 'Percentage change (+positive, -negative, 0 for no change)',
              },
              {
                name: 'trendLabel',
                type: 'string',
                default: '-',
                description: 'Label for trend (e.g., "from last month")',
              },
              {
                name: 'icon',
                type: 'ReactNode',
                default: '-',
                description: 'Optional icon element',
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
              <strong>Card-Based:</strong> Built on Card component for consistent styling
            </li>
            <li>
              <strong>Trend Indicators:</strong> Automatic green/red/gray coloring with TrendingUp/Down icons
            </li>
            <li>
              <strong>Flexible Layout:</strong> Works in grids for dashboard layouts
            </li>
            <li>
              <strong>Icon Support:</strong> Optional icon in header (lucide-react recommended)
            </li>
            <li>
              <strong>Responsive:</strong> Adapts to different screen sizes with grid layouts
            </li>
            <li>
              <strong>Type Safe:</strong> Value accepts string or number
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
