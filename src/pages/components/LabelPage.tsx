import { Label, Input, Checkbox } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { useDocLang } from '~/i18n';

export function LabelPage() {
  const { t } = useDocLang();
  return (
    <div>
      <PageHeader
        title="Label"
        description={t('pages.label.desc')}
        badge={t('common.badgeAtom')}
      />

      <ComponentPreview
        title={t('pages.label.preview1Title')}
        code={`<div className="grid gap-2">
  <Label htmlFor="email">Email address</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`}
      >
        <div className="grid gap-2 w-full max-w-sm">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.label.preview2Title')}
        description={t('pages.label.preview2Desc')}
        code={`<div className="grid gap-2">
  <Label htmlFor="disabled-input">Disabled Field</Label>
  <Input id="disabled-input" disabled placeholder="Cannot be edited" />
</div>`}
      >
        <div className="grid gap-2 w-full max-w-sm">
          <Label htmlFor="disabled-input">Disabled Field</Label>
          <Input id="disabled-input" disabled placeholder="Cannot be edited" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.label.preview3Title')}
        code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
      >
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Multiple Fields"
        code={`<div className="space-y-4 w-full max-w-sm">
  <div className="grid gap-2">
    <Label htmlFor="name">Full Name</Label>
    <Input id="name" placeholder="John Doe" />
  </div>
  <div className="grid gap-2">
    <Label htmlFor="username">Username</Label>
    <Input id="username" placeholder="@johndoe" />
  </div>
</div>`}
      >
        <div className="space-y-4 w-full max-w-sm">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="@johndoe" />
          </div>
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          { name: 'htmlFor', type: 'string', description: 'Associates the label with an input element by ID. Essential for accessibility.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
          { name: 'children', type: 'ReactNode', required: true, description: 'Label text or content.' },
        ]}
      />
    </div>
  );
}
