import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage as BreadcrumbPageItem,
  BreadcrumbSeparator,
} from '@nicorp/nui';
import { Home, ChevronRight, Slash } from 'lucide-react';
import { useDocLang } from '../../i18n';

export default function BreadcrumbPage() {
  const { t } = useDocLang();
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Breadcrumb</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.breadcrumb.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.breadcrumb.preview1Title')}
          description={t('pages.breadcrumb.preview1Desc')}
          code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPageItem>Breadcrumb</BreadcrumbPageItem>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
        >
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPageItem>Breadcrumb</BreadcrumbPageItem>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.breadcrumb.preview2Title')}
          description={t('pages.breadcrumb.preview2Desc')}
          code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">
        <Home className="h-4 w-4" />
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPageItem>Breadcrumb</BreadcrumbPageItem>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
        >
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <Home className="h-4 w-4" />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPageItem>Breadcrumb</BreadcrumbPageItem>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.breadcrumb.preview3Title')}
          description={t('pages.breadcrumb.preview3Desc')}
          code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/projects/my-app">My App</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPageItem>Settings</BreadcrumbPageItem>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
        >
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/projects/my-app">My App</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPageItem>Settings</BreadcrumbPageItem>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ComponentPreview>

        <ComponentPreview
          title="Custom Separators"
          description="Use custom separator icons or text"
          code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <Slash className="h-4 w-4" />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <Slash className="h-4 w-4" />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPageItem>Latest Post</BreadcrumbPageItem>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
        >
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPageItem>Latest Post</BreadcrumbPageItem>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Components</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">BreadcrumbLink</h3>
              <PropsTable
                props={[
                  {
                    name: 'asChild',
                    type: 'boolean',
                    default: 'false',
                    description: 'Use with Radix Slot for custom components (Next.js Link, React Router)',
                  },
                  {
                    name: 'href',
                    type: 'string',
                    default: '-',
                    description: 'URL for the breadcrumb link',
                  },
                  {
                    name: 'className',
                    type: 'string',
                    default: '-',
                    description: 'Additional CSS classes',
                  },
                ]}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">BreadcrumbPage</h3>
              <PropsTable
                props={[
                  {
                    name: 'children',
                    type: 'ReactNode',
                    default: '-',
                    description: 'Current page name',
                  },
                  {
                    name: 'className',
                    type: 'string',
                    default: '-',
                    description: 'Additional CSS classes',
                  },
                ]}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">BreadcrumbSeparator</h3>
              <PropsTable
                props={[
                  {
                    name: 'children',
                    type: 'ReactNode',
                    default: '<ChevronRight />',
                    description: 'Custom separator icon or text',
                  },
                  {
                    name: 'className',
                    type: 'string',
                    default: '-',
                    description: 'Additional CSS classes',
                  },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Usage with React Router</h3>
          <pre className="text-sm bg-background p-4 rounded-md overflow-x-auto">
            <code>{`import { Link } from 'react-router-dom';

<BreadcrumbLink asChild>
  <Link to="/dashboard">Dashboard</Link>
</BreadcrumbLink>`}</code>
          </pre>
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Semantic HTML:</strong> Uses proper nav/ol/li structure for accessibility
            </li>
            <li>
              <strong>ARIA Attributes:</strong> Includes aria-label, aria-current, aria-disabled for screen readers
            </li>
            <li>
              <strong>Router Integration:</strong> Works seamlessly with React Router, Next.js, and other routers via asChild prop
            </li>
            <li>
              <strong>Customizable Separators:</strong> Default ChevronRight or use custom icons/text
            </li>
            <li>
              <strong>Ellipsis Support:</strong> BreadcrumbEllipsis for collapsed long trails
            </li>
            <li>
              <strong>Responsive:</strong> Adjusts gap spacing on mobile vs desktop
            </li>
            <li>
              <strong>Hover States:</strong> Links show hover effects with smooth transitions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
