import { Input } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { Search, Mail } from 'lucide-react';
import { useDocLang } from '~/i18n';

export function InputPage() {
  const { t } = useDocLang();
  return (
    <div>
      <PageHeader
        title="Input"
        description={t('pages.input.desc')}
        badge={t('common.badgeAtom')}
      />

      <ComponentPreview
        title={t('pages.input.preview1Title')}
        code={`<Input placeholder="Enter your email..." />`}
      >
        <Input placeholder="Enter your email..." className="max-w-sm" />
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.input.preview2Title')}
        description={t('pages.input.preview2Desc')}
        code={`<Input variant="default" placeholder="Default" />
<Input variant="filled" placeholder="Filled" />
<Input variant="glow" placeholder="Glow" />
<Input variant="ghost" placeholder="Ghost" />`}
      >
        <div className="space-y-3 w-full max-w-sm">
          <Input variant="default" placeholder="Default" />
          <Input variant="filled" placeholder="Filled" />
          <Input variant="glow" placeholder="Glow" />
          <Input variant="ghost" placeholder="Ghost" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.input.preview3Title')}
        code={`<Input inputSize="sm" placeholder="Small" />
<Input inputSize="default" placeholder="Default" />
<Input inputSize="lg" placeholder="Large" />`}
      >
        <div className="space-y-3 w-full max-w-sm">
          <Input inputSize="sm" placeholder="Small" />
          <Input inputSize="default" placeholder="Default" />
          <Input inputSize="lg" placeholder="Large" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.input.preview4Title')}
        code={`<Input disabled placeholder="Disabled input" />`}
      >
        <Input disabled placeholder="Disabled input" className="max-w-sm" />
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.input.preview5Title')}
        code={`<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="Amount" />`}
      >
        <div className="space-y-3 w-full max-w-sm">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="number" placeholder="Amount" />
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          { name: 'variant', type: '"default" | "filled" | "glow" | "ghost"', default: '"default"', description: 'The visual style of the input.' },
          { name: 'inputSize', type: '"default" | "sm" | "lg"', default: '"default"', description: 'The height of the input. Uses inputSize to avoid conflict with native size attribute.' },
          { name: 'type', type: 'string', default: '"text"', description: 'The native HTML input type.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents interaction.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
        ]}
      />
    </div>
  );
}
