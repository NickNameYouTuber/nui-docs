import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { SourceCitation, CitationBadge } from '@nicorp/nui';
import { useDocLang } from '../../i18n';

const citations = [
  { index: 1, title: 'React Documentation — useEffect', url: 'https://react.dev/reference/react/useEffect', snippet: 'useEffect is a React Hook that lets you synchronize a component with an external system.' },
  { index: 2, title: 'MDN Web Docs — Fetch API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API', snippet: 'The Fetch API provides an interface for fetching resources across the network.' },
  { index: 3, title: 'TypeScript Handbook — Generics', url: 'https://www.typescriptlang.org/docs/handbook/2/generics.html', snippet: 'A major part of software engineering is building components that are reusable.' },
];

export default function SourceCitationPage() {
  const { t } = useDocLang();
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">SourceCitation</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.sourceCitation.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.sourceCitation.preview1Title')}
          description={t('pages.sourceCitation.preview1Desc')}
          code={`<p>
  React Hooks simplify state management <CitationBadge citation={citations[0]} />
  and data fetching can be done with Fetch API <CitationBadge citation={citations[1]} />
</p>`}
        >
          <div className="text-sm leading-relaxed">
            <p>
              React Hooks simplify state management in functional components
              <CitationBadge citation={citations[0]} />
              {' '}and data fetching can be done with the Fetch API
              <CitationBadge citation={citations[1]} />
              {' '}while TypeScript generics provide type-safe abstractions
              <CitationBadge citation={citations[2]} />
            </p>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.sourceCitation.preview2Title')}
          description={t('pages.sourceCitation.preview2Desc')}
          code={`<SourceCitation citations={citations} variant="footer" />`}
        >
          <SourceCitation citations={citations} variant="footer" />
        </ComponentPreview>

        <ComponentPreview
          title="Inline Variant"
          description="All citation badges in a row"
          code={`<SourceCitation citations={citations} variant="inline" />`}
        >
          <SourceCitation citations={citations} variant="inline" />
        </ComponentPreview>

        <PropsTable
          props={[
            { name: 'citations', type: 'Citation[]', required: true, description: 'Array of citation objects' },
            { name: 'variant', type: '"inline" | "footer"', default: '"footer"', description: 'Display style' },
          ]}
        />

        <div>
          <h3 className="text-lg font-semibold mb-3">CitationBadge Props</h3>
          <PropsTable
            props={[
              { name: 'citation', type: 'Citation', required: true, description: 'Single citation object to display as badge' },
            ]}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Citation</h3>
          <PropsTable
            props={[
              { name: 'index', type: 'number', required: true, description: 'Citation number displayed in badge' },
              { name: 'title', type: 'string', required: true, description: 'Source title' },
              { name: 'url', type: 'string', required: true, description: 'Source URL' },
              { name: 'snippet', type: 'string', description: 'Brief excerpt from source' },
              { name: 'favicon', type: 'string', description: 'Favicon URL for the source' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
