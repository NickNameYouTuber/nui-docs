import { useState } from 'react';
import { Checkbox, Switch, Label } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { useDocLang } from '~/i18n';

export function CheckboxSwitchPage() {
  const { t } = useDocLang();
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);

  return (
    <div>
      <PageHeader
        title="Checkbox & Switch"
        description={t('pages.checkboxSwitch.desc')}
        badge={t('common.badgeAtom')}
      />

      {/* Checkbox */}
      <h2 className="text-xl font-semibold mb-4">Checkbox</h2>

      <ComponentPreview
        title={t('pages.checkboxSwitch.preview1Title')}
        code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
      >
        <div className="flex items-center gap-2">
          <Checkbox id="terms" checked={checked1} onCheckedChange={(v) => setChecked1(!!v)} />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.checkboxSwitch.preview2Title')}
        code={`<Checkbox />
<Checkbox checked />
<Checkbox disabled />
<Checkbox checked disabled />`}
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Checkbox id="c1" />
            <Label htmlFor="c1" className="text-sm">Unchecked</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="c2" checked />
            <Label htmlFor="c2" className="text-sm">Checked</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="c3" disabled />
            <Label htmlFor="c3" className="text-sm">Disabled</Label>
          </div>
        </div>
      </ComponentPreview>

      <PropsTable
        title="Checkbox Props"
        props={[
          { name: 'checked', type: 'boolean | "indeterminate"', description: 'Controlled checked state.' },
          { name: 'defaultChecked', type: 'boolean', description: 'Default checked state (uncontrolled).' },
          { name: 'onCheckedChange', type: '(checked: boolean | "indeterminate") => void', description: 'Called when checked state changes.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents interaction.' },
          { name: 'required', type: 'boolean', description: 'Marks as required in a form.' },
        ]}
      />

      {/* Switch */}
      <h2 className="text-xl font-semibold mb-4 mt-10">Switch</h2>

      <ComponentPreview
        title={t('pages.checkboxSwitch.preview3Title')}
        code={`<div className="flex items-center gap-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>`}
      >
        <div className="flex items-center gap-2">
          <Switch id="notifications" checked={switch1} onCheckedChange={setSwitch1} />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.checkboxSwitch.preview4Title')}
        code={`<div className="space-y-4">
  <div className="flex items-center justify-between">
    <Label htmlFor="dark-mode">Dark mode</Label>
    <Switch id="dark-mode" />
  </div>
  <div className="flex items-center justify-between">
    <Label htmlFor="emails">Email notifications</Label>
    <Switch id="emails" />
  </div>
</div>`}
      >
        <div className="space-y-4 w-full max-w-xs">
          <div className="flex items-center justify-between">
            <Label htmlFor="dm">Dark mode</Label>
            <Switch id="dm" checked={switch2} onCheckedChange={setSwitch2} />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="em">Email notifications</Label>
            <Switch id="em" />
          </div>
        </div>
      </ComponentPreview>

      <PropsTable
        title="Switch Props"
        props={[
          { name: 'checked', type: 'boolean', description: 'Controlled on/off state.' },
          { name: 'defaultChecked', type: 'boolean', description: 'Default state (uncontrolled).' },
          { name: 'onCheckedChange', type: '(checked: boolean) => void', description: 'Called when state changes.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents interaction.' },
        ]}
      />
    </div>
  );
}
