import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { AppShell, Sidebar, Header, Main, Button } from '@nicorp/nui';
import { useDocLang } from '../../i18n';

export default function AppShellPage() {
  const { t } = useDocLang();
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">AppShell</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.appShell.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.appShell.preview1Title')}
          description={t('pages.appShell.preview1Desc')}
          code={`<AppShell>
  <Sidebar>
    <div className="flex h-14 items-center border-b px-6">
      <h2 className="font-semibold">My App</h2>
    </div>
    <div className="flex-1 p-4">
      <nav className="space-y-2">
        <a href="#" className="block px-3 py-2 rounded hover:bg-accent">Dashboard</a>
        <a href="#" className="block px-3 py-2 rounded hover:bg-accent">Settings</a>
      </nav>
    </div>
  </Sidebar>
  <div className="flex flex-col">
    <Header>
      <h1 className="text-lg font-semibold">Dashboard</h1>
    </Header>
    <Main>
      <p>Main content area</p>
    </Main>
  </div>
</AppShell>`}
        >
          <div className="border rounded-lg overflow-hidden" style={{ height: '400px' }}>
            <AppShell>
              <Sidebar>
                <div className="flex h-14 items-center border-b px-6">
                  <h2 className="font-semibold">My App</h2>
                </div>
                <div className="flex-1 p-4">
                  <nav className="space-y-2">
                    <a href="#" className="block px-3 py-2 rounded hover:bg-accent">Dashboard</a>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-accent">Projects</a>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-accent">Team</a>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-accent">Settings</a>
                  </nav>
                </div>
              </Sidebar>
              <div className="flex flex-col">
                <Header>
                  <h1 className="text-lg font-semibold">Dashboard</h1>
                </Header>
                <Main>
                  <p className="text-muted-foreground">Main content area</p>
                </Main>
              </div>
            </AppShell>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.appShell.preview2Title')}
          description={t('pages.appShell.preview2Desc')}
          code={`<AppShell>
  <Sidebar>
    {/* Sidebar content */}
  </Sidebar>
  <div className="flex flex-col">
    <Header>
      <h1 className="text-lg font-semibold">Projects</h1>
      <div className="ml-auto flex gap-2">
        <Button variant="outline">Settings</Button>
        <Button>Create Project</Button>
      </div>
    </Header>
    <Main>
      {/* Content */}
    </Main>
  </div>
</AppShell>`}
        >
          <div className="border rounded-lg overflow-hidden" style={{ height: '400px' }}>
            <AppShell>
              <Sidebar>
                <div className="flex h-14 items-center border-b px-6">
                  <h2 className="font-semibold">My App</h2>
                </div>
                <div className="flex-1 p-4">
                  <nav className="space-y-2">
                    <a href="#" className="block px-3 py-2 rounded hover:bg-accent">Dashboard</a>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-accent">Projects</a>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-accent">Team</a>
                  </nav>
                </div>
              </Sidebar>
              <div className="flex flex-col">
                <Header>
                  <h1 className="text-lg font-semibold">Projects</h1>
                  <div className="ml-auto flex gap-2">
                    <Button variant="outline" size="sm">Settings</Button>
                    <Button size="sm">Create Project</Button>
                  </div>
                </Header>
                <Main>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="rounded-lg border p-4">
                        <h3 className="font-semibold mb-2">Project {i}</h3>
                        <p className="text-sm text-muted-foreground">Description</p>
                      </div>
                    ))}
                  </div>
                </Main>
              </div>
            </AppShell>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Sidebar with Footer"
          description="App shell with sidebar containing a footer section"
          code={`<AppShell>
  <Sidebar>
    <div className="flex h-14 items-center border-b px-6">
      <h2 className="font-semibold">My App</h2>
    </div>
    <div className="flex-1 p-4">
      <nav className="space-y-2">
        {/* Navigation items */}
      </nav>
    </div>
    <div className="border-t p-4">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-primary" />
        <div className="flex-1">
          <p className="text-sm font-medium">John Doe</p>
          <p className="text-xs text-muted-foreground">john@example.com</p>
        </div>
      </div>
    </div>
  </Sidebar>
  <div className="flex flex-col">
    <Header>
      <h1 className="text-lg font-semibold">Settings</h1>
    </Header>
    <Main>
      {/* Content */}
    </Main>
  </div>
</AppShell>`}
        >
          <div className="border rounded-lg overflow-hidden" style={{ height: '400px' }}>
            <AppShell>
              <Sidebar>
                <div className="flex h-14 items-center border-b px-6">
                  <h2 className="font-semibold">My App</h2>
                </div>
                <div className="flex-1 p-4">
                  <nav className="space-y-2">
                    <a href="#" className="block px-3 py-2 rounded hover:bg-accent">Dashboard</a>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-accent">Settings</a>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-accent">Help</a>
                  </nav>
                </div>
                <div className="border-t p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">John Doe</p>
                      <p className="text-xs text-muted-foreground truncate">john@example.com</p>
                    </div>
                  </div>
                </div>
              </Sidebar>
              <div className="flex flex-col">
                <Header>
                  <h1 className="text-lg font-semibold">Settings</h1>
                </Header>
                <Main>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="font-semibold mb-2">Profile Settings</h3>
                      <p className="text-sm text-muted-foreground">Manage your profile information</p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h3 className="font-semibold mb-2">Account Settings</h3>
                      <p className="text-sm text-muted-foreground">Configure account preferences</p>
                    </div>
                  </div>
                </Main>
              </div>
            </AppShell>
          </div>
        </ComponentPreview>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">AppShell Props</h2>
            <PropsTable
              props={[
                {
                  name: 'className',
                  type: 'string',
                  default: '-',
                  description: 'Additional CSS classes for the root container',
                },
                {
                  name: 'children',
                  type: 'ReactNode',
                  default: '-',
                  description: 'Should contain Sidebar and a div with Header + Main',
                },
              ]}
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Sidebar Props</h2>
            <PropsTable
              props={[
                {
                  name: 'className',
                  type: 'string',
                  default: '-',
                  description: 'Additional CSS classes',
                },
                {
                  name: 'children',
                  type: 'ReactNode',
                  default: '-',
                  description: 'Sidebar content (logo, navigation, footer)',
                },
              ]}
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Header Props</h2>
            <PropsTable
              props={[
                {
                  name: 'className',
                  type: 'string',
                  default: '-',
                  description: 'Additional CSS classes',
                },
                {
                  name: 'children',
                  type: 'ReactNode',
                  default: '-',
                  description: 'Header content (title, breadcrumbs, actions)',
                },
              ]}
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Main Props</h2>
            <PropsTable
              props={[
                {
                  name: 'className',
                  type: 'string',
                  default: '-',
                  description: 'Additional CSS classes',
                },
                {
                  name: 'children',
                  type: 'ReactNode',
                  default: '-',
                  description: 'Page content',
                },
              ]}
            />
          </div>
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Layout Structure</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Grid Layout:</strong> Uses CSS Grid with responsive columns (280px sidebar on lg+ screens)
            </li>
            <li>
              <strong>Sidebar:</strong> Hidden on mobile (&lt; lg), fixed 280px width on desktop, with muted background
            </li>
            <li>
              <strong>Header:</strong> Fixed height (60px on lg+, 56px on mobile), with border bottom
            </li>
            <li>
              <strong>Main:</strong> Flexible main content area with padding and gap spacing
            </li>
            <li>
              <strong>Responsive:</strong> Sidebar automatically hides on mobile devices for better UX
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
