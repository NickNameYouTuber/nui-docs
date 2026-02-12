import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@nicorp/nui';
import { File, Folder, Image, FileText, Code } from 'lucide-react';
import { useState } from 'react';

export default function ContextMenuPage() {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showUrls, setShowUrls] = useState(false);
  const [textSize, setTextSize] = useState('medium');

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">ContextMenu</h1>
        <p className="text-xl text-muted-foreground">
          A right-click context menu with support for items, checkboxes, radio groups, and nested submenus.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Basic Context Menu"
          description="Right-click anywhere in the box to open the context menu"
          code={`<ContextMenu>
  <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border border-dashed">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem>
      View
    </ContextMenuItem>
    <ContextMenuItem>
      Edit
    </ContextMenuItem>
    <ContextMenuItem>
      Download
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem className="text-destructive">
      Delete
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
        >
          <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border border-dashed text-sm">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem>View</ContextMenuItem>
              <ContextMenuItem>Edit</ContextMenuItem>
              <ContextMenuItem>Download</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem className="text-destructive">Delete</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </ComponentPreview>

        <ComponentPreview
          title="With Icons and Shortcuts"
          description="Context menu with icons and keyboard shortcuts"
          code={`<ContextMenu>
  <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border border-dashed">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem>
      <File className="mr-2 h-4 w-4" />
      New File
      <ContextMenuShortcut>⌘N</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      <Folder className="mr-2 h-4 w-4" />
      New Folder
      <ContextMenuShortcut>⌘⇧N</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>
      Copy
      <ContextMenuShortcut>⌘C</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      Paste
      <ContextMenuShortcut>⌘V</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem className="text-destructive">
      Delete
      <ContextMenuShortcut>⌫</ContextMenuShortcut>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
        >
          <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border border-dashed text-sm">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem>
                <File className="mr-2 h-4 w-4" />
                New File
                <ContextMenuShortcut>⌘N</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <Folder className="mr-2 h-4 w-4" />
                New Folder
                <ContextMenuShortcut>⌘⇧N</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>
                Copy
                <ContextMenuShortcut>⌘C</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Paste
                <ContextMenuShortcut>⌘V</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem className="text-destructive">
                Delete
                <ContextMenuShortcut>⌫</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </ComponentPreview>

        <ComponentPreview
          title="Nested Submenus"
          description="Context menu with multi-level nested submenus"
          code={`<ContextMenu>
  <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border border-dashed">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem>Open</ContextMenuItem>
    <ContextMenuSub>
      <ContextMenuSubTrigger>
        <File className="mr-2 h-4 w-4" />
        New
      </ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>
          <FileText className="mr-2 h-4 w-4" />
          Text File
        </ContextMenuItem>
        <ContextMenuItem>
          <Code className="mr-2 h-4 w-4" />
          Code File
        </ContextMenuItem>
        <ContextMenuItem>
          <Image className="mr-2 h-4 w-4" />
          Image
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>More Options</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>Markdown</ContextMenuItem>
            <ContextMenuItem>JSON</ContextMenuItem>
            <ContextMenuItem>YAML</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuItem>Properties</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
        >
          <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border border-dashed text-sm">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem>Open</ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <File className="mr-2 h-4 w-4" />
                  New
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-48">
                  <ContextMenuItem>
                    <FileText className="mr-2 h-4 w-4" />
                    Text File
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <Code className="mr-2 h-4 w-4" />
                    Code File
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <Image className="mr-2 h-4 w-4" />
                    Image
                  </ContextMenuItem>
                  <ContextMenuSub>
                    <ContextMenuSubTrigger>More Options</ContextMenuSubTrigger>
                    <ContextMenuSubContent className="w-48">
                      <ContextMenuItem>Markdown</ContextMenuItem>
                      <ContextMenuItem>JSON</ContextMenuItem>
                      <ContextMenuItem>YAML</ContextMenuItem>
                    </ContextMenuSubContent>
                  </ContextMenuSub>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSeparator />
              <ContextMenuItem>Properties</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </ComponentPreview>

        <ComponentPreview
          title="With Checkboxes"
          description="Context menu with checkbox items for toggling options"
          code={`const [showBookmarks, setShowBookmarks] = useState(true);
const [showUrls, setShowUrls] = useState(false);

<ContextMenu>
  <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border border-dashed">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuLabel>View Options</ContextMenuLabel>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem
      checked={showBookmarks}
      onCheckedChange={setShowBookmarks}
    >
      Show Bookmarks Bar
    </ContextMenuCheckboxItem>
    <ContextMenuCheckboxItem
      checked={showUrls}
      onCheckedChange={setShowUrls}
    >
      Show Full URLs
    </ContextMenuCheckboxItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Reset to Default</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
        >
          <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border border-dashed text-sm">
              <div className="text-center">
                <div>Right click here</div>
                <div className="mt-2 text-xs text-muted-foreground">
                  Bookmarks: {showBookmarks ? 'On' : 'Off'} | URLs: {showUrls ? 'On' : 'Off'}
                </div>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuLabel>View Options</ContextMenuLabel>
              <ContextMenuSeparator />
              <ContextMenuCheckboxItem
                checked={showBookmarks}
                onCheckedChange={setShowBookmarks}
              >
                Show Bookmarks Bar
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem
                checked={showUrls}
                onCheckedChange={setShowUrls}
              >
                Show Full URLs
              </ContextMenuCheckboxItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Reset to Default</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </ComponentPreview>

        <ComponentPreview
          title="With Radio Groups"
          description="Context menu with radio groups for mutually exclusive choices"
          code={`const [textSize, setTextSize] = useState('medium');

<ContextMenu>
  <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border border-dashed">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuLabel>Text Size</ContextMenuLabel>
    <ContextMenuSeparator />
    <ContextMenuRadioGroup value={textSize} onValueChange={setTextSize}>
      <ContextMenuRadioItem value="small">
        Small
      </ContextMenuRadioItem>
      <ContextMenuRadioItem value="medium">
        Medium
      </ContextMenuRadioItem>
      <ContextMenuRadioItem value="large">
        Large
      </ContextMenuRadioItem>
    </ContextMenuRadioGroup>
    <ContextMenuSeparator />
    <ContextMenuItem>More Settings...</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
        >
          <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border border-dashed text-sm">
              <div className="text-center">
                <div>Right click here</div>
                <div className="mt-2 text-xs text-muted-foreground">
                  Current size: {textSize}
                </div>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuLabel>Text Size</ContextMenuLabel>
              <ContextMenuSeparator />
              <ContextMenuRadioGroup value={textSize} onValueChange={setTextSize}>
                <ContextMenuRadioItem value="small">Small</ContextMenuRadioItem>
                <ContextMenuRadioItem value="medium">Medium</ContextMenuRadioItem>
                <ContextMenuRadioItem value="large">Large</ContextMenuRadioItem>
              </ContextMenuRadioGroup>
              <ContextMenuSeparator />
              <ContextMenuItem>More Settings...</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </ComponentPreview>

        <ComponentPreview
          title="File Browser Example"
          description="Real-world example: file browser with comprehensive context menu"
          code={`<ContextMenu>
  <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border bg-muted/40">
    <div className="text-center space-y-2">
      <Folder className="h-12 w-12 mx-auto text-muted-foreground" />
      <p className="text-sm font-medium">My Documents</p>
      <p className="text-xs text-muted-foreground">Right click for actions</p>
    </div>
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem>
      <Folder className="mr-2 h-4 w-4" />
      Open
    </ContextMenuItem>
    <ContextMenuItem>
      Open in New Window
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuSub>
      <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>Email Link</ContextMenuItem>
        <ContextMenuItem>Copy Link</ContextMenuItem>
        <ContextMenuItem>Share to Team</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSub>
      <ContextMenuSubTrigger>Move to</ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>Desktop</ContextMenuItem>
        <ContextMenuItem>Downloads</ContextMenuItem>
        <ContextMenuItem>Projects</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Choose Folder...</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuItem>
      Rename
      <ContextMenuShortcut>F2</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      Copy
      <ContextMenuShortcut>⌘C</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      Cut
      <ContextMenuShortcut>⌘X</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem className="text-destructive">
      Delete
      <ContextMenuShortcut>⌫</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Properties</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
        >
          <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border bg-muted/40">
              <div className="text-center space-y-2">
                <Folder className="h-12 w-12 mx-auto text-muted-foreground" />
                <p className="text-sm font-medium">My Documents</p>
                <p className="text-xs text-muted-foreground">Right click for actions</p>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem>
                <Folder className="mr-2 h-4 w-4" />
                Open
              </ContextMenuItem>
              <ContextMenuItem>Open in New Window</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-48">
                  <ContextMenuItem>Email Link</ContextMenuItem>
                  <ContextMenuItem>Copy Link</ContextMenuItem>
                  <ContextMenuItem>Share to Team</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSub>
                <ContextMenuSubTrigger>Move to</ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-48">
                  <ContextMenuItem>Desktop</ContextMenuItem>
                  <ContextMenuItem>Downloads</ContextMenuItem>
                  <ContextMenuItem>Projects</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Choose Folder...</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSeparator />
              <ContextMenuItem>
                Rename
                <ContextMenuShortcut>F2</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Copy
                <ContextMenuShortcut>⌘C</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Cut
                <ContextMenuShortcut>⌘X</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem className="text-destructive">
                Delete
                <ContextMenuShortcut>⌫</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Properties</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Components</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">ContextMenuItem</h3>
              <PropsTable
                props={[
                  {
                    name: 'inset',
                    type: 'boolean',
                    default: 'false',
                    description: 'Add left padding for icons/checkboxes',
                  },
                  {
                    name: 'disabled',
                    type: 'boolean',
                    default: 'false',
                    description: 'Disable the menu item',
                  },
                  {
                    name: 'onSelect',
                    type: '(e: Event) => void',
                    default: '-',
                    description: 'Callback when item is selected',
                  },
                ]}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">ContextMenuCheckboxItem</h3>
              <PropsTable
                props={[
                  {
                    name: 'checked',
                    type: 'boolean',
                    default: 'false',
                    description: 'Checked state',
                  },
                  {
                    name: 'onCheckedChange',
                    type: '(checked: boolean) => void',
                    default: '-',
                    description: 'Callback when checked state changes',
                  },
                  {
                    name: 'disabled',
                    type: 'boolean',
                    default: 'false',
                    description: 'Disable the checkbox item',
                  },
                ]}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">ContextMenuRadioGroup</h3>
              <PropsTable
                props={[
                  {
                    name: 'value',
                    type: 'string',
                    default: '-',
                    description: 'Currently selected value',
                  },
                  {
                    name: 'onValueChange',
                    type: '(value: string) => void',
                    default: '-',
                    description: 'Callback when value changes',
                  },
                ]}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">ContextMenuSubTrigger</h3>
              <PropsTable
                props={[
                  {
                    name: 'inset',
                    type: 'boolean',
                    default: 'false',
                    description: 'Add left padding to align with items',
                  },
                  {
                    name: 'disabled',
                    type: 'boolean',
                    default: 'false',
                    description: 'Disable the submenu trigger',
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
              <strong>Right-Click Activation:</strong> Opens on right-click/long-press on touch devices
            </li>
            <li>
              <strong>Keyboard Navigation:</strong> Arrow keys, Enter, and Escape support
            </li>
            <li>
              <strong>Nested Submenus:</strong> Unlimited nesting depth with ChevronRight indicators
            </li>
            <li>
              <strong>Checkboxes & Radio Groups:</strong> Built-in support for toggles and selections
            </li>
            <li>
              <strong>Keyboard Shortcuts:</strong> Display shortcuts with ContextMenuShortcut component
            </li>
            <li>
              <strong>Smart Positioning:</strong> Auto-repositions to stay within viewport
            </li>
            <li>
              <strong>Accessible:</strong> Full ARIA support with proper roles and focus management
            </li>
            <li>
              <strong>Customizable:</strong> Inset prop for icon alignment, flexible width control
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
