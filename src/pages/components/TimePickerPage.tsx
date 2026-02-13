import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { PageHeader } from '~/components/PageHeader';
import { TimePicker, Label } from '@nicorp/nui';
import { useDocLang } from '~/i18n';

export default function TimePickerPage() {
  const { t } = useDocLang();
  const [time1, setTime1] = useState({ hours: 9, minutes: 30 });
  const [time2, setTime2] = useState({ hours: 14, minutes: 45 });
  const [time3, setTime3] = useState({ hours: 10, minutes: 0 });
  const [time4, setTime4] = useState({ hours: 16, minutes: 30 });

  return (
    <div>
      <PageHeader
        title="TimePicker"
        description={t('pages.timePicker.desc')}
        badge={t('common.badgeAdvanced')}
      />

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.timePicker.preview1Title')}
          description={t('pages.timePicker.preview1Desc')}
          code={`const [time, setTime] = useState({ hours: 9, minutes: 30 })

<TimePicker
  value={time}
  onChange={setTime}
/>`}
        >
          <TimePicker
            value={time1}
            onChange={setTime1}
          />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.timePicker.preview2Title')}
          description={t('pages.timePicker.preview2Desc')}
          code={`const [time, setTime] = useState({ hours: 14, minutes: 45 })

<TimePicker
  value={time}
  onChange={setTime}
  is24Hour
/>`}
        >
          <TimePicker
            value={time2}
            onChange={setTime2}
            is24Hour
          />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.timePicker.preview3Title')}
          description={t('pages.timePicker.preview3Desc')}
          code={`const [time, setTime] = useState({ hours: 10, minutes: 0 })

<div className="space-y-2">
  <Label htmlFor="meeting-time">Meeting Time</Label>
  <TimePicker
    value={time}
    onChange={setTime}
  />
</div>`}
        >
          <div className="space-y-2">
            <Label htmlFor="meeting-time">Meeting Time</Label>
            <TimePicker
              value={time3}
              onChange={setTime3}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.timePicker.preview4Title')}
          description={t('pages.timePicker.preview4Desc')}
          code={`<TimePicker
  value={{ hours: 12, minutes: 0 }}
  disabled
/>`}
        >
          <TimePicker
            value={{ hours: 12, minutes: 0 }}
            disabled
          />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.timePicker.preview5Title')}
          description={t('pages.timePicker.preview5Desc')}
          code={`const [time, setTime] = useState({ hours: 16, minutes: 30 })

<TimePicker
  value={time}
  onChange={setTime}
  is24Hour
  className="w-48"
/>`}
        >
          <TimePicker
            value={time4}
            onChange={setTime4}
            is24Hour
            className="w-48"
          />
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              {
                name: 'value',
                type: '{ hours: number; minutes: number }',
                default: '{ hours: 12, minutes: 0 }',
                description: 'The selected time value (hours 0-23, minutes 0-59)',
              },
              {
                name: 'onChange',
                type: '(value: { hours: number; minutes: number }) => void',
                default: '-',
                description: 'Callback when time is selected',
              },
              {
                name: 'is24Hour',
                type: 'boolean',
                default: 'false',
                description: 'Use 24-hour format instead of 12-hour with AM/PM',
              },
              {
                name: 'disabled',
                type: 'boolean',
                default: 'false',
                description: 'Whether the time picker is disabled',
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
          <h3 className="font-semibold mb-2">Notes</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              Hours are stored in 24-hour format internally (0-23), even when displaying in 12-hour format
            </li>
            <li>
              Minutes are displayed in 5-minute increments (0, 5, 10, ..., 55) for easier selection
            </li>
            <li>
              The component automatically handles AM/PM conversion when switching between formats
            </li>
            <li>
              Times are displayed with zero-padding (e.g., "09:05" instead of "9:5")
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
