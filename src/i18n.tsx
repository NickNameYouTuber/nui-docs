import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react';
import { en } from './locales/en';
import { ru } from './locales/ru';

/* ── types ── */
type Dict = Record<string, unknown>;
const dicts: Record<string, Dict> = { en, ru };

/* ── helpers ── */
function resolve(dict: Dict, path: string): string {
  const parts = path.split('.');
  let cur: unknown = dict;
  for (const p of parts) {
    if (cur == null || typeof cur === 'string') return path;
    cur = (cur as Dict)[p];
  }
  return typeof cur === 'string' ? cur : path;
}

function interpolate(
  s: string,
  vars?: Record<string, string | number>,
): string {
  if (!vars) return s;
  let r = s;
  for (const [k, v] of Object.entries(vars))
    r = r.replaceAll(`{${k}}`, String(v));
  return r;
}

/* ── context ── */
interface DocLangCtx {
  t: (key: string, vars?: Record<string, string | number>) => string;
  lang: string;
  setLang: (l: string) => void;
}

const Ctx = createContext<DocLangCtx>({
  t: (k) => k,
  lang: 'en',
  setLang: () => {},
});

/* ── provider ── */
export function DocLangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState(
    () => localStorage.getItem('nui-docs-lang') || 'en',
  );

  const setLang = useCallback((l: string) => {
    setLangState(l);
    localStorage.setItem('nui-docs-lang', l);
  }, []);

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const val = resolve(dicts[lang] ?? dicts.en, key);
      const fallback = lang !== 'en' ? resolve(dicts.en, key) : key;
      return interpolate(val !== key ? val : fallback, vars);
    },
    [lang],
  );

  const ctx = useMemo(() => ({ t, lang, setLang }), [t, lang, setLang]);

  return <Ctx.Provider value={ctx}>{children}</Ctx.Provider>;
}

/* ── hook ── */
export function useDocLang() {
  return useContext(Ctx);
}
