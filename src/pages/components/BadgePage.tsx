import { Badge } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';

export function BadgePage() {
  return (
    <div>
      <PageHeader
        title="Badge"
        description="A small status indicator for tags, labels, and categories."
        badge="Atom"
      />

      <ComponentPreview
        title="Variants"
        code={`<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
      >
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </ComponentPreview>

      <ComponentPreview
        title="Use Cases"
        description="Badges in context: status labels, tags, counters."
        code={`<Badge>Active</Badge>
<Badge variant="secondary">v0.1.7</Badge>
<Badge variant="outline">React</Badge>
<Badge variant="destructive">Critical</Badge>`}
      >
        <Badge>Active</Badge>
        <Badge variant="secondary">v0.1.7</Badge>
        <Badge variant="outline">React</Badge>
        <Badge variant="destructive">Critical</Badge>
      </ComponentPreview>

      <PropsTable
        props={[
          { name: 'variant', type: '"default" | "secondary" | "destructive" | "outline"', default: '"default"', description: 'The visual style.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
        ]}
      />
    </div>
  );
}
