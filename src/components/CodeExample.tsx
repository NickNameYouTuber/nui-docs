import { Highlight, themes } from 'prism-react-renderer';
import { useTheme } from '@nicorp/nui';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

interface CodeExampleProps {
  code: string;
  language?: string;
}

export function CodeExample({ code, language = 'tsx' }: CodeExampleProps) {
  const { resolvedTheme } = useTheme();
  const [copied, setCopied] = useState(false);

  const trimmed = code.trim();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(trimmed);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 z-10 p-1.5 rounded-md bg-muted/80 backdrop-blur text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
        title="Copy code"
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
      <Highlight
        theme={resolvedTheme === 'dark' ? themes.nightOwl : themes.nightOwlLight}
        code={trimmed}
        language={language}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className="overflow-x-auto p-4 text-[13px] leading-relaxed"
            style={{ ...style, margin: 0, background: 'transparent' }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className="inline-block w-8 text-right mr-4 text-muted-foreground/40 select-none text-xs">
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
