import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import {
  NUIProvider,
  ChatInput,
  ChatMessage,
  ConversationList,
  AILoading,
  ModelSelector,
  ChatHeader,
  MessageActions,
  ReasoningBlock,
  ChatToolCall,
  ChatFollowUp,
} from '@nicorp/nui';

const demoModels = [
  { id: 'gpt-4o', name: 'GPT-4o', provider: 'OpenAI', icon: '🧠' },
  { id: 'claude-3', name: 'Claude 3', provider: 'Anthropic', icon: '🟣' },
];

const demoConversations = [
  { id: '1', title: 'React hooks question', lastMessage: 'How do hooks work?', updatedAt: new Date() },
  { id: '2', title: 'Weather API', lastMessage: 'Get weather data', updatedAt: new Date(Date.now() - 86400000) },
];

export default function NUIProviderPage() {
  const [locale, setLocale] = useState<'en' | 'ru'>('en');

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">NUIProvider</h1>
        <p className="text-xl text-muted-foreground">
          Internationalization provider for all AI & Chat components. Wrap your app
          to translate every built-in string to Russian or any custom locale.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Locale Toggle"
          description="Switch between English and Russian — all components update instantly"
          code={`const [locale, setLocale] = useState<'en' | 'ru'>('en');

<NUIProvider locale={locale}>
  <button onClick={() => setLocale(l => l === 'en' ? 'ru' : 'en')}>
    Toggle locale: {locale}
  </button>
  <ChatInput showAttach />
  <ModelSelector models={models} />
  <AILoading variant="text" />
</NUIProvider>`}
        >
          <NUIProvider locale={locale}>
            <div className="space-y-4">
              <button
                onClick={() => setLocale(l => l === 'en' ? 'ru' : 'en')}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Locale: {locale.toUpperCase()} — click to toggle
              </button>

              <ChatInput showAttach />

              <ModelSelector models={demoModels} />

              <AILoading variant="text" />

              <ChatHeader
                title="AI Assistant"
                status="online"
                onClear={() => {}}
                onSettings={() => {}}
              />

              <MessageActions
                actions={['copy', 'retry', 'like', 'dislike', 'share']}
                visibility="always"
              />

              <ReasoningBlock
                content="Let me think about this question carefully..."
                duration={5}
                defaultOpen
              />

              <ChatToolCall
                name="searchWeb"
                args={{ query: 'React hooks tutorial' }}
                status="success"
                result="Found 42 results"
                defaultOpen
              />

              <ChatFollowUp
                question={locale === 'en' ? 'Which framework?' : 'Какой фреймворк?'}
                options={[
                  { id: 'react', label: 'React' },
                  { id: 'vue', label: 'Vue' },
                ]}
                allowFreeText
              />

              <div className="max-w-[250px] border rounded-lg overflow-hidden">
                <ConversationList
                  conversations={demoConversations}
                  onNew={() => {}}
                  showSearch
                />
              </div>
            </div>
          </NUIProvider>
        </ComponentPreview>

        <ComponentPreview
          title="Russian Locale"
          description="All AI components rendered in Russian"
          code={`<NUIProvider locale="ru">
  <ChatMessage
    variant="received"
    avatarFallback="ИИ"
    content="Привет! Чем могу помочь?"
    actions={['copy', 'retry', 'like', 'dislike']}
  />
  <ChatInput showAttach />
</NUIProvider>`}
        >
          <NUIProvider locale="ru">
            <div className="space-y-4">
              <ChatMessage
                variant="received"
                avatarFallback="ИИ"
                content="Привет! Чем могу помочь?"
                timestamp="14:20"
                actions={['copy', 'retry', 'like', 'dislike']}
              />
              <ChatInput showAttach />
            </div>
          </NUIProvider>
        </ComponentPreview>

        <ComponentPreview
          title="Custom Locale (Partial)"
          description="Override individual strings — unspecified keys fall back to English"
          code={`<NUIProvider locale={{
  chatInput_placeholder: "Ask me anything…",
  chatInput_sendMessage: "Go!",
  aiLoading_thinking: "Processing",
}}>
  <ChatInput />
  <AILoading variant="text" />
</NUIProvider>`}
        >
          <NUIProvider locale={{
            chatInput_placeholder: "Ask me anything…",
            chatInput_sendMessage: "Go!",
            aiLoading_thinking: "Processing",
          }}>
            <div className="space-y-4">
              <ChatInput />
              <AILoading variant="text" />
            </div>
          </NUIProvider>
        </ComponentPreview>

        <ComponentPreview
          title="No Provider (fallback)"
          description="Without NUIProvider, components default to English"
          code={`{/* No NUIProvider wrapper */}
<ChatInput showAttach />
<AILoading variant="text" />`}
        >
          <div className="space-y-4">
            <ChatInput showAttach />
            <AILoading variant="text" />
          </div>
        </ComponentPreview>

        <div className="rounded-xl border border-border p-6">
          <h3 className="text-lg font-semibold mb-3">Usage</h3>
          <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`import { NUIProvider } from '@nicorp/nui';

// Built-in locale
<NUIProvider locale="ru">
  <App />
</NUIProvider>

// Custom partial locale
<NUIProvider locale={{
  chatInput_placeholder: "Спроси что-нибудь…",
  reasoning_thinking: "Думаю…",
}}>
  <App />
</NUIProvider>

// Access locale in custom components
import { useNUILocale } from '@nicorp/nui';

function MyComponent() {
  const t = useNUILocale();
  return <span>{t.chatInput_sendMessage}</span>;
}`}
          </pre>
        </div>

        <PropsTable
          props={[
            { name: 'locale', type: '"en" | "ru" | Partial<NUILocale>', default: '"en"',
              description: 'Built-in locale key or a custom (partial) locale dictionary. Missing keys fall back to English.' },
            { name: 'children', type: 'ReactNode',
              description: 'Application tree that receives the locale context' },
          ]}
        />

        <div className="rounded-xl border border-border p-6">
          <h3 className="text-lg font-semibold mb-3">Exports</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><code className="text-foreground font-mono">NUIProvider</code> — Context provider component</li>
            <li><code className="text-foreground font-mono">useNUILocale()</code> — Hook returning current NUILocale dictionary</li>
            <li><code className="text-foreground font-mono">tpl(template, vars)</code> — Template interpolation helper for <code>{'{placeholder}'}</code> strings</li>
            <li><code className="text-foreground font-mono">NUILocale</code> — TypeScript interface with ~50 string keys</li>
            <li><code className="text-foreground font-mono">en</code> — English locale dictionary</li>
            <li><code className="text-foreground font-mono">ru</code> — Russian locale dictionary</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
