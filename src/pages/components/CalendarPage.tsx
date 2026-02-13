import { useState } from 'react';
import { Calendar, Label } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { useDocLang } from '~/i18n';

export function CalendarPage() {
  const { t } = useDocLang();
  const [date1, setDate1] = useState<Date | undefined>(new Date());
  const [date2, setDate2] = useState<Date | undefined>();

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <div>
      <PageHeader
        title="Calendar"
        description={t('pages.calendar.desc')}
        badge={t('common.badgeAtom')}
      />

      <ComponentPreview
        title={t('pages.calendar.preview1Title')}
        code={`<Calendar mode="single" />`}
      >
        <Calendar mode="single" />
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.calendar.preview2Title')}
        code={`const [date, setDate] = useState<Date | undefined>(new Date());

<div className="space-y-2">
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
  />
  <p className="text-sm text-muted-foreground">
    Selected: {date?.toLocaleDateString() || 'None'}
  </p>
</div>`}
      >
        <div className="space-y-2">
          <Calendar
            mode="single"
            selected={date1}
            onSelect={setDate1}
          />
          <p className="text-sm text-muted-foreground">
            Selected: {date1?.toLocaleDateString() || 'None'}
          </p>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.calendar.preview3Title')}
        description={t('pages.calendar.preview3Desc')}
        code={`const [date, setDate] = useState<Date | undefined>();

const isPastDate = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
};

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  disabled={isPastDate}
/>`}
      >
        <div className="space-y-2">
          <Label>Select a future date:</Label>
          <Calendar
            mode="single"
            selected={date2}
            onSelect={setDate2}
            disabled={isPastDate}
          />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.calendar.preview4Title')}
        code={`const futureDate = new Date();
futureDate.setMonth(futureDate.getMonth() + 2);

<Calendar
  mode="single"
  defaultMonth={futureDate}
/>`}
      >
        <Calendar
          mode="single"
          defaultMonth={new Date(new Date().setMonth(new Date().getMonth() + 2))}
        />
      </ComponentPreview>

      <PropsTable
        props={[
          { name: 'mode', type: '"single" | "multiple" | "range"', required: true, description: 'Selection mode for the calendar.' },
          { name: 'selected', type: 'Date | Date[] | undefined', description: 'Controlled selected date(s).' },
          { name: 'onSelect', type: '(date: Date | undefined) => void', description: 'Callback when date selection changes.' },
          { name: 'defaultMonth', type: 'Date', description: 'Initial month to display.' },
          { name: 'disabled', type: 'boolean | (date: Date) => boolean | Date[]', description: 'Disable all dates, specific dates, or dates matching a function.' },
          { name: 'fromDate', type: 'Date', description: 'Earliest selectable date.' },
          { name: 'toDate', type: 'Date', description: 'Latest selectable date.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
        ]}
      />
    </div>
  );
}
