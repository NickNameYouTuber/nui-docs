import { useState } from 'react';
import { Textarea, Label } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';

export function TextareaPage() {
  const [value, setValue] = useState('');

  return (
    <div>
      <PageHeader
        title="Textarea"
        description="A multi-line text input field for longer form content. Supports all native textarea attributes."
        badge="Atom"
      />

      <ComponentPreview
        title="Basic Textarea"
        code={`<Textarea placeholder="Enter your message..." />`}
      >
        <Textarea placeholder="Enter your message..." className="max-w-md" />
      </ComponentPreview>

      <ComponentPreview
        title="With Label"
        code={`<div className="grid gap-2 w-full max-w-md">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Type your message here..." />
</div>`}
      >
        <div className="grid gap-2 w-full max-w-md">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Type your message here..." />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Controlled with Character Count"
        code={`const [value, setValue] = useState('');

<div className="grid gap-2 w-full max-w-md">
  <Label htmlFor="bio">Bio</Label>
  <Textarea
    id="bio"
    placeholder="Tell us about yourself..."
    value={value}
    onChange={(e) => setValue(e.target.value)}
    maxLength={200}
  />
  <p className="text-xs text-muted-foreground text-right">
    {value.length} / 200
  </p>
</div>`}
      >
        <div className="grid gap-2 w-full max-w-md">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            placeholder="Tell us about yourself..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            maxLength={200}
          />
          <p className="text-xs text-muted-foreground text-right">
            {value.length} / 200
          </p>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Custom Rows"
        code={`<Textarea rows={8} placeholder="Large text area..." />`}
      >
        <Textarea rows={8} placeholder="Large text area..." className="max-w-md" />
      </ComponentPreview>

      <ComponentPreview
        title="Disabled State"
        code={`<Textarea disabled placeholder="This field is disabled" />`}
      >
        <Textarea disabled placeholder="This field is disabled" className="max-w-md" />
      </ComponentPreview>

      <PropsTable
        props={[
          { name: 'value', type: 'string', description: 'Controlled value.' },
          { name: 'onChange', type: '(e: ChangeEvent) => void', description: 'Change handler.' },
          { name: 'placeholder', type: 'string', description: 'Placeholder text.' },
          { name: 'rows', type: 'number', description: 'Number of visible text rows.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents interaction.' },
          { name: 'readOnly', type: 'boolean', default: 'false', description: 'Makes the textarea read-only.' },
          { name: 'required', type: 'boolean', default: 'false', description: 'Marks as required in forms.' },
          { name: 'maxLength', type: 'number', description: 'Maximum character count.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
        ]}
      />
    </div>
  );
}
