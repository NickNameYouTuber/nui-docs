import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { ScrollArea, Badge } from '@nicorp/nui';

export default function ScrollAreaPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">ScrollArea</h1>
        <p className="text-xl text-muted-foreground">
          A custom scrollable area with styled scrollbars built on Radix UI primitives.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Vertical Scroll"
          description="Simple vertical scrolling area with custom scrollbar"
          code={`<ScrollArea className="h-72 w-full rounded-md border">
  <div className="p-4">
    {Array.from({ length: 50 }).map((_, i) => (
      <div key={i} className="text-sm">Item {i + 1}</div>
    ))}
  </div>
</ScrollArea>`}
        >
          <ScrollArea className="h-72 w-full rounded-md border">
            <div className="p-4">
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="text-sm py-1">
                  Item {i + 1}
                </div>
              ))}
            </div>
          </ScrollArea>
        </ComponentPreview>

        <ComponentPreview
          title="Horizontal Scroll"
          description="Horizontal scrolling area for wide content"
          code={`<ScrollArea className="w-full rounded-md border">
  <div className="flex w-max gap-4 p-4">
    {Array.from({ length: 20 }).map((_, i) => (
      <div key={i} className="h-32 w-32 rounded-lg border bg-muted flex items-center justify-center">
        Card {i + 1}
      </div>
    ))}
  </div>
</ScrollArea>`}
        >
          <ScrollArea className="w-full rounded-md border">
            <div className="flex w-max gap-4 p-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="h-32 w-32 rounded-lg border bg-muted flex items-center justify-center shrink-0">
                  <span className="text-sm font-medium">Card {i + 1}</span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </ComponentPreview>

        <ComponentPreview
          title="Tags List"
          description="Practical example with scrollable tag list"
          code={`const tags = ['React', 'TypeScript', 'Tailwind', 'Next.js', ...];

<ScrollArea className="h-48 w-full rounded-md border">
  <div className="p-4 space-y-2">
    {tags.map((tag) => (
      <Badge key={tag} variant="secondary">{tag}</Badge>
    ))}
  </div>
</ScrollArea>`}
        >
          <ScrollArea className="h-48 w-full rounded-md border">
            <div className="p-4 flex flex-wrap gap-2">
              {[
                'React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite', 'Node.js',
                'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST API', 'Docker',
                'Kubernetes', 'AWS', 'Azure', 'Git', 'GitHub', 'CI/CD', 'Jest',
                'Vitest', 'Playwright', 'Storybook', 'Figma', 'Vercel'
              ].map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </ScrollArea>
        </ComponentPreview>

        <ComponentPreview
          title="Content Preview"
          description="Scrollable text content with limited height"
          code={`<ScrollArea className="h-64 w-full rounded-md border">
  <div className="p-4 text-sm">
    <h3 className="font-semibold mb-2">Article Title</h3>
    <p className="text-muted-foreground">
      Lorem ipsum dolor sit amet...
    </p>
  </div>
</ScrollArea>`}
        >
          <ScrollArea className="h-64 w-full rounded-md border">
            <div className="p-4 text-sm">
              <h3 className="font-semibold mb-2">Understanding React Server Components</h3>
              <p className="text-muted-foreground leading-relaxed">
                React Server Components represent a new paradigm in React development that allows you to build components that render on the server. This approach offers several benefits including improved performance, reduced bundle sizes, and better SEO.
                <br /><br />
                Server Components can fetch data directly without the need for additional API routes or client-side data fetching logic. This simplifies the data flow in your application and reduces the amount of code shipped to the client.
                <br /><br />
                One of the key advantages is the ability to access backend resources directly from your components. You can query databases, read from the filesystem, or call internal APIs without exposing these operations to the client.
                <br /><br />
                Server Components work seamlessly with Client Components, allowing you to mix both types in your application. This hybrid approach lets you optimize each part of your UI for the best user experience.
                <br /><br />
                The mental model is similar to traditional server-side rendering, but with the composability and flexibility of React components. You can pass server-rendered components as props to client components, creating powerful composition patterns.
              </p>
            </div>
          </ScrollArea>
        </ComponentPreview>

        <ComponentPreview
          title="Chat Messages"
          description="Scrollable message list example"
          code={`<ScrollArea className="h-96 w-full rounded-md border">
  <div className="p-4 space-y-4">
    {messages.map((msg) => (
      <div key={msg.id} className="flex gap-3">
        <div className="h-8 w-8 rounded-full bg-primary" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm">{msg.user}</span>
            <span className="text-xs text-muted-foreground">{msg.time}</span>
          </div>
          <p className="text-sm text-muted-foreground">{msg.text}</p>
        </div>
      </div>
    ))}
  </div>
</ScrollArea>`}
        >
          <ScrollArea className="h-96 w-full rounded-md border bg-muted/30">
            <div className="p-4 space-y-4">
              {[
                { id: 1, user: 'Alice', time: '10:32 AM', text: 'Hey team! How is everyone doing today?' },
                { id: 2, user: 'Bob', time: '10:35 AM', text: 'Doing great! Just finished the new feature.' },
                { id: 3, user: 'Carol', time: '10:37 AM', text: 'Awesome! Can you share a quick demo?' },
                { id: 4, user: 'Bob', time: '10:40 AM', text: 'Sure! Let me record a quick video.' },
                { id: 5, user: 'Alice', time: '10:42 AM', text: 'Looking forward to it!' },
                { id: 6, user: 'David', time: '10:45 AM', text: 'I have some feedback on the design mockups.' },
                { id: 7, user: 'Carol', time: '10:47 AM', text: 'Please share! We can discuss in the meeting.' },
                { id: 8, user: 'Alice', time: '10:50 AM', text: 'Meeting starts in 10 minutes everyone!' },
              ].map((msg) => (
                <div key={msg.id} className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-xs text-primary-foreground font-semibold">
                    {msg.user[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">{msg.user}</span>
                      <span className="text-xs text-muted-foreground">{msg.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              {
                name: 'className',
                type: 'string',
                default: '-',
                description: 'Additional CSS classes for the container',
              },
              {
                name: 'children',
                type: 'ReactNode',
                default: '-',
                description: 'Content to be scrolled',
              },
            ]}
          />
          <p className="text-sm text-muted-foreground mt-4">
            ScrollArea extends all Radix UI ScrollArea.Root props. See{' '}
            <a href="https://www.radix-ui.com/docs/primitives/components/scroll-area" target="_blank" rel="noopener noreferrer" className="underline">
              Radix UI documentation
            </a>
            {' '}for complete API reference.
          </p>
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Custom Scrollbars:</strong> Styled scrollbars that match your design system
            </li>
            <li>
              <strong>Smooth Scrolling:</strong> Optimized scroll performance with Radix UI primitives
            </li>
            <li>
              <strong>Both Orientations:</strong> Supports both vertical and horizontal scrolling
            </li>
            <li>
              <strong>Touch Support:</strong> Works seamlessly on touch devices
            </li>
            <li>
              <strong>Accessible:</strong> Fully accessible with keyboard navigation support
            </li>
            <li>
              <strong>Auto-hiding:</strong> Scrollbars can be configured to auto-hide when not in use
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
