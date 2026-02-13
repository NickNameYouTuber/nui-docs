import { AspectRatio } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { useDocLang } from '~/i18n';

export function AspectRatioPage() {
  const { t } = useDocLang();
  
  return (
    <div>
      <PageHeader
        title="Aspect Ratio"
        description={t('pages.aspectRatio.desc')}
        badge={t('common.badgeAtom')}
      />

      <ComponentPreview
        title={t('pages.aspectRatio.preview1Title')}
        description={t('pages.aspectRatio.preview1Desc')}
        code={`<AspectRatio ratio={16 / 9}>
  <img
    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd"
    alt="Landscape"
    className="object-cover w-full h-full rounded-md"
  />
</AspectRatio>`}
      >
        <div className="w-full max-w-md">
          <AspectRatio ratio={16 / 9}>
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Landscape"
              className="object-cover w-full h-full rounded-md"
            />
          </AspectRatio>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.aspectRatio.preview2Title')}
        description={t('pages.aspectRatio.preview2Desc')}
        code={`<AspectRatio ratio={4 / 3}>
  <img
    src="https://images.unsplash.com/photo-1535025183792-957014a3f86e"
    alt="Portrait"
    className="object-cover w-full h-full rounded-md"
  />
</AspectRatio>`}
      >
        <div className="w-full max-w-sm">
          <AspectRatio ratio={4 / 3}>
            <img
              src="https://images.unsplash.com/photo-1535025183792-957014a3f86e?w=600&dpr=2&q=80"
              alt="Portrait"
              className="object-cover w-full h-full rounded-md"
            />
          </AspectRatio>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.aspectRatio.preview3Title')}
        description={t('pages.aspectRatio.preview3Desc')}
        code={`<AspectRatio ratio={1}>
  <img
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    alt="Square"
    className="object-cover w-full h-full rounded-md"
  />
</AspectRatio>`}
      >
        <div className="w-64">
          <AspectRatio ratio={1}>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&dpr=2&q=80"
              alt="Square"
              className="object-cover w-full h-full rounded-md"
            />
          </AspectRatio>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Video Player Container"
        code={`<AspectRatio ratio={16 / 9} className="bg-muted">
  <div className="flex items-center justify-center w-full h-full rounded-md border border-border">
    <p className="text-muted-foreground">Video Player (16:9)</p>
  </div>
</AspectRatio>`}
      >
        <div className="w-full max-w-2xl">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <div className="flex items-center justify-center w-full h-full rounded-md border border-border">
              <p className="text-muted-foreground">Video Player (16:9)</p>
            </div>
          </AspectRatio>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Multiple Ratios"
        code={`<div className="grid grid-cols-3 gap-4">
  <AspectRatio ratio={1}>
    <div className="bg-primary/10 rounded-md flex items-center justify-center h-full">
      1:1
    </div>
  </AspectRatio>
  <AspectRatio ratio={4 / 3}>
    <div className="bg-primary/10 rounded-md flex items-center justify-center h-full">
      4:3
    </div>
  </AspectRatio>
  <AspectRatio ratio={16 / 9}>
    <div className="bg-primary/10 rounded-md flex items-center justify-center h-full">
      16:9
    </div>
  </AspectRatio>
</div>`}
      >
        <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
          <AspectRatio ratio={1}>
            <div className="bg-primary/10 rounded-md flex items-center justify-center h-full text-sm">
              1:1
            </div>
          </AspectRatio>
          <AspectRatio ratio={4 / 3}>
            <div className="bg-primary/10 rounded-md flex items-center justify-center h-full text-sm">
              4:3
            </div>
          </AspectRatio>
          <AspectRatio ratio={16 / 9}>
            <div className="bg-primary/10 rounded-md flex items-center justify-center h-full text-sm">
              16:9
            </div>
          </AspectRatio>
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          { name: 'ratio', type: 'number', default: '1', description: 'The desired aspect ratio (width / height). E.g., 16/9 = 1.778, 4/3 = 1.333, 1 = square.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes for styling the container.' },
          { name: 'children', type: 'ReactNode', required: true, description: 'Content to display within the aspect ratio container (typically images or videos).' },
        ]}
      />
    </div>
  );
}
