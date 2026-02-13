import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import {
  TranslateProvider,
  useLocale,
  ChatInput,
  AILoading,
  Combobox,
  MultiSelect,
  DatePicker,
  TagInput,
  FileUpload,
} from '@nicorp/nui';

/* ──────────────── inline demo dictionaries ──────────────── */

const enMessages = {
  sidebar: { home: 'Home', settings: 'Settings', otherProducts: 'Other products' },
  profile: {
    title: 'Profile',
    save: 'Save changes',
    changePassword: 'Change password',
    greeting: 'Hello, {name}!',
  },
  buttons: { confirm: 'Confirm', cancel: 'Cancel', delete: 'Delete' },
};

const ruMessages = {
  sidebar: { home: 'Главная', settings: 'Настройки', otherProducts: 'Другие продукты' },
  profile: {
    title: 'Профиль',
    save: 'Сохранить изменения',
    changePassword: 'Изменить пароль',
    greeting: 'Привет, {name}!',
  },
  buttons: { confirm: 'Подтвердить', cancel: 'Отмена', delete: 'Удалить' },
};

/* ──────────────── small demo components ──────────────── */

function ProfileCard() {
  const { t } = useLocale();
  return (
    <div className="rounded-lg border border-border p-4 space-y-3">
      <h3 className="text-lg font-semibold">{t('profile.title')}</h3>
      <p className="text-sm text-muted-foreground">{t('profile.greeting', { name: 'Alex' })}</p>
      <div className="flex gap-2">
        <button className="px-3 py-1.5 text-sm rounded-md bg-primary text-primary-foreground">{t('profile.save')}</button>
        <button className="px-3 py-1.5 text-sm rounded-md border border-border">{t('profile.changePassword')}</button>
      </div>
    </div>
  );
}

function SidebarDemo() {
  const { t } = useLocale();
  return (
    <ul className="space-y-1 text-sm">
      <li className="px-3 py-1.5 rounded-md bg-accent">{t('sidebar.home')}</li>
      <li className="px-3 py-1.5 rounded-md hover:bg-accent">{t('sidebar.settings')}</li>
      <li className="px-3 py-1.5 rounded-md hover:bg-accent">{t('sidebar.otherProducts')}</li>
    </ul>
  );
}

