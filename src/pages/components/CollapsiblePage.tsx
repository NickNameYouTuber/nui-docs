import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { Collapsible, CollapsibleTrigger, CollapsibleContent, Button } from '@nicorp/nui';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function CollapsiblePage() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(true);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    section1: false,
    section2: false,
    section3: false,
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Collapsible</h1>
        <p className="text-xl text-muted-foreground">
          An interactive component for hiding and showing content with smooth animations built on Radix UI.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Basic Collapsible"
          description="Simple collapsible with button trigger"
          code={`const [open, setOpen] = useState(false);

<Collapsible open={open} onOpenChange={setOpen}>
  <CollapsibleTrigger asChild>
    <Button variant="outline">
      {open ? 'Hide' : 'Show'} Details
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div className="mt-2 rounded-md border p-4">
      <p className="text-sm text-muted-foreground">
        Additional details revealed when expanded.
      </p>
    </div>
  </CollapsibleContent>
</Collapsible>`}
        >
          <Collapsible open={open1} onOpenChange={setOpen1}>
            <CollapsibleTrigger asChild>
              <Button variant="outline">
                {open1 ? 'Hide' : 'Show'} Details
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="mt-2 rounded-md border p-4">
                <p className="text-sm text-muted-foreground">
                  Additional details revealed when expanded. This content smoothly animates in and out.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </ComponentPreview>

        <ComponentPreview
          title="With Icon Indicator"
          description="Collapsible with rotating chevron icon"
          code={`const [open, setOpen] = useState(false);

<Collapsible open={open} onOpenChange={setOpen}>
  <CollapsibleTrigger asChild>
    <button className="flex w-full items-center justify-between rounded-lg border p-4 hover:bg-accent">
      <span className="font-semibold">Frequently Asked Question</span>
      <ChevronDown className={\`h-4 w-4 transition-transform \${open ? 'rotate-180' : ''}\`} />
    </button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div className="px-4 py-3 text-sm text-muted-foreground">
      Answer to the frequently asked question.
    </div>
  </CollapsibleContent>
</Collapsible>`}
        >
          <Collapsible open={open2} onOpenChange={setOpen2}>
            <CollapsibleTrigger asChild>
              <button className="flex w-full items-center justify-between rounded-lg border p-4 hover:bg-accent">
                <span className="font-semibold">What is NUI?</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${open2 ? 'rotate-180' : ''}`} />
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-4 py-3 text-sm text-muted-foreground">
                NUI is a comprehensive React component library built with TypeScript, Tailwind CSS, and Radix UI primitives for building modern web applications.
              </div>
            </CollapsibleContent>
          </Collapsible>
        </ComponentPreview>

        <ComponentPreview
          title="Default Open"
          description="Collapsible that starts in expanded state"
          code={`const [open, setOpen] = useState(true);

<Collapsible open={open} onOpenChange={setOpen}>
  <CollapsibleTrigger asChild>
    <button className="flex items-center gap-2 font-semibold">
      <ChevronRight className={\`h-4 w-4 transition-transform \${open ? 'rotate-90' : ''}\`} />
      Project Files
    </button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div className="ml-6 mt-2 space-y-1">
      <div className="text-sm">src/</div>
      <div className="text-sm">package.json</div>
      <div className="text-sm">README.md</div>
    </div>
  </CollapsibleContent>
</Collapsible>`}
        >
          <Collapsible open={open3} onOpenChange={setOpen3}>
            <CollapsibleTrigger asChild>
              <button className="flex items-center gap-2 font-semibold hover:text-primary transition-colors">
                <ChevronRight className={`h-4 w-4 transition-transform ${open3 ? 'rotate-90' : ''}`} />
                Project Files
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="ml-6 mt-2 space-y-1">
                <div className="text-sm text-muted-foreground">📁 src/</div>
                <div className="text-sm text-muted-foreground">📄 package.json</div>
                <div className="text-sm text-muted-foreground">📄 README.md</div>
                <div className="text-sm text-muted-foreground">📄 tsconfig.json</div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </ComponentPreview>

        <ComponentPreview
          title="Multiple Sections"
          description="Multiple independent collapsible sections"
          code={`const [openSections, setOpenSections] = useState({
  section1: false,
  section2: false,
  section3: false,
});

<div className="space-y-2">
  {['section1', 'section2', 'section3'].map((section) => (
    <Collapsible
      key={section}
      open={openSections[section]}
      onOpenChange={(open) => setOpenSections({ ...openSections, [section]: open })}
    >
      <CollapsibleTrigger asChild>
        <button className="flex w-full items-center justify-between rounded-lg border p-3 hover:bg-accent">
          <span className="text-sm font-medium">Section {section.slice(-1)}</span>
          <ChevronDown className={\`h-4 w-4 transition-transform \${openSections[section] ? 'rotate-180' : ''}\`} />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="p-3 text-sm text-muted-foreground">
          Content for {section}
        </div>
      </CollapsibleContent>
    </Collapsible>
  ))}
</div>`}
        >
          <div className="space-y-2">
            {['section1', 'section2', 'section3'].map((section, idx) => (
              <Collapsible
                key={section}
                open={openSections[section]}
                onOpenChange={(open) => setOpenSections({ ...openSections, [section]: open })}
              >
                <CollapsibleTrigger asChild>
                  <button className="flex w-full items-center justify-between rounded-lg border p-3 hover:bg-accent">
                    <span className="text-sm font-medium">Section {idx + 1}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openSections[section] ? 'rotate-180' : ''}`} />
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="p-3 text-sm text-muted-foreground border-x border-b rounded-b-lg">
                    Content for section {idx + 1}. This can contain any React components or HTML elements.
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </ComponentPreview>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Collapsible Props</h2>
            <PropsTable
              props={[
                {
                  name: 'open',
                  type: 'boolean',
                  default: 'false',
                  description: 'Controlled open state',
                },
                {
                  name: 'defaultOpen',
                  type: 'boolean',
                  default: 'false',
                  description: 'Default open state (uncontrolled)',
                },
                {
                  name: 'onOpenChange',
                  type: '(open: boolean) => void',
                  default: '-',
                  description: 'Callback when open state changes',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Whether the collapsible is disabled',
                },
              ]}
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">CollapsibleTrigger Props</h2>
            <PropsTable
              props={[
                {
                  name: 'asChild',
                  type: 'boolean',
                  default: 'false',
                  description: 'Merge props onto child element instead of rendering a button',
                },
                {
                  name: 'children',
                  type: 'ReactNode',
                  default: '-',
                  description: 'Trigger element (usually a button)',
                },
              ]}
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">CollapsibleContent Props</h2>
            <PropsTable
              props={[
                {
                  name: 'className',
                  type: 'string',
                  default: '-',
                  description: 'Additional CSS classes',
                },
                {
                  name: 'children',
                  type: 'ReactNode',
                  default: '-',
                  description: 'Content to show/hide',
                },
              ]}
            />
          </div>
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Smooth Animations:</strong> Content animates in and out with CSS transitions
            </li>
            <li>
              <strong>Controlled & Uncontrolled:</strong> Use controlled (open) or uncontrolled (defaultOpen) state
            </li>
            <li>
              <strong>Accessible:</strong> Proper ARIA attributes and keyboard navigation
            </li>
            <li>
              <strong>Flexible Triggers:</strong> Use asChild prop to customize trigger styling
            </li>
            <li>
              <strong>Radix UI Foundation:</strong> Built on battle-tested Radix UI primitives
            </li>
            <li>
              <strong>Custom Styling:</strong> Full control over trigger and content appearance
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
