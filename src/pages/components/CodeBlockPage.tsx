import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { CodeBlock } from '@nicorp/nui';

export default function CodeBlockPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">CodeBlock</h1>
        <p className="text-xl text-muted-foreground">
          Syntax-highlighted code blocks with optional line numbers.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Basic Code Block"
          description="Simple TypeScript code display"
          code={`<CodeBlock
  language="tsx"
  code={\`const greeting = "Hello, World!";
console.log(greeting);\`}
/>`}
        >
          <CodeBlock
            language="tsx"
            code={`const greeting = "Hello, World!";
console.log(greeting);`}
          />
        </ComponentPreview>

        <ComponentPreview
          title="With Line Numbers"
          description="Display line numbers for reference"
          code={`<CodeBlock
  language="tsx"
  showLineNumbers
  code={\`function calculateSum(a: number, b: number): number {
  return a + b;
}

const result = calculateSum(10, 20);
console.log(result); // 30\`}
/>`}
        >
          <CodeBlock
            language="tsx"
            showLineNumbers
            code={`function calculateSum(a: number, b: number): number {
  return a + b;
}

const result = calculateSum(10, 20);
console.log(result); // 30`}
          />
        </ComponentPreview>

        <ComponentPreview
          title="JavaScript Example"
          description="JavaScript syntax highlighting"
          code={`<CodeBlock
  language="javascript"
  showLineNumbers
  code={\`async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}\`}
/>`}
        >
          <CodeBlock
            language="javascript"
            showLineNumbers
            code={`async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}`}
          />
        </ComponentPreview>

        <ComponentPreview
          title="CSS Example"
          description="CSS syntax highlighting"
          code={`<CodeBlock
  language="css"
  code={\`.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background: linear-gradient(to bottom, #000, #333);
}\`}
/>`}
        >
          <CodeBlock
            language="css"
            code={`.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background: linear-gradient(to bottom, #000, #333);
}`}
          />
        </ComponentPreview>

        <ComponentPreview
          title="React Component"
          description="Complete component example"
          code={`<CodeBlock
  language="tsx"
  showLineNumbers
  code={\`import { Button } from '@nicorp/nui';

export function LoginForm() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Login:', email);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button type="submit">Login</Button>
    </form>
  );
}\`}
/>`}
        >
          <CodeBlock
            language="tsx"
            showLineNumbers
            code={`import { Button } from '@nicorp/nui';

export function LoginForm() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Login:', email);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button type="submit">Login</Button>
    </form>
  );
}`}
          />
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              {
                name: 'code',
                type: 'string',
                default: '-',
                description: 'The code to display (required)',
              },
              {
                name: 'language',
                type: 'string',
                default: '"tsx"',
                description: 'Programming language for syntax highlighting',
              },
              {
                name: 'showLineNumbers',
                type: 'boolean',
                default: 'false',
                description: 'Display line numbers on the left',
              },
              {
                name: 'className',
                type: 'string',
                default: '-',
                description: 'Additional CSS classes',
              },
            ]}
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Supported Languages</h2>
          <p className="text-muted-foreground mb-4">
            Common languages supported via prism-react-renderer:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <code className="px-2 py-1 bg-muted rounded">tsx</code>
            <code className="px-2 py-1 bg-muted rounded">jsx</code>
            <code className="px-2 py-1 bg-muted rounded">typescript</code>
            <code className="px-2 py-1 bg-muted rounded">javascript</code>
            <code className="px-2 py-1 bg-muted rounded">python</code>
            <code className="px-2 py-1 bg-muted rounded">css</code>
            <code className="px-2 py-1 bg-muted rounded">html</code>
            <code className="px-2 py-1 bg-muted rounded">json</code>
            <code className="px-2 py-1 bg-muted rounded">bash</code>
            <code className="px-2 py-1 bg-muted rounded">sql</code>
            <code className="px-2 py-1 bg-muted rounded">markdown</code>
            <code className="px-2 py-1 bg-muted rounded">yaml</code>
          </div>
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Syntax Highlighting:</strong> Powered by prism-react-renderer with Night Owl theme
            </li>
            <li>
              <strong>Line Numbers:</strong> Optional numbered lines with right alignment
            </li>
            <li>
              <strong>Multi-Language:</strong> Supports tsx, jsx, javascript, python, css, and more
            </li>
            <li>
              <strong>Horizontal Scroll:</strong> overflow-x-auto for long code lines
            </li>
            <li>
              <strong>Copy-Friendly:</strong> Monospace font with clear formatting
            </li>
            <li>
              <strong>Dark Theme:</strong> Night Owl syntax theme for better readability
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-yellow-500/50 bg-yellow-500/10 p-4">
          <p className="text-sm">
            <strong>Note:</strong> This component requires{' '}
            <code className="bg-muted px-1 py-0.5 rounded">prism-react-renderer</code> as a dependency.
          </p>
        </div>
      </div>
    </div>
  );
}
