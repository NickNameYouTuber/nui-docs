import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { ChatMessage } from '@nicorp/nui';
import { useDocLang } from '../../i18n';

export default function ChatMessagePage() {
  const { t } = useDocLang();
  const [selectedFramework, setSelectedFramework] = useState<string | undefined>();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">ChatMessage</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.chatMessage.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="User Message"
          description="Simple outgoing message with status"
          code={`<ChatMessage
  variant="sent"
  content="Can you help me with React hooks?"
  timestamp="12:34"
  status="read"
/>`}
        >
          <ChatMessage
            variant="sent"
            content="Can you help me with React hooks?"
            timestamp="12:34"
            status="read"
          />
        </ComponentPreview>

        <ComponentPreview
          title="AI Response"
          description="Incoming message with actions"
          code={`<ChatMessage
  variant="received"
  avatarFallback="AI"
  content="React Hooks let you use state and other React features..."
  timestamp="12:35"
  actions={['copy', 'retry', 'like', 'dislike']}
/>`}
        >
          <ChatMessage
            variant="received"
            avatarFallback="AI"
            content="React Hooks let you use state and other React features without writing a class. The most common hooks are useState and useEffect."
            timestamp="12:35"
            actions={['copy', 'retry', 'like', 'dislike']}
          />
        </ComponentPreview>

        <ComponentPreview
          title="With Reasoning"
          description="AI message that shows its thinking process"
          code={`<ChatMessage
  variant="received"
  avatarFallback="AI"
  content="The answer is 42."
  reasoning={{
    content: "The user is referencing The Hitchhiker's Guide...",
    duration: 3
  }}
/>`}
        >
          <ChatMessage
            variant="received"
            avatarFallback="AI"
            content="The answer is 42. This is, of course, the Answer to the Ultimate Question of Life, the Universe, and Everything."
            timestamp="12:36"
            reasoning={{
              content: "The user seems to be referencing The Hitchhiker's Guide to the Galaxy by Douglas Adams. The famous answer given by the supercomputer Deep Thought is 42.",
              duration: 3,
            }}
            actions={['copy', 'like', 'dislike']}
          />
        </ComponentPreview>

        <ComponentPreview
          title="With Tool Calls"
          description="Message that shows tool execution"
          code={`<ChatMessage
  variant="received"
  content="Here's the weather for Moscow."
  toolCalls={[
    { name: "getWeather", args: { city: "Moscow" }, status: "success",
      result: "15°C" }
  ]}
/>`}
        >
          <ChatMessage
            variant="received"
            avatarFallback="AI"
            content="The current weather in Moscow is 15°C with partly cloudy skies."
            timestamp="12:37"
            toolCalls={[
              { name: 'getWeather', args: { city: 'Moscow', units: 'metric' }, status: 'success', result: 'Temperature: 15°C, Humidity: 65%' },
            ]}
          />
        </ComponentPreview>

        <ComponentPreview
          title="With Follow-up"
          description="AI asks a follow-up question with clickable choices"
          code={`const [selected, setSelected] = useState<string>();

<ChatMessage
  variant="received"
  avatarFallback="AI"
  content="I can help! What framework are you using?"
  followUp={{
    question: "Select your framework:",
    options: [
      { id: "react", label: "React" },
      { id: "vue", label: "Vue" },
      { id: "svelte", label: "Svelte" }
    ],
    selected,
  }}
  onFollowUpSelect={(id) => setSelected(id)}
/>`}
        >
          <ChatMessage
            variant="received"
            avatarFallback="AI"
            content="I can help with that! What framework are you using?"
            timestamp="12:38"
            followUp={{
              question: "Select your framework:",
              options: [
                { id: 'react', label: 'React' },
                { id: 'vue', label: 'Vue' },
                { id: 'svelte', label: 'Svelte' },
              ],
              selected: selectedFramework,
            }}
            onFollowUpSelect={(id) => setSelectedFramework(id)}
          />
        </ComponentPreview>

        <ComponentPreview
          title="Loading State"
          description="Skeleton dots indicating AI is typing"
          code={`<ChatMessage variant="received" isLoading />`}
        >
          <ChatMessage
            variant="received"
            avatarFallback="AI"
            isLoading
          />
        </ComponentPreview>

        <PropsTable
          props={[
            { name: 'variant', type: '"sent" | "received"', default: '"received"', description: 'Message direction' },
            { name: 'content', type: 'ReactNode', description: 'Message text content' },
            { name: 'avatar', type: 'string', description: 'Avatar image URL' },
            { name: 'avatarFallback', type: 'string', description: 'Avatar fallback text (e.g. initials)' },
            { name: 'timestamp', type: 'string', description: 'Time string displayed with message' },
            { name: 'isLoading', type: 'boolean', description: 'Show typing/loading skeleton' },
            { name: 'status', type: '"sending" | "sent" | "delivered" | "read" | "error"', description: 'Message delivery status' },
            { name: 'actions', type: 'MessageActionType[]', description: 'Action buttons to show (copy, retry, edit, like, dislike, share)' },
            { name: 'textContent', type: 'string', description: 'Raw text content used by the copy action' },
            { name: 'likeState', type: '"liked" | "disliked" | null', description: 'Current like/dislike state' },
            { name: 'reasoning', type: '{ content: string; isThinking?: boolean; duration?: number }', description: 'Reasoning/thinking block data' },
            { name: 'toolCalls', type: '{ name: string; args?: object; result?: string; status: string }[]', description: 'Tool call data' },
            { name: 'citations', type: 'Citation[]', description: 'Source citations' },
            { name: 'followUp', type: '{ question: string; options: FollowUpOption[]; selected?: string }', description: 'Follow-up question data' },
            { name: 'onFollowUpSelect', type: '(optionId: string, label: string) => void', description: 'Called when a follow-up option is clicked' },
            { name: 'onFollowUpFreeText', type: '(text: string) => void', description: 'Called when free-text follow-up is submitted' },
            { name: 'onCopy', type: '() => void', description: 'Copy action handler' },
            { name: 'onRetry', type: '() => void', description: 'Retry action handler' },
            { name: 'onEdit', type: '() => void', description: 'Edit action handler' },
            { name: 'onLike', type: '() => void', description: 'Like action handler' },
            { name: 'onDislike', type: '() => void', description: 'Dislike action handler' },
            { name: 'onShare', type: '() => void', description: 'Share action handler' },
          ]}
        />
      </div>
    </div>
  );
}
