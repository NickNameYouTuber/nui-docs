import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { ChatQuestion } from '@nicorp/nui';

export default function ChatQuestionPage() {
  const [selected1, setSelected1] = useState<string | undefined>();
  const [selected2, setSelected2] = useState<string | undefined>();
  const [selected3, setSelected3] = useState<string | undefined>();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">ChatQuestion</h1>
        <p className="text-xl text-muted-foreground">
          Interactive question card for AI chat widgets. Renders a question with selectable options and optional free-text input. Fully null/undefined-safe.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Basic Question"
          description="AI asks a question with selectable options"
          code={`<ChatQuestion
  question="What kind of project are you building?"
  options={[
    { id: 'web', label: 'Web Application' },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'api', label: 'Backend API' },
    { id: 'cli', label: 'CLI Tool' },
  ]}
  selectedId={selected}
  onSelect={(id, label) => setSelected(id)}
/>`}
        >
          <div className="w-full max-w-md">
            <ChatQuestion
              question="What kind of project are you building?"
              options={[
                { id: 'web', label: 'Web Application' },
                { id: 'mobile', label: 'Mobile App' },
                { id: 'api', label: 'Backend API' },
                { id: 'cli', label: 'CLI Tool' },
              ]}
              selectedId={selected1}
              onSelect={(id) => setSelected1(id)}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With Descriptions"
          description="Options with additional description text"
          code={`<ChatQuestion
  question="Which database do you prefer?"
  options={[
    { id: 'postgres', label: 'PostgreSQL', description: 'Relational database with advanced features' },
    { id: 'mongo', label: 'MongoDB', description: 'Flexible document-based database' },
    { id: 'redis', label: 'Redis', description: 'In-memory key-value store' },
  ]}
  selectedId={selected}
  onSelect={(id) => setSelected(id)}
/>`}
        >
          <div className="w-full max-w-md">
            <ChatQuestion
              question="Which database do you prefer?"
              options={[
                { id: 'postgres', label: 'PostgreSQL', description: 'Relational database with advanced features' },
                { id: 'mongo', label: 'MongoDB', description: 'Flexible document-based database' },
                { id: 'redis', label: 'Redis', description: 'In-memory key-value store' },
              ]}
              selectedId={selected2}
              onSelect={(id) => setSelected2(id)}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Two Columns + Free Text"
          description="Grid layout with 2 columns and free-text input"
          code={`<ChatQuestion
  question="Select your preferred framework:"
  options={[
    { id: 'react', label: 'React' },
    { id: 'vue', label: 'Vue' },
    { id: 'svelte', label: 'Svelte' },
    { id: 'angular', label: 'Angular' },
  ]}
  columns={2}
  allowFreeText
  onFreeTextSubmit={(text) => console.log(text)}
/>`}
        >
          <div className="w-full max-w-md">
            <ChatQuestion
              question="Select your preferred framework:"
              options={[
                { id: 'react', label: 'React' },
                { id: 'vue', label: 'Vue' },
                { id: 'svelte', label: 'Svelte' },
                { id: 'angular', label: 'Angular' },
              ]}
              columns={2}
              allowFreeText
              selectedId={selected3}
              onSelect={(id) => setSelected3(id)}
              onFreeTextSubmit={(text) => console.log('Free text:', text)}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Disabled State"
          description="Question with interaction disabled"
          code={`<ChatQuestion
  question="This question is disabled"
  options={[
    { id: 'a', label: 'Option A' },
    { id: 'b', label: 'Option B' },
  ]}
  disabled
/>`}
        >
          <div className="w-full max-w-md">
            <ChatQuestion
              question="This question is disabled"
              options={[
                { id: 'a', label: 'Option A' },
                { id: 'b', label: 'Option B' },
              ]}
              disabled
            />
          </div>
        </ComponentPreview>

        <PropsTable
          props={[
            { name: 'id', type: 'string', description: 'Unique identifier for the question widget' },
            { name: 'question', type: 'string', description: 'The question text displayed in the header' },
            { name: 'options', type: 'ChatQuestionOption[]', description: 'Array of { id, label, description? } selectable options' },
            { name: 'onSelect', type: '(optionId: string, label: string) => void', description: 'Called when user picks an option' },
            { name: 'selectedId', type: 'string | null', description: 'ID of the currently selected option (for persistence)' },
            { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable all interaction' },
            { name: 'allowFreeText', type: 'boolean', default: 'false', description: 'Show a free-text input field' },
            { name: 'onFreeTextSubmit', type: '(text: string) => void', description: 'Called when user submits free-text answer' },
            { name: 'columns', type: '1 | 2', default: '1', description: 'Grid columns for options layout' },
          ]}
        />
      </div>
    </div>
  );
}
