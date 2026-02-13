import { NavLink, useLocation } from 'react-router-dom';
import {
  BookOpen,
  Palette,
  LayoutGrid,
  RectangleHorizontal,
  Type,
  CreditCard,
  Tag,
  PanelTop,
  ListChecks,
  Layers,
  AlertTriangle,
  MessageCircle,
  ChevronDown,
  ToggleLeft,
  Table2,
  Sun,
  MousePointer,
  TextCursorInput,
  AlignLeft,
  Minus,
  User,
  SlidersHorizontal,
  CircleDot,
  Calendar,
  Square,
  Activity,
  ListFilter,
  Box,
  SplitSquareHorizontal,
  Grid3x3,
  Layers3,
  ChevronRight,
  Clock,
  Upload,
  Search,
  Tags,
  Hash,
  Copy,
  Layout,
  ScrollText,
  ChevronDownSquare,
  AlertCircle,
  MousePointerClick,
  PanelRight,
  Menu,
  MapPin,
  MoreHorizontal,
  Bell,
  Inbox,
  Table2 as TableIcon,
  GalleryHorizontal,
  BarChart3,
  Gauge,
  GitBranch,
  FileJson,
  PanelLeft,
  Code2,
  Search as SearchIcon,
  MessageSquare,
  SendHorizontal,
  MessagesSquare,
  Loader2,
  FileText,
  Lightbulb,
  Brain,
  Wrench,
  List,
  PanelTopOpen,
  Quote,
  Paperclip,
  LayoutList,
  Sparkles,
  ThumbsUp,
  Zap,
  Globe,
  Play,
} from 'lucide-react';
import { NUI_VERSION } from '../version';
import logo from '../../nui-logo.png';
import logoSmall from '../../nui-logo-small.png';

