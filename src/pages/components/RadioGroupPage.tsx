import { useState } from 'react';
import { RadioGroup, RadioGroupItem, Label } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';

export function RadioGroupPage() {
  const [value, setValue] = useState('option1');
  const [plan, setPlan] = useState('free');

  return (
    <div>
      <PageHeader
        title="Radio Group"
        description="A set of radio buttons for single-choice selection. Supports keyboard navigation and focus management. Built on Radix UI Radio Group."
        badge="Atom"
      />

      <ComponentPreview
        title="Basic Radio Group"
        code={`<RadioGroup defaultValue="option1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option1" id="r1" />
    <Label htmlFor="r1">Option 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option2" id="r2" />
    <Label htmlFor="r2">Option 2</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option3" id="r3" />
    <Label htmlFor="r3">Option 3</Label>
  </div>
</RadioGroup>`}
      >
        <RadioGroup defaultValue="option1">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option1" id="r1" />
            <Label htmlFor="r1">Option 1</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option2" id="r2" />
            <Label htmlFor="r2">Option 2</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option3" id="r3" />
            <Label htmlFor="r3">Option 3</Label>
          </div>
        </RadioGroup>
      </ComponentPreview>

      <ComponentPreview
        title="Controlled Radio Group"
        code={`const [value, setValue] = useState('option1');

<RadioGroup value={value} onValueChange={setValue}>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option1" id="c1" />
    <Label htmlFor="c1">Option 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option2" id="c2" />
    <Label htmlFor="c2">Option 2</Label>
  </div>
</RadioGroup>
<p className="text-sm mt-2">Selected: {value}</p>`}
      >
        <div>
          <RadioGroup value={value} onValueChange={setValue}>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option1" id="c1" />
              <Label htmlFor="c1">Option 1</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option2" id="c2" />
              <Label htmlFor="c2">Option 2</Label>
            </div>
          </RadioGroup>
          <p className="text-sm text-muted-foreground mt-2">Selected: {value}</p>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Pricing Plan Selection"
        code={`const [plan, setPlan] = useState('free');

<RadioGroup value={plan} onValueChange={setPlan}>
  <div className="flex items-center gap-2 p-3 rounded-lg border border-border">
    <RadioGroupItem value="free" id="free" />
    <Label htmlFor="free" className="flex-1 cursor-pointer">
      <div className="font-medium">Free</div>
      <div className="text-xs text-muted-foreground">Basic features</div>
    </Label>
  </div>
  <div className="flex items-center gap-2 p-3 rounded-lg border border-border">
    <RadioGroupItem value="pro" id="pro" />
    <Label htmlFor="pro" className="flex-1 cursor-pointer">
      <div className="font-medium">Pro - $10/mo</div>
      <div className="text-xs text-muted-foreground">All features</div>
    </Label>
  </div>
</RadioGroup>`}
      >
        <RadioGroup value={plan} onValueChange={setPlan} className="w-full max-w-md">
          <div className="flex items-center gap-2 p-3 rounded-lg border border-border">
            <RadioGroupItem value="free" id="free" />
            <Label htmlFor="free" className="flex-1 cursor-pointer">
              <div className="font-medium">Free</div>
              <div className="text-xs text-muted-foreground">Basic features</div>
            </Label>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg border border-border">
            <RadioGroupItem value="pro" id="pro" />
            <Label htmlFor="pro" className="flex-1 cursor-pointer">
              <div className="font-medium">Pro - $10/mo</div>
              <div className="text-xs text-muted-foreground">All features</div>
            </Label>
          </div>
        </RadioGroup>
      </ComponentPreview>

      <ComponentPreview
        title="With Disabled Option"
        code={`<RadioGroup defaultValue="basic">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="basic" id="basic" />
    <Label htmlFor="basic">Basic</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="premium" id="premium" disabled />
    <Label htmlFor="premium">Premium (Coming Soon)</Label>
  </div>
</RadioGroup>`}
      >
        <RadioGroup defaultValue="basic">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="basic" id="basic" />
            <Label htmlFor="basic">Basic</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="premium" id="premium" disabled />
            <Label htmlFor="premium">Premium (Coming Soon)</Label>
          </div>
        </RadioGroup>
      </ComponentPreview>

      <PropsTable
        title="RadioGroup Props"
        props={[
          { name: 'value', type: 'string', description: 'Controlled selected value.' },
          { name: 'defaultValue', type: 'string', description: 'Default value for uncontrolled usage.' },
          { name: 'onValueChange', type: '(value: string) => void', description: 'Callback when selection changes.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the entire group.' },
          { name: 'name', type: 'string', description: 'Name attribute for form submission.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
        ]}
      />

      <PropsTable
        title="RadioGroupItem Props"
        props={[
          { name: 'value', type: 'string', required: true, description: 'The value of this radio option.' },
          { name: 'id', type: 'string', description: 'ID for label association.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables this specific option.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
        ]}
      />
    </div>
  );
}
