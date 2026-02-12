import { Link } from 'react-router-dom';
import { PageHeader } from '~/components/PageHeader';
import { Badge } from '@nicorp/nui';
import {
  MousePointer,
  TextCursorInput,
  CreditCard,
  Tag,
  PanelTop,
  ChevronDown,
  Layers,
  AlertTriangle,
  MessageCircle,
  ListChecks,
  ToggleLeft,
  Table2,
  Sun,
  Calendar,
  Clock,
  Palette,
  Hash,
  Upload,
  Type,
  Code2,
  Layout,
  Grid3X3,
  AlignVerticalJustifyStart,
  Square,
  SplitSquareHorizontal,
  PanelLeftClose,
  Navigation,
  MoreHorizontal,
  CircleDot,
  Gauge,
  SlidersHorizontal,
  LoaderCircle,
  Minus,
  User,
  AlignLeft,
  Activity,
  ListFilter,
  Box,
  Layers3,
  ScrollText,
  ChevronDownSquare,
  AlertCircle,
  MousePointerClick,
  PanelRight,
  Menu,
  MapPin,
  Inbox,
  Bell,
  Table2 as TableIcon,
  GalleryHorizontal,
  BarChart3,
  GitBranch,
  FileJson,
  PanelLeft,
} from 'lucide-react';

