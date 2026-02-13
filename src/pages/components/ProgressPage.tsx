import { useState, useEffect } from 'react';
import { Progress, Label } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { useDocLang } from '~/i18n';

export function ProgressPage() {
  const { t } = useDocLang();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <PageHeader
        title="Progress"
        description={t('pages.progress.desc')}
        badge={t('common.badgeAtom')}
      />

      <ComponentPreview
        title={t('pages.progress.preview1Title')}
        code={`<Progress value={60} />`}
      >
        <Progress value={60} className="w-full max-w-md" />
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.progress.preview2Title')}
        code={`<div className="space-y-2 w-full max-w-md">
  <div className="flex justify-between text-sm">
    <Label>Loading...</Label>
    <span className="text-muted-foreground">75%</span>
  </div>
  <Progress value={75} />
</div>`}
      >
        <div className="space-y-2 w-full max-w-md">
          <div className="flex justify-between text-sm">
            <Label>Loading...</Label>
            <span className="text-muted-foreground">75%</span>
          </div>
          <Progress value={75} />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Animated Progress"
        code={`const [progress, setProgress] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setProgress((prev) => {
      if (prev >= 100) return 0;
      return prev + 10;
    });
  }, 500);

  return () => clearInterval(timer);
}, []);

<div className="space-y-2 w-full max-w-md">
  <Label>Uploading file... {progress}%</Label>
  <Progress value={progress} />
</div>`}
      >
        <div className="space-y-2 w-full max-w-md">
          <Label>Uploading file... {progress}%</Label>
          <Progress value={progress} />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Progress States"
        code={`<div className="space-y-4 w-full max-w-md">
  <div>
    <p className="text-sm mb-2">Not started</p>
    <Progress value={0} />
  </div>
  <div>
    <p className="text-sm mb-2">In progress</p>
    <Progress value={45} />
  </div>
  <div>
    <p className="text-sm mb-2">Complete</p>
    <Progress value={100} />
  </div>
</div>`}
      >
        <div className="space-y-4 w-full max-w-md">
          <div>
            <p className="text-sm mb-2">Not started</p>
            <Progress value={0} />
          </div>
          <div>
            <p className="text-sm mb-2">In progress</p>
            <Progress value={45} />
          </div>
          <div>
            <p className="text-sm mb-2">Complete</p>
            <Progress value={100} />
          </div>
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          { name: 'value', type: 'number', description: 'Current progress value (0-100).' },
          { name: 'max', type: 'number', default: '100', description: 'Maximum value for progress calculation.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
        ]}
      />
    </div>
  );
}
