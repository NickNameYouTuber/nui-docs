import { Label, Input, Checkbox } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';

export function LabelPage() {
  return (
    <div>
      <PageHeader
        title="Label"
        description="A semantic label for form inputs with automatic disabled state styling and accessibility features. Built on Radix UI Label."
        badge="Atom"
      />

      <ComponentPreview
        title="Basic Label"
        code={`<div className="grid gap-2">
  <Label htmlFor="email">Email address</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`}
      >
        <div className="grid gap-2 w-full max-w-sm">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Disabled Input"
        description="Label automatically styles itself when the associated input is disabled (using peer-disabled)."
        code={`<div className="grid gap-2">
  <Label htmlFor="disabled-input">Disabled Field</Label>
  <Input id="disabled-input" disabled placeholder="Cannot be edited" />
</div>`}
      >
        <div className="grid gap-2 w-full max-w-sm">
          <Label htmlFor="disabled-input">Disabled Field</Label>
          <Input id="disabled-input" disabled placeholder="Cannot be edited" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Checkbox"
        code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
      >
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Multiple Fields"
        code={`<div className="space-y-4 w-full max-w-sm">
  <div className="grid gap-2">
    <Label htmlFor="name">Full Name</Label>
    <Input id="name" placeholder="John Doe" />
  </div>
  <div className="grid gap-2">
    <Label htmlFor="username">Username</Label>
    <Input id="username" placeholder="@johndoe" />
  </div>
</div>`}
      >
        <div className="space-y-4 w-full max-w-sm">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="@johndoe" />
          </div>
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          { name: 'htmlFor', type: 'string', description: 'Associates the label with an input element by ID. Essential for accessibility.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
          { name: 'children', type: 'ReactNode', required: true, description: 'Label text or content.' },
        ]}
      />
    </div>
  );
}
