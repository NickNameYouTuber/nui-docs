import { PageHeader } from '~/components/PageHeader';
import { CodeExample } from '~/components/CodeExample';
import { PropsTable } from '~/components/PropsTable';
import { useTheme, ModeToggle, ModeToggleGroup, Badge } from '@nicorp/nui';

const tokens = [
  { variable: '--background', light: '0 0% 100%', dark: '222.2 84% 4.9%', usage: 'Page background' },
  { variable: '--foreground', light: '222.2 84% 4.9%', dark: '210 40% 98%', usage: 'Default text color' },
  { variable: '--primary', light: '221.2 83.2% 53.3%', dark: '217.2 91.2% 59.8%', usage: 'Primary brand color' },
  { variable: '--secondary', light: '210 40% 96.1%', dark: '217.2 32.6% 17.5%', usage: 'Secondary surfaces' },
  { variable: '--muted', light: '210 40% 96.1%', dark: '217.2 32.6% 17.5%', usage: 'Muted backgrounds' },
  { variable: '--accent', light: '210 40% 96.1%', dark: '217.2 32.6% 17.5%', usage: 'Accent / hover states' },
  { variable: '--destructive', light: '0 84.2% 60.2%', dark: '0 62.8% 30.6%', usage: 'Error / danger actions' },
  { variable: '--border', light: '214.3 31.8% 91.4%', dark: '217.2 32.6% 17.5%', usage: 'Border color' },
  { variable: '--input', light: '214.3 31.8% 91.4%', dark: '217.2 32.6% 17.5%', usage: 'Input borders' },
  { variable: '--ring', light: '221.2 83.2% 53.3%', dark: '224.3 76.3% 48%', usage: 'Focus rings' },
  { variable: '--card', light: '0 0% 100%', dark: '222.2 84% 4.9%', usage: 'Card background' },
  { variable: '--popover', light: '0 0% 100%', dark: '222.2 84% 4.9%', usage: 'Popover background' },
  { variable: '--radius', light: '0.5rem', dark: '0.5rem', usage: 'Base border radius' },
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

  return (
    <div>
      <PageHeader
        title="Theming"
        description="NUI uses CSS variables in HSL format for theming, enabling full customization of colors, radii, and dark mode from a single stylesheet."
      />

      {/* Live theme status */}
      <div className="mb-8 p-4 rounded-lg border border-border bg-muted/30">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="text-sm">
            <span className="text-muted-foreground">Current theme:</span>{' '}
            <Badge variant="outline">{theme}</Badge>
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Resolved:</span>{' '}
            <Badge>{resolvedTheme}</Badge>
          </div>
          <div className="ml-auto"><ModeToggleGroup /></div>
        </div>
      </div>

      {/* How it works */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">How It Works</h2>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          NUI's theming is built around CSS custom properties in HSL format. The <code className="text-xs font-mono px-1 py-0.5 rounded bg-muted">ThemeProvider</code> adds
          a <code className="text-xs font-mono px-1 py-0.5 rounded bg-muted">.dark</code> or <code className="text-xs font-mono px-1 py-0.5 rounded bg-muted">.light</code> class to the <code className="text-xs font-mono px-1 py-0.5 rounded bg-muted">&lt;html&gt;</code> element. Your CSS defines
          different variable values for <code className="text-xs font-mono px-1 py-0.5 rounded bg-muted">:root</code> (light) and <code className="text-xs font-mono px-1 py-0.5 rounded bg-muted">.dark</code>. Tailwind maps these variables through
          the <code className="text-xs font-mono px-1 py-0.5 rounded bg-muted">hsl()</code> wrapper in your Tailwind config.
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
        <h2 className="text-xl font-semibold mb-3">ThemeProvider Setup</h2>
        <CodeExample code={themeProviderCode} />
      </div>

      {/* useTheme hook */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">useTheme Hook</h2>
        <CodeExample code={useThemeCode} />
      </div>

      {/* Forced theme */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Forced Theme</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Lock a specific section or page to a theme, ignoring user preference:
        </p>
        <CodeExample code={forcedThemeCode} />
      </div>

      {/* CSS Tokens reference */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">CSS Token Reference</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-2.5 text-left font-medium">Variable</th>
                <th className="px-4 py-2.5 text-left font-medium">Light</th>
                <th className="px-4 py-2.5 text-left font-medium">Dark</th>
                <th className="px-4 py-2.5 text-left font-medium">Usage</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((t, i) => (
                <tr key={t.variable} className={i < tokens.length - 1 ? 'border-b border-border' : ''}>
                  <td className="px-4 py-2">
                    <code className="text-xs font-mono text-primary">{t.variable}</code>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded border border-border" style={{ backgroundColor: `hsl(${t.light})` }} />
                      <code className="text-xs font-mono text-muted-foreground">{t.light}</code>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded border border-border" style={{ backgroundColor: `hsl(${t.dark})` }} />
                      <code className="text-xs font-mono text-muted-foreground">{t.dark}</code>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-xs text-muted-foreground">{t.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customizing */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Customizing Tokens</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Override any token in your CSS to create a custom theme. Values are in HSL format without the <code className="text-xs font-mono px-1 py-0.5 rounded bg-muted">hsl()</code> wrapper:
        </p>
        <CodeExample code={customTokensCode} language="css" />
      </div>

      {/* ModeToggle components */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Toggle Components</h2>
        <p className="text-sm text-muted-foreground mb-4">
          NUI provides two ready-made theme toggle components:
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-lg border border-border text-center">
            <p className="text-xs text-muted-foreground mb-3">ModeToggle (Dropdown)</p>
            <div className="flex justify-center"><ModeToggle /></div>
          </div>
          <div className="p-6 rounded-lg border border-border text-center">
            <p className="text-xs text-muted-foreground mb-3">ModeToggleGroup (Segmented)</p>
            <div className="flex justify-center"><ModeToggleGroup /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
