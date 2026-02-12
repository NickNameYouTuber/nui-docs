import { Button } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { Mail, Loader2, ChevronRight, Download } from 'lucide-react';

export function ButtonPage() {
  return (
    <div>
      <PageHeader
        title="Button"
        description="Displays a button or a component that looks like a button. Supports multiple variants, sizes, and icon configurations."
        badge="Atom"
      />

      <ComponentPreview
        title="Variants"
        description="All available button style variants."
        code={`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
      >
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </ComponentPreview>

      <ComponentPreview
        title="Sizes"
        description="Available size options from small to extra-large."
        code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="icon"><Mail /></Button>`}
      >
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
        <Button size="icon"><Mail className="h-4 w-4" /></Button>
      </ComponentPreview>

      <ComponentPreview
        title="With Icon"
        description="Combining buttons with icons for contextual actions."
        code={`<Button>
  <Mail className="mr-2 h-4 w-4" /> Login with Email
</Button>
<Button variant="outline">
  <Download className="mr-2 h-4 w-4" /> Download
</Button>
<Button variant="secondary">
  Next <ChevronRight className="ml-2 h-4 w-4" />
</Button>`}
      >
        <Button><Mail className="mr-2 h-4 w-4" /> Login with Email</Button>
        <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Download</Button>
        <Button variant="secondary">Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
      </ComponentPreview>

      <ComponentPreview
        title="Loading State"
        description="Use the disabled prop with a Loader2 icon to indicate loading."
        code={`<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`}
      >
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
        </Button>
      </ComponentPreview>

      <ComponentPreview
        title="Brand & Glow"
        description="Special variants for marketing and attention-grabbing buttons."
        code={`<Button variant="brand">Brand</Button>
<Button variant="glow">Glow</Button>`}
      >
        <Button variant="brand">Brand</Button>
        <Button variant="glow">Glow</Button>
      </ComponentPreview>

      <PropsTable
        props={[
          { name: 'variant', type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "brand" | "glow"', default: '"default"', description: 'The visual style of the button.' },
          { name: 'size', type: '"default" | "sm" | "lg" | "xl" | "icon"', default: '"default"', description: 'The size of the button.' },
          { name: 'asChild', type: 'boolean', default: 'false', description: 'Render as a Slot, delegating props to the child element.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents interaction and applies disabled styling.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes to apply.' },
        ]}
      />
    </div>
  );
}
