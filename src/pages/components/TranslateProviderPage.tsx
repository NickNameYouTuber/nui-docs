import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import {
  TranslateProvider,
  ChatInput,
  ChatMessage,
  AILoading,
  Combobox,
  MultiSelect,
  DatePicker,
  TagInput,
  FileUpload,
} from '@nicorp/nui';

export default function TranslateProviderPage() {
  const [locale, setLocale] = useState<'en' | 'ru'>('en');

  return (
    <div>
      {/* ═══════════ Header ═══════════ */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">TranslateProvider</h1>
        <p className="text-xl text-muted-foreground">
          Универсальный провайдер локализации для всей библиотеки NUI.
          Оберните приложение — и все встроенные строки (плейсхолдеры, кнопки,
          подсказки) переведутся на нужный язык.
        </p>
      </div>

      <div className="space-y-10">

        {/* ═══════════ 1. Quick Start ═══════════ */}
        <section className="rounded-xl border border-border p-6 space-y-4">
          <h2 className="text-2xl font-bold">1. Быстрый старт</h2>
          <p className="text-muted-foreground">
            Два встроенных языка: <code className="font-mono text-foreground">en</code> (по умолчанию)
            и <code className="font-mono text-foreground">ru</code>.
            Просто оберните приложение и передайте строку-код языка:
          </p>
          <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`import { TranslateProvider } from '@nicorp/nui';

function App() {
  return (
    <TranslateProvider locale="ru">
      {/* Все компоненты NUI внутри будут на русском */}
      <MyApp />
    </TranslateProvider>
  );
}`}
          </pre>
          <p className="text-muted-foreground text-sm">
            Без <code className="font-mono text-foreground">TranslateProvider</code> все компоненты
            отрисуются на английском — это значение по умолчанию.
          </p>
        </section>

        {/* ═══════════ 2. Creating a custom dictionary ═══════════ */}
        <section className="rounded-xl border border-border p-6 space-y-4">
          <h2 className="text-2xl font-bold">2. Свой словарь (Custom locale)</h2>
          <p className="text-muted-foreground">
            Если нужен язык, отличный от <code className="font-mono text-foreground">en</code> / <code className="font-mono text-foreground">ru</code>,
            или вы хотите переопределить отдельные строки — создайте объект с нужными ключами.
            Все пропущенные ключи подтянутся из английского словаря.
          </p>

          <h3 className="text-lg font-semibold mt-2">Полный словарь (новый язык)</h3>
          <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`// locales/es.ts  — испанский
import type { NUILocale } from '@nicorp/nui';

export const es: NUILocale = {
  // ── Форма ──
  combobox_placeholder:          "Seleccionar...",
  combobox_searchPlaceholder:    "Buscar...",
  combobox_empty:                "Sin resultados.",
  multiselect_placeholder:       "Seleccionar...",
  multiselect_searchPlaceholder: "Buscar...",
  multiselect_empty:             "Sin resultados.",
  multiselect_selected:          "{count} seleccionados",
  datePicker_placeholder:        "Elegir fecha",
  tagInput_placeholder:          "Añadir etiqueta...",
  fileUpload_dragDrop:           "Arrastra archivos aquí o haz clic",
  fileUpload_maxSize:            "Tamaño máximo: {size}",

  // ── Таблица и навигация ──
  dataTable_searchPlaceholder:   "Buscar...",
  dataTable_noResults:           "Sin resultados.",
  dataTable_pageOf:              "Página {page} de {total}",
  dataTable_previous:            "Anterior",
  dataTable_next:                "Siguiente",
  pagination_previous:           "Anterior",
  pagination_next:               "Siguiente",
  pagination_morePages:          "Más páginas",
  pagination_goToPrevious:       "Ir a la anterior",
  pagination_goToNext:           "Ir a la siguiente",

  // ── AI & Chat ──
  chatInput_placeholder:         "Escribe un mensaje...",
  chatInput_attachFile:          "Adjuntar archivo",
  chatInput_stopGenerating:      "Detener generación",
  chatInput_sendMessage:         "Enviar mensaje",
  aiLoading_thinking:            "Pensando",
  // ... остальные ключи AI (~20)

  // ── Общие ──
  common_close:    "Cerrar",
  common_search:   "Buscar",
  common_noResults:"Sin resultados",
  common_previous: "Anterior",
  common_next:     "Siguiente",
  common_more:     "Más",
  common_copyCode: "Copiar código",

  // ... (полный список ключей — в таблице ниже)
};`}
          </pre>
          <p className="text-muted-foreground text-sm mt-2">
            Затем подключите:
          </p>
          <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`import { es } from './locales/es';

<TranslateProvider locale={es}>
  <App />
</TranslateProvider>`}
          </pre>

          <h3 className="text-lg font-semibold mt-4">Частичный словарь (переопределение)</h3>
          <p className="text-muted-foreground text-sm">
            Можно указать только те ключи, которые хотите поменять.
            Остальные возьмутся из английского:
          </p>
          <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`<TranslateProvider locale={{
  combobox_placeholder:    "Выбрать фреймворк…",
  datePicker_placeholder:  "Когда?",
  chatInput_placeholder:   "Задай вопрос…",
  chatInput_sendMessage:   "Отправить!",
  fileUpload_dragDrop:     "Перетащите файлы сюда",
}}>
  <App />
</TranslateProvider>`}
          </pre>
        </section>

        {/* ═══════════ 3. Dynamic switching ═══════════ */}
        <section className="rounded-xl border border-border p-6 space-y-4">
          <h2 className="text-2xl font-bold">3. Переключение языка на лету</h2>
          <p className="text-muted-foreground">
            Храните текущий язык в <code className="font-mono text-foreground">useState</code> и переключайте — все компоненты обновятся мгновенно:
          </p>
          <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`import { useState } from 'react';
import { TranslateProvider } from '@nicorp/nui';

function App() {
  const [locale, setLocale] = useState<'en' | 'ru'>('en');

  return (
    <TranslateProvider locale={locale}>
      <select value={locale} onChange={e => setLocale(e.target.value as 'en' | 'ru')}>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
      <MyApp />
    </TranslateProvider>
  );
}`}
          </pre>
        </section>

        {/* ═══════════ 4. useTranslate hook ═══════════ */}
        <section className="rounded-xl border border-border p-6 space-y-4">
          <h2 className="text-2xl font-bold">4. Хук useTranslate()</h2>
          <p className="text-muted-foreground">
            Если нужно прочитать строки локализации в своём компоненте — используйте хук.
            Он возвращает объект со всеми ключами текущей локали:
          </p>
          <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`import { useTranslate } from '@nicorp/nui';

function SearchBar() {
  const t = useTranslate();

  return (
    <input
      placeholder={t.common_search}        // "Search" / "Поиск"
      aria-label={t.common_search}
    />
  );
}

function UploadHint() {
  const t = useTranslate();

  return <p>{t.fileUpload_dragDrop}</p>;    // "Drag & drop..." / "Перетащите..."
}`}
          </pre>
        </section>

        {/* ═══════════ 5. tpl() helper ═══════════ */}
        <section className="rounded-xl border border-border p-6 space-y-4">
          <h2 className="text-2xl font-bold">5. Шаблоны с переменными — tpl()</h2>
          <p className="text-muted-foreground">
            Некоторые ключи содержат плейсхолдеры вида <code className="font-mono text-foreground">{'{name}'}</code>.
            Для подстановки значений используйте <code className="font-mono text-foreground">tpl()</code>:
          </p>
          <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`import { useTranslate, tpl } from '@nicorp/nui';

function SelectedCount({ count }: { count: number }) {
  const t = useTranslate();

  // t.multiselect_selected = "{count} selected" (en)
  //                        = "{count} выбрано"   (ru)
  return <span>{tpl(t.multiselect_selected, { count })}</span>;
  // → "3 selected" или "3 выбрано"
}

// Другие ключи с переменными:
// t.reasoning_thoughtFor  → "Thought for {duration}s"
// t.toolCall_calling      → "Calling {name}…"
// t.fileUpload_maxSize    → "Max file size: {size}"
// t.dataTable_pageOf      → "Page {page} of {total}"
// t.filePreview_remove    → "Remove {name}"`}
          </pre>
        </section>

        {/* ═══════════ Live demos ═══════════ */}
        <h2 className="text-2xl font-bold pt-4">Живые примеры</h2>

        {/* Demo 1 — Toggle */}
        <ComponentPreview
          title="Переключение языка"
          description="Кнопка переключает en ↔ ru — формы, файлы, AI-чат обновляются вместе"
          code={`const [locale, setLocale] = useState<'en' | 'ru'>('en');

<TranslateProvider locale={locale}>
  <button onClick={() => setLocale(l => l === 'en' ? 'ru' : 'en')}>
    Toggle
  </button>
  <Combobox options={[...]} />
  <DatePicker />
  <TagInput />
  <MultiSelect options={[...]} />
  <FileUpload maxSize="10MB" />
  <ChatInput showAttach />
  <AILoading variant="text" />
</TranslateProvider>`}
        >
          <TranslateProvider locale={locale}>
            <div className="space-y-4">
              <button
                onClick={() => setLocale(l => l === 'en' ? 'ru' : 'en')}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                {locale === 'en' ? '🇬🇧 English' : '🇷🇺 Русский'} — нажмите для переключения
              </button>

              <h4 className="text-sm font-semibold text-muted-foreground pt-2">Формы</h4>
              <div className="grid grid-cols-2 gap-4">
                <Combobox options={[
                  { value: 'react', label: 'React' },
                  { value: 'vue', label: 'Vue' },
                  { value: 'angular', label: 'Angular' },
                ]} />
                <DatePicker />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <TagInput />
                <MultiSelect options={[
                  { value: 'ts', label: 'TypeScript' },
                  { value: 'js', label: 'JavaScript' },
                  { value: 'py', label: 'Python' },
                ]} />
              </div>
              <FileUpload maxSize="10MB" />

              <h4 className="text-sm font-semibold text-muted-foreground pt-2">AI Chat</h4>
              <ChatInput showAttach />
              <AILoading variant="text" />
            </div>
          </TranslateProvider>
        </ComponentPreview>

        {/* Demo 2 — Partial overrides */}
        <ComponentPreview
          title="Частичный словарь"
          description="Переопределены только 5 ключей — остальные на английском"
          code={`<TranslateProvider locale={{
  combobox_placeholder: "Pick a framework…",
  datePicker_placeholder: "When?",
  fileUpload_dragDrop: "Drop files here",
  chatInput_placeholder: "Ask me anything…",
  chatInput_sendMessage: "Go!",
}}>
  ...
</TranslateProvider>`}
        >
          <TranslateProvider locale={{
            combobox_placeholder: "Pick a framework…",
            datePicker_placeholder: "When?",
            fileUpload_dragDrop: "Drop files here",
            chatInput_placeholder: "Ask me anything…",
            chatInput_sendMessage: "Go!",
          }}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Combobox options={[
                  { value: '1', label: 'React' },
                  { value: '2', label: 'Vue' },
                ]} />
                <DatePicker />
              </div>
              <FileUpload />
              <ChatInput />
            </div>
          </TranslateProvider>
        </ComponentPreview>

        {/* Demo 3 — Russian */}
        <ComponentPreview
          title="Русский язык"
          description="locale='ru' — все строки на русском"
          code={`<TranslateProvider locale="ru">
  <Combobox options={[...]} />
  <DatePicker />
  <FileUpload maxSize="5MB" />
  <ChatMessage content="Привет!" />
  <ChatInput showAttach />
</TranslateProvider>`}
        >
          <TranslateProvider locale="ru">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Combobox options={[
                  { value: '1', label: 'Вариант A' },
                  { value: '2', label: 'Вариант B' },
                ]} />
                <DatePicker />
              </div>
              <FileUpload maxSize="5MB" />
              <ChatMessage
                variant="received"
                avatarFallback="ИИ"
                content="Привет! Чем могу помочь?"
                timestamp="14:20"
                actions={['copy', 'retry', 'like', 'dislike']}
              />
              <ChatInput showAttach />
            </div>
          </TranslateProvider>
        </ComponentPreview>

        {/* ═══════════ 6. Full key reference ═══════════ */}
        <section className="rounded-xl border border-border p-6 space-y-4">
          <h2 className="text-2xl font-bold">6. Все ключи локализации</h2>
          <p className="text-muted-foreground text-sm mb-4">
            Тип <code className="font-mono text-foreground">NUILocale</code> содержит ~80 ключей.
            Ключи с <code className="font-mono text-foreground">{'{}'}</code> — шаблоны, используйте <code className="font-mono text-foreground">tpl()</code>.
          </p>

          {/* Form keys */}
          <details className="group" open>
            <summary className="cursor-pointer font-semibold text-sm select-none">
              Формы — Combobox, MultiSelect, DatePicker, TagInput, FileUpload (12 ключей)
            </summary>
            <div className="mt-2 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b text-left">
                    <th className="py-2 pr-4 font-semibold">Ключ</th>
                    <th className="py-2 pr-4 font-semibold">EN</th>
                    <th className="py-2 font-semibold">RU</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-xs">
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">combobox_placeholder</td><td className="pr-4">Select…</td><td>Выберите…</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">combobox_searchPlaceholder</td><td className="pr-4">Search…</td><td>Поиск…</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">combobox_empty</td><td className="pr-4">No results found.</td><td>Ничего не найдено.</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">multiselect_placeholder</td><td className="pr-4">Select…</td><td>Выберите…</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">multiselect_searchPlaceholder</td><td className="pr-4">Search…</td><td>Поиск…</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">multiselect_empty</td><td className="pr-4">No results found.</td><td>Ничего не найдено.</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">multiselect_selected</td><td className="pr-4">{'{count}'} selected</td><td>{'{count}'} выбрано</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">datePicker_placeholder</td><td className="pr-4">Pick a date</td><td>Выберите дату</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">tagInput_placeholder</td><td className="pr-4">Add tag…</td><td>Добавить тег…</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">fileUpload_dragDrop</td><td className="pr-4">Drag & drop or click to upload</td><td>Перетащите или нажмите для загрузки</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">fileUpload_maxSize</td><td className="pr-4">Max file size: {'{size}'}</td><td>Макс. размер: {'{size}'}</td></tr>
                </tbody>
              </table>
            </div>
          </details>

          {/* Data & Nav keys */}
          <details className="group">
            <summary className="cursor-pointer font-semibold text-sm select-none">
              Данные и навигация — DataTable, Pagination, Carousel, Breadcrumb (14 ключей)
            </summary>
            <div className="mt-2 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b text-left">
                    <th className="py-2 pr-4 font-semibold">Ключ</th>
                    <th className="py-2 pr-4 font-semibold">EN</th>
                    <th className="py-2 font-semibold">RU</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-xs">
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">dataTable_searchPlaceholder</td><td className="pr-4">Search…</td><td>Поиск…</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">dataTable_noResults</td><td className="pr-4">No results.</td><td>Нет результатов.</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">dataTable_pageOf</td><td className="pr-4">Page {'{page}'} of {'{total}'}</td><td>Стр. {'{page}'} из {'{total}'}</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">dataTable_previous</td><td className="pr-4">Previous</td><td>Назад</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">dataTable_next</td><td className="pr-4">Next</td><td>Далее</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">pagination_previous</td><td className="pr-4">Previous</td><td>Назад</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">pagination_next</td><td className="pr-4">Next</td><td>Далее</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">pagination_morePages</td><td className="pr-4">More pages</td><td>Ещё страницы</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">pagination_goToPrevious</td><td className="pr-4">Go to previous page</td><td>Предыдущая страница</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">pagination_goToNext</td><td className="pr-4">Go to next page</td><td>Следующая страница</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">carousel_previousSlide</td><td className="pr-4">Previous slide</td><td>Предыдущий слайд</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">carousel_nextSlide</td><td className="pr-4">Next slide</td><td>Следующий слайд</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">breadcrumb_more</td><td className="pr-4">More</td><td>Ещё</td></tr>
                </tbody>
              </table>
            </div>
          </details>

          {/* AI & Chat keys */}
          <details className="group">
            <summary className="cursor-pointer font-semibold text-sm select-none">
              AI & Chat — ChatInput, ChatHeader, ConversationList и др. (26 ключей)
            </summary>
            <div className="mt-2 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b text-left">
                    <th className="py-2 pr-4 font-semibold">Ключ</th>
                    <th className="py-2 pr-4 font-semibold">EN</th>
                    <th className="py-2 font-semibold">RU</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-xs">
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">chatInput_placeholder</td><td className="pr-4">Type a message…</td><td>Введите сообщение…</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">chatInput_attachFile</td><td className="pr-4">Attach file</td><td>Прикрепить файл</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">chatInput_stopGenerating</td><td className="pr-4">Stop generating</td><td>Остановить генерацию</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">chatInput_sendMessage</td><td className="pr-4">Send message</td><td>Отправить сообщение</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">conversationList_newChat</td><td className="pr-4">New chat</td><td>Новый чат</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">conversationList_searchPlaceholder</td><td className="pr-4">Search conversations…</td><td>Поиск диалогов…</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">conversationList_noResults</td><td className="pr-4">No conversations found</td><td>Диалоги не найдены</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">chatHeader_online</td><td className="pr-4">Online</td><td>В сети</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">chatHeader_offline</td><td className="pr-4">Offline</td><td>Не в сети</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">chatHeader_typing</td><td className="pr-4">Typing…</td><td>Печатает…</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">reasoning_title</td><td className="pr-4">Reasoning</td><td>Рассуждение</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">reasoning_thoughtFor</td><td className="pr-4">Thought for {'{duration}'}s</td><td>Думал {'{duration}'} сек</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">toolCall_calling</td><td className="pr-4">Calling {'{name}'}…</td><td>Вызов {'{name}'}…</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">toolCall_failed</td><td className="pr-4">{'{name}'} failed</td><td>{'{name}'} — ошибка</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">messageActions_copy</td><td className="pr-4">Copy</td><td>Копировать</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">messageActions_retry</td><td className="pr-4">Retry</td><td>Повторить</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">messageActions_like</td><td className="pr-4">Like</td><td>Нравится</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">messageActions_dislike</td><td className="pr-4">Dislike</td><td>Не нравится</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">messageActions_share</td><td className="pr-4">Share</td><td>Поделиться</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">messageActions_copied</td><td className="pr-4">Copied!</td><td>Скопировано!</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">aiLoading_thinking</td><td className="pr-4">Thinking</td><td>Думаю</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">modelSelector_placeholder</td><td className="pr-4">Select model</td><td>Выберите модель</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">modelSelector_noResults</td><td className="pr-4">No models found</td><td>Модели не найдены</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">followUp_freeTextPlaceholder</td><td className="pr-4">Type your own…</td><td>Свой вариант…</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">sourceCitation_sources</td><td className="pr-4">Sources</td><td>Источники</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">filePreview_remove</td><td className="pr-4">Remove {'{name}'}</td><td>Удалить {'{name}'}</td></tr>
                </tbody>
              </table>
            </div>
          </details>

          {/* UI chrome keys */}
          <details className="group">
            <summary className="cursor-pointer font-semibold text-sm select-none">
              UI — Dialog, Sheet, ModeToggle, CodeBlock (12 ключей)
            </summary>
            <div className="mt-2 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b text-left">
                    <th className="py-2 pr-4 font-semibold">Ключ</th>
                    <th className="py-2 pr-4 font-semibold">EN</th>
                    <th className="py-2 font-semibold">RU</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-xs">
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">common_close</td><td className="pr-4">Close</td><td>Закрыть</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">common_search</td><td className="pr-4">Search</td><td>Поиск</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">common_noResults</td><td className="pr-4">No results</td><td>Нет результатов</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">common_previous</td><td className="pr-4">Previous</td><td>Назад</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">common_next</td><td className="pr-4">Next</td><td>Далее</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">common_more</td><td className="pr-4">More</td><td>Ещё</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">common_copyCode</td><td className="pr-4">Copy code</td><td>Скопировать код</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">modeToggle_toggleTheme</td><td className="pr-4">Toggle theme</td><td>Переключить тему</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">modeToggle_light</td><td className="pr-4">Light</td><td>Светлая</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">modeToggle_dark</td><td className="pr-4">Dark</td><td>Тёмная</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">modeToggle_system</td><td className="pr-4">System</td><td>Системная</td></tr>
                  <tr className="border-b border-border/50"><td className="py-1.5 pr-4">modeToggle_colorTheme</td><td className="pr-4">Color theme</td><td>Цветовая тема</td></tr>
                </tbody>
              </table>
            </div>
          </details>
        </section>

        {/* ═══════════ Props ═══════════ */}
        <PropsTable
          props={[
            {
              name: 'locale',
              type: '"en" | "ru" | Partial<NUILocale>',
              default: '"en"',
              description: 'Код встроенного языка или объект-словарь. Пропущенные ключи берутся из английского.'
            },
            {
              name: 'children',
              type: 'ReactNode',
              description: 'Дерево компонентов, которое получит контекст локализации'
            },
          ]}
        />

        {/* ═══════════ Exports ═══════════ */}
        <section className="rounded-xl border border-border p-6">
          <h3 className="text-lg font-semibold mb-3">Экспорты</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><code className="text-foreground font-mono">TranslateProvider</code> — компонент-провайдер</li>
            <li><code className="text-foreground font-mono">useTranslate()</code> — хук, возвращает текущий словарь</li>
            <li><code className="text-foreground font-mono">tpl(template, vars)</code> — подстановка переменных в шаблоны</li>
            <li><code className="text-foreground font-mono">NUILocale</code> — TypeScript-интерфейс (~80 ключей)</li>
            <li><code className="text-foreground font-mono">en</code> — английский словарь</li>
            <li><code className="text-foreground font-mono">ru</code> — русский словарь</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
