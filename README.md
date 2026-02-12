# NUI Documentation Site

Interactive documentation and component showcase for [@nicorp/nui](https://www.npmjs.com/package/@nicorp/nui).

## Features

- 📚 **63 Components Documented** - Comprehensive examples and API reference
- 🎨 **Live Preview** - Interactive component demonstrations
- 🌗 **Dark Mode** - Toggle between light and dark themes
- 📱 **Responsive** - Works on all screen sizes
- ⚡ **Fast** - Built with Vite and React

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5174](http://localhost:5174) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
nui-docs/
├── src/
│   ├── components/       # Documentation components (Layout, Sidebar, etc.)
│   ├── pages/            # Documentation pages
│   │   └── components/   # Individual component pages
│   ├── App.tsx          # Main app with routing
│   └── main.tsx         # Entry point
├── public/              # Static assets
└── package.json
```

## Using @nicorp/nui

This project uses `@nicorp/nui` as an npm package:

```tsx
import { Button, Card, Dialog } from '@nicorp/nui';
import '@nicorp/nui/dist/style.css';

function App() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}
```

## Component Categories

- **Atoms** - Button, Input, Badge, Avatar, etc.
- **Layout** - Container, Flex, Grid, Stack, etc.
- **Overlays** - Dialog, Sheet, Popover, Tooltip, etc.
- **Navigation** - Breadcrumb, Pagination, NavigationMenu, etc.
- **Feedback** - Alert, Progress, Skeleton, Toast, etc.
- **Data** - DataTable, Chart, Timeline, CodeBlock, etc.
- **Advanced** - DatePicker, FileUpload, ColorPicker, etc.

## Documentation Coverage

**63 of 67 components** (94%) are fully documented with:
- Multiple usage examples
- Props tables with types and defaults
- Features and best practices
- Accessibility information

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **@nicorp/nui** - Component library
- **Lucide React** - Icons

## License

MIT
