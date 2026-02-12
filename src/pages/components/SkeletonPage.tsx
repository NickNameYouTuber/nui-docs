import { Skeleton } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';

export function SkeletonPage() {
  return (
    <div>
      <PageHeader
        title="Skeleton"
        description="A placeholder component that displays an animated loading state while content is being fetched. Uses pulse animation to indicate loading."
        badge="Atom"
      />

      <ComponentPreview
        title="Basic Skeleton"
        code={`<Skeleton className="h-4 w-64" />`}
      >
        <Skeleton className="h-4 w-64" />
      </ComponentPreview>

      <ComponentPreview
        title="Skeleton Variants"
        code={`<div className="space-y-2">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
</div>`}
      >
        <div className="space-y-2 w-full max-w-md">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Card Skeleton"
        code={`<div className="rounded-lg border border-border p-4 space-y-3">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-4 w-1/2" />
  </div>
</div>`}
      >
        <div className="rounded-lg border border-border p-4 space-y-3 w-full max-w-sm">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="List Skeleton"
        code={`<div className="space-y-3">
  {[1, 2, 3].map((i) => (
    <div key={i} className="flex items-center gap-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </div>
    </div>
  ))}
</div>`}
      >
        <div className="space-y-3 w-full max-w-md">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Table Skeleton"
        code={`<div className="rounded-lg border border-border overflow-hidden">
  <div className="p-4 border-b border-border">
    <Skeleton className="h-4 w-32" />
  </div>
  {[1, 2, 3, 4].map((i) => (
    <div key={i} className="p-4 border-b border-border flex gap-4">
      <Skeleton className="h-4 flex-1" />
      <Skeleton className="h-4 flex-1" />
      <Skeleton className="h-4 w-20" />
    </div>
  ))}
</div>`}
      >
        <div className="rounded-lg border border-border overflow-hidden w-full max-w-2xl">
          <div className="p-4 border-b border-border">
            <Skeleton className="h-4 w-32" />
          </div>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-4 border-b border-border flex gap-4">
              <Skeleton className="h-4 flex-1" />
              <Skeleton className="h-4 flex-1" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </div>
      </ComponentPreview>

      <PropsTable
        props={[
          { name: 'className', type: 'string', description: 'Additional CSS classes. Use for custom dimensions and shapes (e.g., rounded-full for circles).' },
          { name: 'children', type: 'ReactNode', description: 'Optional content within skeleton (rarely used).' },
        ]}
      />
    </div>
  );
}
