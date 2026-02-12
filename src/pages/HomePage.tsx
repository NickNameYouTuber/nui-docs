import { Link } from 'react-router-dom';
import { Button, Badge, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@nicorp/nui';
import { CodeExample } from '~/components/CodeExample';
import { NUI_VERSION } from '../version';
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

const features = [
  {
    icon: Component,
    title: '67 Components',
    description: 'A comprehensive set of production-ready, beautifully crafted UI components built on Radix UI primitives.',
  },
  {
    icon: Palette,
    title: 'HSL Theme System',
    description: 'Fully customizable theming with CSS variables in HSL format. Change the look of every component from a single file.',
  },
  {
    icon: Moon,
    title: 'Dark Mode Built-In',
    description: 'ThemeProvider with light, dark & system modes, OS sync, cross-tab persistence, and transition suppression.',
  },
  {
    icon: Zap,
    title: 'Tailwind CSS',
    description: 'Built with Tailwind CSS utility classes. Fully compatible with Tailwind CSS v3.4+ and the class-based dark mode.',
  },
  {
    icon: Accessibility,
    title: 'Accessible',
    description: 'Built on Radix UI primitives with full WAI-ARIA support, keyboard navigation, and focus management.',
  },
  {
    icon: Code2,
    title: 'TypeScript First',
    description: 'Every component is fully typed with exported interfaces. IntelliSense works out of the box.',
  },
];

const statItems = [
  { value: '67', label: 'Components' },
  { value: '200+', label: 'Exports' },
  { value: '13', label: 'Theme Tokens' },
  { value: 'TS', label: 'Fully Typed' },
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
  return (
    <div>
      {/* Hero */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline" className="text-xs">v{NUI_VERSION}</Badge>
          <Badge variant="secondary" className="text-xs">67 components</Badge>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
          <span className="text-primary">NUI</span> — NICorp UI
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-6">
          A modern, accessible, and fully themeable React component library built with
          Radix UI, Tailwind CSS, and TypeScript. Ship beautiful interfaces faster.
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Link to="/getting-started">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/components">
            <Button variant="outline" size="lg" className="gap-2">
              <Component className="h-4 w-4" /> Browse Components
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {statItems.map((stat) => (
            <div key={stat.label} className="text-center p-3 rounded-lg bg-muted/50 border border-border">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick install */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-3">Install</h2>
        <CodeExample code={installCode} language="bash" />
      </div>

      {/* Quick start */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-3">Quick Start</h2>
        <CodeExample code={quickStartCode} />
      </div>

      {/* Features grid */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-6">Why NUI?</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} variant="ghost" className="border border-border hover:border-primary/30 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-md bg-primary/10">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-sm">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Component categories */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Component Categories</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { title: 'Atoms & Inputs', count: 15, desc: 'Button, Input, Checkbox, Switch, Select, Slider, Toggle...' },
            { title: 'Advanced Inputs', count: 8, desc: 'DatePicker, TimePicker, ColorPicker, TagInput, FileUpload...' },
            { title: 'Layout', count: 7, desc: 'Box, Flex, Stack, Grid, Container, AspectRatio, Collapsible' },
            { title: 'Overlays & Feedback', count: 12, desc: 'Dialog, Sheet, Drawer, Tooltip, Popover, Alert, Toast...' },
            { title: 'Navigation', count: 6, desc: 'Breadcrumb, Pagination, Stepper, Tabs, NavigationMenu...' },
            { title: 'Data Display', count: 8, desc: 'DataTable, Chart, Timeline, CodeBlock, MetricCard, Carousel...' },
          ].map((cat) => (
            <div key={cat.title} className="p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm">{cat.title}</span>
                <Badge variant="secondary" className="text-[10px]">{cat.count}</Badge>
              </div>
              <p className="text-xs text-muted-foreground">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
