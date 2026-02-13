import { useState, useRef, useEffect, useCallback } from 'react';
import {
  NUIProvider,
  ChatContainer,
  ChatMessage,
  ChatInput,
  ChatHeader,
  ConversationList,
  ModelSelector,
  ChatModeSelector,
  PromptSuggestions,
  AILoading,
  type Conversation,
  type ModelOption,
  type ChatMode,
} from '@nicorp/nui';

// ---------------------------------------------------------------------------
// Mock data
// ---------------------------------------------------------------------------

const models: ModelOption[] = [
  { id: 'gpt-4o', name: 'GPT-4o', provider: 'OpenAI', icon: '🧠', badges: ['Vision', '128K'] },
  { id: 'claude-3', name: 'Claude 3 Opus', provider: 'Anthropic', icon: '🟣', badges: ['200K'] },
  { id: 'gemini', name: 'Gemini Pro', provider: 'Google', icon: '💎', badges: ['Fast'] },
];

const modes: ChatMode[] = [
  { id: 'chat', label: 'Chat', icon: '💬' },
  { id: 'code', label: 'Code', icon: '💻' },
  { id: 'creative', label: 'Creative', icon: '🎨' },
];

const suggestions = [
  { label: 'Write a poem about coding', description: 'Creative writing' },
  { label: 'Explain async/await in JS', description: 'Tutorial' },
  { label: 'Compare React vs Vue', description: 'Framework analysis' },
  { label: 'Generate a color palette', description: 'Design help' },
];

interface Message {
  id: string;
  variant: 'sent' | 'received';
  content: string;
  timestamp: string;
  reasoning?: { content: string; duration: number };
  toolCalls?: { name: string; args?: Record<string, unknown>; status: 'running' | 'success' | 'error'; result?: string }[];
  citations?: { index: number; title: string; url: string; snippet?: string }[];
  followUp?: { question: string; options: { id: string; label: string }[]; selected?: string };
  isLoading?: boolean;
}

