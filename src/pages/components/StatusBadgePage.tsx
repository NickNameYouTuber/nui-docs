import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { StatusBadge } from '@nicorp/nui';
import { useDocLang } from '../../i18n';

export default function StatusBadgePage() {
  const { t } = useDocLang();
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">StatusBadge</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.statusBadge.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.statusBadge.preview1Title')}
          description={t('pages.statusBadge.preview1Desc')}
          code={`<StatusBadge status="success">Active</StatusBadge>
<StatusBadge status="warning">Pending</StatusBadge>
<StatusBadge status="error">Failed</StatusBadge>
<StatusBadge status="info">Info</StatusBadge>
<StatusBadge status="neutral">Neutral</StatusBadge>`}
        >
          <div className="flex flex-wrap gap-2">
            <StatusBadge status="success">Active</StatusBadge>
            <StatusBadge status="warning">Pending</StatusBadge>
            <StatusBadge status="error">Failed</StatusBadge>
            <StatusBadge status="info">Info</StatusBadge>
            <StatusBadge status="neutral">Neutral</StatusBadge>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.statusBadge.preview2Title')}
          description={t('pages.statusBadge.preview2Desc')}
          code={`<StatusBadge status="success" dot={false}>Active</StatusBadge>
<StatusBadge status="warning" dot={false}>Pending</StatusBadge>
<StatusBadge status="error" dot={false}>Failed</StatusBadge>`}
        >
          <div className="flex flex-wrap gap-2">
            <StatusBadge status="success" dot={false}>Active</StatusBadge>
            <StatusBadge status="warning" dot={false}>Pending</StatusBadge>
            <StatusBadge status="error" dot={false}>Failed</StatusBadge>
            <StatusBadge status="info" dot={false}>Information</StatusBadge>
            <StatusBadge status="neutral" dot={false}>Neutral</StatusBadge>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Order Statuses"
          description="Real-world use case for order tracking"
          code={`<div className="space-y-4">
  <div className="flex items-center justify-between">
    <span>Order #1234</span>
    <StatusBadge status="success">Delivered</StatusBadge>
  </div>
  <div className="flex items-center justify-between">
    <span>Order #1235</span>
    <StatusBadge status="info">In Transit</StatusBadge>
  </div>
  <div className="flex items-center justify-between">
    <span>Order #1236</span>
    <StatusBadge status="warning">Processing</StatusBadge>
  </div>
  <div className="flex items-center justify-between">
    <span>Order #1237</span>
    <StatusBadge status="error">Cancelled</StatusBadge>
  </div>
</div>`}
        >
          <div className="space-y-4 border rounded-lg p-4 max-w-md">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Order #1234</span>
              <StatusBadge status="success">Delivered</StatusBadge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Order #1235</span>
              <StatusBadge status="info">In Transit</StatusBadge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Order #1236</span>
              <StatusBadge status="warning">Processing</StatusBadge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Order #1237</span>
              <StatusBadge status="error">Cancelled</StatusBadge>
            </div>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="System Health"
          description="Monitor service status"
          code={`<div className="space-y-3">
  <div className="flex items-center gap-3">
    <StatusBadge status="success">Operational</StatusBadge>
    <span>API Server</span>
  </div>
  <div className="flex items-center gap-3">
    <StatusBadge status="warning">Degraded</StatusBadge>
    <span>Database</span>
  </div>
  <div className="flex items-center gap-3">
    <StatusBadge status="error">Down</StatusBadge>
    <span>Email Service</span>
  </div>
</div>`}
        >
          <div className="space-y-3 border rounded-lg p-4 max-w-md">
            <div className="flex items-center gap-3">
              <StatusBadge status="success">Operational</StatusBadge>
              <span className="text-sm">API Server</span>
            </div>
            <div className="flex items-center gap-3">
              <StatusBadge status="warning">Degraded</StatusBadge>
              <span className="text-sm">Database</span>
            </div>
            <div className="flex items-center gap-3">
              <StatusBadge status="error">Down</StatusBadge>
              <span className="text-sm">Email Service</span>
            </div>
            <div className="flex items-center gap-3">
              <StatusBadge status="info">Maintenance</StatusBadge>
              <span className="text-sm">CDN</span>
            </div>
          </div>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              {
                name: 'status',
                type: '"neutral" | "success" | "warning" | "error" | "info"',
                default: '"neutral"',
                description: 'Status variant with semantic coloring',
              },
              {
                name: 'dot',
                type: 'boolean',
                default: 'true',
                description: 'Show colored dot indicator',
              },
              {
                name: 'children',
                type: 'ReactNode',
                default: '-',
                description: 'Badge content/text',
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

        <div>
          <h2 className="text-2xl font-semibold mb-4">Status Colors</h2>
          <PropsTable
            props={[
              {
                name: 'neutral',
                type: 'gray',
                default: '-',
                description: 'Default/neutral state (secondary color)',
              },
              {
                name: 'success',
                type: 'green',
                default: '-',
                description: 'Positive states (active, completed, operational)',
              },
              {
                name: 'warning',
                type: 'yellow',
                default: '-',
                description: 'Attention needed (pending, degraded)',
              },
              {
                name: 'error',
                type: 'red',
                default: '-',
                description: 'Error states (failed, cancelled, down)',
              },
              {
                name: 'info',
                type: 'blue',
                default: '-',
                description: 'Informational (in progress, info)',
              },
            ]}
          />
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Semantic Colors:</strong> Five status variants with meaningful colors
            </li>
            <li>
              <strong>Dot Indicator:</strong> Optional colored dot for visual emphasis
            </li>
            <li>
              <strong>Theme-Aware:</strong> Colors adapt to light/dark mode
            </li>
            <li>
              <strong>CVA-Based:</strong> Built with class-variance-authority for type-safe variants
            </li>
            <li>
              <strong>Hover States:</strong> Interactive hover effects
            </li>
            <li>
              <strong>Focus Rings:</strong> Accessible focus indicators
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
