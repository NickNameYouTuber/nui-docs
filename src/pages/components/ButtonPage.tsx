import { Button } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { useDocLang } from '../../i18n';
import { Mail, Loader2, ChevronRight, Download } from 'lucide-react';

export function ButtonPage() {
  const { t } = useDocLang();

  return (
    <div>
      <PageHeader
        title="Button"
        description={t('pages.button.desc')}
        badge={t('common.badgeAtom')}
      />

      <ComponentPreview
        title={t('common.variants')}
        description={t('pages.button.variantsDesc')}
        code={`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
      >
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </ComponentPreview>

      <ComponentPreview
        title={t('common.sizes')}
        description={t('pages.button.sizesDesc')}
        code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="icon"><Mail /></Button>`}
      >
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
        <Button size="icon"><Mail className="h-4 w-4" /></Button>
      </ComponentPreview>

      <ComponentPreview
        title={t('common.withIcon')}
        description={t('pages.button.withIconDesc')}
        code={`<Button>
  <Mail className="mr-2 h-4 w-4" /> Login with Email
</Button>
<Button variant="outline">
  <Download className="mr-2 h-4 w-4" /> Download
</Button>
<Button variant="secondary">
  Next <ChevronRight className="ml-2 h-4 w-4" />
</Button>`}
      >
        <Button><Mail className="mr-2 h-4 w-4" /> Login with Email</Button>
        <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Download</Button>
        <Button variant="secondary">Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
      </ComponentPreview>

      <ComponentPreview
        title={t('common.loadingState')}
        description={t('pages.button.loadingDesc')}
        code={`<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`}
      >
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
        </Button>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.button.brandGlow')}
        description={t('pages.button.brandGlowDesc')}
        code={`<Button variant="brand">Brand</Button>
<Button variant="glow">Glow</Button>`}
      >
        <Button variant="brand">Brand</Button>
        <Button variant="glow">Glow</Button>
      </ComponentPreview>

      <PropsTable
        props={[
          { name: 'variant', type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "brand" | "glow"', default: '"default"', description: 'The visual style of the button.' },
          { name: 'size', type: '"default" | "sm" | "lg" | "xl" | "icon"', default: '"default"', description: 'The size of the button.' },
          { name: 'asChild', type: 'boolean', default: 'false', description: 'Render as a Slot, delegating props to the child element.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents interaction and applies disabled styling.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes to apply.' },
        ]}
      />
    </div>
  );
}
