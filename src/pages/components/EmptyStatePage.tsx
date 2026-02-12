import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { EmptyState, Button } from '@nicorp/nui';
import { Inbox, Search, Database, FolderOpen, Package, FileText, Image } from 'lucide-react';

export default function EmptyStatePage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">EmptyState</h1>
        <p className="text-xl text-muted-foreground">
          A simple component for displaying empty states with optional icon, title, description, and action.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Basic Empty State"
          description="Simple empty state with title only"
          code={`<EmptyState title="No items found" />`}
        >
          <EmptyState title="No items found" />
        </ComponentPreview>

        <ComponentPreview
          title="With Description"
          description="Empty state with additional context"
          code={`<EmptyState
  title="No items yet"
  description="Get started by creating your first item"
/>`}
        >
          <EmptyState
            title="No items yet"
            description="Get started by creating your first item"
          />
        </ComponentPreview>

        <ComponentPreview
          title="With Icon"
          description="Using lucide-react icon"
          code={`import { Inbox } from 'lucide-react';

<EmptyState
  icon={<Inbox className="h-12 w-12" />}
  title="All caught up!"
  description="You have no new messages"
/>`}
        >
          <EmptyState
            icon={<Inbox className="h-12 w-12" />}
            title="All caught up!"
            description="You have no new messages"
          />
        </ComponentPreview>

        <ComponentPreview
          title="With Action Button"
          description="Empty state with call-to-action"
          code={`import { Database } from 'lucide-react';

<EmptyState
  icon={<Database className="h-12 w-12" />}
  title="No data available"
  description="Start by importing your first dataset"
  action={
    <Button>
      Import Data
    </Button>
  }
/>`}
        >
          <EmptyState
            icon={<Database className="h-12 w-12" />}
            title="No data available"
            description="Start by importing your first dataset"
            action={
              <Button onClick={() => alert('Import clicked')}>
                Import Data
              </Button>
            }
          />
        </ComponentPreview>

        <ComponentPreview
          title="Search Results"
          description="Empty state for no search results"
          code={`import { Search } from 'lucide-react';

<EmptyState
  icon={<Search className="h-12 w-12" />}
  title="No results found"
  description="Try adjusting your search or filter to find what you're looking for"
  action={
    <Button variant="outline">
      Clear Filters
    </Button>
  }
/>`}
        >
          <EmptyState
            icon={<Search className="h-12 w-12" />}
            title="No results found"
            description="Try adjusting your search or filter to find what you're looking for"
            action={
              <Button variant="outline" onClick={() => alert('Filters cleared')}>
                Clear Filters
              </Button>
            }
          />
        </ComponentPreview>

        <ComponentPreview
          title="Empty Folder"
          description="Empty state for folder view"
          code={`import { FolderOpen } from 'lucide-react';

<EmptyState
  icon={<FolderOpen className="h-12 w-12" />}
  title="This folder is empty"
  description="Drag and drop files here or click the button below"
  action={
    <div className="flex gap-2">
      <Button>Upload Files</Button>
      <Button variant="outline">Create Folder</Button>
    </div>
  }
/>`}
        >
          <EmptyState
            icon={<FolderOpen className="h-12 w-12" />}
            title="This folder is empty"
            description="Drag and drop files here or click the button below"
            action={
              <div className="flex gap-2">
                <Button onClick={() => alert('Upload clicked')}>Upload Files</Button>
                <Button variant="outline" onClick={() => alert('Create folder clicked')}>
                  Create Folder
                </Button>
              </div>
            }
          />
        </ComponentPreview>

        <ComponentPreview
          title="Different Icons"
          description="Examples with various icon choices"
          code={`import { Package, FileText, Image } from 'lucide-react';

<div className="space-y-8">
  <EmptyState
    icon={<Package className="h-12 w-12" />}
    title="No products"
    description="Add your first product to get started"
  />
  
  <EmptyState
    icon={<FileText className="h-12 w-12" />}
    title="No documents"
    description="Create a new document"
  />
  
  <EmptyState
    icon={<Image className="h-12 w-12" />}
    title="No images"
    description="Upload your first image"
  />
</div>`}
        >
          <div className="space-y-12 border rounded-lg p-6">
            <EmptyState
              icon={<Package className="h-12 w-12" />}
              title="No products"
              description="Add your first product to get started"
            />

            <div className="border-t" />

            <EmptyState
              icon={<FileText className="h-12 w-12" />}
              title="No documents"
              description="Create a new document"
            />

            <div className="border-t" />

            <EmptyState
              icon={<Image className="h-12 w-12" />}
              title="No images"
              description="Upload your first image"
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Custom Styling"
          description="Empty state with custom className"
          code={`<EmptyState
  icon={<Inbox className="h-16 w-16" />}
  title="No notifications"
  description="You're all up to date"
  className="py-20 bg-muted/30 rounded-lg"
/>`}
        >
          <EmptyState
            icon={<Inbox className="h-16 w-16" />}
            title="No notifications"
            description="You're all up to date"
            className="py-20 bg-muted/30 rounded-lg"
          />
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              {
                name: 'icon',
                type: 'ReactNode',
                default: '-',
                description: 'Optional icon (typically lucide-react icon)',
              },
              {
                name: 'title',
                type: 'string',
                default: '-',
                description: 'Main heading text (required)',
              },
              {
                name: 'description',
                type: 'string',
                default: '-',
                description: 'Additional description text',
              },
              {
                name: 'action',
                type: 'ReactNode',
                default: '-',
                description: 'Action button or custom content',
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
          <h2 className="text-2xl font-semibold mb-4">Usage Examples</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Empty List</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<EmptyState
  title="No items yet"
  description="Get started by creating your first item"
  action={<Button>Add Item</Button>}
/>`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">No Search Results</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<EmptyState
  icon={<Search className="h-12 w-12" />}
  title="No results found"
  description="Try adjusting your search"
  action={<Button variant="outline">Clear Search</Button>}
/>`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Empty Inbox</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<EmptyState
  icon={<Inbox className="h-12 w-12" />}
  title="All caught up!"
  description="You have no new messages"
/>`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Multiple Actions</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<EmptyState
  icon={<FolderOpen className="h-12 w-12" />}
  title="This folder is empty"
  description="Upload files or create a new folder"
  action={
    <div className="flex gap-2">
      <Button>Upload</Button>
      <Button variant="outline">New Folder</Button>
    </div>
  }
/>`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Simple API:</strong> Easy-to-use props for common empty state patterns
            </li>
            <li>
              <strong>Centered Layout:</strong> Automatically centers content with py-12 padding
            </li>
            <li>
              <strong>Optional Icon:</strong> Supports any ReactNode, typically lucide-react icons
            </li>
            <li>
              <strong>Title Required:</strong> Ensures every empty state has clear messaging
            </li>
            <li>
              <strong>Description Support:</strong> Optional additional context with max-w-sm constraint
            </li>
            <li>
              <strong>Action Slot:</strong> Flexible slot for buttons or custom CTAs with mt-4 spacing
            </li>
            <li>
              <strong>Fully Composable:</strong> Each slot can contain custom content
            </li>
            <li>
              <strong>Accessible:</strong> Semantic HTML structure with proper heading levels
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
