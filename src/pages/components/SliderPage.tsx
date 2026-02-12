import { useState } from 'react';
import { Slider, Label } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';

export function SliderPage() {
  const [value1, setValue1] = useState([50]);
  const [value2, setValue2] = useState([30, 70]);
  const [volume, setVolume] = useState([75]);

  return (
    <div>
      <PageHeader
        title="Slider"
        description="A draggable slider for selecting numeric values or ranges. Supports single and multiple thumbs, keyboard navigation, and touch input. Built on Radix UI Slider."
        badge="Atom"
      />

      <ComponentPreview
        title="Basic Slider"
        code={`const [value, setValue] = useState([50]);

<Slider
  value={value}
  onValueChange={setValue}
  max={100}
  step={1}
  className="w-64"
/>`}
      >
        <div className="w-full max-w-md space-y-2">
          <Slider
            value={value1}
            onValueChange={setValue1}
            max={100}
            step={1}
          />
          <p className="text-sm text-muted-foreground">Value: {value1[0]}</p>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Range Slider"
        description="Use an array with two values for range selection with two thumbs."
        code={`const [value, setValue] = useState([30, 70]);

<Slider
  value={value}
  onValueChange={setValue}
  max={100}
  step={1}
  className="w-64"
/>`}
      >
        <div className="w-full max-w-md space-y-2">
          <Slider
            value={value2}
            onValueChange={setValue2}
            max={100}
            step={1}
          />
          <p className="text-sm text-muted-foreground">Range: {value2[0]} - {value2[1]}</p>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Label"
        code={`const [volume, setVolume] = useState([75]);

<div className="grid gap-2">
  <div className="flex items-center justify-between">
    <Label>Volume</Label>
    <span className="text-sm text-muted-foreground">{volume[0]}%</span>
  </div>
  <Slider
    value={volume}
    onValueChange={setVolume}
    max={100}
    step={1}
  />
</div>`}
      >
        <div className="w-full max-w-md grid gap-2">
          <div className="flex items-center justify-between">
            <Label>Volume</Label>
            <span className="text-sm text-muted-foreground">{volume[0]}%</span>
          </div>
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
          />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Custom Step"
        code={`<Slider defaultValue={[25]} max={100} step={25} />`}
      >
        <div className="w-full max-w-md">
          <Slider defaultValue={[25]} max={100} step={25} />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Disabled State"
        code={`<Slider defaultValue={[50]} max={100} disabled />`}
      >
        <Slider defaultValue={[50]} max={100} disabled className="max-w-md" />
      </ComponentPreview>

      <PropsTable
        props={[
          { name: 'value', type: 'number[]', description: 'Controlled value(s). Array with one element for single thumb, two for range.' },
          { name: 'defaultValue', type: 'number[]', description: 'Default value(s) for uncontrolled usage.' },
          { name: 'onValueChange', type: '(value: number[]) => void', description: 'Callback when value changes.' },
          { name: 'min', type: 'number', default: '0', description: 'Minimum value.' },
          { name: 'max', type: 'number', default: '100', description: 'Maximum value.' },
          { name: 'step', type: 'number', default: '1', description: 'Step increment when dragging or using keyboard.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents interaction.' },
          { name: 'orientation', type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'Slider orientation.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
        ]}
      />
    </div>
  );
}
