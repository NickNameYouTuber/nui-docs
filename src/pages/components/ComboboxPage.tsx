import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { Combobox, Label } from '@nicorp/nui';
import { useDocLang } from '../../i18n';

const frameworks = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'next', label: 'Next.js' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
];

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'es', label: 'Spain' },
  { value: 'it', label: 'Italy' },
  { value: 'jp', label: 'Japan' },
  { value: 'cn', label: 'China' },
];

export default function ComboboxPage() {
  const { t } = useDocLang();
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('react');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Combobox</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.combobox.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.combobox.preview1Title')}
          description={t('pages.combobox.preview1Desc')}
          code={`const frameworks = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
];

const [value, setValue] = useState('');

<Combobox
  options={frameworks}
  value={value}
  onChange={setValue}
  placeholder="Select framework..."
/>`}
        >
          <Combobox
            options={frameworks}
            value={value1}
            onChange={setValue1}
            placeholder="Select framework..."
          />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.combobox.preview2Title')}
          description={t('pages.combobox.preview2Desc')}
          code={`const [value, setValue] = useState('react');

<Combobox
  options={frameworks}
  value={value}
  onChange={setValue}
  placeholder="Select framework..."
/>`}
        >
          <Combobox
            options={frameworks}
            value={value2}
            onChange={setValue2}
            placeholder="Select framework..."
          />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.combobox.preview3Title')}
          description={t('pages.combobox.preview3Desc')}
          code={`const [value, setValue] = useState('');

<div className="space-y-2">
  <Label>Preferred Framework</Label>
  <Combobox
    options={frameworks}
    value={value}
    onChange={setValue}
    placeholder="Choose your framework..."
  />
</div>`}
        >
          <div className="space-y-2">
            <Label>Preferred Framework</Label>
            <Combobox
              options={frameworks}
              value={value3}
              onChange={setValue3}
              placeholder="Choose your framework..."
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.combobox.preview4Title')}
          description={t('pages.combobox.preview4Desc')}
          code={`const countries = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  // ... more options
];

const [value, setValue] = useState('');

<Combobox
  options={countries}
  value={value}
  onChange={setValue}
  placeholder="Select country..."
  searchPlaceholder="Search countries..."
  emptyText="No country found."
/>`}
        >
          <Combobox
            options={countries}
            value={value4}
            onChange={setValue4}
            placeholder="Select country..."
            searchPlaceholder="Search countries..."
            emptyText="No country found."
          />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.combobox.preview5Title')}
          description={t('pages.combobox.preview5Desc')}
          code={`<Combobox
  options={frameworks}
  value="react"
  disabled
  placeholder="Select framework..."
/>`}
        >
          <Combobox
            options={frameworks}
            value="react"
            disabled
            placeholder="Select framework..."
          />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.combobox.preview6Title')}
          description={t('pages.combobox.preview6Desc')}
          code={`const [value, setValue] = useState('');

<Combobox
  options={frameworks}
  value={value}
  onChange={setValue}
  placeholder="Select framework..."
  className="w-64"
/>`}
        >
          <Combobox
            options={frameworks}
            value={value1}
            onChange={setValue1}
            placeholder="Select framework..."
            className="w-64"
          />
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              {
                name: 'options',
                type: 'ComboboxOption[]',
                default: '-',
                description: 'Array of options with value and label properties',
              },
              {
                name: 'value',
                type: 'string',
                default: '-',
                description: 'Currently selected value',
              },
              {
                name: 'onChange',
                type: '(value: string) => void',
                default: '-',
                description: 'Callback when selection changes',
              },
              {
                name: 'placeholder',
                type: 'string',
                default: '"Select option..."',
                description: 'Button placeholder text when no value selected',
              },
              {
                name: 'searchPlaceholder',
                type: 'string',
                default: '"Search..."',
                description: 'Search input placeholder text',
              },
              {
                name: 'emptyText',
                type: 'string',
                default: '"No results found."',
                description: 'Text shown when search returns no results',
              },
              {
                name: 'disabled',
                type: 'boolean',
                default: 'false',
                description: 'Whether the combobox is disabled',
              },
              {
                name: 'className',
                type: 'string',
                default: '-',
                description: 'Additional CSS classes for the button',
              },
            ]}
          />
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">ComboboxOption Interface</h3>
          <pre className="text-sm bg-background p-3 rounded">
{`interface ComboboxOption {
  value: string;
  label: string;
}`}
          </pre>
          <p className="text-sm text-muted-foreground mt-2">
            Each option must have a unique <code>value</code> (used for selection) and a <code>label</code> (displayed to users).
          </p>
        </div>
      </div>
    </div>
  );
}
