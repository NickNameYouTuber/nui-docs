import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { OTPInput, Label, Button } from '@nicorp/nui';

export default function OTPInputPage() {
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">OTPInput</h1>
        <p className="text-xl text-muted-foreground">
          A specialized input for one-time passwords with automatic focus management and paste support.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Basic OTP Input"
          description="6-digit OTP input with default configuration"
          code={`const [otp, setOtp] = useState('');

<OTPInput
  value={otp}
  onChange={setOtp}
/>`}
        >
          <div className="space-y-2">
            <OTPInput
              value={otp1}
              onChange={setOtp1}
            />
            {otp1 && (
              <p className="text-sm text-muted-foreground">
                Value: {otp1}
              </p>
            )}
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With Label"
          description="OTP input with a descriptive label"
          code={`const [otp, setOtp] = useState('');

<div className="space-y-2">
  <Label>Verification Code</Label>
  <OTPInput
    value={otp}
    onChange={setOtp}
  />
</div>`}
        >
          <div className="space-y-2">
            <Label>Verification Code</Label>
            <OTPInput
              value={otp2}
              onChange={setOtp2}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="4-Digit Code"
          description="Shorter OTP input with custom length"
          code={`const [otp, setOtp] = useState('');

<OTPInput
  length={4}
  value={otp}
  onChange={setOtp}
/>`}
        >
          <div className="space-y-2">
            <Label>PIN Code</Label>
            <OTPInput
              length={4}
              value={otp3}
              onChange={setOtp3}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With Completion Handler"
          description="Trigger action when all digits are entered"
          code={`const [otp, setOtp] = useState('');
const [submitted, setSubmitted] = useState(false);

<div className="space-y-4">
  <OTPInput
    value={otp}
    onChange={setOtp}
    onComplete={(value) => {
      console.log('Complete:', value);
      setSubmitted(true);
    }}
  />
  {submitted && (
    <div className="rounded-lg border border-green-500 bg-green-50 dark:bg-green-950 p-3">
      <p className="text-sm text-green-700 dark:text-green-300">
        Code verified successfully!
      </p>
    </div>
  )}
</div>`}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Enter Verification Code</Label>
              <OTPInput
                value={otp4}
                onChange={(value) => {
                  setOtp4(value);
                  if (value.length < 6) {
                    setSubmitted(false);
                  }
                }}
                onComplete={(value) => {
                  console.log('Complete:', value);
                  setSubmitted(true);
                }}
              />
            </div>
            {submitted && (
              <div className="rounded-lg border border-green-500 bg-green-50 dark:bg-green-950 p-3">
                <p className="text-sm text-green-700 dark:text-green-300 font-medium">
                  ✓ Code verified successfully!
                </p>
              </div>
            )}
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Disabled State"
          description="OTP input in disabled state"
          code={`<OTPInput
  value="123456"
  disabled
/>`}
        >
          <OTPInput
            value="123456"
            disabled
          />
        </ComponentPreview>

        <ComponentPreview
          title="Login Form Example"
          description="Practical example in a two-factor authentication form"
          code={`const [otp, setOtp] = useState('');

<div className="max-w-md space-y-4">
  <div className="text-center space-y-2">
    <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
    <p className="text-sm text-muted-foreground">
      Enter the 6-digit code from your authenticator app
    </p>
  </div>
  <OTPInput
    value={otp}
    onChange={setOtp}
    onComplete={handleVerify}
  />
  <Button className="w-full" disabled={otp.length !== 6}>
    Verify Code
  </Button>
</div>`}
        >
          <div className="max-w-md space-y-4">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
              <p className="text-sm text-muted-foreground">
                Enter the 6-digit code from your authenticator app
              </p>
            </div>
            <div className="flex justify-center">
              <OTPInput
                value={otp1}
                onChange={setOtp1}
              />
            </div>
            <Button className="w-full" disabled={otp1.length !== 6}>
              Verify Code
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Didn't receive a code? <button className="underline">Resend</button>
            </p>
          </div>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              {
                name: 'length',
                type: 'number',
                default: '6',
                description: 'Number of input digits',
              },
              {
                name: 'value',
                type: 'string',
                default: '""',
                description: 'Current OTP value (only digits)',
              },
              {
                name: 'onChange',
                type: '(value: string) => void',
                default: '-',
                description: 'Callback when value changes',
              },
              {
                name: 'onComplete',
                type: '(value: string) => void',
                default: '-',
                description: 'Callback when all digits are entered',
              },
              {
                name: 'disabled',
                type: 'boolean',
                default: 'false',
                description: 'Whether the OTP input is disabled',
              },
              {
                name: 'className',
                type: 'string',
                default: '-',
                description: 'Additional CSS classes for the container',
              },
            ]}
          />
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Auto-focus:</strong> Automatically focuses next input when digit is entered
            </li>
            <li>
              <strong>Backspace Navigation:</strong> Pressing backspace on empty field focuses previous input
            </li>
            <li>
              <strong>Paste Support:</strong> Paste entire code at once from clipboard
            </li>
            <li>
              <strong>Numeric Only:</strong> Only accepts digit inputs (0-9)
            </li>
            <li>
              <strong>Completion Callback:</strong> Trigger actions when all digits are entered
            </li>
            <li>
              <strong>Mobile Optimized:</strong> Uses numeric keyboard on mobile devices (inputMode="numeric")
            </li>
            <li>
              <strong>Accessible:</strong> Proper focus management and keyboard navigation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
