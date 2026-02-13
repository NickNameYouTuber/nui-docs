import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { StreamingText } from '@nicorp/nui';
import { useDocLang } from '../../i18n';

export default function StreamingTextPage() {
  const { t } = useDocLang();
  const [key, setKey] = useState(0);

  const sampleText = "React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small, isolated pieces of code called components.";
  const longText = "Artificial intelligence is transforming the way we build software. Large language models can understand and generate human language, code, and even images. This opens up entirely new possibilities for developer tools, creative applications, and productivity software.";

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">StreamingText</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.streamingText.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.streamingText.preview1Title')}
          description={t('pages.streamingText.preview1Desc')}
          code={`<StreamingText text="React is a JavaScript library..." />`}
        >
          <div className="text-sm">
            <StreamingText key={key} text={sampleText} />
          </div>
          <button
            onClick={() => setKey(k => k + 1)}
            className="mt-3 text-xs text-primary hover:underline"
          >
            ↻ Replay
          </button>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.streamingText.preview2Title')}
          description={t('pages.streamingText.preview2Desc')}
          code={`<StreamingText text="Fast typing..." speed={5} />
<StreamingText text="Slow typing..." speed={1} />`}
        >
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-xs text-muted-foreground mb-1 block">speed=5 (fast):</span>
              <StreamingText key={`fast-${key}`} text={longText} speed={5} />
            </div>
            <div>
              <span className="text-xs text-muted-foreground mb-1 block">speed=1 (slow):</span>
              <StreamingText key={`slow-${key}`} text={sampleText} speed={1} />
            </div>
          </div>
          <button
            onClick={() => setKey(k => k + 1)}
            className="mt-3 text-xs text-primary hover:underline"
          >
            ↻ Replay
          </button>
        </ComponentPreview>

        <ComponentPreview
          title="No Cursor"
          description="Hide the blinking cursor"
          code={`<StreamingText text="No cursor here..." cursor={false} />`}
        >
          <div className="text-sm">
            <StreamingText key={`nocur-${key}`} text={sampleText} cursor={false} />
          </div>
          <button
            onClick={() => setKey(k => k + 1)}
            className="mt-3 text-xs text-primary hover:underline"
          >
            ↻ Replay
          </button>
        </ComponentPreview>

        <ComponentPreview
          title="Immediate"
          description="Show full text instantly (skip animation)"
          code={`<StreamingText text="Shown instantly" immediate />`}
        >
          <div className="text-sm">
            <StreamingText text={sampleText} immediate />
          </div>
        </ComponentPreview>

        <PropsTable
          props={[
            { name: 'text', type: 'string', description: 'Full text to render' },
            { name: 'speed', type: 'number', default: '2', description: 'Characters per animation frame (~60fps)' },
            { name: 'onComplete', type: '() => void', description: 'Called when animation finishes' },
            { name: 'cursor', type: 'boolean', default: 'true', description: 'Show blinking cursor' },
            { name: 'immediate', type: 'boolean', default: 'false', description: 'Skip animation, show full text' },
          ]}
        />
      </div>
    </div>
  );
}
