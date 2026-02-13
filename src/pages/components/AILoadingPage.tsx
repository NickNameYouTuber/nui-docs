import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { AILoading } from '@nicorp/nui';
import { useDocLang } from '../../i18n';

export default function AILoadingPage() {
  const { t } = useDocLang();
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">AILoading</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.aiLoading.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.aiLoading.preview1Title')}
          description={t('pages.aiLoading.preview1Desc')}
          code={`<AILoading />`}
        >
          <AILoading />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.aiLoading.preview2Title')}
          description={t('pages.aiLoading.preview2Desc')}
          code={`<AILoading variant="text" />`}
        >
          <AILoading variant="text" />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.aiLoading.preview3Title')}
          description={t('pages.aiLoading.preview3Desc')}
          code={`<AILoading variant="text" text="Generating" />`}
        >
          <AILoading variant="text" text="Generating" />
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              { name: 'variant', type: '"dots" | "text"', default: '"dots"', description: 'Visual style of the indicator' },
              { name: 'text', type: 'string', default: '"Thinking"', description: 'Text shown in the "text" variant' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
