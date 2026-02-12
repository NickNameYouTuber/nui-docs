import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@nicorp/nui';

export default function AccordionPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Accordion</h1>
        <p className="text-xl text-muted-foreground">
          A vertically stacked set of collapsible sections that allow users to hide or reveal content.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Basic Accordion"
          description="Default single-open accordion with FAQ items"
          code={`const [value, setValue] = useState("item-1")

<Accordion type="single" collapsible value={value} onValueChange={setValue}>
  <AccordionItem value="item-1">
    <AccordionTrigger>What is NUI?</AccordionTrigger>
    <AccordionContent>
      NUI is a comprehensive React component library built with TypeScript,
      Tailwind CSS, and Radix UI primitives.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>How do I install it?</AccordionTrigger>
    <AccordionContent>
      Install NUI using npm or pnpm: <code>npm install @nicorp/nui</code>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it customizable?</AccordionTrigger>
    <AccordionContent>
      Yes! All components accept className props and can be styled with
      Tailwind CSS classes or your custom CSS.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is NUI?</AccordionTrigger>
              <AccordionContent>
                NUI is a comprehensive React component library built with TypeScript,
                Tailwind CSS, and Radix UI primitives.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I install it?</AccordionTrigger>
              <AccordionContent>
                Install NUI using npm or pnpm: <code>npm install @nicorp/nui</code>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it customizable?</AccordionTrigger>
              <AccordionContent>
                Yes! All components accept className props and can be styled with
                Tailwind CSS classes or your custom CSS.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>

        <ComponentPreview
          title="Multiple Open"
          description="Allow multiple accordion items to be open simultaneously"
          code={`<Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Features</AccordionTrigger>
    <AccordionContent>
      TypeScript support, Accessible components, Dark mode ready
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Benefits</AccordionTrigger>
    <AccordionContent>
      Fast development, Consistent design, Production ready
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Support</AccordionTrigger>
    <AccordionContent>
      Documentation, Examples, Community support
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
            <AccordionItem value="item-1">
              <AccordionTrigger>Features</AccordionTrigger>
              <AccordionContent>
                TypeScript support, Accessible components, Dark mode ready
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Benefits</AccordionTrigger>
              <AccordionContent>
                Fast development, Consistent design, Production ready
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Support</AccordionTrigger>
              <AccordionContent>
                Documentation, Examples, Community support
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>

        <ComponentPreview
          title="Styled Variants"
          description="Custom styling with className"
          code={`<Accordion type="single" collapsible className="w-full rounded-lg border">
  <AccordionItem value="item-1" className="border-b-0 px-4">
    <AccordionTrigger className="hover:no-underline hover:text-primary">
      Premium Feature
    </AccordionTrigger>
    <AccordionContent className="text-muted-foreground">
      This is a premium feature with custom styling.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2" className="border-b-0 px-4">
    <AccordionTrigger className="hover:no-underline hover:text-primary">
      Enterprise Support
    </AccordionTrigger>
    <AccordionContent className="text-muted-foreground">
      24/7 support with dedicated account manager.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible className="w-full rounded-lg border">
            <AccordionItem value="item-1" className="border-b-0 px-4">
              <AccordionTrigger className="hover:no-underline hover:text-primary">
                Premium Feature
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                This is a premium feature with custom styling.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b-0 px-4">
              <AccordionTrigger className="hover:no-underline hover:text-primary">
                Enterprise Support
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                24/7 support with dedicated account manager.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>

        <ComponentPreview
          title="Nested Accordions"
          description="Accordions can be nested within accordion content"
          code={`<Accordion type="single" collapsible>
  <AccordionItem value="parent-1">
    <AccordionTrigger>Account Settings</AccordionTrigger>
    <AccordionContent>
      <Accordion type="single" collapsible className="border-l-2 pl-4">
        <AccordionItem value="child-1">
          <AccordionTrigger className="text-sm">Profile</AccordionTrigger>
          <AccordionContent className="text-sm">
            Update your profile information
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="child-2">
          <AccordionTrigger className="text-sm">Security</AccordionTrigger>
          <AccordionContent className="text-sm">
            Manage passwords and 2FA
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="parent-2">
    <AccordionTrigger>Preferences</AccordionTrigger>
    <AccordionContent>
      <Accordion type="single" collapsible className="border-l-2 pl-4">
        <AccordionItem value="child-3">
          <AccordionTrigger className="text-sm">Notifications</AccordionTrigger>
          <AccordionContent className="text-sm">
            Email and push notification settings
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible>
            <AccordionItem value="parent-1">
              <AccordionTrigger>Account Settings</AccordionTrigger>
              <AccordionContent>
                <Accordion type="single" collapsible className="border-l-2 pl-4">
                  <AccordionItem value="child-1">
                    <AccordionTrigger className="text-sm">Profile</AccordionTrigger>
                    <AccordionContent className="text-sm">
                      Update your profile information
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="child-2">
                    <AccordionTrigger className="text-sm">Security</AccordionTrigger>
                    <AccordionContent className="text-sm">
                      Manage passwords and 2FA
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="parent-2">
              <AccordionTrigger>Preferences</AccordionTrigger>
              <AccordionContent>
                <Accordion type="single" collapsible className="border-l-2 pl-4">
                  <AccordionItem value="child-3">
                    <AccordionTrigger className="text-sm">Notifications</AccordionTrigger>
                    <AccordionContent className="text-sm">
                      Email and push notification settings
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Accordion Props</h2>
            <PropsTable
              props={[
                {
                  name: 'type',
                  type: '"single" | "multiple"',
                  default: '-',
                  description: 'Whether only one or multiple items can be open at once',
                },
                {
                  name: 'collapsible',
                  type: 'boolean',
                  default: 'false',
                  description: 'When type="single", allow closing the open item',
                },
                {
                  name: 'value',
                  type: 'string | string[]',
                  default: '-',
                  description: 'Controlled value (string for single, array for multiple)',
                },
                {
                  name: 'defaultValue',
                  type: 'string | string[]',
                  default: '-',
                  description: 'Default opened items (uncontrolled)',
                },
                {
                  name: 'onValueChange',
                  type: '(value: string | string[]) => void',
                  default: '-',
                  description: 'Callback when opened items change',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Disable all accordion items',
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
            <h2 className="text-2xl font-semibold mb-4">AccordionItem Props</h2>
            <PropsTable
              props={[
                {
                  name: 'value',
                  type: 'string',
                  default: '-',
                  description: 'Unique identifier for this item (required)',
                },
                {
                  name: 'disabled',
                  type: 'boolean',
                  default: 'false',
                  description: 'Disable this specific item',
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
            <h2 className="text-2xl font-semibold mb-4">AccordionTrigger Props</h2>
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
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">AccordionContent Props</h2>
            <PropsTable
              props={[
                {
                  name: 'children',
                  type: 'ReactNode',
                  default: '-',
                  description: 'Content to show when expanded',
                },
                {
                  name: 'className',
                  type: 'string',
                  default: '-',
                  description: 'Additional CSS classes for inner wrapper',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
