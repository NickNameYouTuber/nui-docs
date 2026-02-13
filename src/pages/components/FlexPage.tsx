import { Flex } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { useDocLang } from '~/i18n';

export function FlexPage() {
  const { t } = useDocLang();
  return (
    <div>
      <PageHeader
        title="Flex"
        description={t('pages.flex.desc')}
        badge={t('common.badgeLayout')}
      />

      <ComponentPreview
        title={t('pages.flex.preview1Title')}
        code={`<Flex direction="row" gap={2}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>

<Flex direction="col" gap={2}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>`}
      >
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Row (default)</p>
            <Flex direction="row" gap={2}>
              <div className="bg-primary/10 px-3 py-2 rounded text-xs">Item 1</div>
              <div className="bg-primary/10 px-3 py-2 rounded text-xs">Item 2</div>
              <div className="bg-primary/10 px-3 py-2 rounded text-xs">Item 3</div>
            </Flex>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Column</p>
            <Flex direction="col" gap={2}>
              <div className="bg-primary/10 px-3 py-2 rounded text-xs">Item 1</div>
              <div className="bg-primary/10 px-3 py-2 rounded text-xs">Item 2</div>
              <div className="bg-primary/10 px-3 py-2 rounded text-xs">Item 3</div>
            </Flex>
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.flex.preview2Title')}
        code={`<Flex justify="start">Start</Flex>
<Flex justify="center">Center</Flex>
<Flex justify="end">End</Flex>
<Flex justify="between">Space Between</Flex>
<Flex justify="around">Space Around</Flex>
<Flex justify="evenly">Space Evenly</Flex>`}
      >
        <div className="space-y-3">
          {['start', 'center', 'end', 'between', 'around', 'evenly'].map((j) => (
            <div key={j}>
              <p className="text-xs text-muted-foreground mb-1 capitalize">{j}</p>
              <Flex justify={j as any} className="bg-muted p-2 rounded">
                <div className="bg-primary/20 px-2 py-1 rounded text-xs">A</div>
                <div className="bg-primary/20 px-2 py-1 rounded text-xs">B</div>
                <div className="bg-primary/20 px-2 py-1 rounded text-xs">C</div>
              </Flex>
            </div>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Align Items"
        code={`<Flex align="start" className="h-20">Start</Flex>
<Flex align="center" className="h-20">Center</Flex>
<Flex align="end" className="h-20">End</Flex>
<Flex align="stretch" className="h-20">Stretch</Flex>`}
      >
        <div className="space-y-3">
          {['start', 'center', 'end', 'stretch'].map((a) => (
            <div key={a}>
              <p className="text-xs text-muted-foreground mb-1 capitalize">{a}</p>
              <Flex align={a as any} className="bg-muted p-2 rounded h-20">
                <div className="bg-primary/20 px-3 py-1 rounded text-xs">Tall</div>
                <div className="bg-primary/20 px-3 py-1 rounded text-xs flex items-center">Short</div>
              </Flex>
            </div>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Gap Spacing"
        code={`<Flex gap={1}>Gap 1 (0.25rem)</Flex>
<Flex gap={2}>Gap 2 (0.5rem)</Flex>
<Flex gap={4}>Gap 4 (1rem)</Flex>
<Flex gap="2rem">Gap 2rem (custom)</Flex>`}
      >
        <div className="space-y-3">
          <Flex gap={1}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-primary/10 px-2 py-1 rounded text-xs">Gap 1</div>
            ))}
          </Flex>
          <Flex gap={2}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-primary/10 px-2 py-1 rounded text-xs">Gap 2</div>
            ))}
          </Flex>
          <Flex gap={4}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-primary/10 px-2 py-1 rounded text-xs">Gap 4</div>
            ))}
          </Flex>
          <Flex gap="2rem">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-primary/10 px-2 py-1 rounded text-xs">Gap 2rem</div>
            ))}
          </Flex>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Wrap Behavior"
        code={`<Flex wrap="nowrap">
  {/* Items will overflow */}
</Flex>

<Flex wrap="wrap">
  {/* Items will wrap to next line */}
</Flex>`}
      >
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-2">No Wrap (overflow)</p>
            <Flex wrap="nowrap" gap={2} className="bg-muted p-2 rounded overflow-x-auto">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="bg-primary/20 px-3 py-1 rounded text-xs whitespace-nowrap shrink-0">
                  Item {i + 1}
                </div>
              ))}
            </Flex>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Wrap</p>
            <Flex wrap="wrap" gap={2} className="bg-muted p-2 rounded">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="bg-primary/20 px-3 py-1 rounded text-xs">
                  Item {i + 1}
                </div>
              ))}
            </Flex>
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Combined Properties"
        code={`<Flex
  direction="row"
  justify="between"
  align="center"
  wrap="wrap"
  gap={4}
>
  <div>Logo</div>
  <div>Navigation</div>
  <div>Actions</div>
</Flex>`}
      >
        <Flex
          direction="row"
          justify="between"
          align="center"
          wrap="wrap"
          gap={4}
          className="bg-muted p-4 rounded"
        >
          <div className="bg-primary/20 px-4 py-2 rounded text-sm font-medium">Logo</div>
          <div className="bg-primary/20 px-4 py-2 rounded text-sm">Navigation</div>
          <div className="bg-primary/20 px-4 py-2 rounded text-sm">Actions</div>
        </Flex>
      </ComponentPreview>

      <PropsTable
        props={[
          { name: 'direction', type: '"row" | "row-reverse" | "col" | "col-reverse"', description: 'Flex direction.' },
          { name: 'wrap', type: '"wrap" | "nowrap" | "wrap-reverse"', description: 'Flex wrap behavior.' },
          { name: 'justify', type: '"start" | "end" | "center" | "between" | "around" | "evenly"', description: 'Justify content along main axis.' },
          { name: 'align', type: '"start" | "end" | "center" | "baseline" | "stretch"', description: 'Align items along cross axis.' },
          { name: 'gap', type: 'number | string', description: 'Gap between items. Number uses Tailwind spacing scale, string for custom values.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
          { name: 'children', type: 'ReactNode', required: true, description: 'Child elements to layout.' },
        ]}
      />
    </div>
  );
}
