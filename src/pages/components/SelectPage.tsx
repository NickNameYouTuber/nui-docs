import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
  Label,
} from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { useDocLang } from '~/i18n';

export function SelectPage() {
  const { t } = useDocLang();
  return (
    <div>
      <PageHeader
        title="Select"
        description={t('pages.select.desc')}
        badge={t('common.badgeAtom')}
      />

      <ComponentPreview
        title={t('pages.select.preview1Title')}
        code={`<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="cherry">Cherry</SelectItem>
    <SelectItem value="grape">Grape</SelectItem>
  </SelectContent>
</Select>`}
      >
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
            <SelectItem value="grape">Grape</SelectItem>
          </SelectContent>
        </Select>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.select.preview2Title')}
        code={`<div className="grid gap-2 w-[200px]">
  <Label htmlFor="role">Role</Label>
  <Select>
    <SelectTrigger id="role">
      <SelectValue placeholder="Select role" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="admin">Admin</SelectItem>
      <SelectItem value="editor">Editor</SelectItem>
      <SelectItem value="viewer">Viewer</SelectItem>
    </SelectContent>
  </Select>
</div>`}
      >
        <div className="grid gap-2 w-[200px]">
          <Label htmlFor="role">Role</Label>
          <Select>
            <SelectTrigger id="role">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="editor">Editor</SelectItem>
              <SelectItem value="viewer">Viewer</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </ComponentPreview>

      <PropsTable
        title="SelectTrigger Props"
        props={[
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
          { name: 'children', type: 'ReactNode', description: 'Usually a SelectValue component.' },
        ]}
      />

      <PropsTable
        title="SelectItem Props"
        props={[
          { name: 'value', type: 'string', required: true, description: 'The value of the item.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents selection.' },
          { name: 'children', type: 'ReactNode', required: true, description: 'Display text.' },
        ]}
      />
    </div>
  );
}
