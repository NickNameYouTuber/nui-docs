import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { PageHeader } from '~/components/PageHeader';
import { TagInput, Label } from '@nicorp/nui';
import { useDocLang } from '~/i18n';

export default function TagInputPage() {
  const { t } = useDocLang();
  const [tags1, setTags1] = useState<string[]>([]);
  const [tags2, setTags2] = useState<string[]>(['react', 'typescript', 'tailwind']);
  const [tags3, setTags3] = useState<string[]>(['javascript']);
  const [tags4, setTags4] = useState<string[]>(['design', 'frontend']);

  return (
    <div>
      <PageHeader
        title="TagInput"
        description={t('pages.tagInput.desc')}
        badge={t('common.badgeAdvanced')}
      />

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.tagInput.preview1Title')}
          description={t('pages.tagInput.preview1Desc')}
          code={`const [tags, setTags] = useState<string[]>([]);

<TagInput
  values={tags}
  onChange={setTags}
  placeholder="Add tag..."
/>`}
        >
          <TagInput
            values={tags1}
            onChange={setTags1}
            placeholder="Add tag..."
          />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.tagInput.preview2Title')}
          description={t('pages.tagInput.preview2Desc')}
          code={`const [tags, setTags] = useState<string[]>(['react', 'typescript', 'tailwind']);

<TagInput
  values={tags}
  onChange={setTags}
  placeholder="Add more tags..."
/>`}
        >
          <TagInput
            values={tags2}
            onChange={setTags2}
            placeholder="Add more tags..."
          />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.tagInput.preview3Title')}
          description={t('pages.tagInput.preview3Desc')}
          code={`const [tags, setTags] = useState<string[]>(['javascript']);

<div className="space-y-2">
  <Label>Technologies</Label>
  <TagInput
    values={tags}
    onChange={setTags}
    placeholder="Add technology..."
  />
</div>`}
        >
          <div className="space-y-2">
            <Label>Technologies</Label>
            <TagInput
              values={tags3}
              onChange={setTags3}
              placeholder="Add technology..."
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.tagInput.preview4Title')}
          description={t('pages.tagInput.preview4Desc')}
          code={`const [tags, setTags] = useState<string[]>(['design', 'frontend']);

<TagInput
  values={tags}
  onChange={setTags}
  placeholder="Add tag (max 5)..."
  maxTags={5}
/>`}
        >
          <div className="space-y-2">
            <TagInput
              values={tags4}
              onChange={setTags4}
              placeholder="Add tag (max 5)..."
              maxTags={5}
            />
            <p className="text-sm text-muted-foreground">
              {tags4.length} / 5 tags
            </p>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.tagInput.preview5Title')}
          description={t('pages.tagInput.preview5Desc')}
          code={`<TagInput
  values={['react', 'vue', 'angular']}
  disabled
  placeholder="Add tag..."
/>`}
        >
          <TagInput
            values={['react', 'vue', 'angular']}
            disabled
            placeholder="Add tag..."
          />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.tagInput.preview6Title')}
          description={t('pages.tagInput.preview6Desc')}
          code={`const [tags, setTags] = useState<string[]>([]);

<TagInput
  values={tags}
  onChange={setTags}
  placeholder="Add tag..."
  className="max-w-md"
/>`}
        >
          <TagInput
            values={tags1}
            onChange={setTags1}
            placeholder="Add tag..."
            className="max-w-md"
          />
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              {
                name: 'values',
                type: 'string[]',
                default: '[]',
                description: 'Array of current tag values',
              },
              {
                name: 'onChange',
                type: '(values: string[]) => void',
                default: '-',
                description: 'Callback when tags are added or removed',
              },
              {
                name: 'placeholder',
                type: 'string',
                default: '"Add tag..."',
                description: 'Input placeholder text',
              },
              {
                name: 'disabled',
                type: 'boolean',
                default: 'false',
                description: 'Whether the tag input is disabled',
              },
              {
                name: 'maxTags',
                type: 'number',
                default: '-',
                description: 'Maximum number of tags allowed',
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
          <h3 className="font-semibold mb-2">Keyboard Shortcuts</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Enter:</strong> Add the current input value as a new tag
            </li>
            <li>
              <strong>Backspace:</strong> When input is empty, remove the last tag
            </li>
            <li>
              <strong>Click X button:</strong> Remove a specific tag
            </li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Note:</strong> Duplicate tags are automatically prevented. Each tag must be unique.
          </p>
        </div>
      </div>
    </div>
  );
}