const navSections = [
  {
    title: 'Overview',
    items: [
      { label: 'Introduction', href: '/', icon: BookOpen },
      { label: 'Getting Started', href: '/getting-started', icon: RectangleHorizontal },
      { label: 'Theming', href: '/theming', icon: Palette },
      { label: 'All Components', href: '/components', icon: LayoutGrid },
    ],
  },
  {
    title: 'Atoms & Inputs',
    items: [
      { label: 'Button', href: '/components/button', icon: MousePointer },
      { label: 'Input', href: '/components/input', icon: TextCursorInput },
      { label: 'Textarea', href: '/components/textarea', icon: AlignLeft },
      { label: 'Label', href: '/components/label', icon: Type },
      { label: 'Card', href: '/components/card', icon: CreditCard },
      { label: 'Badge', href: '/components/badge', icon: Tag },
      { label: 'Avatar', href: '/components/avatar', icon: User },
      { label: 'Select', href: '/components/select', icon: ChevronDown },
      { label: 'Checkbox & Switch', href: '/components/checkbox-switch', icon: ToggleLeft },
      { label: 'Radio Group', href: '/components/radio-group', icon: CircleDot },
      { label: 'Toggle', href: '/components/toggle', icon: ToggleLeft },
      { label: 'Toggle Group', href: '/components/toggle-group', icon: ToggleLeft },
      { label: 'Slider', href: '/components/slider', icon: SlidersHorizontal },
      { label: 'Typography', href: '/components/typography', icon: Type },
    ],
  },
  {
    title: 'Advanced Inputs',
    items: [
      { label: 'MultiSelect', href: '/components/multiselect', icon: ListFilter },
      { label: 'Calendar', href: '/components/calendar', icon: Calendar },
      { label: 'DatePicker', href: '/components/date-picker', icon: Calendar },
      { label: 'TimePicker', href: '/components/time-picker', icon: Clock },
      { label: 'FileUpload', href: '/components/file-upload', icon: Upload },
      { label: 'Combobox', href: '/components/combobox', icon: Search },
      { label: 'TagInput', href: '/components/tag-input', icon: Tags },
      { label: 'NumberInput', href: '/components/number-input', icon: Hash },
      { label: 'CopyInput', href: '/components/copy-input', icon: Copy },
      { label: 'ColorPicker', href: '/components/color-picker', icon: Palette },
      { label: 'OTPInput', href: '/components/otp-input', icon: Hash },
    ],
  },
  {
    title: 'Layout',
    items: [
      { label: 'Container', href: '/components/container', icon: Box },
      { label: 'Flex', href: '/components/flex', icon: SplitSquareHorizontal },
      { label: 'Grid', href: '/components/grid', icon: Grid3x3 },
      { label: 'Stack', href: '/components/stack', icon: Layers3 },
      { label: 'Box', href: '/components/box', icon: Square },
      { label: 'Separator', href: '/components/separator', icon: Minus },
      { label: 'AspectRatio', href: '/components/aspect-ratio', icon: Square },
      { label: 'AppShell', href: '/components/app-shell', icon: Layout },
      { label: 'ScrollArea', href: '/components/scroll-area', icon: ScrollText },
      { label: 'Collapsible', href: '/components/collapsible', icon: ChevronDownSquare },
      { label: 'Accordion', href: '/components/accordion', icon: ChevronRight },
    ],
  },
  {
    title: 'Overlays',
    items: [
      { label: 'Dialog', href: '/components/dialog', icon: PanelTop },
      { label: 'AlertDialog', href: '/components/alert-dialog', icon: AlertCircle },
      { label: 'Tooltip', href: '/components/tooltip', icon: MessageCircle },
      { label: 'Dropdown Menu', href: '/components/dropdown-menu', icon: ListChecks },
      { label: 'Popover', href: '/components/popover', icon: MousePointerClick },
      { label: 'Sheet', href: '/components/sheet', icon: PanelRight },
      { label: 'ContextMenu', href: '/components/context-menu', icon: Menu },
      { label: 'HoverCard', href: '/components/hover-card', icon: CreditCard },
      { label: 'Drawer', href: '/components/drawer', icon: PanelLeft },
      { label: 'Command', href: '/components/command', icon: SearchIcon },
    ],
  },
  {
    title: 'Navigation',
    items: [
      { label: 'Tabs', href: '/components/tabs', icon: Layers },
      { label: 'Breadcrumb', href: '/components/breadcrumb', icon: MapPin },
      { label: 'Pagination', href: '/components/pagination', icon: MoreHorizontal },
      { label: 'Stepper', href: '/components/stepper', icon: ListChecks },
      { label: 'NavigationMenu', href: '/components/navigation-menu', icon: Menu },
    ],
  },
  {
    title: 'Feedback',
    items: [
      { label: 'Alert', href: '/components/alert', icon: AlertTriangle },
      { label: 'Progress', href: '/components/progress', icon: Activity },
      { label: 'Skeleton', href: '/components/skeleton', icon: Square },
      { label: 'Sonner', href: '/components/sonner', icon: Bell },
      { label: 'EmptyState', href: '/components/empty-state', icon: Inbox },
    ],
  },
  {
    title: 'Data Display',
    items: [
      { label: 'Table', href: '/components/table', icon: Table2 },
      { label: 'DataTable', href: '/components/data-table', icon: TableIcon },
      { label: 'Carousel', href: '/components/carousel', icon: GalleryHorizontal },
      { label: 'Chart', href: '/components/chart', icon: BarChart3 },
      { label: 'MetricCard', href: '/components/metric-card', icon: Gauge },
      { label: 'StatusBadge', href: '/components/status-badge', icon: Tag },
      { label: 'Timeline', href: '/components/timeline', icon: GitBranch },
      { label: 'CodeBlock', href: '/components/code-block', icon: Code2 },
      { label: 'JsonViewer', href: '/components/json-viewer', icon: FileJson },
    ],
  },
  {
    title: 'Theme',
    items: [
      { label: 'ThemeProvider', href: '/components/theme-provider', icon: Sun },
    ],
  },
  {
    title: 'AI & Chat',
    items: [
      { label: 'ChatBubble', href: '/components/chat-bubble', icon: MessageSquare },
      { label: 'ChatInput', href: '/components/chat-input', icon: SendHorizontal },
      { label: 'ChatContainer', href: '/components/chat-container', icon: MessagesSquare },
      { label: 'ChatMessage', href: '/components/chat-message', icon: LayoutList },
      { label: 'ChatHeader', href: '/components/chat-header', icon: PanelTopOpen },
      { label: 'ModelSelector', href: '/components/model-selector', icon: Sparkles },
      { label: 'ChatModeSelector', href: '/components/chat-mode-selector', icon: Zap },
      { label: 'ChatFollowUp', href: '/components/chat-follow-up', icon: MessageCircle },
      { label: 'MessageActions', href: '/components/message-actions', icon: ThumbsUp },
      { label: 'StreamingText', href: '/components/streaming-text', icon: Type },
      { label: 'ReasoningBlock', href: '/components/reasoning-block', icon: Brain },
      { label: 'ChatToolCall', href: '/components/chat-tool-call', icon: Wrench },
      { label: 'ConversationList', href: '/components/conversation-list', icon: List },
      { label: 'SourceCitation', href: '/components/source-citation', icon: Quote },
      { label: 'FilePreview', href: '/components/file-preview', icon: Paperclip },
      { label: 'AILoading', href: '/components/ai-loading', icon: Loader2 },
      { label: 'MarkdownRenderer', href: '/components/markdown-renderer', icon: FileText },
      { label: 'PromptSuggestions', href: '/components/prompt-suggestions', icon: Lightbulb },
      { label: 'NUIProvider', href: '/components/nui-provider', icon: Globe },
    ],
  },
  {
    title: 'Examples',
    items: [
      { label: 'AI Chat Demo', href: '/examples/ai-chat-demo', icon: Play },
    ],
  },
];

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 h-14 border-b border-border shrink-0">
        <img
          src={logo}
          alt="NUI Logo"
          className="w-8 h-8 rounded-lg object-contain bg-primary/10 p-1"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = logoSmall; }}
        />
        <div>
          <div className="font-semibold text-sm text-foreground">NUI</div>
          <div className="text-[10px] text-muted-foreground leading-none">Component Library</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-auto py-4 px-3">
        {navSections.map((section) => (
          <div key={section.title} className="mb-6">
            <div className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              {section.title}
            </div>
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    end={item.href === '/'}
                    onClick={onNavigate}
                    className={({ isActive }) =>
                      `flex items-center gap-2.5 px-3 py-1.5 rounded-md text-sm transition-colors ${
                        isActive
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`
                    }
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="shrink-0 border-t border-border px-6 py-3">
        <p className="text-[11px] text-muted-foreground mb-1">
          Built with{' '}
          <span className="font-medium text-foreground">@nicorp/nui v{NUI_VERSION}</span>
        </p>
        <p className="text-[10px] text-muted-foreground/70">
          by <span className="font-medium text-foreground">NICorp</span>
        </p>
      </div>
    </div>
  );
}
