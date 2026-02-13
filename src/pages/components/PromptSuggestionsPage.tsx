import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { PromptSuggestions } from '@nicorp/nui';

const suggestions = [
  { title: 'Write a function', description: 'Generate a TypeScript utility function', prompt: 'Write a TypeScript debounce function' },
  { title: 'Explain a concept', description: 'Get a simple explanation of a CS topic', prompt: 'Explain how garbage collection works' },
  { title: 'Review my code', description: 'Get feedback and suggestions', prompt: 'Review my React component for best practices' },
  { title: 'SQL query', description: 'Help me write a database query', prompt: 'Write a SQL query to find top customers' },
  { title: 'Design patterns', description: 'Learn about software patterns', prompt: 'Explain the Observer design pattern' },
  { title: 'Debug an error', description: 'Help troubleshoot a bug', prompt: 'Help me debug a TypeScript type error' },
];

export default function PromptSuggestionsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">PromptSuggestions</h1>
        <p className="text-xl text-muted-foreground">
          Grid of suggestion cards for AI chat interfaces. Users click a card to start a conversation with a pre-filled prompt.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Two Columns (default)"
          description="Grid of prompt suggestion cards"
          code={`<PromptSuggestions
  suggestions={[
    { title: 'Write a function', description: 'Generate a utility', prompt: '...' },
    { title: 'Explain a concept', description: 'Simple explanation', prompt: '...' },
    { title: 'Review my code', description: 'Feedback & suggestions', prompt: '...' },
    { title: 'SQL query', description: 'Database query help', prompt: '...' },
  ]}
  onSelect={(prompt) => console.log(prompt)}
/>`}
        >
          <PromptSuggestions
            suggestions={suggestions.slice(0, 4)}
            onSelect={(prompt) => alert('Selected: ' + prompt)}
          />
        </ComponentPreview>

        <ComponentPreview
          title="Three Columns"
          description="Wider layout with 3 columns"
          code={`<PromptSuggestions columns={3} suggestions={...} onSelect={...} />`}
        >
          <PromptSuggestions
            suggestions={suggestions}
            columns={3}
            onSelect={(prompt) => alert('Selected: ' + prompt)}
          />
        </ComponentPreview>

        <ComponentPreview
          title="Single Column"
          description="Stacked layout for narrow containers"
          code={`<PromptSuggestions columns={1} suggestions={...} onSelect={...} />`}
        >
          <div className="max-w-sm mx-auto">
            <PromptSuggestions
              suggestions={suggestions.slice(0, 3)}
              columns={1}
              onSelect={(prompt) => alert('Selected: ' + prompt)}
            />
          </div>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              { name: 'suggestions', type: 'PromptSuggestion[]', default: '-', description: 'Array of { title, description?, prompt }' },
              { name: 'onSelect', type: '(prompt: string) => void', default: '-', description: 'Callback when a suggestion card is clicked' },
              { name: 'columns', type: '1 | 2 | 3 | 4', default: '2', description: 'Number of grid columns' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
