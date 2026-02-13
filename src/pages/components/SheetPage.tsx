import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
  Label,
  Input,
} from '@nicorp/nui';
import { Menu, Filter, Bell, Settings } from 'lucide-react';
import { useDocLang } from '../../i18n';

export default function SheetPage() {
  const { t } = useDocLang();
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Sheet</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.sheet.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.sheet.preview1Title')}
          description={t('pages.sheet.preview1Desc')}
          code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">
      <Menu className="mr-2 h-4 w-4" />
      Open Menu
    </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Navigation</SheetTitle>
      <SheetDescription>
        Browse through the menu items
      </SheetDescription>
    </SheetHeader>
    <div className="py-4 space-y-2">
      <Button variant="ghost" className="w-full justify-start">
        Dashboard
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        Projects
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        Team
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        Settings
      </Button>
    </div>
  </SheetContent>
</Sheet>`}
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Menu className="mr-2 h-4 w-4" />
                Open Menu
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>
                  Browse through the menu items
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  Dashboard
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Projects
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Team
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Settings
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.sheet.preview2Title')}
          description={t('pages.sheet.preview2Desc')}
          code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">
      <Filter className="mr-2 h-4 w-4" />
      Filters
    </Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Filter Products</SheetTitle>
      <SheetDescription>
        Narrow down search results
      </SheetDescription>
    </SheetHeader>
    <div className="py-6 space-y-4">
      <div className="space-y-2">
        <Label>Price Range</Label>
        <div className="flex gap-2">
          <Input type="number" placeholder="Min" />
          <Input type="number" placeholder="Max" />
        </div>
      </div>
      <div className="space-y-2">
        <Label>Category</Label>
        <select className="w-full rounded-md border px-3 py-2">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Books</option>
        </select>
      </div>
      <div className="space-y-2">
        <Label>Rating</Label>
        <div className="space-y-1">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-sm">4+ Stars</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-sm">3+ Stars</span>
          </label>
        </div>
      </div>
    </div>
    <SheetFooter>
      <Button variant="outline">Reset</Button>
      <Button>Apply Filters</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filter Products</SheetTitle>
                <SheetDescription>
                  Narrow down search results
                </SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-4">
                <div className="space-y-2">
                  <Label>Price Range</Label>
                  <div className="flex gap-2">
                    <Input type="number" placeholder="Min" />
                    <Input type="number" placeholder="Max" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Category</Label>
                  <select className="w-full rounded-md border px-3 py-2">
                    <option>All Categories</option>
                    <option>Electronics</option>
                    <option>Clothing</option>
                    <option>Books</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Rating</Label>
                  <div className="space-y-1">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span className="text-sm">4+ Stars</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span className="text-sm">3+ Stars</span>
                    </label>
                  </div>
                </div>
              </div>
              <SheetFooter>
                <Button variant="outline">Reset</Button>
                <Button>Apply Filters</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.sheet.preview3Title')}
          description={t('pages.sheet.preview3Desc')}
          code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">
      <Bell className="mr-2 h-4 w-4" />
      Notifications
    </Button>
  </SheetTrigger>
  <SheetContent side="bottom" className="h-[400px]">
    <SheetHeader>
      <SheetTitle>Notifications</SheetTitle>
      <SheetDescription>
        You have 3 unread notifications
      </SheetDescription>
    </SheetHeader>
    <div className="py-4 space-y-3">
      <div className="rounded-lg border p-3">
        <p className="text-sm font-medium">New message from John</p>
        <p className="text-xs text-muted-foreground">2 minutes ago</p>
      </div>
      <div className="rounded-lg border p-3">
        <p className="text-sm font-medium">Your report is ready</p>
        <p className="text-xs text-muted-foreground">1 hour ago</p>
      </div>
      <div className="rounded-lg border p-3">
        <p className="text-sm font-medium">Team meeting in 30 minutes</p>
        <p className="text-xs text-muted-foreground">5 hours ago</p>
      </div>
    </div>
  </SheetContent>
</Sheet>`}
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[400px]">
              <SheetHeader>
                <SheetTitle>Notifications</SheetTitle>
                <SheetDescription>
                  You have 3 unread notifications
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-3">
                <div className="rounded-lg border p-3">
                  <p className="text-sm font-medium">New message from John</p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
                <div className="rounded-lg border p-3">
                  <p className="text-sm font-medium">Your report is ready</p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
                <div className="rounded-lg border p-3">
                  <p className="text-sm font-medium">Team meeting in 30 minutes</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.sheet.preview4Title')}
          description={t('pages.sheet.preview4Desc')}
          code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Show Announcement</Button>
  </SheetTrigger>
  <SheetContent side="top" className="h-auto">
    <SheetHeader>
      <SheetTitle>🎉 New Feature Released!</SheetTitle>
      <SheetDescription>
        Check out our latest updates and improvements
      </SheetDescription>
    </SheetHeader>
    <div className="py-4 space-y-3">
      <p className="text-sm">
        We've just launched dark mode support across all components.
        Toggle between light and dark themes from the settings menu.
      </p>
      <Button className="w-full">Learn More</Button>
    </div>
  </SheetContent>
