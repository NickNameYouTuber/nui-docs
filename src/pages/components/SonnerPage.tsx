import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { Button, Toaster } from '@nicorp/nui';
import { toast } from 'sonner';

export default function SonnerPage() {
  return (
    <div>
      <Toaster />
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Sonner</h1>
        <p className="text-xl text-muted-foreground">
          Beautiful toast notifications powered by Sonner library with theme-aware styling.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Basic Toast"
          description="Simple toast notifications"
          code={`import { toast } from 'sonner';

<Button onClick={() => toast('Message sent successfully')}>
  Show Toast
</Button>

<Button onClick={() => toast('Profile updated')}>
  Another Toast
</Button>`}
        >
          <div className="flex gap-2 flex-wrap">
            <Button onClick={() => toast('Message sent successfully')}>
              Show Toast
            </Button>
            <Button onClick={() => toast('Profile updated')} variant="outline">
              Another Toast
            </Button>
            <Button onClick={() => toast('Settings saved')} variant="secondary">
              One More
            </Button>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Toast Variants"
          description="Success, error, info, and warning toasts"
          code={`import { toast } from 'sonner';

<Button onClick={() => toast.success('Changes saved!')}>
  Success
</Button>

<Button onClick={() => toast.error('Something went wrong')}>
  Error
</Button>

<Button onClick={() => toast.info('New updates available')}>
  Info
</Button>

<Button onClick={() => toast.warning('Storage almost full')}>
  Warning
</Button>`}
        >
          <div className="flex gap-2 flex-wrap">
            <Button onClick={() => toast.success('Changes saved successfully!')}>
              Success
            </Button>
            <Button onClick={() => toast.error('Failed to save changes')} variant="destructive">
              Error
            </Button>
            <Button onClick={() => toast.info('New updates available')} variant="outline">
              Info
            </Button>
            <Button onClick={() => toast.warning('Storage is almost full')} variant="outline">
              Warning
            </Button>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With Description"
          description="Toasts with additional description text"
          code={`import { toast } from 'sonner';

<Button
  onClick={() =>
    toast('Email sent', {
      description: 'Your message has been delivered to john@example.com',
    })
  }
>
  With Description
</Button>

<Button
  onClick={() =>
    toast.success('Payment received', {
      description: '$49.99 has been credited to your account',
    })
  }
>
  Success with Description
</Button>`}
        >
          <div className="flex gap-2 flex-wrap">
            <Button
              onClick={() =>
                toast('Email sent', {
                  description: 'Your message has been delivered to john@example.com',
                })
              }
            >
              With Description
            </Button>
            <Button
              onClick={() =>
                toast.success('Payment received', {
                  description: '$49.99 has been credited to your account',
                })
              }
              variant="outline"
            >
              Success with Description
            </Button>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With Action Button"
          description="Toasts with clickable action buttons"
          code={`import { toast } from 'sonner';

<Button
  onClick={() =>
    toast('Event created', {
      action: {
        label: 'Undo',
        onClick: () => toast('Event cancelled'),
      },
    })
  }
>
  With Action
</Button>

<Button
  onClick={() =>
    toast('File uploaded', {
      description: 'document.pdf',
      action: {
        label: 'View',
        onClick: () => toast('Opening file...'),
      },
    })
  }
>
  With Action & Description
</Button>`}
        >
          <div className="flex gap-2 flex-wrap">
            <Button
              onClick={() =>
                toast('Event created', {
                  action: {
                    label: 'Undo',
                    onClick: () => toast('Event cancelled'),
                  },
                })
              }
            >
              With Action
            </Button>
            <Button
              onClick={() =>
                toast('File uploaded', {
                  description: 'document.pdf',
                  action: {
                    label: 'View',
                    onClick: () => toast('Opening file...'),
                  },
                })
              }
              variant="outline"
            >
              With Action & Description
            </Button>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Promise-Based"
          description="Async operations with loading, success, and error states"
          code={`import { toast } from 'sonner';

const saveData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve() : reject();
    }, 2000);
  });

<Button
  onClick={() =>
    toast.promise(saveData(), {
      loading: 'Saving...',
      success: 'Data saved successfully!',
      error: 'Failed to save data',
    })
  }
>
  Promise Toast
</Button>`}
        >
          <div className="flex gap-2 flex-wrap">
            <Button
              onClick={() => {
                const promise = new Promise((resolve) => {
                  setTimeout(() => resolve({ name: 'Data' }), 2000);
                });

                toast.promise(promise, {
                  loading: 'Saving...',
                  success: 'Data saved successfully!',
                  error: 'Failed to save data',
                });
              }}
            >
              Promise Toast (Success)
            </Button>

            <Button
              onClick={() => {
                const promise = new Promise((_, reject) => {
                  setTimeout(() => reject(new Error('Network error')), 2000);
                });

                toast.promise(promise, {
                  loading: 'Loading...',
                  success: 'Loaded!',
                  error: 'Failed to load',
                });
              }}
              variant="destructive"
            >
              Promise Toast (Error)
            </Button>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With Duration"
          description="Custom display duration"
          code={`import { toast } from 'sonner';

<Button
  onClick={() =>
    toast('Quick message', {
      duration: 1000,
    })
  }
>
  1 Second
</Button>

<Button
  onClick={() =>
    toast('Important message', {
      duration: 10000,
    })
  }
>
  10 Seconds
</Button>

<Button
  onClick={() =>
    toast('Permanent message', {
      duration: Infinity,
    })
  }
>
  Stays Forever
</Button>`}
        >
          <div className="flex gap-2 flex-wrap">
            <Button
              onClick={() =>
                toast('Quick message', {
                  duration: 1000,
                })
              }
            >
              1 Second
            </Button>
            <Button
              onClick={() =>
                toast('Important message', {
                  duration: 10000,
                })
              }
              variant="outline"
            >
              10 Seconds
            </Button>
            <Button
              onClick={() =>
                toast('Permanent message (click X to close)', {
                  duration: Infinity,
                })
              }
              variant="secondary"
            >
              Stays Forever
            </Button>
          </div>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Setup</h2>
          <p className="text-muted-foreground mb-4">
            Add the Toaster component to your app root:
          </p>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{`import { Toaster } from '@nicorp/nui';

export default function App() {
  return (
    <>
      <Toaster />
      {/* Your app content */}
    </>
  );
}`}</code>
          </pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <p className="text-muted-foreground mb-4">
            Import and use the toast function from sonner:
          </p>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{`import { toast } from 'sonner';

// Basic
toast('Message');

// With variants
toast.success('Success!');
toast.error('Error!');
toast.info('Info');
toast.warning('Warning');

// With options
toast('Message', {
  description: 'Additional context',
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo'),
  },
  duration: 5000,
});

// Promise-based
toast.promise(fetchData(), {
  loading: 'Loading...',
  success: 'Done!',
  error: 'Failed',
});`}</code>
          </pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Toaster Props</h2>
          <PropsTable
            props={[
              {
                name: 'theme',
                type: '"light" | "dark" | "system"',
                default: '"system"',
                description: 'Color theme for toasts',
              },
              {
                name: 'position',
                type: '"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',
                default: '"bottom-right"',
                description: 'Toast position on screen',
              },
              {
                name: 'richColors',
                type: 'boolean',
                default: 'false',
                description: 'Enable colored backgrounds for variants',
              },
              {
                name: 'expand',
                type: 'boolean',
                default: 'false',
                description: 'Expand toasts by default',
              },
              {
                name: 'duration',
                type: 'number',
                default: '4000',
                description: 'Default duration in milliseconds',
              },
              {
                name: 'closeButton',
                type: 'boolean',
                default: 'false',
                description: 'Show close button on all toasts',
              },
            ]}
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Toast Options</h2>
          <PropsTable
            props={[
              {
                name: 'description',
                type: 'string',
                default: '-',
                description: 'Additional description text',
              },
              {
                name: 'action',
                type: '{ label: string; onClick: () => void }',
                default: '-',
                description: 'Action button configuration',
              },
              {
                name: 'duration',
                type: 'number',
                default: '4000',
                description: 'Display duration in ms',
              },
              {
                name: 'cancel',
                type: '{ label: string; onClick: () => void }',
                default: '-',
                description: 'Cancel button configuration',
              },
              {
                name: 'onDismiss',
                type: '() => void',
                default: '-',
                description: 'Callback when toast is dismissed',
              },
              {
                name: 'onAutoClose',
                type: '() => void',
                default: '-',
                description: 'Callback when toast auto-closes',
              },
            ]}
          />
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Theme-Aware:</strong> Automatically adapts to system/light/dark theme
            </li>
            <li>
              <strong>Design System Integration:</strong> Uses Tailwind tokens for consistent styling
            </li>
            <li>
              <strong>Multiple Variants:</strong> Success, error, info, warning, and default toasts
            </li>
            <li>
              <strong>Action Buttons:</strong> Add clickable actions and cancel buttons
            </li>
            <li>
              <strong>Promise API:</strong> Show loading/success/error states for async operations
            </li>
            <li>
              <strong>Flexible Positioning:</strong> 6 position options (corners and centers)
            </li>
            <li>
              <strong>Custom Duration:</strong> Control how long toasts stay visible
            </li>
            <li>
              <strong>Accessible:</strong> Proper ARIA live regions for screen readers
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
