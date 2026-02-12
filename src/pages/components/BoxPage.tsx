import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { Box } from '@nicorp/nui';

export default function BoxPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Box</h1>
        <p className="text-xl text-muted-foreground">
          A universal container component that can be rendered as any HTML element using the "as" prop.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Basic Box"
          description="Default box renders as a div element"
          code={`<Box className="p-4 rounded-lg border bg-muted">
  <p>This is a box component.</p>
</Box>`}
        >
          <Box className="p-4 rounded-lg border bg-muted">
            <p>This is a box component.</p>
          </Box>
        </ComponentPreview>

        <ComponentPreview
          title="As Different Element"
          description="Use the 'as' prop to render as any HTML element"
          code={`<Box as="section" className="p-4 rounded-lg border">
  <h3 className="font-semibold mb-2">Section Box</h3>
  <p className="text-sm text-muted-foreground">
    Rendered as a semantic section element.
  </p>
</Box>

<Box as="article" className="p-4 rounded-lg border">
  <h3 className="font-semibold mb-2">Article Box</h3>
  <p className="text-sm text-muted-foreground">
    Rendered as a semantic article element.
  </p>
</Box>`}
        >
          <div className="space-y-4">
            <Box as="section" className="p-4 rounded-lg border bg-muted/50">
              <h3 className="font-semibold mb-2">Section Box</h3>
              <p className="text-sm text-muted-foreground">
                Rendered as a semantic &lt;section&gt; element.
              </p>
            </Box>

            <Box as="article" className="p-4 rounded-lg border bg-muted/50">
              <h3 className="font-semibold mb-2">Article Box</h3>
              <p className="text-sm text-muted-foreground">
                Rendered as a semantic &lt;article&gt; element.
              </p>
            </Box>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Card Layout"
          description="Using Box as a flexible card container"
          code={`<div className="grid grid-cols-3 gap-4">
  <Box className="p-6 rounded-xl border bg-card">
    <h3 className="text-2xl font-bold mb-1">2.4K</h3>
    <p className="text-sm text-muted-foreground">Total Users</p>
  </Box>
  <Box className="p-6 rounded-xl border bg-card">
    <h3 className="text-2xl font-bold mb-1">1.8K</h3>
    <p className="text-sm text-muted-foreground">Active Sessions</p>
  </Box>
  <Box className="p-6 rounded-xl border bg-card">
    <h3 className="text-2xl font-bold mb-1">94%</h3>
    <p className="text-sm text-muted-foreground">Satisfaction</p>
  </Box>
</div>`}
        >
          <div className="grid grid-cols-3 gap-4">
            <Box className="p-6 rounded-xl border bg-card">
              <h3 className="text-2xl font-bold mb-1">2.4K</h3>
              <p className="text-sm text-muted-foreground">Total Users</p>
            </Box>
            <Box className="p-6 rounded-xl border bg-card">
              <h3 className="text-2xl font-bold mb-1">1.8K</h3>
              <p className="text-sm text-muted-foreground">Active Sessions</p>
            </Box>
            <Box className="p-6 rounded-xl border bg-card">
              <h3 className="text-2xl font-bold mb-1">94%</h3>
              <p className="text-sm text-muted-foreground">Satisfaction</p>
            </Box>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Spacing & Layout"
          description="Box with spacing utilities for layout control"
          code={`<Box className="space-y-4">
  <Box className="h-20 bg-primary rounded" />
  <Box className="h-20 bg-secondary rounded" />
  <Box className="h-20 bg-accent rounded" />
</Box>`}
        >
          <Box className="space-y-4">
            <Box className="h-20 bg-primary rounded" />
            <Box className="h-20 bg-secondary rounded" />
            <Box className="h-20 bg-accent rounded" />
          </Box>
        </ComponentPreview>

        <ComponentPreview
          title="Clickable Box"
          description="Box as a button element with click handler"
          code={`<Box
  as="button"
  onClick={() => alert('Box clicked!')}
  className="w-full p-4 rounded-lg border bg-muted hover:bg-accent transition-colors text-left"
>
  <h3 className="font-semibold mb-1">Click Me</h3>
  <p className="text-sm text-muted-foreground">
    This box is rendered as a button element.
  </p>
</Box>`}
        >
          <Box
            as="button"
            onClick={() => alert('Box clicked!')}
            className="w-full p-4 rounded-lg border bg-muted hover:bg-accent transition-colors text-left"
          >
            <h3 className="font-semibold mb-1">Click Me</h3>
            <p className="text-sm text-muted-foreground">
              This box is rendered as a button element.
            </p>
          </Box>
        </ComponentPreview>

        <ComponentPreview
          title="Link Box"
          description="Box as an anchor link"
          code={`<Box
  as="a"
  href="#"
  className="block p-4 rounded-lg border bg-muted hover:bg-accent transition-colors"
>
  <h3 className="font-semibold mb-1">Documentation →</h3>
  <p className="text-sm text-muted-foreground">
    Read the full documentation
  </p>
</Box>`}
        >
          <Box
            as="a"
            href="#"
            className="block p-4 rounded-lg border bg-muted hover:bg-accent transition-colors no-underline"
          >
            <h3 className="font-semibold mb-1">Documentation →</h3>
            <p className="text-sm text-muted-foreground">
              Read the full documentation
            </p>
          </Box>
        </ComponentPreview>

        <ComponentPreview
          title="Complex Layout"
          description="Box for building complex layouts"
          code={`<Box className="rounded-lg border overflow-hidden">
  <Box className="bg-gradient-to-r from-primary to-purple-600 p-6 text-primary-foreground">
    <h2 className="text-2xl font-bold mb-2">Premium Plan</h2>
    <p className="text-primary-foreground/80">Everything you need</p>
  </Box>
  <Box className="p-6 space-y-4">
    <Box className="flex items-center gap-3">
      <Box className="h-2 w-2 rounded-full bg-green-500" />
      <span className="text-sm">Unlimited projects</span>
    </Box>
    <Box className="flex items-center gap-3">
      <Box className="h-2 w-2 rounded-full bg-green-500" />
      <span className="text-sm">Priority support</span>
    </Box>
    <Box className="flex items-center gap-3">
      <Box className="h-2 w-2 rounded-full bg-green-500" />
      <span className="text-sm">Advanced analytics</span>
    </Box>
  </Box>
</Box>`}
        >
          <Box className="rounded-lg border overflow-hidden max-w-sm">
            <Box className="bg-gradient-to-r from-primary to-purple-600 p-6 text-primary-foreground">
              <h2 className="text-2xl font-bold mb-2">Premium Plan</h2>
              <p className="text-primary-foreground/80">Everything you need</p>
            </Box>
            <Box className="p-6 space-y-4">
              <Box className="flex items-center gap-3">
                <Box className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm">Unlimited projects</span>
              </Box>
              <Box className="flex items-center gap-3">
                <Box className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm">Priority support</span>
              </Box>
              <Box className="flex items-center gap-3">
                <Box className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm">Advanced analytics</span>
              </Box>
            </Box>
          </Box>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              {
                name: 'as',
                type: 'React.ElementType',
                default: '"div"',
                description: 'The element type to render (e.g., "div", "section", "article", "button", "a")',
              },
              {
                name: 'className',
                type: 'string',
                default: '-',
                description: 'Tailwind CSS classes for styling',
              },
              {
                name: 'children',
                type: 'ReactNode',
                default: '-',
                description: 'Content to render inside the box',
              },
            ]}
          />
          <p className="text-sm text-muted-foreground mt-4">
            Box accepts all standard HTML attributes for the element specified in the "as" prop.
          </p>
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Use Cases</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Polymorphic Component:</strong> Render as any HTML element while maintaining consistent styling
            </li>
            <li>
              <strong>Layout Building Block:</strong> Use for spacing, alignment, and grid layouts
            </li>
            <li>
              <strong>Semantic HTML:</strong> Create semantic markup by using proper HTML elements (section, article, nav, etc.)
            </li>
            <li>
              <strong>Interactive Elements:</strong> Render as buttons or links with proper semantics
            </li>
            <li>
              <strong>Styling Wrapper:</strong> Apply Tailwind classes without unnecessary div nesting
            </li>
            <li>
              <strong>Component Composition:</strong> Build complex components from simple Box primitives
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
