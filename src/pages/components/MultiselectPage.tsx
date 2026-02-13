import { useState } from 'react';
import { MultiSelect, Label } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { useDocLang } from '~/i18n';

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
  { value: 'jp', label: 'Japan' },
  { value: 'cn', label: 'China' },
  { value: 'in', label: 'India' },
  { value: 'br', label: 'Brazil' },
];

const skills = [
  { value: 'js', label: 'JavaScript' },
  { value: 'ts', label: 'TypeScript' },
  { value: 'py', label: 'Python' },
  { value: 'go', label: 'Go' },
  { value: 'rust', label: 'Rust' },
  { value: 'java', label: 'Java' },
  { value: 'cpp', label: 'C++' },
  { value: 'php', label: 'PHP' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'swift', label: 'Swift' },
];

export function MultiselectPage() {
  const { t } = useDocLang();
  const [value1, setValue1] = useState<string[]>([]);
  const [value2, setValue2] = useState<string[]>(['react', 'next']);
  const [value3, setValue3] = useState<string[]>([]);
  const [value4, setValue4] = useState<string[]>([]);

  return (
    <div>
      <PageHeader
        title="MultiSelect"
        description={t('pages.multiselect.desc')}
        badge={t('common.badgeAdvanced')}
      />

      <ComponentPreview
        title={t('pages.multiselect.preview1Title')}
        code={`const [value, setValue] = useState<string[]>([]);

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

<MultiSelect
  options={options}
  value={value}
  onChange={setValue}
  placeholder="Select frameworks..."
/>`}
      >
        <div className="w-full max-w-md">
          <MultiSelect
            options={frameworks}
            value={value1}
            onChange={setValue1}
            placeholder="Select frameworks..."
          />
          {value1.length > 0 && (
            <p className="text-sm text-muted-foreground mt-2">
              Selected: {value1.join(', ')}
            </p>
          )}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.multiselect.preview2Title')}
        code={`const [value, setValue] = useState<string[]>(['react', 'next']);

<MultiSelect
  options={frameworks}
  value={value}
  onChange={setValue}
/>`}
      >
        <div className="w-full max-w-md">
          <MultiSelect
            options={frameworks}
            value={value2}
            onChange={setValue2}
          />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.multiselect.preview3Title')}
        code={`<div className="grid gap-2 w-full max-w-md">
  <Label>Select Countries</Label>
  <MultiSelect
    options={countries}
    value={value}
    onChange={setValue}
    placeholder="Choose countries..."
    searchPlaceholder="Search countries..."
  />
</div>`}
      >
        <div className="grid gap-2 w-full max-w-md">
          <Label>Select Countries</Label>
          <MultiSelect
            options={countries}
            value={value3}
            onChange={setValue3}
            placeholder="Choose countries..."
            searchPlaceholder="Search countries..."
          />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.multiselect.preview4Title')}
        description={t('pages.multiselect.preview4Desc')}
        code={`<MultiSelect
  options={skills}
  value={value}
  onChange={setValue}
  placeholder="Select your skills..."
  searchPlaceholder="Search skills..."
  maxDisplay={2}
/>`}
      >
        <div className="w-full max-w-md">
          <MultiSelect
            options={skills}
            value={value4}
            onChange={setValue4}
            placeholder="Select your skills..."
            searchPlaceholder="Search skills..."
            maxDisplay={2}
          />
          {value4.length > 0 && (
            <p className="text-sm text-muted-foreground mt-2">
              {value4.length} skill{value4.length !== 1 ? 's' : ''} selected
            </p>
          )}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.multiselect.preview5Title')}
        code={`<MultiSelect
  options={frameworks}
  value={['react', 'vue']}
  disabled
  placeholder="Disabled multiselect"
/>`}
      >
        <MultiSelect
          options={frameworks}
          value={['react', 'vue']}
          disabled
          placeholder="Disabled multiselect"
          className="max-w-md"
        />
      </ComponentPreview>

      <PropsTable
        props={[
          { name: 'options', type: 'MultiSelectOption[]', required: true, description: 'Array of options with value and label properties.' },
          { name: 'value', type: 'string[]', description: 'Controlled selected values array.' },
          { name: 'onChange', type: '(value: string[]) => void', description: 'Callback when selection changes.' },
          { name: 'placeholder', type: 'string', default: '"Select options..."', description: 'Placeholder text when nothing is selected.' },
          { name: 'searchPlaceholder', type: 'string', default: '"Search..."', description: 'Placeholder for search input.' },
          { name: 'emptyText', type: 'string', default: '"No results found."', description: 'Text shown when search returns no results.' },
          { name: 'maxDisplay', type: 'number', default: '3', description: 'Maximum number of items to display in trigger before showing count.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents interaction.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes for the trigger button.' },
        ]}
      />
    </div>
  );
}
