import { useDocLang } from '../i18n';

interface Prop {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  title?: string;
  props: Prop[];
}

export function PropsTable({ title, props }: PropsTableProps) {
  const { t } = useDocLang();
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-3">{title ?? t('chrome.props')}</h3>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-2.5 text-left font-medium text-foreground">{t('chrome.prop')}</th>
              <th className="px-4 py-2.5 text-left font-medium text-foreground">{t('chrome.type')}</th>
              <th className="px-4 py-2.5 text-left font-medium text-foreground">{t('chrome.default')}</th>
              <th className="px-4 py-2.5 text-left font-medium text-foreground">{t('chrome.description')}</th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop, i) => (
              <tr
                key={prop.name}
                className={i < props.length - 1 ? 'border-b border-border' : ''}
              >
                <td className="px-4 py-2.5 whitespace-nowrap">
                  <code className="text-xs font-mono px-1.5 py-0.5 rounded bg-primary/10 text-primary">
                    {prop.name}
                    {prop.required && <span className="text-destructive ml-0.5">*</span>}
                  </code>
                </td>
                <td className="px-4 py-2.5">
                  <code className="text-xs font-mono text-muted-foreground">{prop.type}</code>
                </td>
                <td className="px-4 py-2.5">
                  {prop.default ? (
                    <code className="text-xs font-mono text-muted-foreground">{prop.default}</code>
                  ) : (
                    <span className="text-muted-foreground/50 text-xs">—</span>
                  )}
                </td>
                <td className="px-4 py-2.5 text-muted-foreground text-xs">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
