import { PageHeader } from '~/components/PageHeader';
import { CodeExample } from '~/components/CodeExample';
import { useDocLang } from '../i18n';

const installSteps = [
  {
    title: '1. Install the package',
    titleKey: 'start.step1',
    code: `npm install @nicorp/nui`,
    language: 'bash',
  },
  {
    title: '2. Install peer dependencies',
    titleKey: 'start.step2',
    code: `npm install react react-dom tailwindcss`,
    language: 'bash',
  },
  {
    title: '3. Import the styles',
    titleKey: 'start.step3',
    description: 'Add the NUI stylesheet to your app entry point:',
    descKey: 'start.step3desc',
    code: `// main.tsx or App.tsx
import '@nicorp/nui/dist/style.css';`,
  },
  {
    title: '4. Configure Tailwind CSS',
    titleKey: 'start.step4',
    description: 'Add NUI to your Tailwind content paths and set up the theme:',
    descKey: 'start.step4desc',
    code: `// tailwind.config.ts
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nicorp/nui/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
};`,
  },
  {
    title: '5. Add CSS variables',
    titleKey: 'start.step5',
    description: 'Define theme tokens in your global CSS file:',
    descKey: 'start.step5desc',
    code: `/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 221.2 83.2% 53.3%;
  --radius: 0.5rem;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 47.4% 11.2%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 224.3 76.3% 48%;
}`,
  },
  {
    title: '6. Set up the ThemeProvider',
    titleKey: 'start.step6',
    description: 'Wrap your app with NUI\'s ThemeProvider:',
    descKey: 'start.step6desc',
    code: `// main.tsx
import { ThemeProvider } from '@nicorp/nui';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" attribute="class" enableSystem>
    <App />
  </ThemeProvider>
);`,
  },
  {
    title: '7. Use components',
    titleKey: 'start.step7',
    code: `import { Button, Card, CardHeader, CardTitle, CardContent } from '@nicorp/nui';

function MyPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}`,
  },
];

export function GettingStartedPage() {
  const { t } = useDocLang();

  return (
    <div>
      <PageHeader
        title={t('start.title')}
        description={t('start.description')}
      />

      <div className="space-y-8">
        {installSteps.map((step) => (
          <div key={step.titleKey}>
            <h3 className="text-base font-semibold mb-1">{t(step.titleKey)}</h3>
            {step.descKey && (
              <p className="text-sm text-muted-foreground mb-2">{t(step.descKey)}</p>
            )}
            <CodeExample code={step.code} language={step.language || 'tsx'} />
          </div>
        ))}
      </div>
    </div>
  );
}
