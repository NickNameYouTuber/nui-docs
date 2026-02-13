import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { ChatInput } from '@nicorp/nui';

export default function ChatInputPage() {
  const [sentMessages, setSentMessages] = useState<string[]>([]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">ChatInput</h1>
        <p className="text-xl text-muted-foreground">
          Auto-resizing textarea with send button for chat and AI interfaces. Supports Enter to send and Shift+Enter for new lines.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Basic Chat Input"
          description="Type and press Enter to send"
          code={`<ChatInput
  onSend={(msg) => console.log('Sent:', msg)}
  placeholder="Type a message..."
/>`}
        >
          <div className="max-w-md mx-auto space-y-3">
            <ChatInput
              onSend={(msg) => setSentMessages((prev) => [...prev, msg])}
              placeholder="Type a message..."
            />
            {sentMessages.length > 0 && (
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Sent messages:</p>
                {sentMessages.map((msg, i) => (
                  <div key={i} className="text-sm bg-muted rounded-md px-3 py-1.5">{msg}</div>
                ))}
              </div>
            )}
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With Attach Button"
          description="Show an attachment button alongside the input"
          code={`<ChatInput showAttach placeholder="Message or attach a file..." />`}
        >
          <div className="max-w-md mx-auto">
            <ChatInput showAttach placeholder="Message or attach a file..." />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Loading State"
          description="Disable input while waiting for a response"
          code={`<ChatInput isLoading placeholder="Waiting for response..." />`}
        >
          <div className="max-w-md mx-auto">
            <ChatInput isLoading placeholder="Waiting for response..." />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Disabled"
          description="Fully disabled input"
          code={`<ChatInput disabled placeholder="Chat is disabled" />`}
        >
          <div className="max-w-md mx-auto">
            <ChatInput disabled placeholder="Chat is disabled" />
          </div>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              { name: 'onSend', type: '(message: string) => void', default: '-', description: 'Callback when user sends a message' },
              { name: 'placeholder', type: 'string', default: '"Type a message..."', description: 'Input placeholder text' },
              { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the input entirely' },
              { name: 'isLoading', type: 'boolean', default: 'false', description: 'Show loading spinner on send button and disable input' },
              { name: 'showAttach', type: 'boolean', default: 'false', description: 'Show attach file button' },
            ]}
          />
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Keyboard Shortcuts</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li><strong>Enter:</strong> Send message</li>
            <li><strong>Shift + Enter:</strong> New line</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
