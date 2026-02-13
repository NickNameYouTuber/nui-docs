import { Tabs, TabsContent, TabsList, TabsTrigger, Card, CardContent } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { useDocLang } from '~/i18n';

export function TabsPage() {
  const { t } = useDocLang();
  
  return (
    <div>
      <PageHeader
        title="Tabs"
        description={t('pages.tabs.desc')}
        badge="Navigation"
      />

      <ComponentPreview
        title={t('pages.tabs.basicTabs')}
        code={`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <p>Overview content goes here.</p>
  </TabsContent>
  <TabsContent value="analytics">
    <p>Analytics content goes here.</p>
  </TabsContent>
  <TabsContent value="settings">
    <p>Settings content goes here.</p>
  </TabsContent>
</Tabs>`}
      >
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">Overview content goes here. This is the default active tab.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">Analytics dashboard content.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">Settings panel content.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </ComponentPreview>

      <PropsTable
        title="Tabs Props"
        props={[
          { name: 'defaultValue', type: 'string', description: 'The value of the tab that is initially active.' },
          { name: 'value', type: 'string', description: 'Controlled active tab value.' },
          { name: 'onValueChange', type: '(value: string) => void', description: 'Callback when the active tab changes.' },
          { name: 'orientation', type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'The orientation of the tabs.' },
        ]}
      />
    </div>
  );
}
