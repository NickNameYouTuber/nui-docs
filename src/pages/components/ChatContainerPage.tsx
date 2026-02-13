import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import {
  ChatContainer,
  ChatList,
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatBubbleTimestamp,
  ChatInput,
  PromptSuggestions,
} from '@nicorp/nui';
import { useDocLang } from '../../i18n';

interface Message {
  id: number;
  variant: 'sent' | 'received';
  text: string;
  time: string;
}

const demoSuggestions = [
  { title: 'Explain React Hooks', description: 'Give a simple overview of useState and useEffect', prompt: 'Explain React hooks in simple terms' },
  { title: 'Write a function', description: 'Generate a debounce utility function', prompt: 'Write a TypeScript debounce function' },
  { title: 'Compare SQL vs NoSQL', description: 'Key differences between relational and document DBs', prompt: 'Compare SQL and NoSQL databases' },
  { title: 'Debug my code', description: 'Help me find bugs', prompt: 'Help me debug this code' },
];

const aiResponses = [
  "React Hooks are functions that let you use state and lifecycle features in functional components. The two most common hooks are `useState` (for managing local state) and `useEffect` (for side effects like data fetching).",
  "Here's a simple debounce function:\n\n```typescript\nfunction debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {\n  let timeoutId: ReturnType<typeof setTimeout>;\n  return (...args: Parameters<T>) => {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => fn(...args), delay);\n  };\n}\n```",
  "**SQL** databases are relational, use tables with predefined schemas, and are great for complex queries. **NoSQL** databases are document-based, schema-flexible, and scale horizontally more easily.",
  "Sure! Please paste the code you'd like me to help debug, and I'll take a look at it.",
];

export default function ChatContainerPage() {
  const { t } = useDocLang();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const now = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const handleSend = (text: string) => {
    const userMsg: Message = { id: Date.now(), variant: 'sent', text, time: now() };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    setTimeout(() => {
      const aiText = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const aiMsg: Message = { id: Date.now() + 1, variant: 'received', text: aiText, time: now() };
      setMessages((prev) => [...prev, aiMsg]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">ChatContainer</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.chatContainer.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.chatContainer.preview1Title')}
          description={t('pages.chatContainer.preview1Desc')}
          code={`<ChatContainer className="h-[500px] rounded-xl border">
  <ChatList autoScroll>
    {messages.map((msg) => (
      <ChatBubble key={msg.id} variant={msg.variant}>
        {msg.variant === 'received' && <ChatBubbleAvatar fallback="AI" />}
        <div>
          <ChatBubbleMessage variant={msg.variant}>
            {msg.text}
          </ChatBubbleMessage>
          <ChatBubbleTimestamp>{msg.time}</ChatBubbleTimestamp>
        </div>
      </ChatBubble>
    ))}
    {isLoading && (
      <ChatBubble variant="received">
        <ChatBubbleAvatar fallback="AI" />
        <ChatBubbleMessage variant="received" isLoading />
      </ChatBubble>
    )}
  </ChatList>
  <div className="p-4 border-t">
    <ChatInput onSend={handleSend} isLoading={isLoading} />
  </div>
</ChatContainer>`}
        >
          <ChatContainer className="h-[500px] rounded-xl border bg-background">
            <ChatList autoScroll>
              {messages.length === 0 && !isLoading && (
                <div className="flex-1 flex flex-col items-center justify-center py-8 gap-4">
                  <p className="text-muted-foreground text-sm">Start a conversation or pick a suggestion:</p>
                  <PromptSuggestions
                    suggestions={demoSuggestions}
                    onSelect={handleSend}
                    columns={2}
                  />
                </div>
              )}
              {messages.map((msg) => (
                <ChatBubble key={msg.id} variant={msg.variant}>
                  {msg.variant === 'received' && <ChatBubbleAvatar fallback="AI" />}
                  <div>
                    <ChatBubbleMessage variant={msg.variant}>
                      {msg.text}
                    </ChatBubbleMessage>
                    <ChatBubbleTimestamp className={msg.variant === 'sent' ? 'text-right' : ''}>
                      {msg.time}
                    </ChatBubbleTimestamp>
                  </div>
                  {msg.variant === 'sent' && <ChatBubbleAvatar fallback="ME" />}
                </ChatBubble>
              ))}
              {isLoading && (
                <ChatBubble variant="received">
                  <ChatBubbleAvatar fallback="AI" />
                  <ChatBubbleMessage variant="received" isLoading />
                </ChatBubble>
              )}
            </ChatList>
            <div className="p-4 border-t border-border">
              <ChatInput onSend={handleSend} isLoading={isLoading} showAttach />
            </div>
          </ChatContainer>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">ChatContainer Props</h2>
          <PropsTable
            props={[
              { name: 'className', type: 'string', default: '-', description: 'CSS class for the outer flex container' },
              { name: 'children', type: 'ReactNode', default: '-', description: 'ChatList, ChatInput, etc.' },
            ]}
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">ChatList Props</h2>
          <PropsTable
            props={[
              { name: 'autoScroll', type: 'boolean', default: 'true', description: 'Auto-scroll to bottom when children change' },
            ]}
          />
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Composition</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Build a full chat UI by composing these components:
          </p>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li><strong>ChatContainer:</strong> Outer flex column wrapper</li>
            <li><strong>ChatList:</strong> Scrollable message area with auto-scroll</li>
            <li><strong>ChatBubble + ChatBubbleMessage:</strong> Individual messages</li>
            <li><strong>ChatInput:</strong> Bottom text input with send</li>
            <li><strong>PromptSuggestions:</strong> Initial prompt cards</li>
            <li><strong>AILoading:</strong> Standalone loading indicator</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
