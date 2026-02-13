import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { ChatFollowUp } from '@nicorp/nui';

export default function ChatFollowUpPage() {
  const [selected1, setSelected1] = useState<string | undefined>();
  const [selected2, setSelected2] = useState<string | undefined>();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">ChatFollowUp</h1>
        <p className="text-xl text-muted-foreground">
          AI follow-up questions with clickable answer options, rendered inside a chat bubble. Supports free-text answers.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Basic Follow-Up"
          description="AI asks a question with predefined answer options"
          code={`<ChatFollowUp
  question="What kind of project are you building?"
  options={[
    { id: 'web', label: 'Web Application' },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'api', label: 'Backend API' },
    { id: 'cli', label: 'CLI Tool' },
  ]}
  onSelect={(id, label) => setSelected(id)}
  selected={selected}
/>`}
        >
          <ChatFollowUp
            question="What kind of project are you building?"
            options={[
              { id: 'web', label: 'Web Application' },
              { id: 'mobile', label: 'Mobile App' },
              { id: 'api', label: 'Backend API' },
              { id: 'cli', label: 'CLI Tool' },
            ]}
            onSelect={(id) => setSelected1(id)}
            selected={selected1}
          />
        </ComponentPreview>

        <ComponentPreview
          title="With Free Text"
          description="Allow custom answer in addition to predefined options"
          code={`<ChatFollowUp
  question="Which database do you prefer?"
  options={[
    { id: 'postgres', label: 'PostgreSQL', description: 'Relational database' },
    { id: 'mongo', label: 'MongoDB', description: 'Document database' },
    { id: 'redis', label: 'Redis', description: 'In-memory store' },
  ]}
  allowFreeText
  columns={1}
  selected={selected}
  onSelect={(id) => setSelected(id)}
/>`}
        >
          <ChatFollowUp
            question="Which database do you prefer?"
            options={[
              { id: 'postgres', label: 'PostgreSQL', description: 'Relational database' },
              { id: 'mongo', label: 'MongoDB', description: 'Document database' },
              { id: 'redis', label: 'Redis', description: 'In-memory store' },
            ]}
            allowFreeText
            columns={1}
            selected={selected2}
            onSelect={(id) => setSelected2(id)}
          />
        </ComponentPreview>

        <ComponentPreview
          title="Two Columns"
          description="Display options in a 2-column grid"
          code={`<ChatFollowUp
  question="Select your preferred framework:"
  options={[
    { id: 'react', label: 'React' },
    { id: 'vue', label: 'Vue' },
    { id: 'svelte', label: 'Svelte' },
    { id: 'angular', label: 'Angular' },
  ]}
  columns={2}
/>`}
        >
          <ChatFollowUp
            question="Select your preferred framework:"
            options={[
              { id: 'react', label: 'React' },
              { id: 'vue', label: 'Vue' },
              { id: 'svelte', label: 'Svelte' },
              { id: 'angular', label: 'Angular' },
            ]}
            columns={2}
          />
        </ComponentPreview>

        <PropsTable
          props={[
            { name: 'question', type: 'string', description: 'The question AI is asking' },
            { name: 'options', type: 'FollowUpOption[]', description: 'Answer options' },
            { name: 'onSelect', type: '(id: string, label: string) => void', description: 'Called when user picks an option' },
            { name: 'selected', type: 'string', description: 'Selected option id (disables further selection)' },
            { name: 'allowFreeText', type: 'boolean', default: 'false', description: 'Allow custom text answer' },
            { name: 'onFreeTextSubmit', type: '(text: string) => void', description: 'Called on free-text submit' },
            { name: 'columns', type: '1 | 2', default: '1', description: 'Grid columns for options' },
          ]}
        />
      </div>
    </div>
  );
}
