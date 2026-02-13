import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatBubbleTimestamp,
} from '@nicorp/nui';
import { useDocLang } from '../../i18n';

export default function ChatBubblePage() {
  const { t } = useDocLang();
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">ChatBubble</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.chatBubble.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Received Message"
          description="A message received from another user or AI"
          code={`<ChatBubble variant="received">
  <ChatBubbleAvatar fallback="AI" />
  <div>
    <ChatBubbleMessage variant="received">
      Hello! I'm an AI assistant. How can I help you today?
    </ChatBubbleMessage>
    <ChatBubbleTimestamp>10:32 AM</ChatBubbleTimestamp>
  </div>
</ChatBubble>`}
        >
          <div className="space-y-4">
            <ChatBubble variant="received">
              <ChatBubbleAvatar fallback="AI" />
              <div>
                <ChatBubbleMessage variant="received">
                  Hello! I'm an AI assistant. How can I help you today?
                </ChatBubbleMessage>
                <ChatBubbleTimestamp>10:32 AM</ChatBubbleTimestamp>
              </div>
            </ChatBubble>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Sent Message"
          description="A message sent by the current user"
          code={`<ChatBubble variant="sent">
  <div>
    <ChatBubbleMessage variant="sent">
      Can you explain how React hooks work?
    </ChatBubbleMessage>
    <ChatBubbleTimestamp className="text-right">10:33 AM</ChatBubbleTimestamp>
  </div>
  <ChatBubbleAvatar fallback="ME" />
</ChatBubble>`}
        >
          <div className="space-y-4">
            <ChatBubble variant="sent">
              <div>
                <ChatBubbleMessage variant="sent">
                  Can you explain how React hooks work?
                </ChatBubbleMessage>
                <ChatBubbleTimestamp className="text-right">10:33 AM</ChatBubbleTimestamp>
              </div>
              <ChatBubbleAvatar fallback="ME" />
            </ChatBubble>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Loading State"
          description="Typing indicator while waiting for a response"
          code={`<ChatBubble variant="received">
  <ChatBubbleAvatar fallback="AI" />
  <ChatBubbleMessage variant="received" isLoading />
</ChatBubble>`}
        >
          <ChatBubble variant="received">
            <ChatBubbleAvatar fallback="AI" />
            <ChatBubbleMessage variant="received" isLoading />
          </ChatBubble>
        </ComponentPreview>

        <ComponentPreview
          title="Conversation"
          description="Full chat exchange"
          code={`<ChatBubble variant="received">
  <ChatBubbleAvatar fallback="AI" />
  <ChatBubbleMessage variant="received">
    How can I help you?
  </ChatBubbleMessage>
</ChatBubble>

<ChatBubble variant="sent">
  <ChatBubbleMessage variant="sent">
    What is TypeScript?
  </ChatBubbleMessage>
</ChatBubble>

<ChatBubble variant="received">
  <ChatBubbleAvatar fallback="AI" />
  <ChatBubbleMessage variant="received">
    TypeScript is a strongly typed superset of JavaScript...
  </ChatBubbleMessage>
</ChatBubble>`}
        >
          <div className="space-y-4">
            <ChatBubble variant="received">
              <ChatBubbleAvatar fallback="AI" />
              <ChatBubbleMessage variant="received">
                How can I help you?
              </ChatBubbleMessage>
            </ChatBubble>
            <ChatBubble variant="sent">
              <ChatBubbleMessage variant="sent">
                What is TypeScript?
              </ChatBubbleMessage>
            </ChatBubble>
            <ChatBubble variant="received">
              <ChatBubbleAvatar fallback="AI" />
              <ChatBubbleMessage variant="received">
                TypeScript is a strongly typed programming language that builds on JavaScript. It adds optional static typing, classes, and interfaces, making it easier to write and maintain large-scale applications.
              </ChatBubbleMessage>
            </ChatBubble>
          </div>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">ChatBubbleMessage Props</h2>
          <PropsTable
            props={[
              { name: 'variant', type: '"sent" | "received"', default: '"received"', description: 'Visual style — left-aligned muted or right-aligned primary' },
              { name: 'isLoading', type: 'boolean', default: 'false', description: 'Show typing indicator dots instead of children' },
            ]}
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">ChatBubbleAvatar Props</h2>
          <PropsTable
            props={[
              { name: 'src', type: 'string', default: '-', description: 'Image URL for the avatar' },
              { name: 'fallback', type: 'string', default: '"?"', description: 'Text fallback when no image' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
