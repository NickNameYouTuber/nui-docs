import { useTheme, ModeToggle, ModeToggleGroup, Badge, Button } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { useDocLang } from '~/i18n';

export function ThemeProviderPage() {
  const { t } = useDocLang();
  const { theme, resolvedTheme, setTheme, themes } = useTheme();

  return (
    <div>
      <PageHeader
        title="ThemeProvider"
        description={t('pages.themeProvider.desc')}
        badge="Theme"
      />

      {/* Live demo */}
      <div className="mb-8 p-4 rounded-lg border border-border bg-muted/30">
        <h3 className="text-sm font-semibold mb-3">Live Theme State</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">theme:</span>
            <Badge variant="outline">{theme}</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">resolvedTheme:</span>
            <Badge>{resolvedTheme}</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">themes:</span>
            <code className="text-xs font-mono text-muted-foreground">[{themes.join(', ')}]</code>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <Button size="sm" variant={theme === 'light' ? 'default' : 'outline'} onClick={() => setTheme('light')}>Light</Button>
          <Button size="sm" variant={theme === 'dark' ? 'default' : 'outline'} onClick={() => setTheme('dark')}>Dark</Button>
          <Button size="sm" variant={theme === 'system' ? 'default' : 'outline'} onClick={() => setTheme('system')}>System</Button>
        </div>
      </div>

      <ComponentPreview
        title={t('pages.themeProvider.preview1Title')}
        code={`import { ThemeProvider } from '@nicorp/nui';

ReactDOM.createRoot(root).render(
  <ThemeProvider
    defaultTheme="system"
    storageKey="nui-theme"
    attribute="class"
    enableSystem
    disableTransitionOnChange
  >
    <App />
  </ThemeProvider>
);`}
      >
        <div className="text-sm text-muted-foreground">
          Wrap your entire app in ThemeProvider. It manages the <code className="font-mono text-xs px-1 py-0.5 rounded bg-muted">.dark</code> class on <code className="font-mono text-xs px-1 py-0.5 rounded bg-muted">&lt;html&gt;</code> automatically.
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.themeProvider.preview2Title')}
        description={t('pages.themeProvider.preview2Desc')}
        code={`import { ModeToggle } from '@nicorp/nui';

<ModeToggle />`}
      >
        <ModeToggle />
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.themeProvider.preview3Title')}
        description={t('pages.themeProvider.preview3Desc')}
        code={`import { ModeToggleGroup } from '@nicorp/nui';

<ModeToggleGroup />`}
      >
        <ModeToggleGroup />
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.themeProvider.preview4Title')}
        code={`import { useTheme } from '@nicorp/nui';

function MyComponent() {
  const { theme, resolvedTheme, setTheme, themes } = useTheme();

  // theme: "light" | "dark" | "system"  (stored preference)
  // resolvedTheme: "light" | "dark"     (actual resolved value)
  // setTheme: (theme) => void
  // themes: readonly ["light", "dark", "system"]

  return <p>Current: {resolvedTheme}</p>;
}`}
      >
        <div className="text-sm">
          <span className="text-muted-foreground">resolvedTheme = </span>
          <Badge>{resolvedTheme}</Badge>
        </div>
      </ComponentPreview>

      <PropsTable
        title="ThemeProvider Props"
        props={[
          { name: 'children', type: 'ReactNode', required: true, description: 'Application content.' },
          { name: 'defaultTheme', type: '"light" | "dark" | "system"', default: '"system"', description: 'Initial theme if no stored value.' },
          { name: 'storageKey', type: 'string', default: '"nui-theme"', description: 'localStorage key for persisting the theme.' },
          { name: 'attribute', type: '"class" | "data-theme"', default: '"class"', description: 'HTML attribute to apply the theme on <html>.' },
          { name: 'enableSystem', type: 'boolean', default: 'true', description: 'Listen to OS prefers-color-scheme.' },
          { name: 'disableTransitionOnChange', type: 'boolean', default: 'false', description: 'Disable CSS transitions for one frame when theme changes.' },
          { name: 'forcedTheme', type: '"light" | "dark" | "system"', description: 'Force a specific theme, ignoring user preference.' },
          { name: 'nonce', type: 'string', description: 'CSP nonce for the inline <style> element used for transition suppression.' },
        ]}
      />

      <PropsTable
        title="useTheme Return Value"
        props={[
          { name: 'theme', type: '"light" | "dark" | "system"', description: 'The stored user preference.' },
          { name: 'resolvedTheme', type: '"light" | "dark"', description: 'The actual applied theme (resolves "system" to light/dark).' },
          { name: 'setTheme', type: '(theme: Theme) => void', description: 'Update the theme.' },
          { name: 'themes', type: 'readonly Theme[]', description: 'Array of available themes.' },
        ]}
      />
    </div>
  );
}
