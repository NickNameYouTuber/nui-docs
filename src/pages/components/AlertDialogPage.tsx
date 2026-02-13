import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from '@nicorp/nui';
import { useDocLang } from '../../i18n';

export default function AlertDialogPage() {
  const { t } = useDocLang();
  const [loading, setLoading] = useState(false);

  const handleAsyncDelete = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    alert('Item deleted successfully!');
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">AlertDialog</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.alertDialog.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.alertDialog.preview1Title')}
          description={t('pages.alertDialog.preview1Desc')}
          code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Save Changes</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Save Changes</AlertDialogTitle>
      <AlertDialogDescription>
        Are you sure you want to save these changes? This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Save</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
        >
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Save Changes</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Save Changes</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to save these changes? This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Save</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.alertDialog.preview2Title')}
          description={t('pages.alertDialog.preview2Desc')}
          code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your
        account and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
        Delete Account
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
        >
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete Account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  Delete Account
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.alertDialog.preview3Title')}
          description={t('pages.alertDialog.preview3Desc')}
          code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button>Subscribe to Newsletter</Button>
  </AlertDialogTrigger>
  <AlertDialogContent className="max-w-md">
    <AlertDialogHeader>
      <AlertDialogTitle className="text-2xl">
        🎉 Welcome to Our Newsletter!
      </AlertDialogTitle>
      <AlertDialogDescription className="text-base">
        Get the latest updates, exclusive content, and special offers
        delivered directly to your inbox. You can unsubscribe at any time.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter className="mt-4">
      <AlertDialogCancel>Maybe Later</AlertDialogCancel>
      <AlertDialogAction>Subscribe Now</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
        >
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>Subscribe to Newsletter</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-md">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl">
                  🎉 Welcome to Our Newsletter!
                </AlertDialogTitle>
                <AlertDialogDescription className="text-base">
                  Get the latest updates, exclusive content, and special offers
                  delivered directly to your inbox. You can unsubscribe at any time.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="mt-4">
                <AlertDialogCancel>Maybe Later</AlertDialogCancel>
                <AlertDialogAction>Subscribe Now</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.alertDialog.preview4Title')}
          description={t('pages.alertDialog.preview4Desc')}
          code={`const [loading, setLoading] = useState(false);

const handleAsyncDelete = async () => {
  setLoading(true);
  await new Promise(resolve => setTimeout(resolve, 2000));
  setLoading(false);
  alert('Item deleted successfully!');
};

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Delete Item</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete Item</AlertDialogTitle>
      <AlertDialogDescription>
        This will permanently delete the item. This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
      <AlertDialogAction
        onClick={(e) => {
          e.preventDefault();
          handleAsyncDelete();
        }}
        disabled={loading}
      >
        {loading ? 'Deleting...' : 'Delete'}
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
        >
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Delete Item</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Item</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently delete the item. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={(e) => {
                    e.preventDefault();
                    handleAsyncDelete();
                  }}
                  disabled={loading}
                >
                  {loading ? 'Deleting...' : 'Delete'}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Components</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">AlertDialog (Root)</h3>
              <PropsTable
                props={[
                  {
                    name: 'open',
                    type: 'boolean',
                    default: 'false',
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
              <h3 className="text-lg font-semibold mb-3">AlertDialogContent</h3>
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
                    description: 'Dialog content',
                  },
                ]}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">AlertDialogAction</h3>
              <PropsTable
                props={[
                  {
                    name: 'onClick',
                    type: '(e: MouseEvent) => void',
                    default: '-',
                    description: 'Click handler (automatically closes dialog)',
                  },
                  {
                    name: 'className',
                    type: 'string',
                    default: '-',
                    description: 'Additional CSS classes (Button variants)',
                  },
                  {
                    name: 'disabled',
                    type: 'boolean',
                    default: 'false',
                    description: 'Disable the action button',
                  },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Component Structure</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>AlertDialog:</strong> Root component, manages open/close state
            </li>
            <li>
              <strong>AlertDialogTrigger:</strong> Button or element that opens the dialog
            </li>
            <li>
              <strong>AlertDialogContent:</strong> Main container with animations and styling
            </li>
            <li>
              <strong>AlertDialogHeader:</strong> Layout wrapper for title and description
            </li>
            <li>
              <strong>AlertDialogTitle:</strong> Dialog heading with semantic markup
            </li>
            <li>
              <strong>AlertDialogDescription:</strong> Descriptive text explaining the action
            </li>
            <li>
              <strong>AlertDialogFooter:</strong> Layout wrapper for action buttons
            </li>
            <li>
              <strong>AlertDialogAction:</strong> Primary action button (closes dialog on click)
            </li>
            <li>
              <strong>AlertDialogCancel:</strong> Cancel button (closes dialog without action)
            </li>
          </ul>
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Accessible:</strong> Full ARIA support with focus trap and escape key handling
            </li>
            <li>
              <strong>Modal:</strong> Blocks interaction with page content until dismissed
            </li>
            <li>
              <strong>Animated:</strong> Smooth fade and zoom entrance/exit animations
            </li>
            <li>
              <strong>Customizable:</strong> Supports all Button variants for action styling
            </li>
            <li>
              <strong>Responsive:</strong> Mobile-optimized layout with stacked buttons
            </li>
            <li>
              <strong>Controlled/Uncontrolled:</strong> Works with both state management patterns
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
