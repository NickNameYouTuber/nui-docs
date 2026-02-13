import { Link } from 'react-router-dom';
import { Button, Badge, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@nicorp/nui';
import { CodeExample } from '~/components/CodeExample';
import { NUI_VERSION } from '../version';
import { useDocLang } from '../i18n';
import {
  Palette,
  Zap,
  Moon,
  Component,
  Layers,
  Shield,
  ArrowRight,
  Package,
  Accessibility,
  Code2,
} from 'lucide-react';

const featureDefs = [
  { icon: Component, titleKey: 'home.feat67Title', descKey: 'home.feat67Desc' },
  { icon: Palette, titleKey: 'home.featHslTitle', descKey: 'home.featHslDesc' },
  { icon: Moon, titleKey: 'home.featDarkTitle', descKey: 'home.featDarkDesc' },
  { icon: Zap, titleKey: 'home.featTwTitle', descKey: 'home.featTwDesc' },
  { icon: Accessibility, titleKey: 'home.featA11yTitle', descKey: 'home.featA11yDesc' },
  { icon: Code2, titleKey: 'home.featTsTitle', descKey: 'home.featTsDesc' },
];

const statDefs = [
  { value: '67', labelKey: 'home.statComponents' },
  { value: '200+', labelKey: 'home.statExports' },
  { value: '13', labelKey: 'home.statTokens' },
  { value: 'TS', labelKey: 'home.statTyped' },
];

const installCode = `npm install @nicorp/nui`;

const quickStartCode = `import { ThemeProvider, Button } from '@nicorp/nui';
import '@nicorp/nui/dist/style.css';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Button variant="default">
        Get Started
      </Button>
    </ThemeProvider>
  );
}`;

export function HomePage() {
  const { t } = useDocLang();

  return (
    <div>
      {/* Hero */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline" className="text-xs">v{NUI_VERSION}</Badge>
          <Badge variant="secondary" className="text-xs">{t('home.badge')}</Badge>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
          <span className="text-primary">NUI</span> — NICorp UI
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-6">
          {t('home.description')}
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Link to="/getting-started">
            <Button size="lg" className="gap-2">
              {t('home.getStarted')} <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/components">
            <Button variant="outline" size="lg" className="gap-2">
              <Component className="h-4 w-4" /> {t('home.browseComponents')}
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {statDefs.map((stat) => (
            <div key={stat.labelKey} className="text-center p-3 rounded-lg bg-muted/50 border border-border">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick install */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-3">{t('home.install')}</h2>
        <CodeExample code={installCode} language="bash" />
      </div>

      {/* Quick start */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-3">{t('home.quickStart')}</h2>
        <CodeExample code={quickStartCode} />
      </div>

      {/* Features grid */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-6">{t('home.whyNui')}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureDefs.map((feature) => (
            <Card key={feature.titleKey} variant="ghost" className="border border-border hover:border-primary/30 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-md bg-primary/10">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-sm">{t(feature.titleKey)}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs leading-relaxed">
                  {t(feature.descKey)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Component categories */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">{t('home.componentCategories')}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { titleKey: 'home.catAtoms', count: 15, descKey: 'home.catAtomsDesc' },
            { titleKey: 'home.catAdvanced', count: 8, descKey: 'home.catAdvancedDesc' },
            { titleKey: 'home.catLayout', count: 7, descKey: 'home.catLayoutDesc' },
            { titleKey: 'home.catOverlays', count: 12, descKey: 'home.catOverlaysDesc' },
            { titleKey: 'home.catNav', count: 6, descKey: 'home.catNavDesc' },
            { titleKey: 'home.catData', count: 8, descKey: 'home.catDataDesc' },
          ].map((cat) => (
            <div key={cat.titleKey} className="p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm">{t(cat.titleKey)}</span>
                <Badge variant="secondary" className="text-[10px]">{cat.count}</Badge>
              </div>
              <p className="text-xs text-muted-foreground">{t(cat.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
