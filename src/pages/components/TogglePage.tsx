import { useState } from 'react';
import { Toggle } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { Bold, Italic, Underline } from 'lucide-react';
import { useDocLang } from '~/i18n';

export function TogglePage() {
  const { t } = useDocLang();
  const [pressed1, setPressed1] = useState(false);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  return (
    <div>
      <PageHeader
        title="Toggle"
        description={t('pages.toggle.desc')}
        badge={t('common.badgeAtom')}
      />

      <ComponentPreview
        title={t('pages.toggle.preview1Title')}
        code={`const [pressed, setPressed] = useState(false);

<Toggle pressed={pressed} onPressedChange={setPressed}>
  <Bold className="h-4 w-4" />
</Toggle>`}
      >
        <Toggle pressed={pressed1} onPressedChange={setPressed1}>
          <Bold className="h-4 w-4" />
        </Toggle>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.toggle.preview2Title')}
        code={`<Toggle variant="default">
  <Bold className="h-4 w-4" />
</Toggle>

<Toggle variant="outline">
  <Italic className="h-4 w-4" />
</Toggle>`}
      >
        <div className="flex gap-2">
          <Toggle variant="default">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle variant="outline">
            <Italic className="h-4 w-4" />
          </Toggle>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.toggle.preview3Title')}
        code={`<Toggle size="sm">
  <Bold className="h-3 w-3" />
</Toggle>

<Toggle size="default">
  <Bold className="h-4 w-4" />
</Toggle>

<Toggle size="lg">
  <Bold className="h-5 w-5" />
</Toggle>`}
      >
        <div className="flex items-center gap-2">
          <Toggle size="sm">
            <Bold className="h-3 w-3" />
          </Toggle>
          <Toggle size="default">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle size="lg">
            <Bold className="h-5 w-5" />
          </Toggle>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.toggle.preview4Title')}
        code={`<Toggle>
  <Bold className="h-4 w-4 mr-2" />
  Bold
</Toggle>`}
      >
        <div className="flex gap-2">
          <Toggle>
            <Bold className="h-4 w-4 mr-2" />
            Bold
          </Toggle>
          <Toggle variant="outline">
            <Italic className="h-4 w-4 mr-2" />
            Italic
          </Toggle>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Text Formatting Toolbar"
        code={`const [bold, setBold] = useState(false);
const [italic, setItalic] = useState(false);
const [underline, setUnderline] = useState(false);

<div className="flex gap-1">
  <Toggle pressed={bold} onPressedChange={setBold}>
    <Bold className="h-4 w-4" />
  </Toggle>
  <Toggle pressed={italic} onPressedChange={setItalic}>
    <Italic className="h-4 w-4" />
  </Toggle>
  <Toggle pressed={underline} onPressedChange={setUnderline}>
    <Underline className="h-4 w-4" />
  </Toggle>
</div>`}
      >
        <div>
          <div className="flex gap-1 mb-2">
            <Toggle pressed={bold} onPressedChange={setBold}>
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle pressed={italic} onPressedChange={setItalic}>
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle pressed={underline} onPressedChange={setUnderline}>
              <Underline className="h-4 w-4" />
            </Toggle>
          </div>
          <p className="text-sm text-muted-foreground">
            Active: {[bold && 'Bold', italic && 'Italic', underline && 'Underline'].filter(Boolean).join(', ') || 'None'}
          </p>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Disabled State"
        code={`<Toggle disabled>
  <Bold className="h-4 w-4" />
</Toggle>`}
      >
        <Toggle disabled>
          <Bold className="h-4 w-4" />
        </Toggle>
      </ComponentPreview>

      <PropsTable
        props={[
          { name: 'pressed', type: 'boolean', description: 'Controlled pressed state.' },
          { name: 'defaultPressed', type: 'boolean', default: 'false', description: 'Default pressed state for uncontrolled usage.' },
          { name: 'onPressedChange', type: '(pressed: boolean) => void', description: 'Callback when pressed state changes.' },
          { name: 'variant', type: '"default" | "outline"', default: '"default"', description: 'Visual style variant.' },
          { name: 'size', type: '"default" | "sm" | "lg"', default: '"default"', description: 'Size of the toggle button.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents interaction.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
        ]}
      />
    </div>
  );
}
