import { PageHeader } from '~/components/PageHeader';
import { CodeExample } from '~/components/CodeExample';
import { PropsTable } from '~/components/PropsTable';
import { useTheme, ModeToggle, ModeToggleGroup, Badge } from '@nicorp/nui';
import { useDocLang } from '../i18n';

const tokenDefs = [
  { variable: '--background', light: '0 0% 100%', dark: '222.2 84% 4.9%', usageKey: 'theming.usageBackground' },
  { variable: '--foreground', light: '222.2 84% 4.9%', dark: '210 40% 98%', usageKey: 'theming.usageForeground' },
  { variable: '--primary', light: '221.2 83.2% 53.3%', dark: '217.2 91.2% 59.8%', usageKey: 'theming.usagePrimary' },
  { variable: '--secondary', light: '210 40% 96.1%', dark: '217.2 32.6% 17.5%', usageKey: 'theming.usageSecondary' },
  { variable: '--muted', light: '210 40% 96.1%', dark: '217.2 32.6% 17.5%', usageKey: 'theming.usageMuted' },
  { variable: '--accent', light: '210 40% 96.1%', dark: '217.2 32.6% 17.5%', usageKey: 'theming.usageAccent' },
  { variable: '--destructive', light: '0 84.2% 60.2%', dark: '0 62.8% 30.6%', usageKey: 'theming.usageDestructive' },
  { variable: '--border', light: '214.3 31.8% 91.4%', dark: '217.2 32.6% 17.5%', usageKey: 'theming.usageBorder' },
  { variable: '--input', light: '214.3 31.8% 91.4%', dark: '217.2 32.6% 17.5%', usageKey: 'theming.usageInput' },
  { variable: '--ring', light: '221.2 83.2% 53.3%', dark: '224.3 76.3% 48%', usageKey: 'theming.usageRing' },
  { variable: '--card', light: '0 0% 100%', dark: '222.2 84% 4.9%', usageKey: 'theming.usageCard' },
  { variable: '--popover', light: '0 0% 100%', dark: '222.2 84% 4.9%', usageKey: 'theming.usagePopover' },
  { variable: '--radius', light: '0.5rem', dark: '0.5rem', usageKey: 'theming.usageRadius' },
];

const themeProviderCode = `import { ThemeProvider } from '@nicorp/nui';

<ThemeProvider
  defaultTheme="system"   // initial theme if no stored value
  storageKey="my-theme"   // localStorage key
  attribute="class"       // "class" | "data-theme"
  enableSystem            // listen to OS preference
  disableTransitionOnChange // prevent flash on toggle
>
  <App />
</ThemeProvider>`;

const useThemeCode = `import { useTheme } from '@nicorp/nui';

function MyComponent() {
  const { theme, resolvedTheme, setTheme, themes } = useTheme();

  return (
    <div>
      <p>Stored: {theme}</p>         {/* "light" | "dark" | "system" */}
      <p>Resolved: {resolvedTheme}</p> {/* "light" | "dark" */}
      <button onClick={() => setTheme('dark')}>Dark</button>
    </div>
  );
}`;

const forcedThemeCode = `// Lock a specific page to a theme
<ThemeProvider forcedTheme="dark">
  <MarketingLandingPage />
</ThemeProvider>`;

const customTokensCode = `:root {
  /* Change the primary color to emerald */
  --primary: 160 84% 39%;
  --primary-foreground: 0 0% 100%;

  /* Rounder corners */
  --radius: 0.75rem;
}`;

export function ThemingPage() {
  const { theme, resolvedTheme } = useTheme();
  const { t } = useDocLang();

  return (
    <div>
      <PageHeader
        title={t('theming.title')}
        description={t('theming.description')}
      />

      {/* Live theme status */}
      <div className="mb-8 p-4 rounded-lg border border-border bg-muted/30">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="text-sm">
            <span className="text-muted-foreground">{t('theming.currentTheme')}</span>{' '}
            <Badge variant="outline">{theme}</Badge>
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">{t('theming.resolved')}</span>{' '}
            <Badge>{resolvedTheme}</Badge>
          </div>
          <div className="ml-auto"><ModeToggleGroup /></div>
        </div>
      </div>

      {/* How it works */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">{t('theming.howItWorks')}</h2>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {t('theming.howItWorksText')}
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <span className="px-2 py-1 rounded bg-primary/10 text-primary font-mono">CSS vars (HSL)</span>
          <span>→</span>
          <span className="px-2 py-1 rounded bg-primary/10 text-primary font-mono">Tailwind config hsl(var(...))</span>
          <span>→</span>
          <span className="px-2 py-1 rounded bg-primary/10 text-primary font-mono">Utility classes</span>
          <span>→</span>
          <span className="px-2 py-1 rounded bg-primary/10 text-primary font-mono">Components</span>
        </div>
      </div>

      {/* ThemeProvider setup */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">{t('theming.providerSetup')}</h2>
        <CodeExample code={themeProviderCode} />
      </div>

      {/* useTheme hook */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">{t('theming.useThemeHook')}</h2>
        <CodeExample code={useThemeCode} />
      </div>

      {/* Forced theme */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">{t('theming.forcedTheme')}</h2>
        <p className="text-sm text-muted-foreground mb-3">
          {t('theming.forcedThemeDesc')}
        </p>
        <CodeExample code={forcedThemeCode} />
      </div>

      {/* CSS Tokens reference */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t('theming.tokenReference')}</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-2.5 text-left font-medium">{t('theming.variable')}</th>
                <th className="px-4 py-2.5 text-left font-medium">{t('theming.light')}</th>
                <th className="px-4 py-2.5 text-left font-medium">{t('theming.dark')}</th>
                <th className="px-4 py-2.5 text-left font-medium">{t('theming.usage')}</th>
              </tr>
            </thead>
            <tbody>
              {tokenDefs.map((tok, i) => (
                <tr key={tok.variable} className={i < tokenDefs.length - 1 ? 'border-b border-border' : ''}>
                  <td className="px-4 py-2">
                    <code className="text-xs font-mono text-primary">{tok.variable}</code>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded border border-border" style={{ backgroundColor: `hsl(${tok.light})` }} />
                      <code className="text-xs font-mono text-muted-foreground">{tok.light}</code>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded border border-border" style={{ backgroundColor: `hsl(${tok.dark})` }} />
                      <code className="text-xs font-mono text-muted-foreground">{tok.dark}</code>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-xs text-muted-foreground">{t(tok.usageKey)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customizing */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">{t('theming.customizingTokens')}</h2>
        <p className="text-sm text-muted-foreground mb-3">
          {t('theming.customizingDesc')}
        </p>
        <CodeExample code={customTokensCode} language="css" />
      </div>

      {/* ModeToggle components */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">{t('theming.toggleComponents')}</h2>
        <p className="text-sm text-muted-foreground mb-4">
          {t('theming.toggleComponentsDesc')}
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-lg border border-border text-center">
            <p className="text-xs text-muted-foreground mb-3">{t('theming.modeToggleDropdown')}</p>
            <div className="flex justify-center"><ModeToggle /></div>
          </div>
          <div className="p-6 rounded-lg border border-border text-center">
            <p className="text-xs text-muted-foreground mb-3">{t('theming.modeToggleSegmented')}</p>
            <div className="flex justify-center"><ModeToggleGroup /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
