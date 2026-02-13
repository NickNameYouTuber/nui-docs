import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { JsonViewer } from '@nicorp/nui';
import { useDocLang } from '../../i18n';

export default function JsonViewerPage() {
  const { t } = useDocLang();
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">JsonViewer</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.jsonViewer.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.jsonViewer.preview1Title')}
          description={t('pages.jsonViewer.preview1Desc')}
          code={`<JsonViewer
  data={{
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    active: true
  }}
/>`}
        >
          <JsonViewer
            data={{
              name: "John Doe",
              age: 30,
              email: "john@example.com",
              active: true,
            }}
          />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.jsonViewer.preview2Title')}
          description={t('pages.jsonViewer.preview2Desc')}
          code={`<JsonViewer
  data={{
    users: [
      { id: 1, name: "Alice", role: "admin" },
      { id: 2, name: "Bob", role: "user" }
    ],
    settings: {
      theme: "dark",
      notifications: true
    }
  }}
/>`}
        >
          <JsonViewer
            data={{
              users: [
                { id: 1, name: "Alice", role: "admin" },
                { id: 2, name: "Bob", role: "user" },
              ],
              settings: {
                theme: "dark",
                notifications: true,
              },
            }}
          />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.jsonViewer.preview3Title')}
          description={t('pages.jsonViewer.preview3Desc')}
          code={`<JsonViewer
  data={{
    status: "success",
    message: "Data retrieved successfully",
    data: {
      id: "abc123",
      timestamp: "2024-12-10T10:30:00Z",
      items: 42
    },
    meta: {
      page: 1,
      total: 100
    }
  }}
/>`}
        >
          <JsonViewer
            data={{
              status: "success",
              message: "Data retrieved successfully",
              data: {
                id: "abc123",
                timestamp: "2024-12-10T10:30:00Z",
                items: 42,
              },
              meta: {
                page: 1,
                total: 100,
              },
            }}
          />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.jsonViewer.preview4Title')}
          description={t('pages.jsonViewer.preview4Desc')}
          code={`<JsonViewer
  data={{
    app: {
      name: "My Application",
      version: "1.0.0",
      environment: "production"
    },
    features: {
      authentication: true,
      analytics: true,
      experimental: false
    },
    api: {
      baseUrl: "https://api.example.com",
      timeout: 5000,
      retries: 3
    }
  }}
/>`}
        >
          <JsonViewer
            data={{
              app: {
                name: "My Application",
                version: "1.0.0",
                environment: "production",
              },
              features: {
                authentication: true,
                analytics: true,
                experimental: false,
              },
              api: {
                baseUrl: "https://api.example.com",
                timeout: 5000,
                retries: 3,
              },
            }}
          />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.jsonViewer.preview5Title')}
          description={t('pages.jsonViewer.preview5Desc')}
          code={`<JsonViewer
  data={[
    { id: 1, product: "Laptop", price: 999 },
    { id: 2, product: "Mouse", price: 29 },
    { id: 3, product: "Keyboard", price: 79 }
  ]}
/>`}
        >
          <JsonViewer
            data={[
              { id: 1, product: "Laptop", price: 999 },
              { id: 2, product: "Mouse", price: 29 },
              { id: 3, product: "Keyboard", price: 79 },
            ]}
          />
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              {
                name: 'data',
                type: 'any',
                default: '-',
                description: 'The data to display as JSON (required)',
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
              <strong>Auto Formatting:</strong> Uses JSON.stringify with 2-space indentation
            </li>
            <li>
              <strong>Any Data Type:</strong> Accepts objects, arrays, primitives, null, etc
            </li>
            <li>
              <strong>Monospace Font:</strong> font-mono for clear code readability
            </li>
            <li>
              <strong>Scrollable:</strong> overflow-auto for large JSON structures
            </li>
            <li>
              <strong>Muted Styling:</strong> bg-muted with subtle border and rounded corners
            </li>
            <li>
              <strong>Compact Size:</strong> text-xs for efficient space usage
            </li>
            <li>
              <strong>Debug Friendly:</strong> Perfect for API inspection and debugging
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-blue-500/50 bg-blue-500/10 p-4">
          <h3 className="font-semibold mb-2">Use Cases</h3>
          <ul className="text-sm space-y-1 list-disc pl-5">
            <li>Displaying API responses for debugging</li>
            <li>Showing configuration files</li>
            <li>Inspecting state in development</li>
            <li>Documentation examples</li>
            <li>Data visualization in dashboards</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
