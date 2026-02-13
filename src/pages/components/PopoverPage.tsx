import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { useDocLang } from '../../i18n';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
  Label,
  Input,
  Calendar,
} from '@nicorp/nui';
import { Settings, Filter } from 'lucide-react';
import { format } from 'date-fns';

export default function PopoverPage() {
  const { t } = useDocLang();
  const [date, setDate] = useState<Date>();
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState(true);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Popover</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.popover.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.popover.preview1Title')}
          description={t('pages.popover.preview1Desc')}
          code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-medium">Info</h4>
      <p className="text-sm text-muted-foreground">
        This is a popover with some helpful information.
      </p>
    </div>
  </PopoverContent>
</Popover>`}
        >
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="space-y-2">
                <h4 className="font-medium">Info</h4>
                <p className="text-sm text-muted-foreground">
                  This is a popover with some helpful information.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.popover.preview2Title')}
          description={t('pages.popover.preview2Desc')}
          code={`const [email, setEmail] = useState('');

<Popover>
  <PopoverTrigger asChild>
    <Button>Add Email</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="font-medium">Add Email Address</h4>
        <p className="text-sm text-muted-foreground">
          Enter your email to receive notifications
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button className="w-full">Save Email</Button>
    </div>
  </PopoverContent>
</Popover>`}
        >
          <Popover>
            <PopoverTrigger asChild>
              <Button>Add Email</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Add Email Address</h4>
                  <p className="text-sm text-muted-foreground">
                    Enter your email to receive notifications
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button className="w-full">Save Email</Button>
              </div>
            </PopoverContent>
          </Popover>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.popover.preview3Title')}
          description={t('pages.popover.preview3Desc')}
          code={`const [date, setDate] = useState<Date>();

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      {date ? format(date, 'PPP') : 'Pick a date'}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0" align="start">
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
    />
  </PopoverContent>
</Popover>`}
        >
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                {date ? format(date, 'PPP') : 'Pick a date'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
              />
            </PopoverContent>
          </Popover>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.popover.preview4Title')}
          description={t('pages.popover.preview4Desc')}
          code={`const [notifications, setNotifications] = useState(true);

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" size="icon">
      <Settings className="h-4 w-4" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="font-medium">Settings</h4>
        <p className="text-sm text-muted-foreground">
          Manage your preferences
        </p>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="notifications">Notifications</Label>
          <input
            id="notifications"
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
            className="h-4 w-4"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="language">Language</Label>
          <select
            id="language"
            className="w-full rounded-md border px-3 py-2 text-sm"
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>
      <Button className="w-full">Save Settings</Button>
    </div>
  </PopoverContent>
</Popover>`}
        >
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Settings</h4>
                  <p className="text-sm text-muted-foreground">
                    Manage your preferences
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications">Notifications</Label>
                    <input
                      id="notifications"
                      type="checkbox"
                      checked={notifications}
                      onChange={(e) => setNotifications(e.target.checked)}
                      className="h-4 w-4"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <select
                      id="language"
                      className="w-full rounded-md border px-3 py-2 text-sm"
                    >
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                </div>
                <Button className="w-full">Save Settings</Button>
              </div>
            </PopoverContent>
          </Popover>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.popover.preview5Title')}
          description={t('pages.popover.preview5Desc')}
          code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      <Filter className="mr-2 h-4 w-4" />
      Filters
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-80" align="start">
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="font-medium">Filter Results</h4>
        <p className="text-sm text-muted-foreground">
          Narrow down your search
        </p>
      </div>
      <div className="space-y-3">
        <div className="space-y-2">
          <Label>Status</Label>
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" defaultChecked />
              Active
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" defaultChecked />
              Pending
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              Completed
            </label>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="priority">Priority</Label>
          <select
            id="priority"
            className="w-full rounded-md border px-3 py-2 text-sm"
          >
            <option>All</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" className="flex-1">Reset</Button>
        <Button className="flex-1">Apply</Button>
      </div>
    </div>
  </PopoverContent>
</Popover>`}
        >
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" align="start">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Filter Results</h4>
                  <p className="text-sm text-muted-foreground">
                    Narrow down your search
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <div className="space-y-1">
                      <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" defaultChecked />
                        Active
                      </label>
                      <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" defaultChecked />
                        Pending
                      </label>
                      <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" />
                        Completed
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <select
                      id="priority"
                      className="w-full rounded-md border px-3 py-2 text-sm"
                    >
                      <option>All</option>
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">Reset</Button>
                  <Button className="flex-1">Apply</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Popover (Root)</h3>
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
                  {
                    name: 'modal',
                    type: 'boolean',
                    default: 'false',
                    description: 'When true, interaction with outside elements is disabled',
                  },
                ]}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">PopoverContent</h3>
              <PropsTable
                props={[
                  {
                    name: 'align',
                    type: '"start" | "center" | "end"',
                    default: '"center"',
                    description: 'Alignment relative to trigger',
                  },
                  {
                    name: 'side',
                    type: '"top" | "right" | "bottom" | "left"',
                    default: '"bottom"',
                    description: 'Side of trigger to position on',
                  },
                  {
                    name: 'sideOffset',
                    type: 'number',
                    default: '4',
                    description: 'Distance from trigger in pixels',
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
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Smart Positioning:</strong> Automatically repositions to stay within viewport
            </li>
            <li>
              <strong>Collision Detection:</strong> Avoids overflow with automatic side switching
            </li>
            <li>
              <strong>Portal Rendering:</strong> Renders in document body for proper z-index layering
            </li>
            <li>
              <strong>Accessible:</strong> Full keyboard navigation and screen reader support
            </li>
            <li>
              <strong>Customizable:</strong> Control width, padding, and alignment easily
            </li>
            <li>
              <strong>Animated:</strong> Smooth entrance and exit animations
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
