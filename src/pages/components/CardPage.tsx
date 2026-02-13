import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
  Button, Badge
} from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { useDocLang } from '~/i18n';

export function CardPage() {
  const { t } = useDocLang();
  return (
    <div>
      <PageHeader
        title="Card"
        description={t('pages.card.desc')}
        badge={t('common.badgeAtom')}
      />

      <ComponentPreview
        title={t('pages.card.preview1Title')}
        code={`<Card>
  <CardHeader>
    <CardTitle>Project Alpha</CardTitle>
    <CardDescription>A brief description of the project</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
      >
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Project Alpha</CardTitle>
            <CardDescription>A brief description of the project</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">This card demonstrates the default variant with all sections.</p>
          </CardContent>
          <CardFooter>
            <Button size="sm">View Details</Button>
          </CardFooter>
        </Card>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.card.preview2Title')}
        description={t('pages.card.preview2Desc')}
        code={`<Card variant="default">Default</Card>
<Card variant="elevated">Elevated</Card>
<Card variant="glass">Glass</Card>
<Card variant="ghost">Ghost</Card>`}
      >
        <div className="grid grid-cols-2 gap-3 w-full">
          {(['default', 'elevated', 'glass', 'ghost'] as const).map((v) => (
            <Card key={v} variant={v} className="p-4">
              <CardTitle className="text-sm mb-1">{v.charAt(0).toUpperCase() + v.slice(1)}</CardTitle>
              <CardDescription className="text-xs">variant="{v}"</CardDescription>
            </Card>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Card with Badge"
        code={`<Card>
  <CardHeader>
    <div className="flex items-center justify-between">
      <CardTitle>Analytics</CardTitle>
      <Badge variant="secondary">New</Badge>
    </div>
    <CardDescription>Track your metrics</CardDescription>
  </CardHeader>
</Card>`}
      >
        <Card className="w-full max-w-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Analytics</CardTitle>
              <Badge variant="secondary">New</Badge>
            </div>
            <CardDescription>Track your metrics</CardDescription>
          </CardHeader>
        </Card>
      </ComponentPreview>

      <PropsTable
        title="Card Props"
        props={[
          { name: 'variant', type: '"default" | "elevated" | "glass" | "ghost"', default: '"default"', description: 'The visual style of the card.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
          { name: 'children', type: 'ReactNode', required: true, description: 'Card content — typically CardHeader, CardContent, CardFooter.' },
        ]}
      />
    </div>
  );
}