const aiResponses: Record<string, {
  text: string;
  reasoning?: { content: string; duration: number };
  toolCalls?: Message['toolCalls'];
  citations?: Message['citations'];
  followUp?: Message['followUp'];
}> = {
  default: {
    text: "I understand your question! Let me help you with that. Here's a comprehensive answer with some context and examples to make things clearer.",
    reasoning: {
      content: "The user is asking a general question. I should provide a helpful, detailed response that covers the topic well and includes practical examples.",
      duration: 3,
    },
  },
  poem: {
    text: `Here's a poem about coding:

**Silicon Dreams**

In lines of code, we weave our art,
Each function plays its vital part.
Through loops and logic, errors found,
In debugging joy, we are unbound.

The cursor blinks, a patient friend,
Through endless hours, our thoughts we bend.
In syntax sweet and logic true,
We build the world — both old and new.`,
  },
  async: {
    text: "**Async/Await** is syntactic sugar over Promises in JavaScript.\n\n`async` marks a function as asynchronous, and `await` pauses execution until a Promise resolves. This makes asynchronous code look and behave like synchronous code.\n\n```js\nasync function fetchData() {\n  const res = await fetch('/api/data');\n  const data = await res.json();\n  return data;\n}\n```",
    toolCalls: [
      { name: 'searchDocs', args: { query: 'async await MDN' }, status: 'success' as const, result: 'Found MDN documentation on async/await' },
    ],
    citations: [
      { index: 1, title: 'MDN: async function', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function', snippet: 'The async function declaration creates an async function...' },
      { index: 2, title: 'JavaScript.info: Async/Await', url: 'https://javascript.info/async-await', snippet: 'A special syntax to work with promises...' },
    ],
  },
  compare: {
    text: "Both React and Vue are excellent frameworks. React offers more flexibility with its unopinionated approach, while Vue provides a more structured, batteries-included experience. The choice depends on your project needs and team preferences.",
    followUp: {
      question: "What aspect matters most to you?",
      options: [
        { id: 'perf', label: 'Performance' },
        { id: 'dx', label: 'Developer Experience' },
        { id: 'eco', label: 'Ecosystem & Community' },
      ],
    },
  },
  color: {
    text: "Here's a modern color palette for your project:\n\n🎨 **Primary:** `#6366f1` (Indigo)\n🌊 **Secondary:** `#06b6d4` (Cyan)\n✅ **Success:** `#22c55e` (Green)\n⚠️ **Warning:** `#f59e0b` (Amber)\n❌ **Error:** `#ef4444` (Red)\n⬛ **Neutral:** `#64748b` (Slate)",
    toolCalls: [
      { name: 'generatePalette', args: { style: 'modern', count: 6 }, status: 'success' as const, result: 'Generated 6-color palette' },
    ],
  },
};

function getAIResponse(text: string) {
  const lower = text.toLowerCase();
  if (lower.includes('poem') || lower.includes('creative')) return aiResponses.poem;
  if (lower.includes('async') || lower.includes('await')) return aiResponses.async;
  if (lower.includes('react') && lower.includes('vue')) return aiResponses.compare;
  if (lower.includes('color') || lower.includes('palette')) return aiResponses.color;
  return aiResponses.default;
}

function timeNow(): string {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function AIChatDemoPage() {
  const [locale, setLocale] = useState<'en' | 'ru'>('en');
  const [selectedModel, setSelectedModel] = useState('gpt-4o');
  const [selectedMode, setSelectedMode] = useState('chat');
  const [conversations, setConversations] = useState<Conversation[]>([
    { id: '1', title: 'New chat', lastMessage: '', updatedAt: new Date() },
  ]);
  const [activeConvId, setActiveConvId] = useState('1');
  const [messages, setMessages] = useState<Message[]>([]);
  const [likeStates, setLikeStates] = useState<Record<string, 'liked' | 'disliked' | null>>({});
  const [showSidebar, setShowSidebar] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addMessage = useCallback((msg: Message) => {
    setMessages(prev => [...prev, msg]);
  }, []);

  const handleSend = useCallback((text: string) => {
    const userMsg: Message = {
      id: `msg-${Date.now()}`,
      variant: 'sent',
      content: text,
      timestamp: timeNow(),
    };
    addMessage(userMsg);

    // Update conversation title
    setConversations(prev =>
      prev.map(c => c.id === activeConvId ? { ...c, title: text.slice(0, 40), lastMessage: text, updatedAt: new Date() } : c)
    );

    // Simulate AI loading
    const loadingId = `loading-${Date.now()}`;
    setTimeout(() => {
      addMessage({ id: loadingId, variant: 'received', content: '', timestamp: '', isLoading: true });
    }, 300);

    // Simulate AI response
    setTimeout(() => {
      const response = getAIResponse(text);
      setMessages(prev => prev.filter(m => m.id !== loadingId));
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        variant: 'received',
        content: response.text,
        timestamp: timeNow(),
        reasoning: response.reasoning,
        toolCalls: response.toolCalls,
        citations: response.citations,
        followUp: response.followUp,
      };
      addMessage(aiMsg);
    }, 1500 + Math.random() * 1000);
  }, [activeConvId, addMessage]);

  const handleNewChat = useCallback(() => {
    const id = `conv-${Date.now()}`;
    setConversations(prev => [
      { id, title: 'New chat', lastMessage: '', updatedAt: new Date() },
      ...prev,
    ]);
    setActiveConvId(id);
    setMessages([]);
  }, []);

  const handleFollowUpSelect = useCallback((msgId: string, optionId: string) => {
    setMessages(prev =>
      prev.map(m =>
        m.id === msgId && m.followUp
          ? { ...m, followUp: { ...m.followUp, selected: optionId } }
          : m
      )
    );
  }, []);

  const toggleLike = useCallback((msgId: string, state: 'liked' | 'disliked') => {
    setLikeStates(prev => ({
      ...prev,
      [msgId]: prev[msgId] === state ? null : state,
    }));
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">AI Chat Demo</h1>
        <p className="text-xl text-muted-foreground">
          A complete AI chat interface combining 15+ NUI components with full i18n support.
          Toggle between English and Russian to see every string translate in real-time.
        </p>
      </div>

      {/* Locale toggle */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-sm text-muted-foreground">Locale:</span>
        <div className="flex rounded-lg border border-border overflow-hidden">
          <button
            onClick={() => setLocale('en')}
            className={`px-4 py-1.5 text-sm font-medium transition-colors ${locale === 'en' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
          >
            🇺🇸 English
          </button>
          <button
            onClick={() => setLocale('ru')}
            className={`px-4 py-1.5 text-sm font-medium transition-colors ${locale === 'ru' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
          >
            🇷🇺 Русский
          </button>
        </div>
      </div>

      {/* Chat UI */}
      <NUIProvider locale={locale}>
        <div className="rounded-2xl border border-border overflow-hidden bg-background" style={{ height: 700 }}>
          <div className="flex h-full">
            {/* Sidebar */}
            {showSidebar && (
              <div className="w-72 border-r border-border shrink-0 h-full">
                <ConversationList
                  conversations={conversations}
                  activeId={activeConvId}
                  onSelect={setActiveConvId}
                  onNew={handleNewChat}
                  onDelete={(id) => {
                    setConversations(prev => prev.filter(c => c.id !== id));
                    if (activeConvId === id) {
                      setActiveConvId(conversations[0]?.id ?? '');
                      setMessages([]);
                    }
                  }}
                  onRename={(id, title) => {
                    setConversations(prev => prev.map(c => c.id === id ? { ...c, title } : c));
                  }}
                />
              </div>
            )}

            {/* Main chat area */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Header */}
              <ChatHeader
                title={conversations.find(c => c.id === activeConvId)?.title ?? 'Chat'}
                model={models.find(m => m.id === selectedModel)?.name}
                modelIcon={models.find(m => m.id === selectedModel)?.icon}
                status="online"
                onBack={() => setShowSidebar(v => !v)}
                onClear={() => setMessages([])}
                onSettings={() => alert('Settings clicked')}
              />

              {/* Messages */}
              <ChatContainer className="flex-1 p-4">
                {messages.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-full gap-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold mb-2">
                        {locale === 'en' ? 'How can I help you today?' : 'Чем могу помочь?'}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        {locale === 'en' ? 'Choose a suggestion or type your message' : 'Выберите подсказку или напишите сообщение'}
                      </p>
                    </div>
                    <PromptSuggestions
                      suggestions={suggestions}
                      onSelect={(s) => handleSend(s.label)}
                      columns={2}
                    />
                  </div>
                )}

                {messages.map((msg) => (
                  <ChatMessage
                    key={msg.id}
                    variant={msg.variant}
                    avatarFallback={msg.variant === 'received' ? 'AI' : undefined}
                    content={msg.isLoading ? undefined : msg.content}
                    isLoading={msg.isLoading}
                    timestamp={msg.timestamp}
                    reasoning={msg.reasoning}
                    toolCalls={msg.toolCalls}
                    citations={msg.citations}
                    followUp={msg.followUp}
                    onFollowUpSelect={(optionId) => handleFollowUpSelect(msg.id, optionId)}
                    actions={msg.variant === 'received' && !msg.isLoading ? ['copy', 'retry', 'like', 'dislike'] : undefined}
                    textContent={typeof msg.content === 'string' ? msg.content : undefined}
                    likeState={likeStates[msg.id]}
                    onLike={() => toggleLike(msg.id, 'liked')}
                    onDislike={() => toggleLike(msg.id, 'disliked')}
                    status={msg.variant === 'sent' ? 'delivered' : undefined}
                    className="mb-4"
                  />
                ))}
                <div ref={bottomRef} />
              </ChatContainer>

              {/* Input area */}
              <div className="border-t border-border p-4">
                <ChatInput
                  onSend={handleSend}
                  showAttach
                  headerSlot={
                    <div className="flex items-center gap-2">
                      <ModelSelector
                        models={models}
                        value={selectedModel}
                        onChange={setSelectedModel}
                        compact
                      />
                      <ChatModeSelector
                        modes={modes}
                        value={selectedMode}
                        onChange={setSelectedMode}
                      />
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </NUIProvider>

      {/* Feature list */}
      <div className="mt-8 rounded-xl border border-border p-6">
        <h3 className="text-lg font-semibold mb-4">Components Used</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {[
            'NUIProvider', 'ChatContainer', 'ChatMessage', 'ChatInput',
            'ChatHeader', 'ConversationList', 'ModelSelector', 'ChatModeSelector',
            'PromptSuggestions', 'ReasoningBlock', 'ChatToolCall', 'SourceCitation',
            'ChatFollowUp', 'MessageActions', 'AILoading',
          ].map(name => (
            <div
              key={name}
              className="flex items-center gap-2 rounded-lg border border-border/60 px-3 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
              <span className="text-sm font-mono">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
