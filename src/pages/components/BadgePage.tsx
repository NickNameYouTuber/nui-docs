import { Badge } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { useDocLang } from '../../i18n';

export function BadgePage() {
  const { t } = useDocLang();

  return (
    <div>
      <PageHeader
        title="Badge"
        description={t('pages.badge.desc')}
        badge={t('common.badgeAtom')}
      />

      <ComponentPreview
        title={t('common.variants')}
        code={`<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
      >
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.badge.useCases')}
        description={t('pages.badge.useCasesDesc')}
        code={`<Badge>Active</Badge>
<Badge variant="secondary">v0.1.7</Badge>
<Badge variant="outline">React</Badge>
<Badge variant="destructive">Critical</Badge>`}
      >
        <Badge>Active</Badge>
        <Badge variant="secondary">v0.1.7</Badge>
        <Badge variant="outline">React</Badge>
        <Badge variant="destructive">Critical</Badge>
      </ComponentPreview>

      <PropsTable
        props={[
          { name: 'variant', type: '"default" | "secondary" | "destructive" | "outline"', default: '"default"', description: 'The visual style.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
        ]}
      />
    </div>
  );
}