</Sheet>`}
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Show Announcement</Button>
            </SheetTrigger>
            <SheetContent side="top" className="h-auto">
              <SheetHeader>
                <SheetTitle>🎉 New Feature Released!</SheetTitle>
                <SheetDescription>
                  Check out our latest updates and improvements
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-3">
                <p className="text-sm">
                  We've just launched dark mode support across all components.
                  Toggle between light and dark themes from the settings menu.
                </p>
                <Button className="w-full">Learn More</Button>
              </div>
            </SheetContent>
          </Sheet>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.sheet.preview5Title')}
          description={t('pages.sheet.preview5Desc')}
          code={`<Sheet>
  <SheetTrigger asChild>
    <Button>
      <Settings className="mr-2 h-4 w-4" />
      Edit Profile
    </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile information
      </SheetDescription>
    </SheetHeader>
    <div className="py-6 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="John Doe" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" placeholder="@johndoe" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <textarea
          id="bio"
          className="w-full rounded-md border px-3 py-2 text-sm"
          rows={4}
          placeholder="Tell us about yourself..."
        />
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="outline">Cancel</Button>
      </SheetClose>
      <Button>Save Changes</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button>
                <Settings className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit Profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile information
                </SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="@johndoe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <textarea
                    id="bio"
                    className="w-full rounded-md border px-3 py-2 text-sm"
                    rows={4}
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">Cancel</Button>
                </SheetClose>
                <Button>Save Changes</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Sheet (Root)</h3>
              <PropsTable
                props={[
                  {
                    name: 'open',
                    type: 'boolean',
                    default: '-',
                    description: 'Controlled open state',
                  },
                  {
                    name: 'onOpenChange',
                    type: '(open: boolean) => void',
                    default: '-',
                    description: 'Callback when open state changes',
                  },
                  {
                    name: 'defaultOpen',
                    type: 'boolean',
                    default: 'false',
                    description: 'Uncontrolled default open state',
                  },
                ]}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">SheetContent</h3>
              <PropsTable
                props={[
                  {
                    name: 'side',
                    type: '"top" | "right" | "bottom" | "left"',
                    default: '"right"',
                    description: 'Side from which the sheet slides in',
                  },
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
                    description: 'Sheet content',
                  },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Four Directions:</strong> Slide from top, right, bottom, or left
            </li>
            <li>
              <strong>Built-in Close Button:</strong> X icon automatically positioned in top-right corner
            </li>
            <li>
              <strong>Responsive Width:</strong> Sidebar sheets use 75% width on mobile, max 384px on desktop
            </li>
            <li>
              <strong>Overlay Background:</strong> Dark overlay blocks interaction with page content
            </li>
            <li>
              <strong>Animated Transitions:</strong> Smooth slide-in/out animations with configurable duration
            </li>
            <li>
              <strong>Accessible:</strong> Full keyboard support with focus trap and escape key handling
            </li>
            <li>
              <strong>Structured Layout:</strong> Header and Footer components for consistent organization
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
