import { Container } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';

export function ContainerPage() {
  return (
    <div>
      <PageHeader
        title="Container"
        description="A responsive max-width container component for consistent content width across breakpoints. Includes automatic horizontal centering and padding."
        badge="Layout"
      />

      <ComponentPreview
        title="Default Centered Container"
        code={`<Container>
  <p>This content is centered and constrained to a max-width.</p>
</Container>`}
      >
        <Container className="bg-muted p-4 rounded-md">
          <p className="text-sm">This content is centered with max-width-lg (default) and horizontal padding.</p>
        </Container>
      </ComponentPreview>

      <ComponentPreview
        title="All Breakpoint Sizes"
        code={`<Container maxWidth="sm">Small (640px)</Container>
<Container maxWidth="md">Medium (768px)</Container>
<Container maxWidth="lg">Large (1024px) - default</Container>
<Container maxWidth="xl">Extra Large (1280px)</Container>
<Container maxWidth="2xl">2XL (1536px)</Container>
<Container maxWidth="full">Full Width</Container>`}
      >
        <div className="space-y-3">
          <Container maxWidth="sm" className="bg-muted p-3 rounded-md">
            <p className="text-xs">SM - max-w-screen-sm (640px)</p>
          </Container>
          <Container maxWidth="md" className="bg-muted p-3 rounded-md">
            <p className="text-xs">MD - max-w-screen-md (768px)</p>
          </Container>
          <Container maxWidth="lg" className="bg-muted p-3 rounded-md">
            <p className="text-xs">LG - max-w-screen-lg (1024px)</p>
          </Container>
          <Container maxWidth="xl" className="bg-muted p-3 rounded-md">
            <p className="text-xs">XL - max-w-screen-xl (1280px)</p>
          </Container>
          <Container maxWidth="2xl" className="bg-muted p-3 rounded-md">
            <p className="text-xs">2XL - max-w-screen-2xl (1536px)</p>
          </Container>
          <Container maxWidth="full" className="bg-muted p-3 rounded-md">
            <p className="text-xs">FULL - max-w-full (no constraint)</p>
          </Container>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Without Centering"
        code={`<Container centered={false}>
  <p>This container is not horizontally centered.</p>
</Container>`}
      >
        <Container centered={false} className="bg-muted p-4 rounded-md">
          <p className="text-sm">Not centered - stays at the left edge with padding.</p>
        </Container>
      </ComponentPreview>

      <ComponentPreview
        title="Nested Containers"
        code={`<Container maxWidth="xl">
  <h2>Outer Container (XL)</h2>
  <Container maxWidth="md">
    <p>Inner Container (MD)</p>
  </Container>
</Container>`}
      >
        <Container maxWidth="xl" className="bg-muted p-4 rounded-md">
          <p className="text-sm font-medium mb-2">Outer Container (XL)</p>
          <Container maxWidth="md" className="bg-primary/10 p-3 rounded-md">
            <p className="text-xs">Inner Container (MD)</p>
          </Container>
        </Container>
      </ComponentPreview>

      <ComponentPreview
        title="Full Page Layout Example"
        code={`<div className="min-h-screen bg-background">
  <Container maxWidth="xl">
    <header className="py-6">
      <h1>My Application</h1>
    </header>
    <main className="py-8">
      <Container maxWidth="lg">
        <p>Main content area</p>
      </Container>
    </main>
  </Container>
</div>`}
      >
        <div className="border border-border rounded-md overflow-hidden">
          <Container maxWidth="xl" className="bg-muted/50">
            <div className="py-4 border-b border-border">
              <p className="text-sm font-semibold">Header (XL Container)</p>
            </div>
            <div className="py-6">
              <Container maxWidth="lg" className="bg-background p-4 rounded-md">
                <p className="text-xs">Main Content (LG Container)</p>
              </Container>
            </div>
          </Container>
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          { name: 'maxWidth', type: '"sm" | "md" | "lg" | "xl" | "2xl" | "full"', default: '"lg"', description: 'Maximum width constraint using Tailwind screen breakpoints.' },
          { name: 'centered', type: 'boolean', default: 'true', description: 'Whether to horizontally center the container with mx-auto.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
          { name: 'children', type: 'ReactNode', required: true, description: 'Content to be contained.' },
        ]}
      />
    </div>
  );
}
