import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { ModelSelector } from '@nicorp/nui';
import type { ModelOption } from '@nicorp/nui';

const models: ModelOption[] = [
  { id: 'gpt-4o', name: 'GPT-4o', provider: 'OpenAI', icon: '🟢', description: 'Most capable OpenAI model', badges: ['Fast', 'Vision', '128K'] },
  { id: 'claude-4', name: 'Claude 4 Opus', provider: 'Anthropic', icon: '🟣', description: 'Advanced reasoning and coding', badges: ['Reasoning', '200K'] },
  { id: 'gemini-2', name: 'Gemini 2.0', provider: 'Google', icon: '🔵', description: 'Multimodal AI model', badges: ['Vision', '1M'] },
  { id: 'llama-4', name: 'Llama 4', provider: 'Meta', icon: '🟠', description: 'Open source model', badges: ['Open', '128K'] },
  { id: 'gpt-3.5', name: 'GPT-3.5 Turbo', provider: 'OpenAI', icon: '🟢', description: 'Fast and affordable', badges: ['Fast', '16K'], disabled: true },
];

export default function ModelSelectorPage() {
  const [selected, setSelected] = useState('gpt-4o');
  const [compact, setCompact] = useState('gpt-4o');

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">ModelSelector</h1>
        <p className="text-xl text-muted-foreground">
          Dropdown selector for choosing AI models with icons, providers, descriptions, and capability badges.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Default"
          description="Full model selector with search, badges, and descriptions"
          code={`const models = [
  { id: 'gpt-4o', name: 'GPT-4o', provider: 'OpenAI', icon: '🟢', badges: ['Fast', 'Vision'] },
  { id: 'claude-4', name: 'Claude 4 Opus', provider: 'Anthropic', icon: '🟣', badges: ['Reasoning'] },
];

<ModelSelector models={models} value={selected} onChange={setSelected} />`}
        >
          <ModelSelector models={models} value={selected} onChange={setSelected} />
        </ComponentPreview>

        <ComponentPreview
          title="Compact Mode"
          description="Shorter trigger showing only icon and name"
          code={`<ModelSelector models={models} value={compact} onChange={setCompact} compact />`}
        >
          <ModelSelector models={models} value={compact} onChange={setCompact} compact />
        </ComponentPreview>

        <ComponentPreview
          title="With Placeholder"
          description="No model selected initially"
          code={`<ModelSelector models={models} placeholder="Choose a model..." />`}
        >
          <ModelSelector models={models} placeholder="Choose a model..." />
        </ComponentPreview>

        <PropsTable
          props={[
            { name: 'models', type: 'ModelOption[]', description: 'Available models to choose from' },
            { name: 'value', type: 'string', description: 'Currently selected model id' },
            { name: 'onChange', type: '(modelId: string) => void', description: 'Called when user selects a model' },
            { name: 'placeholder', type: 'string', default: '"Select model"', description: 'Text when nothing selected' },
            { name: 'compact', type: 'boolean', default: 'false', description: 'Compact trigger showing only icon + name' },
          ]}
        />

        <div className="rounded-xl border border-border p-6">
          <h3 className="text-lg font-semibold mb-3">ModelOption</h3>
          <PropsTable
            props={[
              { name: 'id', type: 'string', description: 'Unique model identifier' },
              { name: 'name', type: 'string', description: 'Display name' },
              { name: 'provider', type: 'string', description: 'Provider name (e.g. OpenAI)' },
              { name: 'icon', type: 'string', description: 'Emoji or icon text' },
              { name: 'description', type: 'string', description: 'Short description' },
              { name: 'badges', type: 'string[]', description: 'Capability badges' },
              { name: 'disabled', type: 'boolean', description: 'Mark model as unavailable' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
