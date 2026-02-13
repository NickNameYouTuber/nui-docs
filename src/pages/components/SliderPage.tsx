import { useState } from 'react';
import { Slider, Label } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { useDocLang } from '~/i18n';

export function SliderPage() {
  const { t } = useDocLang();
  const [value1, setValue1] = useState([50]);
  const [value2, setValue2] = useState([30, 70]);
  const [volume, setVolume] = useState([75]);

  return (
    <div>
      <PageHeader
        title="Slider"
        description={t('pages.slider.desc')}
        badge={t('common.badgeAtom')}
      />

      <ComponentPreview
        title={t('pages.slider.preview1Title')}
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
        title={t('pages.slider.preview2Title')}
        description={t('pages.slider.preview2Desc')}
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
        title={t('pages.slider.preview3Title')}
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
        title={t('pages.slider.preview4Title')}
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
        title={t('pages.slider.preview5Title')}
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
