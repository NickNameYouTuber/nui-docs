import { Routes, Route } from 'react-router-dom';
import { Layout } from '~/components/Layout';
import { HomePage } from '~/pages/HomePage';
import { GettingStartedPage } from '~/pages/GettingStartedPage';
import { ThemingPage } from '~/pages/ThemingPage';
import { ComponentsPage } from '~/pages/ComponentsPage';
import { ButtonPage } from '~/pages/components/ButtonPage';
import { InputPage } from '~/pages/components/InputPage';
import { CardPage } from '~/pages/components/CardPage';
import { BadgePage } from '~/pages/components/BadgePage';
import { DialogPage } from '~/pages/components/DialogPage';
import { SelectPage } from '~/pages/components/SelectPage';
import { TabsPage } from '~/pages/components/TabsPage';
import { AlertPage } from '~/pages/components/AlertPage';
import { TooltipPage } from '~/pages/components/TooltipPage';
import { DropdownMenuPage } from '~/pages/components/DropdownMenuPage';
import { CheckboxSwitchPage } from '~/pages/components/CheckboxSwitchPage';
import { TablePage } from '~/pages/components/TablePage';
import { ThemeProviderPage } from '~/pages/components/ThemeProviderPage';
import { LabelPage } from '~/pages/components/LabelPage';
import { TextareaPage } from '~/pages/components/TextareaPage';
import { SeparatorPage } from '~/pages/components/SeparatorPage';
import { AvatarPage } from '~/pages/components/AvatarPage';
import { SliderPage } from '~/pages/components/SliderPage';
import { RadioGroupPage } from '~/pages/components/RadioGroupPage';
import { TogglePage } from '~/pages/components/TogglePage';
import { ToggleGroupPage } from '~/pages/components/ToggleGroupPage';
import { CalendarPage } from '~/pages/components/CalendarPage';
import { SkeletonPage } from '~/pages/components/SkeletonPage';
import { ProgressPage } from '~/pages/components/ProgressPage';
import { TypographyPage } from '~/pages/components/TypographyPage';
import { AspectRatioPage } from '~/pages/components/AspectRatioPage';
import { MultiselectPage } from '~/pages/components/MultiselectPage';
import { ContainerPage } from '~/pages/components/ContainerPage';
import { FlexPage } from '~/pages/components/FlexPage';
import { GridPage } from '~/pages/components/GridPage';
import { StackPage } from '~/pages/components/StackPage';
import AccordionPage from '~/pages/components/AccordionPage';
import DatePickerPage from '~/pages/components/DatePickerPage';
import TimePickerPage from '~/pages/components/TimePickerPage';
import FileUploadPage from '~/pages/components/FileUploadPage';
import ComboboxPage from '~/pages/components/ComboboxPage';
import TagInputPage from '~/pages/components/TagInputPage';
import NumberInputPage from '~/pages/components/NumberInputPage';
import CopyInputPage from '~/pages/components/CopyInputPage';
import ColorPickerPage from '~/pages/components/ColorPickerPage';
import AppShellPage from '~/pages/components/AppShellPage';
import ScrollAreaPage from '~/pages/components/ScrollAreaPage';
import CollapsiblePage from '~/pages/components/CollapsiblePage';
import OTPInputPage from '~/pages/components/OTPInputPage';
import BoxPage from '~/pages/components/BoxPage';
import AlertDialogPage from '~/pages/components/AlertDialogPage';
import PopoverPage from '~/pages/components/PopoverPage';
import SheetPage from '~/pages/components/SheetPage';
import ContextMenuPage from '~/pages/components/ContextMenuPage';
import BreadcrumbPage from '~/pages/components/BreadcrumbPage';
import PaginationPage from '~/pages/components/PaginationPage';
import StepperPage from '~/pages/components/StepperPage';
import NavigationMenuPage from '~/pages/components/NavigationMenuPage';
import SonnerPage from '~/pages/components/SonnerPage';
import EmptyStatePage from '~/pages/components/EmptyStatePage';
import DataTablePage from '~/pages/components/DataTablePage';
import CarouselPage from '~/pages/components/CarouselPage';
import ChartPage from '~/pages/components/ChartPage';
import MetricCardPage from '~/pages/components/MetricCardPage';
import StatusBadgePage from '~/pages/components/StatusBadgePage';
import HoverCardPage from '~/pages/components/HoverCardPage';
import TimelinePage from '~/pages/components/TimelinePage';
import CodeBlockPage from '~/pages/components/CodeBlockPage';
import JsonViewerPage from '~/pages/components/JsonViewerPage';
import DrawerPage from '~/pages/components/DrawerPage';
import CommandPage from '~/pages/components/CommandPage';
import ChatBubblePage from '~/pages/components/ChatBubblePage';
import ChatInputPage from '~/pages/components/ChatInputPage';
import ChatContainerPage from '~/pages/components/ChatContainerPage';
import AILoadingPage from '~/pages/components/AILoadingPage';
import MarkdownRendererPage from '~/pages/components/MarkdownRendererPage';
import PromptSuggestionsPage from '~/pages/components/PromptSuggestionsPage';
import ModelSelectorPage from '~/pages/components/ModelSelectorPage';
import ChatModeSelectorPage from '~/pages/components/ChatModeSelectorPage';
import ChatFollowUpPage from '~/pages/components/ChatFollowUpPage';
import MessageActionsPage from '~/pages/components/MessageActionsPage';
import StreamingTextPage from '~/pages/components/StreamingTextPage';
import ReasoningBlockPage from '~/pages/components/ReasoningBlockPage';
import ChatToolCallPage from '~/pages/components/ChatToolCallPage';
import ConversationListPage from '~/pages/components/ConversationListPage';
import ChatHeaderPage from '~/pages/components/ChatHeaderPage';
import SourceCitationPage from '~/pages/components/SourceCitationPage';
import FilePreviewPage from '~/pages/components/FilePreviewPage';
import ChatMessagePage from '~/pages/components/ChatMessagePage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/getting-started" element={<GettingStartedPage />} />
        <Route path="/theming" element={<ThemingPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/components/button" element={<ButtonPage />} />
        <Route path="/components/input" element={<InputPage />} />
        <Route path="/components/card" element={<CardPage />} />
        <Route path="/components/badge" element={<BadgePage />} />
        <Route path="/components/dialog" element={<DialogPage />} />
        <Route path="/components/select" element={<SelectPage />} />
        <Route path="/components/tabs" element={<TabsPage />} />
        <Route path="/components/alert" element={<AlertPage />} />
        <Route path="/components/tooltip" element={<TooltipPage />} />
        <Route path="/components/dropdown-menu" element={<DropdownMenuPage />} />
        <Route path="/components/checkbox-switch" element={<CheckboxSwitchPage />} />
        <Route path="/components/table" element={<TablePage />} />
        <Route path="/components/theme-provider" element={<ThemeProviderPage />} />
        <Route path="/components/label" element={<LabelPage />} />
        <Route path="/components/textarea" element={<TextareaPage />} />
        <Route path="/components/separator" element={<SeparatorPage />} />
        <Route path="/components/avatar" element={<AvatarPage />} />
        <Route path="/components/slider" element={<SliderPage />} />
        <Route path="/components/radio-group" element={<RadioGroupPage />} />
        <Route path="/components/toggle" element={<TogglePage />} />
        <Route path="/components/toggle-group" element={<ToggleGroupPage />} />
        <Route path="/components/calendar" element={<CalendarPage />} />
        <Route path="/components/skeleton" element={<SkeletonPage />} />
        <Route path="/components/progress" element={<ProgressPage />} />
        <Route path="/components/typography" element={<TypographyPage />} />
        <Route path="/components/aspect-ratio" element={<AspectRatioPage />} />
        <Route path="/components/multiselect" element={<MultiselectPage />} />
        <Route path="/components/container" element={<ContainerPage />} />
        <Route path="/components/flex" element={<FlexPage />} />
        <Route path="/components/grid" element={<GridPage />} />
        <Route path="/components/stack" element={<StackPage />} />
        <Route path="/components/accordion" element={<AccordionPage />} />
        <Route path="/components/date-picker" element={<DatePickerPage />} />
        <Route path="/components/time-picker" element={<TimePickerPage />} />
        <Route path="/components/file-upload" element={<FileUploadPage />} />
        <Route path="/components/combobox" element={<ComboboxPage />} />
        <Route path="/components/tag-input" element={<TagInputPage />} />
        <Route path="/components/number-input" element={<NumberInputPage />} />
        <Route path="/components/copy-input" element={<CopyInputPage />} />
        <Route path="/components/color-picker" element={<ColorPickerPage />} />
        <Route path="/components/app-shell" element={<AppShellPage />} />
        <Route path="/components/scroll-area" element={<ScrollAreaPage />} />
        <Route path="/components/collapsible" element={<CollapsiblePage />} />
        <Route path="/components/otp-input" element={<OTPInputPage />} />
        <Route path="/components/box" element={<BoxPage />} />
        <Route path="/components/alert-dialog" element={<AlertDialogPage />} />
        <Route path="/components/popover" element={<PopoverPage />} />
        <Route path="/components/sheet" element={<SheetPage />} />
        <Route path="/components/context-menu" element={<ContextMenuPage />} />
        <Route path="/components/breadcrumb" element={<BreadcrumbPage />} />
        <Route path="/components/pagination" element={<PaginationPage />} />
        <Route path="/components/stepper" element={<StepperPage />} />
        <Route path="/components/navigation-menu" element={<NavigationMenuPage />} />
        <Route path="/components/sonner" element={<SonnerPage />} />
        <Route path="/components/empty-state" element={<EmptyStatePage />} />
        <Route path="/components/data-table" element={<DataTablePage />} />
        <Route path="/components/carousel" element={<CarouselPage />} />
        <Route path="/components/chart" element={<ChartPage />} />
        <Route path="/components/metric-card" element={<MetricCardPage />} />
        <Route path="/components/status-badge" element={<StatusBadgePage />} />
        <Route path="/components/hover-card" element={<HoverCardPage />} />
        <Route path="/components/timeline" element={<TimelinePage />} />
        <Route path="/components/code-block" element={<CodeBlockPage />} />
        <Route path="/components/json-viewer" element={<JsonViewerPage />} />
        <Route path="/components/drawer" element={<DrawerPage />} />
        <Route path="/components/command" element={<CommandPage />} />
        <Route path="/components/chat-bubble" element={<ChatBubblePage />} />
        <Route path="/components/chat-input" element={<ChatInputPage />} />
        <Route path="/components/chat-container" element={<ChatContainerPage />} />
        <Route path="/components/ai-loading" element={<AILoadingPage />} />
        <Route path="/components/markdown-renderer" element={<MarkdownRendererPage />} />
        <Route path="/components/prompt-suggestions" element={<PromptSuggestionsPage />} />
        <Route path="/components/model-selector" element={<ModelSelectorPage />} />
        <Route path="/components/chat-mode-selector" element={<ChatModeSelectorPage />} />
        <Route path="/components/chat-follow-up" element={<ChatFollowUpPage />} />
        <Route path="/components/message-actions" element={<MessageActionsPage />} />
        <Route path="/components/streaming-text" element={<StreamingTextPage />} />
        <Route path="/components/reasoning-block" element={<ReasoningBlockPage />} />
        <Route path="/components/chat-tool-call" element={<ChatToolCallPage />} />
        <Route path="/components/conversation-list" element={<ConversationListPage />} />
        <Route path="/components/chat-header" element={<ChatHeaderPage />} />
        <Route path="/components/source-citation" element={<SourceCitationPage />} />
        <Route path="/components/file-preview" element={<FilePreviewPage />} />
        <Route path="/components/chat-message" element={<ChatMessagePage />} />
      </Route>
    </Routes>
  );
}
