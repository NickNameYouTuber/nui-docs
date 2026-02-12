import { Heading, Text, Code, Blockquote, Lead, Muted } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';

export function TypographyPage() {
  return (
    <div>
      <PageHeader
        title="Typography"
        description="A set of composable text components for consistent typography across your application. Includes headings, body text, code snippets, quotes, and more."
        badge="Atom"
      />

      <ComponentPreview
        title="Heading Levels"
        code={`<Heading level={1}>Heading 1</Heading>
<Heading level={2}>Heading 2</Heading>
<Heading level={3}>Heading 3</Heading>
<Heading level={4}>Heading 4</Heading>
<Heading level={5}>Heading 5</Heading>
<Heading level={6}>Heading 6</Heading>`}
      >
        <div className="space-y-2">
          <Heading level={1}>Heading 1</Heading>
          <Heading level={2}>Heading 2</Heading>
          <Heading level={3}>Heading 3</Heading>
          <Heading level={4}>Heading 4</Heading>
          <Heading level={5}>Heading 5</Heading>
          <Heading level={6}>Heading 6</Heading>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Text Sizes"
        code={`<Text size="xs">Extra small text</Text>
<Text size="sm">Small text</Text>
<Text size="base">Base text (default)</Text>
<Text size="lg">Large text</Text>
<Text size="xl">Extra large text</Text>`}
      >
        <div className="space-y-2">
          <Text size="xs">Extra small text</Text>
          <Text size="sm">Small text</Text>
          <Text size="base">Base text (default)</Text>
          <Text size="lg">Large text</Text>
          <Text size="xl">Extra large text</Text>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Text Weights"
        code={`<Text weight="normal">Normal weight</Text>
<Text weight="medium">Medium weight</Text>
<Text weight="semibold">Semibold weight</Text>
<Text weight="bold">Bold weight</Text>`}
      >
        <div className="space-y-2">
          <Text weight="normal">Normal weight</Text>
          <Text weight="medium">Medium weight</Text>
          <Text weight="semibold">Semibold weight</Text>
          <Text weight="bold">Bold weight</Text>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Text Variants"
        code={`<Text variant="default">Default text</Text>
<Text variant="muted">Muted text</Text>
<Text variant="success">Success text</Text>
<Text variant="warning">Warning text</Text>
<Text variant="destructive">Destructive text</Text>`}
      >
        <div className="space-y-2">
          <Text variant="default">Default text</Text>
          <Text variant="muted">Muted text</Text>
          <Text variant="success">Success text</Text>
          <Text variant="warning">Warning text</Text>
          <Text variant="destructive">Destructive text</Text>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Code"
        code={`<p>Install dependencies with <Code>npm install</Code></p>`}
      >
        <p>Install dependencies with <Code>npm install</Code></p>
      </ComponentPreview>

      <ComponentPreview
        title="Lead"
        description="Larger, prominent text for introductions."
        code={`<Lead>
  This is a lead paragraph that stands out from regular body text.
  It's typically used for introductions or important statements.
</Lead>`}
      >
        <Lead>
          This is a lead paragraph that stands out from regular body text.
          It's typically used for introductions or important statements.
        </Lead>
      </ComponentPreview>

      <ComponentPreview
        title="Blockquote"
        code={`<Blockquote>
  "The only way to do great work is to love what you do."
  — Steve Jobs
</Blockquote>`}
      >
        <Blockquote>
          "The only way to do great work is to love what you do."
          <br />— Steve Jobs
        </Blockquote>
      </ComponentPreview>

      <ComponentPreview
        title="Muted"
        description="De-emphasized text for less important information."
        code={`<Muted>This is muted text, perfect for captions and footnotes.</Muted>`}
      >
        <Muted>This is muted text, perfect for captions and footnotes.</Muted>
      </ComponentPreview>

      <PropsTable
        title="Heading Props"
        props={[
          { name: 'level', type: '1 | 2 | 3 | 4 | 5 | 6', required: true, description: 'Heading level (h1-h6).' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
          { name: 'children', type: 'ReactNode', required: true, description: 'Heading text.' },
        ]}
      />

      <PropsTable
        title="Text Props"
        props={[
          { name: 'size', type: '"xs" | "sm" | "base" | "lg" | "xl"', default: '"base"', description: 'Font size.' },
          { name: 'weight', type: '"normal" | "medium" | "semibold" | "bold"', default: '"normal"', description: 'Font weight.' },
          { name: 'variant', type: '"default" | "muted" | "success" | "warning" | "destructive"', default: '"default"', description: 'Text color variant.' },
          { name: 'leading', type: '"none" | "tight" | "normal"', default: '"normal"', description: 'Line height.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
          { name: 'children', type: 'ReactNode', required: true, description: 'Text content.' },
        ]}
      />

      <PropsTable
        title="Other Components Props"
        props={[
          { name: 'className', type: 'string', description: 'Additional CSS classes (all components).' },
          { name: 'children', type: 'ReactNode', required: true, description: 'Content (all components).' },
        ]}
      />
    </div>
  );
}
