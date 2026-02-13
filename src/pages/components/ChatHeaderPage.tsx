import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { ChatHeader } from '@nicorp/nui';
import { useDocLang } from '../../i18n';

export default function ChatHeaderPage() {
  const { t } = useDocLang();
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">ChatHeader</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.chatHeader.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Default"
          description="Header with model name and online status"
          code={`<ChatHeader
  title="GPT-4o"
  model="gpt-4o"
  status="online"
  onClear={() => {}}
  onSettings={() => {}}
/>`}
        >
          <ChatHeader
            title="GPT-4o"
            model="gpt-4o"
            status="online"
            onClear={() => {}}
            onSettings={() => {}}
          />
        </ComponentPreview>

        <ComponentPreview
          title="Typing Status"
          description="Shows pulsing indicator when AI is typing"
          code={`<ChatHeader title="Claude 3.5" status="typing" />`}
        >
          <ChatHeader
            title="Claude 3.5 Sonnet"
            model="claude-3.5-sonnet"
            status="typing"
          />
        </ComponentPreview>

        <ComponentPreview
          title="With Back Button"
          description="Mobile-style header with back navigation"
          code={`<ChatHeader
  title="Assistant"
  status="online"
  onBack={() => {}}
  onSettings={() => {}}
/>`}
        >
          <ChatHeader
            title="Assistant"
            status="online"
            onBack={() => {}}
            onSettings={() => {}}
          />
        </ComponentPreview>

        <ComponentPreview
          title="Offline"
          description="Disconnected state"
          code={`<ChatHeader title="GPT-4" status="offline" />`}
        >
          <ChatHeader
            title="GPT-4"
            model="gpt-4"
            status="offline"
          />
        </ComponentPreview>

        <PropsTable
          props={[
            { name: 'title', type: 'string', required: true, description: 'Header title / model display name' },
            { name: 'model', type: 'string', description: 'Model identifier' },
            { name: 'modelIcon', type: 'ReactNode', description: 'Custom icon next to title' },
            { name: 'status', type: '"online" | "offline" | "typing"', description: 'Connection/activity status' },
            { name: 'onClear', type: '() => void', description: 'Clear conversation handler' },
            { name: 'onSettings', type: '() => void', description: 'Settings button handler' },
            { name: 'onBack', type: '() => void', description: 'Back button handler (shows arrow)' },
            { name: 'children', type: 'ReactNode', description: 'Additional content in header' },
          ]}
        />
      </div>
    </div>
  );
}
