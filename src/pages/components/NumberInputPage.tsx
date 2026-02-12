import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { NumberInput, Label } from '@nicorp/nui';

export default function NumberInputPage() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(5);
  const [value3, setValue3] = useState(10);
  const [value4, setValue4] = useState(0.5);
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">NumberInput</h1>
        <p className="text-xl text-muted-foreground">
          A numeric input with increment and decrement buttons for easy value adjustment.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Basic Number Input"
          description="Simple number input with +/- buttons"
          code={`const [value, setValue] = useState(0);

<NumberInput
  value={value}
  onChange={setValue}
/>`}
        >
          <NumberInput
            value={value1}
            onChange={setValue1}
          />
        </ComponentPreview>

        <ComponentPreview
          title="With Min and Max"
          description="Number input with value constraints"
          code={`const [value, setValue] = useState(5);

<NumberInput
  value={value}
  onChange={setValue}
  min={0}
  max={10}
/>`}
        >
          <div className="space-y-2">
            <NumberInput
              value={value2}
              onChange={setValue2}
              min={0}
              max={10}
            />
            <p className="text-sm text-muted-foreground">
              Value: {value2} (min: 0, max: 10)
            </p>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With Label"
          description="Number input with a label for form fields"
          code={`const [value, setValue] = useState(10);

<div className="space-y-2">
  <Label>Temperature (°C)</Label>
  <NumberInput
    value={value}
    onChange={setValue}
    min={-50}
    max={50}
  />
</div>`}
        >
          <div className="space-y-2">
            <Label>Temperature (°C)</Label>
            <NumberInput
              value={value3}
              onChange={setValue3}
              min={-50}
              max={50}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Custom Step"
          description="Number input with custom increment step"
          code={`const [value, setValue] = useState(0.5);

<NumberInput
  value={value}
  onChange={setValue}
  min={0}
  max={1}
  step={0.1}
/>`}
        >
          <div className="space-y-2">
            <NumberInput
              value={value4}
              onChange={setValue4}
              min={0}
              max={1}
              step={0.1}
            />
            <p className="text-sm text-muted-foreground">
              Value: {value4.toFixed(1)} (step: 0.1)
            </p>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Quantity Selector"
          description="Practical example for shopping cart quantity"
          code={`const [quantity, setQuantity] = useState(1);

<div className="space-y-2">
  <Label>Quantity</Label>
  <NumberInput
    value={quantity}
    onChange={setQuantity}
    min={1}
    max={99}
  />
</div>`}
        >
          <div className="space-y-2">
            <Label>Quantity</Label>
            <NumberInput
              value={quantity}
              onChange={setQuantity}
              min={1}
              max={99}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Disabled State"
          description="Number input in disabled state"
          code={`<NumberInput
  value={42}
  disabled
/>`}
        >
          <NumberInput
            value={42}
            disabled
          />
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              {
                name: 'value',
                type: 'number',
                default: '0',
                description: 'Current numeric value',
              },
              {
                name: 'onChange',
                type: '(value: number) => void',
                default: '-',
                description: 'Callback when value changes',
              },
              {
                name: 'min',
                type: 'number',
                default: '-Infinity',
                description: 'Minimum allowed value',
              },
              {
                name: 'max',
                type: 'number',
                default: 'Infinity',
                description: 'Maximum allowed value',
              },
              {
                name: 'step',
                type: 'number',
                default: '1',
                description: 'Increment/decrement step value',
              },
              {
                name: 'disabled',
                type: 'boolean',
                default: 'false',
                description: 'Whether the number input is disabled',
              },
              {
                name: 'className',
                type: 'string',
                default: '-',
                description: 'Additional CSS classes for the container',
              },
            ]}
          />
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Buttons:</strong> Use - and + buttons to decrement/increment values
            </li>
            <li>
              <strong>Direct Input:</strong> Type numbers directly into the input field
            </li>
            <li>
              <strong>Auto-clamping:</strong> Values are automatically constrained to min/max bounds
            </li>
            <li>
              <strong>Disabled Buttons:</strong> Buttons are automatically disabled when reaching min/max limits
            </li>
            <li>
              <strong>Decimal Support:</strong> Works with both integers and decimals using the step prop
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
