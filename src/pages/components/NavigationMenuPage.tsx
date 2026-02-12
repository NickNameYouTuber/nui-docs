import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@nicorp/nui';

export default function NavigationMenuPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">NavigationMenu</h1>
        <p className="text-xl text-muted-foreground">
          A complex dropdown navigation menu built with Radix UI featuring animated content and keyboard navigation.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Basic Navigation"
          description="Horizontal navigation with dropdown menus"
          code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 w-[400px]">
          <li>
            <a href="#" className="block p-3 rounded-md hover:bg-accent">
              <div className="font-medium">Analytics</div>
              <p className="text-sm text-muted-foreground">
                Track your metrics and growth
              </p>
            </a>
          </li>
          <li>
            <a href="#" className="block p-3 rounded-md hover:bg-accent">
              <div className="font-medium">Automation</div>
              <p className="text-sm text-muted-foreground">
                Streamline your workflows
              </p>
            </a>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
        About
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    <li>
                      <a href="#" className="block p-3 rounded-md hover:bg-accent">
                        <div className="font-medium">Analytics</div>
                        <p className="text-sm text-muted-foreground">
                          Track your metrics and growth
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-3 rounded-md hover:bg-accent">
                        <div className="font-medium">Automation</div>
                        <p className="text-sm text-muted-foreground">
                          Streamline your workflows
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-3 rounded-md hover:bg-accent">
                        <div className="font-medium">Integrations</div>
                        <p className="text-sm text-muted-foreground">
                          Connect with your tools
                        </p>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    <li>
                      <a href="#" className="block p-3 rounded-md hover:bg-accent">
                        <div className="font-medium">For Startups</div>
                        <p className="text-sm text-muted-foreground">
                          Scale your early-stage company
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-3 rounded-md hover:bg-accent">
                        <div className="font-medium">For Enterprise</div>
                        <p className="text-sm text-muted-foreground">
                          Enterprise-grade solutions
                        </p>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ComponentPreview>

        <ComponentPreview
          title="Rich Content Menu"
          description="Grid layout with featured items"
          code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Features</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid grid-cols-2 gap-4 p-4 w-[600px]">
          <div className="space-y-2">
            <h4 className="font-medium">Analytics</h4>
            <p className="text-sm text-muted-foreground">
              Real-time data visualization
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Security</h4>
            <p className="text-sm text-muted-foreground">
              Enterprise-grade protection
            </p>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-4 p-4 w-[600px]">
                    <div className="rounded-md border p-4 space-y-2 hover:bg-accent transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
                          📊
                        </div>
                        <h4 className="font-medium">Analytics</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Real-time data visualization and insights
                      </p>
                    </div>

                    <div className="rounded-md border p-4 space-y-2 hover:bg-accent transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
                          🔒
                        </div>
                        <h4 className="font-medium">Security</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Enterprise-grade protection for your data
                      </p>
                    </div>

                    <div className="rounded-md border p-4 space-y-2 hover:bg-accent transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
                          ⚡
                        </div>
                        <h4 className="font-medium">Performance</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Lightning-fast response times
                      </p>
                    </div>

                    <div className="rounded-md border p-4 space-y-2 hover:bg-accent transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
                          🔗
                        </div>
                        <h4 className="font-medium">Integrations</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Connect with 100+ tools and services
                      </p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ComponentPreview>

        <ComponentPreview
          title="With List Items"
          description="Traditional list-based dropdown"
          code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-2 p-4">
          <li>
            <NavigationMenuLink href="#" className="block p-2 rounded hover:bg-accent">
              Documentation
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink href="#" className="block p-2 rounded hover:bg-accent">
              API Reference
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4">
                    <li>
                      <NavigationMenuLink href="#" className="block p-2 rounded hover:bg-accent transition-colors">
                        📚 Documentation
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#" className="block p-2 rounded hover:bg-accent transition-colors">
                        🔧 API Reference
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#" className="block p-2 rounded hover:bg-accent transition-colors">
                        📝 Guides & Tutorials
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#" className="block p-2 rounded hover:bg-accent transition-colors">
                        💬 Community Forum
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#" className="block p-2 rounded hover:bg-accent transition-colors">
                        🎥 Video Tutorials
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ComponentPreview>

        <ComponentPreview
          title="Mixed Links and Triggers"
          description="Combining dropdown menus with direct links"
          code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 w-[400px]">
          <li>
            <a href="#" className="block p-3 rounded-md hover:bg-accent">
              Product A
            </a>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
        Pricing
      </NavigationMenuLink>
    </NavigationMenuItem>
    
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
        Blog
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    <li>
                      <a href="#" className="block p-3 rounded-md hover:bg-accent">
                        <div className="font-medium">Product A</div>
                        <p className="text-sm text-muted-foreground">Our flagship solution</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-3 rounded-md hover:bg-accent">
                        <div className="font-medium">Product B</div>
                        <p className="text-sm text-muted-foreground">For small teams</p>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                  Docs
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ComponentPreview>

        <ComponentPreview
          title="Full-Width Content"
          description="Wider content area for more complex layouts"
          code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="p-6 w-[700px]">
          <div className="grid grid-cols-3 gap-4">
            {/* Content items */}
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-6 w-[700px]">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Products & Services</h3>
                      <p className="text-sm text-muted-foreground">
                        Discover our complete range of solutions
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Development</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li><a href="#" className="hover:text-foreground">Web Apps</a></li>
                          <li><a href="#" className="hover:text-foreground">Mobile Apps</a></li>
                          <li><a href="#" className="hover:text-foreground">APIs</a></li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Design</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li><a href="#" className="hover:text-foreground">UI/UX</a></li>
                          <li><a href="#" className="hover:text-foreground">Branding</a></li>
                          <li><a href="#" className="hover:text-foreground">Illustrations</a></li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Marketing</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li><a href="#" className="hover:text-foreground">SEO</a></li>
                          <li><a href="#" className="hover:text-foreground">Content</a></li>
                          <li><a href="#" className="hover:text-foreground">Analytics</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Component Structure</h2>
          <p className="text-muted-foreground mb-4">
            NavigationMenu consists of the following sub-components:
          </p>
          <ul className="space-y-2 text-sm list-disc pl-5">
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">NavigationMenu</code> - Root component wrapper</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">NavigationMenuList</code> - Container for menu items</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">NavigationMenuItem</code> - Individual menu item wrapper</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">NavigationMenuTrigger</code> - Button that opens dropdown content</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">NavigationMenuContent</code> - Dropdown content container</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">NavigationMenuLink</code> - Direct link item</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">NavigationMenuViewport</code> - Automatically included viewport for animations</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">navigationMenuTriggerStyle</code> - CVA function for consistent trigger styling</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          
          <h3 className="text-lg font-semibold mb-2 mt-4">NavigationMenu (Root)</h3>
          <PropsTable
            props={[
              {
                name: 'orientation',
                type: '"horizontal" | "vertical"',
                default: '"horizontal"',
                description: 'Layout orientation',
              },
              {
                name: 'value',
                type: 'string',
                default: '-',
                description: 'Controlled open state value',
              },
              {
                name: 'defaultValue',
                type: 'string',
                default: '-',
                description: 'Default open state',
              },
              {
                name: 'delayDuration',
                type: 'number',
                default: '200',
                description: 'Delay before opening (ms)',
              },
            ]}
          />

          <h3 className="text-lg font-semibold mb-2 mt-6">NavigationMenuTrigger</h3>
          <PropsTable
            props={[
              {
                name: 'children',
                type: 'ReactNode',
                default: '-',
                description: 'Trigger button content',
              },
              {
                name: 'className',
                type: 'string',
                default: '-',
                description: 'Additional CSS classes',
              },
            ]}
          />

          <h3 className="text-lg font-semibold mb-2 mt-6">NavigationMenuContent</h3>
          <PropsTable
            props={[
              {
                name: 'children',
                type: 'ReactNode',
                default: '-',
                description: 'Dropdown content',
              },
              {
                name: 'className',
                type: 'string',
                default: '-',
                description: 'Additional CSS classes',
              },
            ]}
          />

          <h3 className="text-lg font-semibold mb-2 mt-6">NavigationMenuLink</h3>
          <PropsTable
            props={[
              {
                name: 'href',
                type: 'string',
                default: '-',
                description: 'Link URL',
              },
              {
                name: 'asChild',
                type: 'boolean',
                default: 'false',
                description: 'Use with Radix Slot for custom components',
              },
              {
                name: 'active',
                type: 'boolean',
                default: 'false',
                description: 'Active state styling',
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

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Radix UI Foundation:</strong> Built on Radix UI NavigationMenu primitive
            </li>
            <li>
              <strong>Animated Viewport:</strong> Content animates smoothly with height transitions
            </li>
            <li>
              <strong>Keyboard Navigation:</strong> Full arrow key, Tab, Enter, and Escape support
            </li>
            <li>
              <strong>ChevronDown Indicator:</strong> Rotates 180° when menu opens (group-data-[state=open])
            </li>
            <li>
              <strong>Flexible Content:</strong> Support any content in dropdowns (grids, lists, rich layouts)
            </li>
            <li>
              <strong>Mixed Navigation:</strong> Combine triggers with direct links using navigationMenuTriggerStyle
            </li>
            <li>
              <strong>Smart Positioning:</strong> Automatically positions content within viewport bounds
            </li>
            <li>
              <strong>Accessible:</strong> Proper ARIA attributes and semantic HTML
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
