import { Separator } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { useDocLang } from '~/i18n';

export function SeparatorPage() {
  const { t } = useDocLang();
  return (
    <div>
      <PageHeader
        title="Separator"
        description={t('pages.separator.desc')}
        badge={t('common.badgeAtom')}
      />

      <ComponentPreview
        title={t('pages.separator.preview1Title')}
        code={`<div className="space-y-4">
  <p className="text-sm">Section One</p>
  <Separator />
  <p className="text-sm">Section Two</p>
</div>`}
      >
        <div className="space-y-4 w-full max-w-md">
          <p className="text-sm">Section One</p>
          <Separator />
          <p className="text-sm">Section Two</p>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.separator.preview2Title')}
        code={`<div className="flex items-center gap-4 h-8">
  <span className="text-sm">Item 1</span>
  <Separator orientation="vertical" />
  <span className="text-sm">Item 2</span>
  <Separator orientation="vertical" />
  <span className="text-sm">Item 3</span>
</div>`}
      >
        <div className="flex items-center gap-4 h-8">
          <span className="text-sm">Item 1</span>
          <Separator orientation="vertical" />
          <span className="text-sm">Item 2</span>
          <Separator orientation="vertical" />
          <span className="text-sm">Item 3</span>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.separator.preview3Title')}
        code={`<div className="w-64 p-3 rounded-lg border border-border">
  <div className="px-2 py-1.5 text-sm font-medium">Menu</div>
  <Separator className="my-2" />
  <div className="px-2 py-1.5 text-sm">Profile</div>
  <div className="px-2 py-1.5 text-sm">Settings</div>
  <Separator className="my-2" />
  <div className="px-2 py-1.5 text-sm text-destructive">Logout</div>
</div>`}
      >
        <div className="w-64 p-3 rounded-lg border border-border">
          <div className="px-2 py-1.5 text-sm font-medium">Menu</div>
          <Separator className="my-2" />
          <div className="px-2 py-1.5 text-sm">Profile</div>
          <div className="px-2 py-1.5 text-sm">Settings</div>
          <Separator className="my-2" />
          <div className="px-2 py-1.5 text-sm text-destructive">Logout</div>
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          { name: 'orientation', type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'The orientation of the separator.' },
          { name: 'decorative', type: 'boolean', default: 'true', description: 'Whether the separator is purely decorative (automatically set).' },
          { name: 'className', type: 'string', description: 'Additional CSS classes for custom styling.' },
        ]}
      />
    </div>
  );
}
