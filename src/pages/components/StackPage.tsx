import { VStack, HStack } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';

export function StackPage() {
  return (
    <div>
      <PageHeader
        title="Stack (VStack / HStack)"
        description="Vertical and horizontal stack layouts with consistent spacing. Simplifies common flex column and row patterns."
        badge="Layout"
      />

      <ComponentPreview
        title="VStack - Vertical Stack"
        code={`<VStack spacing={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</VStack>`}
      >
        <VStack spacing={4} className="w-full max-w-sm">
          <div className="bg-primary/10 p-4 rounded w-full text-center text-sm">Item 1</div>
          <div className="bg-primary/10 p-4 rounded w-full text-center text-sm">Item 2</div>
          <div className="bg-primary/10 p-4 rounded w-full text-center text-sm">Item 3</div>
        </VStack>
      </ComponentPreview>

      <ComponentPreview
        title="HStack - Horizontal Stack"
        code={`<HStack spacing={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</HStack>`}
      >
        <HStack spacing={4}>
          <div className="bg-primary/10 p-4 rounded text-center text-sm">Item 1</div>
          <div className="bg-primary/10 p-4 rounded text-center text-sm">Item 2</div>
          <div className="bg-primary/10 p-4 rounded text-center text-sm">Item 3</div>
        </HStack>
      </ComponentPreview>

      <ComponentPreview
        title="Spacing Variations"
        code={`<VStack spacing={2}>Small spacing</VStack>
<VStack spacing={4}>Medium spacing (default)</VStack>
<VStack spacing={8}>Large spacing</VStack>
<VStack spacing="2rem">Custom spacing</VStack>`}
      >
        <div className="space-y-6 w-full max-w-sm">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Spacing 2 (0.5rem)</p>
            <VStack spacing={2}>
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-primary/10 p-2 rounded w-full text-xs text-center">
                  Item {i}
                </div>
              ))}
            </VStack>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Spacing 4 (1rem) - default</p>
            <VStack spacing={4}>
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-primary/10 p-2 rounded w-full text-xs text-center">
                  Item {i}
                </div>
              ))}
            </VStack>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Spacing 8 (2rem)</p>
            <VStack spacing={8}>
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-primary/10 p-2 rounded w-full text-xs text-center">
                  Item {i}
                </div>
              ))}
            </VStack>
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Alignment Options"
        code={`<VStack align="start">Start aligned</VStack>
<VStack align="center">Center aligned</VStack>
<VStack align="end">End aligned</VStack>
<VStack align="stretch">Stretch (full width)</VStack>`}
      >
        <div className="space-y-6">
          {['start', 'center', 'end', 'stretch'].map((align) => (
            <div key={align}>
              <p className="text-xs text-muted-foreground mb-2 capitalize">{align} aligned</p>
              <VStack align={align as any} spacing={2} className="bg-muted p-3 rounded">
                <div className="bg-primary/20 px-3 py-2 rounded text-xs">Short</div>
                <div className="bg-primary/20 px-3 py-2 rounded text-xs">Medium width</div>
                <div className="bg-primary/20 px-3 py-2 rounded text-xs">Longer content here</div>
              </VStack>
            </div>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Nested Stacks"
        code={`<VStack spacing={4}>
  <HStack spacing={2}>
    <div>H1</div>
    <div>H2</div>
  </HStack>
  <HStack spacing={2}>
    <div>H3</div>
    <div>H4</div>
  </HStack>
</VStack>`}
      >
        <VStack spacing={4} className="w-full max-w-sm">
          <HStack spacing={2} className="w-full">
            <div className="bg-primary/10 p-3 rounded flex-1 text-center text-xs">H1</div>
            <div className="bg-primary/10 p-3 rounded flex-1 text-center text-xs">H2</div>
          </HStack>
          <HStack spacing={2} className="w-full">
            <div className="bg-primary/10 p-3 rounded flex-1 text-center text-xs">H3</div>
            <div className="bg-primary/10 p-3 rounded flex-1 text-center text-xs">H4</div>
          </HStack>
        </VStack>
      </ComponentPreview>

      <ComponentPreview
        title="Form Layout with VStack"
        code={`<VStack spacing={4} align="stretch">
  <div>
    <Label>Email</Label>
    <Input type="email" />
  </div>
  <div>
    <Label>Password</Label>
    <Input type="password" />
  </div>
  <Button>Submit</Button>
</VStack>`}
      >
        <VStack spacing={4} align="stretch" className="w-full max-w-sm">
          <div className="space-y-1">
            <label className="text-sm font-medium">Email</label>
            <div className="h-9 border border-input rounded-md bg-background px-3 flex items-center text-sm text-muted-foreground">
              email@example.com
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Password</label>
            <div className="h-9 border border-input rounded-md bg-background px-3 flex items-center text-sm text-muted-foreground">
              ••••••••
            </div>
          </div>
          <div className="h-9 bg-primary text-primary-foreground rounded-md flex items-center justify-center text-sm font-medium">
            Submit
          </div>
        </VStack>
      </ComponentPreview>

      <ComponentPreview
        title="Button Group with HStack"
        code={`<HStack spacing={2}>
  <Button variant="outline">Cancel</Button>
  <Button variant="outline">Save Draft</Button>
  <Button>Publish</Button>
</HStack>`}
      >
        <HStack spacing={2}>
          <div className="h-9 px-4 border border-input rounded-md flex items-center text-sm">
            Cancel
          </div>
          <div className="h-9 px-4 border border-input rounded-md flex items-center text-sm">
            Save Draft
          </div>
          <div className="h-9 px-4 bg-primary text-primary-foreground rounded-md flex items-center text-sm font-medium">
            Publish
          </div>
        </HStack>
      </ComponentPreview>

      <PropsTable
        title="VStack Props"
        props={[
          { name: 'spacing', type: 'number | string', default: '4', description: 'Gap between items. Number uses Tailwind spacing scale, string for custom values.' },
          { name: 'align', type: '"start" | "end" | "center" | "stretch"', description: 'Horizontal alignment of items.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
          { name: 'children', type: 'ReactNode', required: true, description: 'Items to stack vertically.' },
        ]}
      />

      <PropsTable
        title="HStack Props"
        props={[
          { name: 'spacing', type: 'number | string', default: '4', description: 'Gap between items. Number uses Tailwind spacing scale, string for custom values.' },
          { name: 'align', type: '"start" | "end" | "center" | "stretch"', default: '"center"', description: 'Vertical alignment of items.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
          { name: 'children', type: 'ReactNode', required: true, description: 'Items to stack horizontally.' },
        ]}
      />
    </div>
  );
}
