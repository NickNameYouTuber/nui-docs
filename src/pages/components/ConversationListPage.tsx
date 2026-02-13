import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { ConversationList } from '@nicorp/nui';

const conversations = [
  { id: '1', title: 'Help with React hooks', updatedAt: new Date(), preview: 'Can you explain useEffect cleanup?' },
  { id: '2', title: 'Python sorting algorithms', updatedAt: new Date(), preview: 'What is the fastest sorting algorithm for...' },
  { id: '3', title: 'Database optimization', updatedAt: new Date(Date.now() - 86400000), preview: 'My queries are running slowly...' },
  { id: '4', title: 'CSS Grid layout', updatedAt: new Date(Date.now() - 86400000), preview: 'How to create a responsive grid?' },
  { id: '5', title: 'Docker deployment', updatedAt: new Date(Date.now() - 86400000 * 3), preview: 'I need help with docker-compose...' },
  { id: '6', title: 'TypeScript generics', updatedAt: new Date(Date.now() - 86400000 * 10), preview: 'How do I use conditional types?' },
  { id: '7', title: 'REST API design', updatedAt: new Date(Date.now() - 86400000 * 15), preview: 'Best practices for REST endpoints' },
];

export default function ConversationListPage() {
  const [activeId, setActiveId] = useState('1');
  const [convos, setConvos] = useState(conversations);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">ConversationList</h1>
        <p className="text-xl text-muted-foreground">
          Sidebar conversation list with search, date grouping, rename, and delete actions.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Default"
          description="Full conversation list with all features"
          code={`<ConversationList
  conversations={conversations}
  activeId={activeId}
  onSelect={setActiveId}
  onNew={() => { /* create */ }}
  onRename={(id, t) => { /* rename */ }}
  onDelete={(id) => { /* delete */ }}
  showSearch
/>`}
        >
          <div className="w-72 h-[500px] border rounded-lg overflow-hidden bg-background">
            <ConversationList
              conversations={convos}
              activeId={activeId}
              onSelect={setActiveId}
              onNew={() => {
                const newConv = { id: String(Date.now()), title: 'New conversation', updatedAt: new Date(), preview: '' };
                setConvos([newConv, ...convos]);
                setActiveId(newConv.id);
              }}
              onRename={(id, title) => setConvos(convos.map(c => c.id === id ? { ...c, title } : c))}
              onDelete={(id) => setConvos(convos.filter(c => c.id !== id))}
              showSearch
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Without Search"
          description="Compact list without search bar"
          code={`<ConversationList
  conversations={conversations}
  activeId="1"
  onSelect={() => {}}
/>`}
        >
          <div className="w-72 h-80 border rounded-lg overflow-hidden bg-background">
            <ConversationList
              conversations={conversations.slice(0, 4)}
              activeId="1"
              onSelect={() => {}}
            />
          </div>
        </ComponentPreview>

        <PropsTable
          props={[
            { name: 'conversations', type: 'Conversation[]', required: true, description: 'Array of conversation objects' },
            { name: 'activeId', type: 'string', description: 'Currently selected conversation ID' },
            { name: 'onSelect', type: '(id: string) => void', description: 'Conversation click handler' },
            { name: 'onNew', type: '() => void', description: 'New conversation button handler' },
            { name: 'onDelete', type: '(id: string) => void', description: 'Delete conversation handler' },
            { name: 'onRename', type: '(id: string, title: string) => void', description: 'Rename conversation handler' },
            { name: 'showSearch', type: 'boolean', default: 'false', description: 'Show search input' },
          ]}
        />

        <div>
          <h3 className="text-lg font-semibold mb-3">Conversation</h3>
          <PropsTable
            props={[
              { name: 'id', type: 'string', required: true, description: 'Unique conversation ID' },
              { name: 'title', type: 'string', required: true, description: 'Conversation title' },
              { name: 'updatedAt', type: 'Date', required: true, description: 'Last updated timestamp (used for grouping)' },
              { name: 'preview', type: 'string', description: 'Preview text of last message' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
