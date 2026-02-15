import { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDocLang } from '../i18n';
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
  CheckCircle2,
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
  HelpCircle,
  Eye,
} from 'lucide-react';
import { NUI_VERSION } from '../version';
import logo from '../../nui-logo.png';
import logoSmall from '../../nui-logo-small.png';

const getNavSections = (t: (k: string) => string) => [
  {
    title: t('nav.overview'),
    items: [
      { label: t('nav.introduction'), href: '/', icon: BookOpen },
      { label: t('nav.gettingStarted'), href: '/getting-started', icon: RectangleHorizontal },
      { label: t('nav.theming'), href: '/theming', icon: Palette },
      { label: t('nav.allComponents'), href: '/components', icon: LayoutGrid },
    ],
  },
  {
    title: t('nav.atomsInputs'),
    items: [
      { label: 'Button', href: '/components/button', icon: MousePointer },
      { label: 'Input', href: '/components/input', icon: TextCursorInput },
      { label: 'Textarea', href: '/components/textarea', icon: AlignLeft },
      { label: 'Label', href: '/components/label', icon: Type },
      { label: 'Card', href: '/components/card', icon: CreditCard },
      { label: 'Badge', href: '/components/badge', icon: Tag },
      { label: 'Avatar', href: '/components/avatar', icon: User },
      { label: 'Select', href: '/components/select', icon: ChevronDown },
      { label: t('nav.checkboxSwitch'), href: '/components/checkbox-switch', icon: ToggleLeft },
      { label: t('nav.radioGroup'), href: '/components/radio-group', icon: CircleDot },
      { label: 'Toggle', href: '/components/toggle', icon: ToggleLeft },
      { label: t('nav.toggleGroup'), href: '/components/toggle-group', icon: ToggleLeft },
      { label: 'Slider', href: '/components/slider', icon: SlidersHorizontal },
      { label: 'Typography', href: '/components/typography', icon: Type },
    ],
  },
  {
    title: t('nav.advancedInputs'),
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
    title: t('nav.layout'),
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
    title: t('nav.overlays'),
    items: [
      { label: 'Dialog', href: '/components/dialog', icon: PanelTop },
      { label: 'AlertDialog', href: '/components/alert-dialog', icon: AlertCircle },
      { label: 'Tooltip', href: '/components/tooltip', icon: MessageCircle },
      { label: t('nav.dropdownMenu'), href: '/components/dropdown-menu', icon: ListChecks },
      { label: 'Popover', href: '/components/popover', icon: MousePointerClick },
      { label: 'Sheet', href: '/components/sheet', icon: PanelRight },
      { label: 'ContextMenu', href: '/components/context-menu', icon: Menu },
      { label: 'HoverCard', href: '/components/hover-card', icon: CreditCard },
      { label: 'Drawer', href: '/components/drawer', icon: PanelLeft },
      { label: 'Command', href: '/components/command', icon: SearchIcon },
    ],
  },
  {
    title: t('nav.navigation'),
    items: [
      { label: 'Tabs', href: '/components/tabs', icon: Layers },
      { label: 'Breadcrumb', href: '/components/breadcrumb', icon: MapPin },
      { label: 'Pagination', href: '/components/pagination', icon: MoreHorizontal },
      { label: 'Stepper', href: '/components/stepper', icon: ListChecks },
      { label: 'NavigationMenu', href: '/components/navigation-menu', icon: Menu },
    ],
  },
  {
    title: t('nav.feedback'),
    items: [
      { label: 'Alert', href: '/components/alert', icon: AlertTriangle },
      { label: 'Progress', href: '/components/progress', icon: Activity },
      { label: 'Skeleton', href: '/components/skeleton', icon: Square },
      { label: 'Sonner', href: '/components/sonner', icon: Bell },
      { label: 'EmptyState', href: '/components/empty-state', icon: Inbox },
    ],
  },
  {
    title: t('nav.dataDisplay'),
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
    title: t('nav.theme'),
    items: [
      { label: 'ThemeProvider', href: '/components/theme-provider', icon: Sun },
    ],
  },
  {
    title: t('nav.i18n'),
    items: [
      { label: 'TranslateProvider', href: '/components/translate-provider', icon: Globe },
    ],
  },
  {
    title: t('nav.aiChat'),
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
      { label: 'ChatQuestion', href: '/components/chat-question', icon: HelpCircle },
      { label: 'ChatActionCard', href: '/components/chat-action-card', icon: CheckCircle2 },
      { label: 'ChatEntityPreview', href: '/components/chat-entity-preview', icon: Eye },
      { label: 'ChatResultCard', href: '/components/chat-result-card', icon: Sparkles },
    ],
  },
  {
    title: t('nav.examples'),
    items: [
      { label: t('nav.aiChatDemo'), href: '/examples/ai-chat-demo', icon: Play },
    ],
  },
];

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useDocLang();
  const navSections = useMemo(() => getNavSections(t), [t]);

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
          <div className="text-[10px] text-muted-foreground leading-none">{t('chrome.componentLibrary')}</div>
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
          {t('chrome.builtWith')}{' '}
          <span className="font-medium text-foreground">@nicorp/nui v{NUI_VERSION}</span>
        </p>
        <p className="text-[10px] text-muted-foreground/70">
          {t('chrome.by')} <span className="font-medium text-foreground">NICorp</span>
        </p>
      </div>
    </div>
  );
}
