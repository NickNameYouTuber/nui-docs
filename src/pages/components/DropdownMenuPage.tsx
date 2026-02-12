import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
  DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem,
  DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
  Button,
} from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { User, Settings, LogOut, CreditCard, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function DropdownMenuPage() {
  const [bookmarks, setBookmarks] = useState(true);
  const [urls, setUrls] = useState(false);

  return (
    <div>
      <PageHeader
        title="Dropdown Menu"
        description="A dropdown menu with items, submenus, checkboxes, and radio groups. Built on Radix UI DropdownMenu."
        badge="Overlay"
      />

      <ComponentPreview
        title="Basic Menu"
        code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">
      Account <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-48">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <User className="mr-2 h-4 w-4" /> Profile
    </DropdownMenuItem>
    <DropdownMenuItem>
      <CreditCard className="mr-2 h-4 w-4" /> Billing
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Settings className="mr-2 h-4 w-4" /> Settings
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-destructive">
      <LogOut className="mr-2 h-4 w-4" /> Log out
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Account <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" /> Billing
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <LogOut className="mr-2 h-4 w-4" /> Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ComponentPreview>

      <ComponentPreview
        title="With Checkboxes"
        code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Options</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuCheckboxItem
      checked={bookmarks}
      onCheckedChange={setBookmarks}
    >
      Show Bookmarks
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem
      checked={urls}
      onCheckedChange={setUrls}
    >
      Show Full URLs
    </DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Options</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem checked={bookmarks} onCheckedChange={setBookmarks}>
              Show Bookmarks
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={urls} onCheckedChange={setUrls}>
              Show Full URLs
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ComponentPreview>

      <PropsTable
        title="DropdownMenuItem Props"
        props={[
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents interaction.' },
          { name: 'onSelect', type: '(e: Event) => void', description: 'Called when the item is selected.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
        ]}
      />
    </div>
  );
}