const documented = [
  { label: 'Button', href: '/components/button', icon: MousePointer, category: 'Atoms' },
  { label: 'Input', href: '/components/input', icon: TextCursorInput, category: 'Atoms' },
  { label: 'Textarea', href: '/components/textarea', icon: AlignLeft, category: 'Atoms' },
  { label: 'Label', href: '/components/label', icon: Type, category: 'Atoms' },
  { label: 'Card', href: '/components/card', icon: CreditCard, category: 'Atoms' },
  { label: 'Badge', href: '/components/badge', icon: Tag, category: 'Atoms' },
  { label: 'Avatar', href: '/components/avatar', icon: User, category: 'Atoms' },
  { label: 'Separator', href: '/components/separator', icon: Minus, category: 'Layout' },
  { label: 'Slider', href: '/components/slider', icon: SlidersHorizontal, category: 'Atoms' },
  { label: 'RadioGroup', href: '/components/radio-group', icon: CircleDot, category: 'Atoms' },
  { label: 'Toggle', href: '/components/toggle', icon: ToggleLeft, category: 'Atoms' },
  { label: 'ToggleGroup', href: '/components/toggle-group', icon: ToggleLeft, category: 'Atoms' },
  { label: 'Dialog', href: '/components/dialog', icon: PanelTop, category: 'Overlays' },
  { label: 'Select', href: '/components/select', icon: ChevronDown, category: 'Atoms' },
  { label: 'MultiSelect', href: '/components/multiselect', icon: ListFilter, category: 'Advanced' },
  { label: 'Tabs', href: '/components/tabs', icon: Layers, category: 'Navigation' },
  { label: 'Alert', href: '/components/alert', icon: AlertTriangle, category: 'Feedback' },
  { label: 'Tooltip', href: '/components/tooltip', icon: MessageCircle, category: 'Overlays' },
  { label: 'Dropdown Menu', href: '/components/dropdown-menu', icon: ListChecks, category: 'Overlays' },
  { label: 'Checkbox & Switch', href: '/components/checkbox-switch', icon: ToggleLeft, category: 'Atoms' },
  { label: 'Table', href: '/components/table', icon: Table2, category: 'Data' },
  { label: 'Calendar', href: '/components/calendar', icon: Calendar, category: 'Advanced' },
  { label: 'Progress', href: '/components/progress', icon: Activity, category: 'Feedback' },
  { label: 'Skeleton', href: '/components/skeleton', icon: Square, category: 'Feedback' },
  { label: 'Typography', href: '/components/typography', icon: Type, category: 'Atoms' },
  { label: 'AspectRatio', href: '/components/aspect-ratio', icon: Square, category: 'Layout' },
  { label: 'Container', href: '/components/container', icon: Box, category: 'Layout' },
  { label: 'Flex', href: '/components/flex', icon: SplitSquareHorizontal, category: 'Layout' },
  { label: 'Grid', href: '/components/grid', icon: Grid3X3, category: 'Layout' },
  { label: 'Stack', href: '/components/stack', icon: Layers3, category: 'Layout' },
  { label: 'Accordion', href: '/components/accordion', icon: AlignVerticalJustifyStart, category: 'Layout' },
  { label: 'DatePicker', href: '/components/date-picker', icon: Calendar, category: 'Advanced' },
  { label: 'TimePicker', href: '/components/time-picker', icon: Clock, category: 'Advanced' },
  { label: 'FileUpload', href: '/components/file-upload', icon: Upload, category: 'Advanced' },
  { label: 'Combobox', href: '/components/combobox', icon: ChevronDown, category: 'Advanced' },
  { label: 'TagInput', href: '/components/tag-input', icon: Tag, category: 'Advanced' },
  { label: 'NumberInput', href: '/components/number-input', icon: Hash, category: 'Advanced' },
  { label: 'CopyInput', href: '/components/copy-input', icon: TextCursorInput, category: 'Advanced' },
  { label: 'ColorPicker', href: '/components/color-picker', icon: Palette, category: 'Advanced' },
  { label: 'AppShell', href: '/components/app-shell', icon: Layout, category: 'Layout' },
  { label: 'ScrollArea', href: '/components/scroll-area', icon: ScrollText, category: 'Layout' },
  { label: 'Collapsible', href: '/components/collapsible', icon: ChevronDownSquare, category: 'Layout' },
  { label: 'OTPInput', href: '/components/otp-input', icon: Hash, category: 'Advanced' },
  { label: 'Box', href: '/components/box', icon: Square, category: 'Layout' },
  { label: 'AlertDialog', href: '/components/alert-dialog', icon: AlertCircle, category: 'Overlays' },
  { label: 'Popover', href: '/components/popover', icon: MousePointerClick, category: 'Overlays' },
  { label: 'Sheet', href: '/components/sheet', icon: PanelRight, category: 'Overlays' },
  { label: 'ContextMenu', href: '/components/context-menu', icon: Menu, category: 'Overlays' },
  { label: 'Breadcrumb', href: '/components/breadcrumb', icon: MapPin, category: 'Navigation' },
  { label: 'Pagination', href: '/components/pagination', icon: MoreHorizontal, category: 'Navigation' },
  { label: 'Stepper', href: '/components/stepper', icon: ListChecks, category: 'Navigation' },
  { label: 'NavigationMenu', href: '/components/navigation-menu', icon: Menu, category: 'Navigation' },
  { label: 'Sonner', href: '/components/sonner', icon: Bell, category: 'Feedback' },
  { label: 'EmptyState', href: '/components/empty-state', icon: Inbox, category: 'Feedback' },
  { label: 'DataTable', href: '/components/data-table', icon: TableIcon, category: 'Data' },
  { label: 'Carousel', href: '/components/carousel', icon: GalleryHorizontal, category: 'Data' },
  { label: 'Chart', href: '/components/chart', icon: BarChart3, category: 'Data' },
  { label: 'MetricCard', href: '/components/metric-card', icon: Gauge, category: 'Data' },
  { label: 'StatusBadge', href: '/components/status-badge', icon: Tag, category: 'Data' },
  { label: 'HoverCard', href: '/components/hover-card', icon: CreditCard, category: 'Overlays' },
  { label: 'Timeline', href: '/components/timeline', icon: GitBranch, category: 'Data' },
  { label: 'CodeBlock', href: '/components/code-block', icon: Code2, category: 'Data' },
  { label: 'JsonViewer', href: '/components/json-viewer', icon: FileJson, category: 'Data' },
  { label: 'Drawer', href: '/components/drawer', icon: PanelLeft, category: 'Overlays' },
  { label: 'ThemeProvider', href: '/components/theme-provider', icon: Sun, category: 'Theme' },
];

