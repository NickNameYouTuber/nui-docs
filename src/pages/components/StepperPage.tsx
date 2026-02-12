import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { Stepper, Button } from '@nicorp/nui';

export default function StepperPage() {
  const [activeStep1, setActiveStep1] = useState(1);
  const [activeStep2, setActiveStep2] = useState(2);

  const checkoutSteps = [
    { title: 'Cart', description: 'Review items' },
    { title: 'Shipping', description: 'Enter address' },
    { title: 'Payment', description: 'Payment method' },
    { title: 'Confirm', description: 'Review order' },
  ];

  const accountSteps = [
    { title: 'Create Account', description: 'Basic information' },
    { title: 'Verify Email', description: 'Check your inbox' },
    { title: 'Set Preferences', description: 'Customize your experience' },
    { title: 'Complete', description: 'You\'re all set!' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Stepper</h1>
        <p className="text-xl text-muted-foreground">
          A progress indicator for multi-step processes with visual step tracking and descriptions.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Horizontal Stepper"
          description="Default horizontal layout for checkout flow"
          code={`const steps = [
  { title: 'Cart', description: 'Review items' },
  { title: 'Shipping', description: 'Enter address' },
  { title: 'Payment', description: 'Payment method' },
  { title: 'Confirm', description: 'Review order' },
];

<Stepper steps={steps} activeStep={1} />`}
        >
          <Stepper steps={checkoutSteps} activeStep={1} />
        </ComponentPreview>

        <ComponentPreview
          title="Vertical Stepper"
          description="Vertical orientation for account setup wizard"
          code={`const steps = [
  { title: 'Create Account', description: 'Basic information' },
  { title: 'Verify Email', description: 'Check your inbox' },
  { title: 'Set Preferences', description: 'Customize your experience' },
  { title: 'Complete', description: 'You're all set!' },
];

<Stepper steps={steps} activeStep={2} orientation="vertical" />`}
        >
          <Stepper steps={accountSteps} activeStep={2} orientation="vertical" />
        </ComponentPreview>

        <ComponentPreview
          title="Interactive Stepper"
          description="Stepper with previous/next controls"
          code={`const [activeStep, setActiveStep] = useState(1);

const steps = [
  { title: 'Cart', description: 'Review items' },
  { title: 'Shipping', description: 'Enter address' },
  { title: 'Payment', description: 'Payment method' },
  { title: 'Confirm', description: 'Review order' },
];

<div className="space-y-6">
  <Stepper steps={steps} activeStep={activeStep} />
  <div className="flex gap-2">
    <Button
      variant="outline"
      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
      disabled={activeStep === 0}
    >
      Previous
    </Button>
    <Button
      onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
      disabled={activeStep === steps.length - 1}
    >
      {activeStep === steps.length - 1 ? 'Complete' : 'Next'}
    </Button>
  </div>
</div>`}
        >
          <div className="space-y-6">
            <Stepper steps={checkoutSteps} activeStep={activeStep1} />
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setActiveStep1(Math.max(0, activeStep1 - 1))}
                disabled={activeStep1 === 0}
              >
                Previous
              </Button>
              <Button
                onClick={() => setActiveStep1(Math.min(checkoutSteps.length - 1, activeStep1 + 1))}
                disabled={activeStep1 === checkoutSteps.length - 1}
              >
                {activeStep1 === checkoutSteps.length - 1 ? 'Complete' : 'Next'}
              </Button>
            </div>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Without Descriptions"
          description="Simpler stepper with titles only"
          code={`const steps = [
  { title: 'Personal Info' },
  { title: 'Address' },
  { title: 'Review' },
  { title: 'Submit' },
];

<Stepper steps={steps} activeStep={2} />`}
        >
          <Stepper
            steps={[
              { title: 'Personal Info' },
              { title: 'Address' },
              { title: 'Review' },
              { title: 'Submit' },
            ]}
            activeStep={2}
          />
        </ComponentPreview>

        <ComponentPreview
          title="Form Integration"
          description="Stepper integrated with multi-step form"
          code={`const [activeStep, setActiveStep] = useState(0);

const formSteps = [
  { title: 'Account', description: 'Create your account' },
  { title: 'Profile', description: 'Tell us about yourself' },
  { title: 'Preferences', description: 'Set your preferences' },
];

<div className="space-y-8">
  <Stepper steps={formSteps} activeStep={activeStep} />
  
  <div className="border rounded-lg p-6">
    {activeStep === 0 && (
      <div className="space-y-4">
        <h3 className="font-semibold">Create Account</h3>
        <input className="w-full rounded border px-3 py-2" placeholder="Email" />
        <input className="w-full rounded border px-3 py-2" placeholder="Password" type="password" />
      </div>
    )}
    {activeStep === 1 && (
      <div className="space-y-4">
        <h3 className="font-semibold">Profile Information</h3>
        <input className="w-full rounded border px-3 py-2" placeholder="Full Name" />
        <input className="w-full rounded border px-3 py-2" placeholder="Bio" />
      </div>
    )}
    {activeStep === 2 && (
      <div className="space-y-4">
        <h3 className="font-semibold">Preferences</h3>
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          <span className="text-sm">Email notifications</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          <span className="text-sm">Marketing updates</span>
        </label>
      </div>
    )}
  </div>
  
  <div className="flex justify-between">
    <Button
      variant="outline"
      onClick={() => setActiveStep(activeStep - 1)}
      disabled={activeStep === 0}
    >
      Back
    </Button>
    <Button onClick={() => setActiveStep(activeStep + 1)}>
      {activeStep === formSteps.length - 1 ? 'Finish' : 'Continue'}
    </Button>
  </div>
</div>`}
        >
          <div className="space-y-8">
            <Stepper
              steps={[
                { title: 'Account', description: 'Create your account' },
                { title: 'Profile', description: 'Tell us about yourself' },
                { title: 'Preferences', description: 'Set your preferences' },
              ]}
              activeStep={activeStep2}
            />

            <div className="border rounded-lg p-6">
              {activeStep2 === 0 && (
                <div className="space-y-4">
                  <h3 className="font-semibold">Create Account</h3>
                  <input className="w-full rounded border px-3 py-2" placeholder="Email" />
                  <input className="w-full rounded border px-3 py-2" placeholder="Password" type="password" />
                </div>
              )}
              {activeStep2 === 1 && (
                <div className="space-y-4">
                  <h3 className="font-semibold">Profile Information</h3>
                  <input className="w-full rounded border px-3 py-2" placeholder="Full Name" />
                  <input className="w-full rounded border px-3 py-2" placeholder="Bio" />
                </div>
              )}
              {activeStep2 === 2 && (
                <div className="space-y-4">
                  <h3 className="font-semibold">Preferences</h3>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="text-sm">Email notifications</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="text-sm">Marketing updates</span>
                  </label>
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setActiveStep2(Math.max(0, activeStep2 - 1))}
                disabled={activeStep2 === 0}
              >
                Back
              </Button>
              <Button
                onClick={() => setActiveStep2(Math.min(2, activeStep2 + 1))}
                disabled={activeStep2 === 2}
              >
                {activeStep2 === 2 ? 'Finish' : 'Continue'}
              </Button>
            </div>
          </div>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              {
                name: 'steps',
                type: 'StepProps[]',
                default: '-',
                description: 'Array of step objects with title and optional description',
              },
              {
                name: 'activeStep',
                type: 'number',
                default: '-',
                description: 'Index of the current active step (0-based)',
              },
              {
                name: 'orientation',
                type: '"horizontal" | "vertical"',
                default: '"horizontal"',
                description: 'Layout orientation',
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
          <h2 className="text-2xl font-semibold mb-4">StepProps Interface</h2>
          <PropsTable
            props={[
              {
                name: 'title',
                type: 'string',
                default: '-',
                description: 'Step title (required)',
              },
              {
                name: 'description',
                type: 'string',
                default: '-',
                description: 'Additional step description (optional)',
              },
            ]}
          />
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Visual Progress:</strong> Completed steps show checkmark icon, numbered circles for pending
            </li>
            <li>
              <strong>Color Coding:</strong> Primary color for completed/active, muted for pending steps
            </li>
            <li>
              <strong>Connector Lines:</strong> Visual lines between steps show progress flow
            </li>
            <li>
              <strong>Two Orientations:</strong> Horizontal for top navigation, vertical for sidebars
            </li>
            <li>
              <strong>Optional Descriptions:</strong> Show additional context below step titles
            </li>
            <li>
              <strong>Responsive:</strong> Hides descriptions on small screens in horizontal mode
            </li>
            <li>
              <strong>Smooth Transitions:</strong> Color changes animate with transition-colors
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
