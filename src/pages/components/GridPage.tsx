import { Grid } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';

export function GridPage() {
  return (
    <div>
      <PageHeader
        title="Grid"
        description="A CSS Grid layout component with responsive column configuration. Supports simple numeric columns or responsive breakpoint objects."
        badge="Layout"
      />

      <ComponentPreview
        title="Simple Grid - 3 Columns"
        code={`<Grid cols={3} gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</Grid>`}
      >
        <Grid cols={3} gap={4}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-primary/10 p-4 rounded text-center text-sm">
              Item {i + 1}
            </div>
          ))}
        </Grid>
      </ComponentPreview>

      <ComponentPreview
        title="Responsive Columns"
        description="1 column on mobile, 2 on tablet, 3 on desktop, 4 on large screens."
        code={`<Grid
  cols={{ sm: 1, md: 2, lg: 3, xl: 4 }}
  gap={4}
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
  <div>Item 7</div>
  <div>Item 8</div>
</Grid>`}
      >
        <Grid cols={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={4}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-primary/10 p-4 rounded text-center text-sm">
              Item {i + 1}
            </div>
          ))}
        </Grid>
      </ComponentPreview>

      <ComponentPreview
        title="Custom Gap Spacing"
        code={`<Grid cols={3} gap={2}>Small gap (0.5rem)</Grid>
<Grid cols={3} gap={6}>Large gap (1.5rem)</Grid>
<Grid cols={3} gap="3rem">Custom gap (3rem)</Grid>`}
      >
        <div className="space-y-6">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Small gap (2 = 0.5rem)</p>
            <Grid cols={3} gap={2}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-primary/10 p-3 rounded text-center text-xs">
                  {i + 1}
                </div>
              ))}
            </Grid>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Large gap (6 = 1.5rem)</p>
            <Grid cols={3} gap={6}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-primary/10 p-3 rounded text-center text-xs">
                  {i + 1}
                </div>
              ))}
            </Grid>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Custom gap ("3rem")</p>
            <Grid cols={3} gap="3rem">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-primary/10 p-3 rounded text-center text-xs">
                  {i + 1}
                </div>
              ))}
            </Grid>
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Card Grid Layout"
        code={`<Grid cols={{ sm: 1, md: 2, lg: 3 }} gap={4}>
  <div className="card">
    <h3>Card Title 1</h3>
    <p>Card content here...</p>
  </div>
  {/* More cards... */}
</Grid>`}
      >
        <Grid cols={{ sm: 1, md: 2, lg: 3 }} gap={4}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border border-border rounded-lg p-4 bg-card">
              <h3 className="font-semibold text-sm mb-2">Card Title {i + 1}</h3>
              <p className="text-xs text-muted-foreground">
                This is a card with some example content to demonstrate grid layout.
              </p>
            </div>
          ))}
        </Grid>
      </ComponentPreview>

      <ComponentPreview
        title="Dashboard Metrics Grid"
        code={`<Grid cols={{ sm: 1, md: 2, xl: 4 }} gap={4}>
  <div className="metric-card">
    <div className="label">Total Users</div>
    <div className="value">12,543</div>
  </div>
  {/* More metrics... */}
</Grid>`}
      >
        <Grid cols={{ sm: 1, md: 2, xl: 4 }} gap={4}>
          {[
            { label: 'Total Users', value: '12,543' },
            { label: 'Revenue', value: '$45,231' },
            { label: 'Active Sessions', value: '2,345' },
            { label: 'Conversion Rate', value: '3.24%' },
          ].map((metric, i) => (
            <div key={i} className="border border-border rounded-lg p-4 bg-card">
              <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
              <div className="text-2xl font-bold">{metric.value}</div>
            </div>
          ))}
        </Grid>
      </ComponentPreview>

      <ComponentPreview
        title="Nested Grids"
        code={`<Grid cols={2} gap={4}>
  <div>
    <h3>Section 1</h3>
    <Grid cols={2} gap={2}>
      <div>Nested 1</div>
      <div>Nested 2</div>
    </Grid>
  </div>
  <div>Section 2</div>
</Grid>`}
      >
        <Grid cols={2} gap={4}>
          <div className="bg-muted p-4 rounded">
            <p className="text-sm font-medium mb-3">Section 1</p>
            <Grid cols={2} gap={2}>
              <div className="bg-background p-2 rounded text-xs">Nested 1</div>
              <div className="bg-background p-2 rounded text-xs">Nested 2</div>
              <div className="bg-background p-2 rounded text-xs">Nested 3</div>
              <div className="bg-background p-2 rounded text-xs">Nested 4</div>
            </Grid>
          </div>
          <div className="bg-muted p-4 rounded">
            <p className="text-sm font-medium">Section 2</p>
          </div>
        </Grid>
      </ComponentPreview>

      <PropsTable
        props={[
          { name: 'cols', type: 'number | { sm?: number; md?: number; lg?: number; xl?: number }', default: '1', description: 'Number of columns. Use number for fixed columns or object for responsive breakpoints.' },
          { name: 'gap', type: 'number | string', default: '4', description: 'Gap between grid items. Number uses Tailwind spacing scale, string for custom values.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
          { name: 'children', type: 'ReactNode', required: true, description: 'Grid items to layout.' },
        ]}
      />
    </div>
  );
}
