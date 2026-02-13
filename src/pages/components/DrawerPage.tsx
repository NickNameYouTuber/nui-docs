import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { useDocLang } from '../../i18n';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  Button,
} from '@nicorp/nui';
import { Menu } from 'lucide-react';

export default function DrawerPage() {
  const { t } = useDocLang();
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Drawer</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.drawer.desc')}
        </p>
        <div className="mt-4 p-4 rounded-lg border border-blue-500/50 bg-blue-500/10">
          <p className="text-sm">
            <strong>Note:</strong> Drawer is an alias for the Sheet component. All props and behavior are identical.
            See the <a href="/components/sheet" className="text-primary hover:underline">Sheet documentation</a> for
            full details.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.drawer.preview1Title')}
          description={t('pages.drawer.preview1Desc')}
          code={`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">
      <Menu className="mr-2 h-4 w-4" />
      Open Drawer
    </Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Drawer Title</DrawerTitle>
      <DrawerDescription>
        This is a drawer component.
      </DrawerDescription>
    </DrawerHeader>
    <div className="p-4">
      <p>Drawer content goes here.</p>
    </div>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">Close</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}
        >
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">
                <Menu className="mr-2 h-4 w-4" />
                Open Drawer
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Drawer Title</DrawerTitle>
                <DrawerDescription>This is a drawer component.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  Drawer content goes here. This component is an alias for Sheet and supports all the same props
                  and features.
                </p>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.drawer.preview2Title')}
          description={t('pages.drawer.preview2Desc')}
          code={`<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Right Drawer</Button>
  </DrawerTrigger>
  <DrawerContent side="right">
    <DrawerHeader>
      <DrawerTitle>Settings</DrawerTitle>
      <DrawerDescription>Manage your preferences</DrawerDescription>
    </DrawerHeader>
    <div className="p-4 space-y-4">
      {/* Settings content */}
    </div>
  </DrawerContent>
</Drawer>`}
        >
          <Drawer>
            <DrawerTrigger asChild>
              <Button>Open Right Drawer</Button>
            </DrawerTrigger>
            <DrawerContent side="right">
              <DrawerHeader>
                <DrawerTitle>Settings</DrawerTitle>
                <DrawerDescription>Manage your preferences</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Notifications</h4>
                  <p className="text-sm text-muted-foreground">Enable push notifications</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Theme</h4>
                  <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.drawer.preview3Title')}
          description={t('pages.drawer.preview3Desc')}
          code={`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="ghost" size="icon">
      <Menu className="h-5 w-5" />
    </Button>
  </DrawerTrigger>
  <DrawerContent side="left">
    <DrawerHeader>
      <DrawerTitle>Navigation</DrawerTitle>
    </DrawerHeader>
    <div className="p-4">
      <nav className="space-y-2">
        <a href="#" className="block py-2 hover:text-primary">Home</a>
        <a href="#" className="block py-2 hover:text-primary">About</a>
        <a href="#" className="block py-2 hover:text-primary">Services</a>
        <a href="#" className="block py-2 hover:text-primary">Contact</a>
      </nav>
    </div>
  </DrawerContent>
</Drawer>`}
        >
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent side="left">
              <DrawerHeader>
                <DrawerTitle>Navigation</DrawerTitle>
              </DrawerHeader>
              <div className="p-4">
                <nav className="space-y-2">
                  <a href="#" className="block py-2 text-sm hover:text-primary">
                    Home
                  </a>
                  <a href="#" className="block py-2 text-sm hover:text-primary">
                    About
                  </a>
                  <a href="#" className="block py-2 text-sm hover:text-primary">
                    Services
                  </a>
                  <a href="#" className="block py-2 text-sm hover:text-primary">
                    Contact
                  </a>
                </nav>
              </div>
            </DrawerContent>
          </Drawer>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Component Aliases</h2>
          <p className="text-muted-foreground mb-4">
            Drawer components are direct aliases for Sheet components:
          </p>
          <div className="grid gap-2 text-sm">
            <div className="grid grid-cols-2 gap-4 py-2 border-b">
              <code className="px-2 py-1 bg-muted rounded">Drawer</code>
              <span className="text-muted-foreground">→ Sheet</span>
            </div>
            <div className="grid grid-cols-2 gap-4 py-2 border-b">
              <code className="px-2 py-1 bg-muted rounded">DrawerTrigger</code>
              <span className="text-muted-foreground">→ SheetTrigger</span>
            </div>
            <div className="grid grid-cols-2 gap-4 py-2 border-b">
              <code className="px-2 py-1 bg-muted rounded">DrawerContent</code>
              <span className="text-muted-foreground">→ SheetContent</span>
            </div>
            <div className="grid grid-cols-2 gap-4 py-2 border-b">
              <code className="px-2 py-1 bg-muted rounded">DrawerHeader</code>
              <span className="text-muted-foreground">→ SheetHeader</span>
            </div>
            <div className="grid grid-cols-2 gap-4 py-2 border-b">
              <code className="px-2 py-1 bg-muted rounded">DrawerTitle</code>
              <span className="text-muted-foreground">→ SheetTitle</span>
            </div>
            <div className="grid grid-cols-2 gap-4 py-2 border-b">
              <code className="px-2 py-1 bg-muted rounded">DrawerDescription</code>
              <span className="text-muted-foreground">→ SheetDescription</span>
            </div>
            <div className="grid grid-cols-2 gap-4 py-2 border-b">
              <code className="px-2 py-1 bg-muted rounded">DrawerFooter</code>
              <span className="text-muted-foreground">→ SheetFooter</span>
            </div>
            <div className="grid grid-cols-2 gap-4 py-2">
              <code className="px-2 py-1 bg-muted rounded">DrawerClose</code>
              <span className="text-muted-foreground">→ SheetClose</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <p className="text-muted-foreground mb-4">
            See the <a href="/components/sheet" className="text-primary hover:underline">Sheet documentation</a> for
            detailed props information. DrawerContent supports the same <code className="bg-muted px-1 py-0.5 rounded">side</code> prop:
          </p>
          <PropsTable
            props={[
              {
                name: 'side',
                type: '"top" | "right" | "bottom" | "left"',
                default: '"right"',
                description: 'Side from which the drawer slides in',
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
              <strong>Sheet Alias:</strong> All Sheet features available (overlay, animations, etc.)
            </li>
            <li>
              <strong>4 Directions:</strong> Slide from top, right, bottom, or left
            </li>
            <li>
              <strong>Mobile Friendly:</strong> Perfect for mobile navigation patterns
            </li>
            <li>
              <strong>Radix Dialog:</strong> Built on Radix UI Dialog primitive
            </li>
            <li>
              <strong>Keyboard Support:</strong> ESC to close, focus trap
            </li>
            <li>
              <strong>Accessible:</strong> Proper ARIA attributes and roles
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
