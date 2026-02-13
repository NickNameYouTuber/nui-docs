import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { AILoading } from '@nicorp/nui';

export default function AILoadingPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">AILoading</h1>
        <p className="text-xl text-muted-foreground">
          Animated loading indicators for AI thinking / typing states.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Dots"
          description="Bouncing dots — default typing indicator"
          code={`<AILoading />`}
        >
          <AILoading />
        </ComponentPreview>

        <ComponentPreview
          title="Text Variant"
          description="Spinner with pulsing text"
          code={`<AILoading variant="text" />`}
        >
          <AILoading variant="text" />
        </ComponentPreview>

        <ComponentPreview
          title="Custom Text"
          description="Override the thinking text"
          code={`<AILoading variant="text" text="Generating" />`}
        >
          <AILoading variant="text" text="Generating" />
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              { name: 'variant', type: '"dots" | "text"', default: '"dots"', description: 'Visual style of the indicator' },
              { name: 'text', type: 'string', default: '"Thinking"', description: 'Text shown in the "text" variant' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