const allComponents = [
  { name: 'Accordion', icon: AlignVerticalJustifyStart, category: 'Layout', doc: true },
  { name: 'Alert', icon: AlertTriangle, category: 'Feedback', doc: true },
  { name: 'AlertDialog', icon: PanelTop, category: 'Overlays', doc: true },
  { name: 'AppShell', icon: Layout, category: 'Layout', doc: true },
  { name: 'AspectRatio', icon: Square, category: 'Layout', doc: true },
  { name: 'Avatar', icon: CircleDot, category: 'Atoms', doc: true },
  { name: 'Badge', icon: Tag, category: 'Atoms', doc: true },
  { name: 'Box', icon: Square, category: 'Layout', doc: true },
  { name: 'Breadcrumb', icon: Navigation, category: 'Navigation', doc: true },
  { name: 'Button', icon: MousePointer, category: 'Atoms', doc: true },
  { name: 'Calendar', icon: Calendar, category: 'Advanced', doc: true },
  { name: 'Card', icon: CreditCard, category: 'Atoms', doc: true },
  { name: 'Carousel', icon: GalleryHorizontal, category: 'Data', doc: true },
  { name: 'Chart', icon: BarChart3, category: 'Data', doc: true },
  { name: 'Checkbox', icon: ToggleLeft, category: 'Atoms', doc: true },
  { name: 'CodeBlock', icon: Code2, category: 'Data', doc: true },
  { name: 'Collapsible', icon: PanelLeftClose, category: 'Layout', doc: true },
  { name: 'ColorPicker', icon: Palette, category: 'Advanced', doc: true },
  { name: 'Combobox', icon: ChevronDown, category: 'Advanced', doc: true },
  { name: 'Command', icon: Hash, category: 'Overlays' },
  { name: 'Container', icon: Square, category: 'Layout', doc: true },
  { name: 'ContextMenu', icon: MoreHorizontal, category: 'Overlays', doc: true },
  { name: 'CopyInput', icon: TextCursorInput, category: 'Advanced', doc: true },
  { name: 'DataTable', icon: Table2, category: 'Data', doc: true },
  { name: 'DatePicker', icon: Calendar, category: 'Advanced', doc: true },
  { name: 'Dialog', icon: PanelTop, category: 'Overlays', doc: true },
  { name: 'Drawer', icon: PanelLeftClose, category: 'Overlays', doc: true },
  { name: 'DropdownMenu', icon: ListChecks, category: 'Overlays', doc: true },
  { name: 'EmptyState', icon: Square, category: 'Feedback', doc: true },
  { name: 'FileUpload', icon: Upload, category: 'Advanced', doc: true },
  { name: 'Flex', icon: SplitSquareHorizontal, category: 'Layout', doc: true },
  { name: 'Grid', icon: Grid3X3, category: 'Layout', doc: true },
  { name: 'HoverCard', icon: CreditCard, category: 'Overlays', doc: true },
  { name: 'Input', icon: TextCursorInput, category: 'Atoms', doc: true },
  { name: 'JsonViewer', icon: Code2, category: 'Data', doc: true },
  { name: 'Label', icon: Type, category: 'Atoms', doc: true },
  { name: 'MetricCard', icon: Gauge, category: 'Data', doc: true },
  { name: 'ModeToggle', icon: Sun, category: 'Theme', doc: true },
  { name: 'MultiSelect', icon: ListFilter, category: 'Advanced', doc: true },
  { name: 'NavigationMenu', icon: Navigation, category: 'Navigation', doc: true },
  { name: 'NumberInput', icon: Hash, category: 'Advanced', doc: true },
  { name: 'OTPInput', icon: Hash, category: 'Advanced', doc: true },
  { name: 'Pagination', icon: MoreHorizontal, category: 'Navigation', doc: true },
  { name: 'Popover', icon: MessageCircle, category: 'Overlays', doc: true },
  { name: 'Progress', icon: LoaderCircle, category: 'Feedback', doc: true },
  { name: 'RadioGroup', icon: CircleDot, category: 'Atoms', doc: true },
  { name: 'ScrollArea', icon: AlignVerticalJustifyStart, category: 'Layout', doc: true },
  { name: 'Select', icon: ChevronDown, category: 'Atoms', doc: true },
  { name: 'Separator', icon: Minus, category: 'Layout', doc: true },
  { name: 'Sheet', icon: PanelLeftClose, category: 'Overlays', doc: true },
  { name: 'Skeleton', icon: LoaderCircle, category: 'Feedback', doc: true },
  { name: 'Slider', icon: SlidersHorizontal, category: 'Atoms', doc: true },
  { name: 'Sonner', icon: AlertTriangle, category: 'Feedback', doc: true },
  { name: 'Stack', icon: AlignVerticalJustifyStart, category: 'Layout', doc: true },
  { name: 'StatusBadge', icon: Tag, category: 'Data', doc: true },
  { name: 'Stepper', icon: ListChecks, category: 'Navigation', doc: true },
  { name: 'Switch', icon: ToggleLeft, category: 'Atoms', doc: true },
  { name: 'Table', icon: Table2, category: 'Data', doc: true },
  { name: 'Tabs', icon: Layers, category: 'Navigation', doc: true },
  { name: 'TagInput', icon: Tag, category: 'Advanced', doc: true },
  { name: 'Textarea', icon: Type, category: 'Atoms', doc: true },
  { name: 'ThemeProvider', icon: Sun, category: 'Theme', doc: true },
  { name: 'TimePicker', icon: Clock, category: 'Advanced', doc: true },
  { name: 'Timeline', icon: AlignVerticalJustifyStart, category: 'Data', doc: true },
  { name: 'Toggle', icon: ToggleLeft, category: 'Atoms', doc: true },
  { name: 'ToggleGroup', icon: ToggleLeft, category: 'Atoms', doc: true },
  { name: 'Tooltip', icon: MessageCircle, category: 'Overlays', doc: true },
  { name: 'Typography', icon: Type, category: 'Atoms', doc: true },
];

