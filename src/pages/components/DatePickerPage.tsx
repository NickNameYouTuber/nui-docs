import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { DatePicker, Label } from '@nicorp/nui';

export default function DatePickerPage() {
  const [date1, setDate1] = useState<Date | undefined>();
  const [date2, setDate2] = useState<Date | undefined>();
  const [date3, setDate3] = useState<Date | undefined>(new Date());
  const [date4, setDate4] = useState<Date | undefined>();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">DatePicker</h1>
        <p className="text-xl text-muted-foreground">
          A date picker component that displays a calendar popover for selecting dates.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Basic Date Picker"
          description="Simple date picker with default formatting"
          code={`const [date, setDate] = useState<Date>()

<DatePicker
  value={date}
  onChange={setDate}
  placeholder="Select a date"
/>`}
        >
          <DatePicker
            value={date1}
            onChange={setDate1}
            placeholder="Select a date"
          />
        </ComponentPreview>

        <ComponentPreview
          title="With Label"
          description="Date picker with a label for form fields"
          code={`const [date, setDate] = useState<Date>()

<div className="space-y-2">
  <Label htmlFor="birthdate">Date of Birth</Label>
  <DatePicker
    value={date}
    onChange={setDate}
    placeholder="Pick your date of birth"
  />
</div>`}
        >
          <div className="space-y-2">
            <Label htmlFor="birthdate">Date of Birth</Label>
            <DatePicker
              value={date2}
              onChange={setDate2}
              placeholder="Pick your date of birth"
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Pre-selected Date"
          description="DatePicker with a default value"
          code={`const [date, setDate] = useState<Date>(new Date())

<DatePicker
  value={date}
  onChange={setDate}
  placeholder="Select a date"
/>`}
        >
          <DatePicker
            value={date3}
            onChange={setDate3}
            placeholder="Select a date"
          />
        </ComponentPreview>

        <ComponentPreview
          title="Disabled State"
          description="DatePicker in disabled state"
          code={`<DatePicker
  value={new Date()}
  disabled
  placeholder="Select a date"
/>`}
        >
          <DatePicker
            value={new Date()}
            disabled
            placeholder="Select a date"
          />
        </ComponentPreview>

        <ComponentPreview
          title="Custom Width"
          description="DatePicker with custom width using className"
          code={`const [date, setDate] = useState<Date>()

<DatePicker
  value={date}
  onChange={setDate}
  placeholder="Select a date"
  className="w-64"
/>`}
        >
          <DatePicker
            value={date4}
            onChange={setDate4}
            placeholder="Select a date"
            className="w-64"
          />
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              {
                name: 'value',
                type: 'Date',
                default: '-',
                description: 'The selected date value',
              },
              {
                name: 'onChange',
                type: '(date: Date | undefined) => void',
                default: '-',
                description: 'Callback when date is selected',
              },
              {
                name: 'placeholder',
                type: 'string',
                default: '"Pick a date"',
                description: 'Placeholder text when no date is selected',
              },
              {
                name: 'disabled',
                type: 'boolean',
                default: 'false',
                description: 'Whether the date picker is disabled',
              },
              {
                name: 'className',
                type: 'string',
                default: '-',
                description: 'Additional CSS classes for the button',
              },
            ]}
          />
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Note</h3>
          <p className="text-sm text-muted-foreground">
            The DatePicker uses the <code>date-fns</code> library to format dates with the "PPP" format
            (e.g., "April 29, 2023"). The Calendar component inside the popover is the same one documented
            in the Atoms section.
          </p>
        </div>
      </div>
    </div>
  );
}
