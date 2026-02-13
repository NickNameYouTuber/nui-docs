import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { CopyInput } from '@nicorp/nui';
import { useDocLang } from '../../i18n';

export default function CopyInputPage() {
  const { t } = useDocLang();
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">CopyInput</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.copyInput.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.copyInput.preview1Title')}
          description={t('pages.copyInput.preview1Desc')}
          code={`<CopyInput
  value="https://example.com/api/endpoint"
/>`}
        >
          <CopyInput
            value="https://example.com/api/endpoint"
          />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.copyInput.preview2Title')}
          description={t('pages.copyInput.preview2Desc')}
          code={`<CopyInput
  label="API Endpoint"
  value="https://api.example.com/v1/users"
/>`}
        >
          <CopyInput
            label="API Endpoint"
            value="https://api.example.com/v1/users"
          />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.copyInput.preview3Title')}
          description={t('pages.copyInput.preview3Desc')}
          code={`<div className="space-y-4">
  <CopyInput
    label="Public Key"
    value="pk_live_51HqK8yBmXYz9K..."
  />
  <CopyInput
    label="Secret Key"
    value="sk_live_51HqK8yBmXYz9K..."
  />
</div>`}
        >
          <div className="space-y-4">
            <CopyInput
              label="Public Key"
              value="pk_live_51HqK8yBmXYz9K8nR4fW3pL2eH..."
            />
            <CopyInput
              label="Secret Key"
              value="sk_live_51HqK8yBmXYz9K8nR4fW3pL2eH..."
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Authentication Token"
          description="Copy input for JWT tokens"
          code={`<CopyInput
  label="Access Token"
  value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
/>`}
        >
          <CopyInput
            label="Access Token"
            value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"
          />
        </ComponentPreview>

        <ComponentPreview
          title="Installation Command"
          description="Copy input for command-line instructions"
          code={`<CopyInput
  label="Install Package"
  value="npm install @nicorp/nui"
/>`}
        >
          <CopyInput
            label="Install Package"
            value="npm install @nicorp/nui"
          />
        </ComponentPreview>

        <ComponentPreview
          title="Share Link"
          description="Copy input for sharing URLs"
          code={`<CopyInput
  label="Share Link"
  value="https://app.example.com/invite/abc123xyz"
/>`}
        >
          <CopyInput
            label="Share Link"
            value="https://app.example.com/invite/abc123xyz"
          />
        </ComponentPreview>

        <ComponentPreview
          title="Webhook URL"
          description="Copy input for webhook endpoints"
          code={`<CopyInput
  label="Webhook URL"
  value="https://api.example.com/webhooks/payment-success"
/>`}
        >
          <CopyInput
            label="Webhook URL"
            value="https://api.example.com/webhooks/payment-success"
          />
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              {
                name: 'value',
                type: 'string',
                default: '-',
                description: 'The text value to display and copy (required)',
              },
              {
                name: 'label',
                type: 'string',
                default: '-',
                description: 'Optional label displayed above the input',
              },
              {
                name: 'className',
                type: 'string',
                default: '-',
                description: 'Additional CSS classes for the input',
              },
            ]}
          />
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Read-only:</strong> Input is non-editable to prevent accidental modifications
            </li>
            <li>
              <strong>Visual Feedback:</strong> Copy button shows a checkmark for 2 seconds after successful copy
            </li>
            <li>
              <strong>Monospace Font:</strong> Uses font-mono for better readability of code, tokens, and URLs
            </li>
            <li>
              <strong>Clipboard API:</strong> Uses modern navigator.clipboard.writeText() for reliable copying
            </li>
            <li>
              <strong>Accessible:</strong> Extends standard Input props for full accessibility support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