const categories = ['All', 'Atoms', 'Advanced', 'Layout', 'Overlays', 'Navigation', 'Feedback', 'Data', 'Theme'];

import { useState } from 'react';

export function ComponentsPage() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? allComponents : allComponents.filter(c => c.category === filter);

  return (
    <div>
      <PageHeader
        title="Components"
        description={`Browse all ${allComponents.length} components available in NUI. Components marked with a badge have detailed documentation pages.`}
      />

      {/* Category filter */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 text-xs rounded-full border transition-colors ${
              filter === cat
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Component grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {filtered.map((comp) => {
          const docEntry = documented.find(d => d.label.replace(/ & /g, '').replace(/ /g, '') === comp.name.replace(/ /g, '') ||
            d.label === comp.name);
          const hasDoc = !!comp.doc;

          const content = (
            <div className={`flex items-center gap-2.5 p-3 rounded-lg border transition-colors ${
              hasDoc
                ? 'border-border hover:border-primary/40 hover:bg-primary/5 cursor-pointer'
                : 'border-border/50 opacity-70'
            }`}>
              <comp.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span className="text-sm font-medium truncate">{comp.name}</span>
              {hasDoc && (
                <Badge variant="secondary" className="ml-auto text-[9px] shrink-0">docs</Badge>
              )}
            </div>
          );

          if (hasDoc && docEntry) {
            return (
              <Link key={comp.name} to={docEntry.href}>
                {content}
              </Link>
            );
          }

          return <div key={comp.name}>{content}</div>;
        })}
      </div>
    </div>
  );
}
