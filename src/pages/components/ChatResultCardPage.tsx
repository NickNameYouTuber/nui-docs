import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { ChatResultCard } from '@nicorp/nui';

export default function ChatResultCardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">ChatResultCard</h1>
        <p className="text-xl text-muted-foreground">
          "AI completed an action — navigate to result" card. Shows a success state with a prominent navigate button. Two variants: success (emerald) and highlight (violet).
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Success Variant"
          description="Default variant for completed actions"
          code={`<ChatResultCard
  title="Task created"
  description="Task 'Setup CI/CD' has been added to the project."
  linkLabel="Go to Task"
  onNavigate={() => console.log('navigate')}
  metadata={{ Project: 'NUI', Priority: 'High', Sprint: 'Sprint 12' }}
/>`}
        >
          <div className="w-full max-w-lg">
            <ChatResultCard
              title="Task created"
              description="Task 'Setup CI/CD' has been added to the project."
              linkLabel="Go to Task"
              onNavigate={() => alert('Navigate to task')}
              metadata={{ Project: 'NUI', Priority: 'High', Sprint: 'Sprint 12' }}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Highlight Variant"
          description="Violet gradient for special / highlighted results"
          code={`<ChatResultCard
  variant="highlight"
  title="Report generated"
  description="Monthly analytics report is ready for review."
  linkLabel="Open Report"
  onNavigate={() => console.log('open')}
  metadata={{ Period: 'June 2025', Pages: '15', Format: 'PDF' }}
/>`}
        >
          <div className="w-full max-w-lg">
            <ChatResultCard
              variant="highlight"
              title="Report generated"
              description="Monthly analytics report is ready for review."
              linkLabel="Open Report"
              onNavigate={() => alert('Open report')}
              metadata={{ Period: 'June 2025', Pages: '15', Format: 'PDF' }}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Without Metadata"
          description="Simple result card without extra information"
          code={`<ChatResultCard
  title="File uploaded"
  description="document.pdf has been uploaded successfully."
  linkLabel="View File"
  onNavigate={() => console.log('view')}
/>`}
        >
          <div className="w-full max-w-lg">
            <ChatResultCard
              title="File uploaded"
              description="document.pdf has been uploaded successfully."
              linkLabel="View File"
              onNavigate={() => alert('View file')}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Without Navigation"
          description="Informational result without a navigate button"
          code={`<ChatResultCard
  title="Analysis complete"
  description="All checks passed. No issues found."
  metadata={{ Files: '42', Issues: '0', Duration: '3.2s' }}
/>`}
        >
          <div className="w-full max-w-lg">
            <ChatResultCard
              title="Analysis complete"
              description="All checks passed. No issues found."
              metadata={{ Files: '42', Issues: '0', Duration: '3.2s' }}
            />
          </div>
        </ComponentPreview>

        <PropsTable
          props={[
            { name: 'title', type: 'string', description: 'Main title, e.g. "Task created"' },
            { name: 'description', type: 'string', description: 'Subtitle / description text' },
            { name: 'icon', type: 'LucideIcon', description: 'Custom icon (default: CheckCircle2 for success, Sparkles for highlight)' },
            { name: 'linkLabel', type: 'string', default: '"Перейти"', description: 'Navigate button label' },
            { name: 'onNavigate', type: '() => void', description: 'Called when navigate button is clicked' },
            { name: 'metadata', type: 'Record<string, string>', description: 'Optional key-value metadata table' },
            { name: 'variant', type: '"success" | "highlight"', default: '"success"', description: 'Visual variant — success (emerald) or highlight (violet)' },
          ]}
        />
      </div>
    </div>
  );
}
