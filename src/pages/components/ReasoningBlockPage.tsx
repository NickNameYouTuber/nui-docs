import { useState, useEffect } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { ReasoningBlock } from '@nicorp/nui';
import { useDocLang } from '../../i18n';

export default function ReasoningBlockPage() {
  const { t } = useDocLang();
  const [isThinking, setIsThinking] = useState(true);
  const [thinkContent, setThinkContent] = useState("Let me analyze this problem step by step...");

  useEffect(() => {
    if (!isThinking) return;
    const texts = [
      "Let me analyze this problem step by step...",
      "Let me analyze this problem step by step...\n\nFirst, I need to consider the data structure being used here.",
      "Let me analyze this problem step by step...\n\nFirst, I need to consider the data structure being used here.\n\nA hash map would give O(1) lookup time, which is what we need for this problem.",
      "Let me analyze this problem step by step...\n\nFirst, I need to consider the data structure being used here.\n\nA hash map would give O(1) lookup time, which is what we need for this problem.\n\nThe space complexity would be O(n), but that's acceptable for this use case.",
    ];
    let i = 0;
    const iv = setInterval(() => {
      i++;
      if (i < texts.length) {
        setThinkContent(texts[i]);
      } else {
        setIsThinking(false);
        clearInterval(iv);
      }
    }, 2000);
    return () => clearInterval(iv);
  }, [isThinking]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">ReasoningBlock</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.reasoningBlock.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.reasoningBlock.preview1Title')}
          description={t('pages.reasoningBlock.preview1Desc')}
          code={`<ReasoningBlock
  content="The user is asking about sorting algorithms. Given the constraints of O(n log n) time complexity, the best options are merge sort or quicksort."
  duration={12}
/>`}
        >
          <ReasoningBlock
            content="The user is asking about sorting algorithms. Given the constraints of O(n log n) time complexity, the best options are merge sort or quicksort. Merge sort is stable and has guaranteed O(n log n), while quicksort has better average-case performance but O(n²) worst case."
            duration={12}
          />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.reasoningBlock.preview2Title')}
          description={t('pages.reasoningBlock.preview2Desc')}
          code={`<ReasoningBlock
  content={thinkContent}
  isThinking={isThinking}
/>`}
        >
          <ReasoningBlock
            content={thinkContent}
            isThinking={isThinking}
          />
          <button
            onClick={() => { setIsThinking(true); setThinkContent("Let me analyze this problem step by step..."); }}
            className="mt-2 text-xs text-primary hover:underline"
          >
            ↻ Restart
          </button>
        </ComponentPreview>

        <ComponentPreview
          title="Default Open"
          description="Start with reasoning expanded"
          code={`<ReasoningBlock
  content="I need to understand the user's request..."
  duration={5}
  defaultOpen
/>`}
        >
          <ReasoningBlock
            content="I need to understand the user's request. They're asking about React hooks, specifically useEffect cleanup. The cleanup function runs before the component unmounts and before the effect runs again on re-render."
            duration={5}
            defaultOpen
          />
        </ComponentPreview>

        <ComponentPreview
          title="Custom Title"
          description="Override the default 'Reasoning' title"
          code={`<ReasoningBlock content="..." title="Chain of Thought" duration={8} />`}
        >
          <ReasoningBlock
            content="Step 1: Parse the input\nStep 2: Validate constraints\nStep 3: Apply the algorithm\nStep 4: Format output"
            title="Chain of Thought"
            duration={8}
          />
        </ComponentPreview>

        <PropsTable
          props={[
            { name: 'content', type: 'string', description: 'Reasoning/thinking content text' },
            { name: 'isThinking', type: 'boolean', default: 'false', description: 'Whether AI is still thinking (shows timer)' },
            { name: 'duration', type: 'number', description: 'Duration in seconds shown in header' },
            { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'Start in expanded state' },
            { name: 'title', type: 'string', default: '"Reasoning"', description: 'Custom header title' },
          ]}
        />
      </div>
    </div>
  );
}
