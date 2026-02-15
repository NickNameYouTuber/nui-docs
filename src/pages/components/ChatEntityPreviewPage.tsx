import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { ChatEntityPreview } from '@nicorp/nui';

export default function ChatEntityPreviewPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">ChatEntityPreview</h1>
        <p className="text-xl text-muted-foreground">
          Preview card for tasks, projects, and files in AI chat. Navigation is handled exclusively via the onNavigate callback. Fully null-safe.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Task Preview"
          description="Preview card for a task entity"
          code={`<ChatEntityPreview
  type="task"
  title="Setup CI/CD Pipeline"
  id="TASK-142"
  status="In Progress"
  properties={{ Priority: 'High', Assignee: 'John', Sprint: 'Sprint 12' }}
  onNavigate={() => console.log('navigate to task')}
/>`}
        >
          <div className="w-full max-w-md">
            <ChatEntityPreview
              type="task"
              title="Setup CI/CD Pipeline"
              id="TASK-142"
              status="In Progress"
              properties={{ Priority: 'High', Assignee: 'John', Sprint: 'Sprint 12' }}
              onNavigate={() => alert('Navigate to task')}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Project Preview"
          description="Preview card for a project entity"
          code={`<ChatEntityPreview
  type="project"
  title="NUI Component Library"
  id="PRJ-007"
  status="Active"
  properties={{ Members: '8', Tasks: '42', Progress: '68%' }}
  onNavigate={() => console.log('navigate to project')}
/>`}
        >
          <div className="w-full max-w-md">
            <ChatEntityPreview
              type="project"
              title="NUI Component Library"
              id="PRJ-007"
              status="Active"
              properties={{ Members: '8', Tasks: '42', Progress: '68%' }}
              onNavigate={() => alert('Navigate to project')}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="File Preview"
          description="Preview card for a file entity"
          code={`<ChatEntityPreview
  type="file"
  title="report-q4-2024.pdf"
  status="Uploaded 2 hours ago"
  properties={{ Size: '2.4 MB', Type: 'PDF', Pages: '15' }}
/>`}
        >
          <div className="w-full max-w-md">
            <ChatEntityPreview
              type="file"
              title="report-q4-2024.pdf"
              status="Uploaded 2 hours ago"
              properties={{ Size: '2.4 MB', Type: 'PDF', Pages: '15' }}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Minimal — No Properties"
          description="Card with only title and status, no extra data"
          code={`<ChatEntityPreview
  type="task"
  title="Fix login bug"
  id="BUG-99"
  status="Done"
/>`}
        >
          <div className="w-full max-w-md">
            <ChatEntityPreview
              type="task"
              title="Fix login bug"
              id="BUG-99"
              status="Done"
            />
          </div>
        </ComponentPreview>

        <PropsTable
          props={[
            { name: 'type', type: '"task" | "project" | "file" | "custom"', default: '"task"', description: 'Entity type — determines icon and colour scheme' },
            { name: 'title', type: 'string', description: 'Entity title' },
            { name: 'id', type: 'string', description: 'Entity ID or badge text' },
            { name: 'status', type: 'string', description: 'Status label text' },
            { name: 'properties', type: 'Record<string, string>', description: 'Key-value properties table displayed below the header' },
            { name: 'icon', type: 'LucideIcon', description: 'Custom icon override' },
            { name: 'onNavigate', type: '() => void', description: 'Called when card is clicked — use for navigation. Card becomes clickable if provided.' },
          ]}
        />
      </div>
    </div>
  );
}
