import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { ChatModeSelector } from '@nicorp/nui';
import { useDocLang } from '../../i18n';

const modes = [
  { id: 'creative', label: 'Creative', icon: '✨', description: 'More creative and imaginative responses' },
  { id: 'balanced', label: 'Balanced', icon: '⚖️', description: 'Balanced between creativity and precision' },
  { id: 'precise', label: 'Precise', icon: '🎯', description: 'More factual and precise responses' },
];

const codeModes = [
  { id: 'chat', label: 'Chat' },
  { id: 'code', label: 'Code' },
  { id: 'search', label: 'Search' },
  { id: 'image', label: 'Image' },
];

export default function ChatModeSelectorPage() {
  const [mode, setMode] = useState('balanced');
  const [codeMode, setCodeMode] = useState('chat');

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">ChatModeSelector</h1>
        <p className="text-xl text-muted-foreground">
          Segmented control for toggling between AI conversation modes like Creative, Balanced, and Precise.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="With Icons"
          description="Mode selector with emoji icons and tooltips"
          code={`<ChatModeSelector
  modes={[
    { id: 'creative', label: 'Creative', icon: '✨' },
    { id: 'balanced', label: 'Balanced', icon: '⚖️' },
    { id: 'precise', label: 'Precise', icon: '🎯' },
  ]}
  value={mode}
  onChange={setMode}
/>`}
        >
          <ChatModeSelector modes={modes} value={mode} onChange={setMode} />
        </ComponentPreview>

        <ComponentPreview
          title="Text Only"
          description="Simple text-only mode selector"
          code={`<ChatModeSelector modes={codeModes} value={codeMode} onChange={setCodeMode} />`}
        >
          <ChatModeSelector modes={codeModes} value={codeMode} onChange={setCodeMode} />
        </ComponentPreview>

        <ComponentPreview
          title="Small Size"
          description="Compact version for tight UI areas"
          code={`<ChatModeSelector modes={modes} value={mode} onChange={setMode} size="sm" />`}
        >
          <ChatModeSelector modes={modes} value={mode} onChange={setMode} size="sm" />
        </ComponentPreview>

        <PropsTable
          props={[
            { name: 'modes', type: 'ModeOption[]', description: 'Available modes' },
            { name: 'value', type: 'string', description: 'Currently active mode id' },
            { name: 'onChange', type: '(modeId: string) => void', description: 'Called when user switches mode' },
            { name: 'size', type: '"sm" | "default"', default: '"default"', description: 'Visual size' },
          ]}
        />
      </div>
    </div>
  );
}
