import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline } from 'lucide-react';
import { useDocLang } from '~/i18n';

export function ToggleGroupPage() {
  const { t } = useDocLang();
  const [align, setAlign] = useState('left');
  const [format, setFormat] = useState<string[]>([]);

  return (
    <div>
      <PageHeader
        title="Toggle Group"
        description={t('pages.toggleGroup.desc')}
        badge={t('common.badgeAtom')}
      />

      <ComponentPreview
        title={t('pages.toggleGroup.preview1Title')}
        code={`const [align, setAlign] = useState('left');

<ToggleGroup type="single" value={align} onValueChange={setAlign}>
  <ToggleGroupItem value="left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
      >
        <div>
          <ToggleGroup type="single" value={align} onValueChange={setAlign}>
            <ToggleGroupItem value="left">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
          <p className="text-sm text-muted-foreground mt-2">Selected: {align}</p>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.toggleGroup.preview2Title')}
        code={`const [format, setFormat] = useState<string[]>([]);

<ToggleGroup type="multiple" value={format} onValueChange={setFormat}>
  <ToggleGroupItem value="bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
      >
        <div>
          <ToggleGroup type="multiple" value={format} onValueChange={setFormat}>
            <ToggleGroupItem value="bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
          <p className="text-sm text-muted-foreground mt-2">
            Selected: {format.length ? format.join(', ') : 'None'}
          </p>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Outline Variant"
        code={`<ToggleGroup type="single" variant="outline">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>`}
      >
        <ToggleGroup type="single" variant="outline">
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
        </ToggleGroup>
      </ComponentPreview>

      <ComponentPreview
        title="Different Sizes"
        code={`<ToggleGroup type="single" size="sm">
  <ToggleGroupItem value="1">S</ToggleGroupItem>
  <ToggleGroupItem value="2">M</ToggleGroupItem>
  <ToggleGroupItem value="3">L</ToggleGroupItem>
</ToggleGroup>

<ToggleGroup type="single" size="lg">
  <ToggleGroupItem value="1">Small</ToggleGroupItem>
  <ToggleGroupItem value="2">Medium</ToggleGroupItem>
  <ToggleGroupItem value="3">Large</ToggleGroupItem>
</ToggleGroup>`}
      >
        <div className="space-y-3">
          <ToggleGroup type="single" size="sm">
            <ToggleGroupItem value="1">S</ToggleGroupItem>
            <ToggleGroupItem value="2">M</ToggleGroupItem>
            <ToggleGroupItem value="3">L</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" size="lg">
            <ToggleGroupItem value="1">Small</ToggleGroupItem>
            <ToggleGroupItem value="2">Medium</ToggleGroupItem>
            <ToggleGroupItem value="3">Large</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </ComponentPreview>

      <PropsTable
        title="ToggleGroup Props"
        props={[
          { name: 'type', type: '"single" | "multiple"', required: true, description: 'Selection mode: single (radio) or multiple (checkbox).' },
          { name: 'value', type: 'string | string[]', description: 'Controlled value(s). String for single, array for multiple.' },
          { name: 'defaultValue', type: 'string | string[]', description: 'Default value(s) for uncontrolled usage.' },
          { name: 'onValueChange', type: '(value: string | string[]) => void', description: 'Callback when selection changes.' },
          { name: 'variant', type: '"default" | "outline"', default: '"default"', description: 'Visual style variant.' },
          { name: 'size', type: '"default" | "sm" | "lg"', default: '"default"', description: 'Size of toggle items.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the entire group.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
        ]}
      />

      <PropsTable
        title="ToggleGroupItem Props"
        props={[
          { name: 'value', type: 'string', required: true, description: 'The value of this toggle item.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables this specific item.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
          { name: 'children', type: 'ReactNode', required: true, description: 'Button content — text, icons, or both.' },
        ]}
      />
    </div>
  );
}
