import { Alert, AlertDescription, AlertTitle } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { useDocLang } from '../../i18n';
import { AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react';

export function AlertPage() {
  const { t } = useDocLang();

  return (
    <div>
      <PageHeader
        title="Alert"
        description={t('pages.alert.desc')}
        badge={t('common.badgeFeedback')}
      />

      <ComponentPreview
        title={t('pages.alert.defaultAlert')}
        code={`<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    This is an informational alert with additional details.
  </AlertDescription>
</Alert>`}
      >
        <Alert className="w-full">
          <Info className="h-4 w-4" />
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>This is an informational alert with additional details.</AlertDescription>
        </Alert>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.alert.destructiveAlert')}
        code={`<Alert variant="destructive">
  <XCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Something went wrong. Please try again.
  </AlertDescription>
</Alert>`}
      >
        <Alert variant="destructive" className="w-full">
          <XCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Something went wrong. Please try again later.</AlertDescription>
        </Alert>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.alert.alertExamples')}
        description={t('pages.alert.examplesDesc')}
        code={`<Alert>
  <CheckCircle className="h-4 w-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Your changes have been saved.</AlertDescription>
</Alert>

<Alert>
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>This action is irreversible.</AlertDescription>
</Alert>`}
      >
        <div className="space-y-3 w-full">
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Your changes have been saved successfully.</AlertDescription>
          </Alert>
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>This action is irreversible. Proceed with caution.</AlertDescription>
          </Alert>
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          { name: 'variant', type: '"default" | "destructive"', default: '"default"', description: 'The visual style of the alert.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
        ]}
      />
    </div>
  );
}
