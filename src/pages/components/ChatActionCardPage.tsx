import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { ChatActionCard } from '@nicorp/nui';

export default function ChatActionCardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">ChatActionCard</h1>
        <p className="text-xl text-muted-foreground">
          Notification / status card for AI actions. Four types: success, info, warning, result. Supports action buttons with double-click protection and dismiss.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Success"
          description="Indicates a successful AI action"
          code={`<ChatActionCard
  type="success"
  title="Task created successfully"
  description="The task 'Setup CI/CD' has been added to the project."
  action={{ label: 'View Task', onClick: () => console.log('navigate') }}
/>`}
        >
          <div className="w-full max-w-lg">
            <ChatActionCard
              type="success"
              title="Task created successfully"
              description="The task 'Setup CI/CD' has been added to the project."
              action={{ label: 'View Task', onClick: () => alert('Navigate to task') }}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Info"
          description="Informational notification from the AI"
          code={`<ChatActionCard
  type="info"
  title="Project analysis complete"
  description="Found 12 files, 3 dependencies need updating."
/>`}
        >
          <div className="w-full max-w-lg">
            <ChatActionCard
              type="info"
              title="Project analysis complete"
              description="Found 12 files, 3 dependencies need updating."
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Warning"
          description="Warning notification from the AI"
          code={`<ChatActionCard
  type="warning"
  title="Potential issue detected"
  description="The deployment configuration may cause downtime."
  dismissible
/>`}
        >
          <div className="w-full max-w-lg">
            <ChatActionCard
              type="warning"
              title="Potential issue detected"
              description="The deployment configuration may cause downtime."
              dismissible
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Result"
          description="AI action result with navigation"
          code={`<ChatActionCard
  type="result"
  title="Report generated"
  description="Monthly analytics report is ready."
  action={{ label: 'Open Report', onClick: () => console.log('open') }}
/>`}
        >
          <div className="w-full max-w-lg">
            <ChatActionCard
              type="result"
              title="Report generated"
              description="Monthly analytics report is ready."
              action={{ label: 'Open Report', onClick: () => alert('Open report') }}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Dismissible with Action"
          description="Card that can be both acted on and dismissed"
          code={`<ChatActionCard
  type="info"
  title="New version available"
  description="NUI v0.10.0 is now available with new AI components."
  action={{ label: 'Update', onClick: () => console.log('update') }}
  dismissible
  onDismiss={() => console.log('dismissed')}
/>`}
        >
          <div className="w-full max-w-lg">
            <ChatActionCard
              type="info"
              title="New version available"
              description="NUI v0.10.0 is now available with new AI components."
              action={{ label: 'Update', onClick: () => alert('Update') }}
              dismissible
              onDismiss={() => console.log('Dismissed')}
            />
          </div>
        </ComponentPreview>

        <PropsTable
          props={[
            { name: 'type', type: '"success" | "info" | "warning" | "result"', default: '"info"', description: 'Card type — determines colour scheme and default icon' },
            { name: 'title', type: 'string', description: 'Main title text' },
            { name: 'description', type: 'string', description: 'Optional subtitle / description' },
            { name: 'icon', type: 'LucideIcon', description: 'Custom icon override' },
            { name: 'action', type: '{ label: string; onClick: () => void }', description: 'Primary action button (has double-click protection)' },
            { name: 'dismissible', type: 'boolean', default: 'false', description: 'Show dismiss (×) button' },
            { name: 'onDismiss', type: '() => void', description: 'Called when dismissed' },
          ]}
        />
      </div>
    </div>
  );
}
