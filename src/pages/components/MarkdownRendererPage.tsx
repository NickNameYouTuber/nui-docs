import { useState, useEffect } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { MarkdownRenderer } from '@nicorp/nui';
import { useDocLang } from '../../i18n';

const basicMarkdown = `# Hello World

This is a **bold** statement and this is *italic*.

Here is some \`inline code\` in a sentence.

## Features

- First item
- Second item with **bold**
- Third item with [a link](https://example.com)

## Code Example

\`\`\`typescript
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
\`\`\`

> This is a blockquote with some *wisdom*.

---

1. First step
2. Second step
3. Third step`;

const streamingDemo = `## Streaming Response

React Server Components represent a **new paradigm** in React development.

Key benefits:
- Improved *performance*
- Reduced bundle sizes
- Better \`SSR\` integration

\`\`\`tsx
async function Page() {
  const data = await fetchData();
  return <Component data={data} />;
}
\`\`\`

> Server Components work seamlessly with Client Components.`;

export default function MarkdownRendererPage() {  const { t } = useDocLang();  const [streamText, setStreamText] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);

  const startStreaming = () => {
    setStreamText('');
    setIsStreaming(true);
    let idx = 0;
    const interval = setInterval(() => {
      idx += 3;
      if (idx >= streamingDemo.length) {
        setStreamText(streamingDemo);
        setIsStreaming(false);
        clearInterval(interval);
      } else {
        setStreamText(streamingDemo.slice(0, idx));
      }
    }, 16);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">MarkdownRenderer</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.markdownRenderer.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.markdownRenderer.preview1Title')}
          description={t('pages.markdownRenderer.preview1Desc')}
          code={`<MarkdownRenderer content={markdownString} />`}
        >
          <div className="rounded-lg border p-6 bg-card">
            <MarkdownRenderer content={basicMarkdown} />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.markdownRenderer.preview2Title')}
          description={t('pages.markdownRenderer.preview2Desc')}
          code={`<MarkdownRenderer content={partialText} streaming />`}
        >
          <div className="space-y-3">
            <button
              onClick={startStreaming}
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-colors"
            >
              {isStreaming ? 'Streaming...' : 'Start Streaming Demo'}
            </button>
            <div className="rounded-lg border p-6 bg-card min-h-[200px]">
              {streamText ? (
                <MarkdownRenderer content={streamText} streaming={isStreaming} />
              ) : (
                <p className="text-muted-foreground text-sm">Click the button above to start.</p>
              )}
            </div>
          </div>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              { name: 'content', type: 'string', default: '-', description: 'Raw Markdown string to render (required)' },
              { name: 'streaming', type: 'boolean', default: 'false', description: 'Streaming mode — avoids final trim for partial content' },
              { name: 'className', type: 'string', default: '-', description: 'Additional CSS classes for the root div' },
            ]}
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Supported Syntax</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {[
              '# Headings (h1-h6)',
              '**Bold**',
              '*Italic*',
              '`Inline code`',
              '```Code blocks```',
              '- Unordered lists',
              '1. Ordered lists',
              '[Links](url)',
              '> Blockquotes',
              '--- Horizontal rules',
            ].map((s) => (
              <code key={s} className="px-2 py-1 bg-muted rounded">{s}</code>
            ))}
          </div>
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li><strong>Zero Dependencies:</strong> Pure regex-based parser, no external libraries</li>
            <li><strong>Streaming Support:</strong> Render partial Markdown without layout shift</li>
            <li><strong>Theme-Aware:</strong> Code blocks use NUI's CSS variable system</li>
            <li><strong>AI-Ready:</strong> Designed for rendering LLM streaming responses</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