function ActionButtons() {
  const { t } = useLocale();
  return (
    <div className="flex gap-2">
      <button className="px-3 py-1.5 text-sm rounded-md bg-primary text-primary-foreground">{t('buttons.confirm')}</button>
      <button className="px-3 py-1.5 text-sm rounded-md border border-border">{t('buttons.cancel')}</button>
      <button className="px-3 py-1.5 text-sm rounded-md bg-destructive text-destructive-foreground">{t('buttons.delete')}</button>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════ */

export default function TranslateProviderPage() {
  const [locale, setLocale] = useState<'en' | 'ru'>('en');

  return (
    <div>
      {/* ═══════════ Header ═══════════ */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">TranslateProvider</h1>
        <p className="text-xl text-muted-foreground">
          Универсальная система i18n: переводите свои строки через JSON-словари
          и получайте автоматическую локализацию всех NUI-компонентов.
        </p>
      </div>

      <div className="space-y-10">

        {/* ═══════════ 1. Quick Start — JSON ═══════════ */}
        <section className="rounded-xl border border-border p-6 space-y-4">
          <h2 className="text-2xl font-bold">1. Быстрый старт</h2>
          <p className="text-muted-foreground">
            Создайте JSON-файлы с переводами, передайте их в <code className="font-mono text-foreground">messages</code>,
            а язык — в <code className="font-mono text-foreground">locale</code>:
          </p>

          <h3 className="text-lg font-semibold">Шаг 1 — JSON-словари</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-mono">locales/en.json</p>
              <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`{
  "sidebar": {
    "home": "Home",
    "settings": "Settings",
    "otherProducts": "Other products"
  },
  "profile": {
    "title": "Profile",
    "save": "Save changes",
    "changePassword": "Change password",
    "greeting": "Hello, {name}!"
  },
  "buttons": {
    "confirm": "Confirm",
    "cancel": "Cancel",
    "delete": "Delete"
  }
}`}
              </pre>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-mono">locales/ru.json</p>
              <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`{
  "sidebar": {
    "home": "Главная",
    "settings": "Настройки",
    "otherProducts": "Другие продукты"
  },
  "profile": {
    "title": "Профиль",
    "save": "Сохранить изменения",
    "changePassword": "Изменить пароль",
    "greeting": "Привет, {name}!"
  },
  "buttons": {
    "confirm": "Подтвердить",
    "cancel": "Отмена",
    "delete": "Удалить"
  }
}`}
              </pre>
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-2">Шаг 2 — Подключение</h3>
          <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`import { TranslateProvider } from '@nicorp/nui';
import en from './locales/en.json';
import ru from './locales/ru.json';

function App() {
  const [lang, setLang] = useState('ru');

  return (
    <TranslateProvider locale={lang} messages={{ en, ru }}>
      <MyApp />
    </TranslateProvider>
  );
}`}
          </pre>
          <p className="text-muted-foreground text-sm">
            Это всё! Все ваши строки и NUI-компоненты внутри будут на выбранном языке.
          </p>
        </section>

        {/* ═══════════ 2. useLocale() & t() ═══════════ */}
        <section className="rounded-xl border border-border p-6 space-y-4">
          <h2 className="text-2xl font-bold">2. Хук useLocale() — функция t()</h2>
          <p className="text-muted-foreground">
            В любом компоненте вызовите <code className="font-mono text-foreground">useLocale()</code> —
            получите функцию <code className="font-mono text-foreground">t()</code> для перевода строк по
            ключу через точку:
          </p>
          <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`import { useLocale } from '@nicorp/nui';

function ProfilePage() {
  const { t, lang } = useLocale();

  return (
    <div>
      <h1>{t('profile.title')}</h1>         {/* "Профиль" */}
      <button>{t('profile.save')}</button>   {/* "Сохранить изменения" */}
      <button>{t('buttons.cancel')}</button> {/* "Отмена" */}
      <p>Current language: {lang}</p>        {/* "ru" */}
    </div>
  );
}`}
          </pre>
        </section>

        {/* ═══════════ 3. Variables ═══════════ */}
        <section className="rounded-xl border border-border p-6 space-y-4">
          <h2 className="text-2xl font-bold">3. Переменные в строках</h2>
          <p className="text-muted-foreground">
            Используйте <code className="font-mono text-foreground">{'{name}'}</code> в JSON — и передайте значения
            вторым аргументом <code className="font-mono text-foreground">t()</code>:
          </p>
          <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`// en.json
{ "profile": { "greeting": "Hello, {name}!" } }

// ru.json
{ "profile": { "greeting": "Привет, {name}!" } }

// Component
const { t } = useLocale();
t('profile.greeting', { name: 'Alex' });
// → "Привет, Alex!" (если locale="ru")`}
          </pre>
        </section>

        {/* ═══════════ 4. Language switching ═══════════ */}
        <section className="rounded-xl border border-border p-6 space-y-4">
          <h2 className="text-2xl font-bold">4. Переключение языка</h2>
          <p className="text-muted-foreground">
            Меняйте <code className="font-mono text-foreground">locale</code> через useState —
            все <code className="font-mono text-foreground">t()</code> и NUI-компоненты обновятся мгновенно:
          </p>
          <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`import { useState } from 'react';
import { TranslateProvider } from '@nicorp/nui';
import en from './locales/en.json';
import ru from './locales/ru.json';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <TranslateProvider locale={lang} messages={{ en, ru }}>
      <select value={lang} onChange={e => setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
      <MyApp />
    </TranslateProvider>
  );
}`}
          </pre>
        </section>

        {/* ═══════════ 5. Fallback ═══════════ */}
        <section className="rounded-xl border border-border p-6 space-y-4">
          <h2 className="text-2xl font-bold">5. Цепочка фоллбэков</h2>
          <p className="text-muted-foreground">
            Если ключ не найден в текущем языке, <code className="font-mono text-foreground">t()</code> ищет дальше:
          </p>
          <ol className="list-decimal list-inside text-sm space-y-1 text-muted-foreground">
            <li>Текущий язык (например <code className="font-mono text-foreground">ru</code>)</li>
            <li>Английский словарь (<code className="font-mono text-foreground">en</code>)</li>
            <li>Сам ключ как строка (<code className="font-mono text-foreground">"profile.save"</code>)</li>
          </ol>
          <p className="text-muted-foreground text-sm mt-2">
            Это значит, что можно переводить постепенно: непереведённые ключи покажут
            английский текст, а не пустоту.
          </p>
          <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`// en.json — полный словарь
{ "profile": { "title": "Profile", "bio": "Biography" } }

// ru.json — "bio" пока не переведён
{ "profile": { "title": "Профиль" } }

// locale="ru"
t('profile.title')  // → "Профиль"     (из ru)
t('profile.bio')    // → "Biography"   (фоллбэк → en)
t('profile.xyz')    // → "profile.xyz" (ключ не найден нигде)`}
          </pre>
        </section>

        {/* ═══════════ 6. useTranslate for NUI keys ═══════════ */}
        <section className="rounded-xl border border-border p-6 space-y-4">
          <h2 className="text-2xl font-bold">6. Встроенные строки NUI — useTranslate()</h2>
          <p className="text-muted-foreground">
            NUI-компоненты (ChatInput, Combobox, DatePicker и т.д.) переводятся автоматически
            через <code className="font-mono text-foreground">locale</code>.
            Если нужно прочитать встроенные строки напрямую — используйте <code className="font-mono text-foreground">useTranslate()</code>:
          </p>
          <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
{`import { useTranslate, tpl } from '@nicorp/nui';

function StatusBar() {
  const nui = useTranslate();

  return (
    <div>
      <span>{nui.common_search}</span>          {/* "Поиск" / "Search" */}
      <span>{tpl(nui.multiselect_selected, { count: 3 })}</span>
    </div>
  );
}`}
          </pre>
          <p className="text-muted-foreground text-sm">
            <code className="font-mono text-foreground">useTranslate()</code> — для системных строк NUI.<br />
            <code className="font-mono text-foreground">useLocale()</code> — для ваших JSON-словарей.
          </p>
        </section>

        {/* ═══════════ Live demos ═══════════ */}
        <h2 className="text-2xl font-bold pt-4">Живые примеры</h2>

        {/* Demo 1 — JSON user strings + NUI components */}
        <ComponentPreview
          title="JSON-словари + NUI-компоненты"
          description="Переключатель en ↔ ru — ваши кнопки, профиль, сайдбар и NUI-формы переводятся вместе"
          code={`const [locale, setLocale] = useState<'en' | 'ru'>('en');

const en = { sidebar: { home: "Home", ... }, profile: { title: "Profile", ... }, ... };
const ru = { sidebar: { home: "Главная", ... }, profile: { title: "Профиль", ... }, ... };

<TranslateProvider locale={locale} messages={{ en, ru }}>
  <button onClick={() => setLocale(l => l === 'en' ? 'ru' : 'en')}>Toggle</button>

  {/* Ваши компоненты — через t() */}
  <ProfileCard />
  <SidebarDemo />
  <ActionButtons />

  {/* NUI-компоненты — автоматически */}
  <Combobox options={[...]} />
  <DatePicker />
  <ChatInput showAttach />
</TranslateProvider>`}
        >
          <TranslateProvider locale={locale} messages={{ en: enMessages, ru: ruMessages }}>
            <div className="space-y-4">
              <button
                onClick={() => setLocale(l => l === 'en' ? 'ru' : 'en')}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                {locale === 'en' ? '🇬🇧 English' : '🇷🇺 Русский'} — нажмите для переключения
              </button>

              <h4 className="text-sm font-semibold text-muted-foreground pt-2">Ваши компоненты (JSON)</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <SidebarDemo />
                <ProfileCard />
                <ActionButtons />
              </div>

              <h4 className="text-sm font-semibold text-muted-foreground pt-2">NUI-компоненты (авто)</h4>
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
              <ChatInput showAttach />
              <AILoading variant="text" />
            </div>
          </TranslateProvider>
        </ComponentPreview>

        {/* ═══════════ Props ═══════════ */}
        <PropsTable
          props={[
            {
              name: 'locale',
              type: '"en" | "ru" | string | Partial<NUILocale>',
              default: '"en"',
              description: 'Код языка (строка) или объект-словарь для NUI-компонентов. Определяет текущий язык для messages.'
            },
            {
              name: 'messages',
              type: 'Record<string, MessageDictionary>',
              default: '{}',
              description: 'JSON-словари переводов, ключ — код языка. Пример: { en: enJson, ru: ruJson }.'
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
            <li><code className="text-foreground font-mono">TranslateProvider</code> — компонент-провайдер (locale + messages)</li>
            <li><code className="text-foreground font-mono">useLocale()</code> — хук, возвращает <code className="font-mono">{`{ t, lang }`}</code> для ваших JSON-переводов</li>
            <li><code className="text-foreground font-mono">useTranslate()</code> — хук для встроенных строк NUI-компонентов</li>
            <li><code className="text-foreground font-mono">tpl(template, vars)</code> — подстановка переменных в шаблоны NUI</li>
            <li><code className="text-foreground font-mono">MessageDictionary</code> — тип JSON-словаря</li>
            <li><code className="text-foreground font-mono">TFunction</code> — тип функции t()</li>
            <li><code className="text-foreground font-mono">NUILocale</code> — интерфейс встроенных ключей NUI</li>
            <li><code className="text-foreground font-mono">en</code> / <code className="text-foreground font-mono">ru</code> — встроенные словари NUI</li>
          </ul>
        </section>

        {/* ═══════════ Built-in NUI keys (collapsed) ═══════════ */}
        <section className="rounded-xl border border-border p-6 space-y-4">
          <h2 className="text-2xl font-bold">Встроенные ключи NUI</h2>
          <p className="text-muted-foreground text-sm mb-4">
            Эти ключи используются NUI-компонентами автоматически через <code className="font-mono text-foreground">locale</code>.
            Вам не нужно их добавлять в JSON — они уже есть.
          </p>

          {/* Form keys */}
          <details className="group">
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
              UI — Common, ModeToggle (12 ключей)
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

      </div>
    </div>
  );
}
