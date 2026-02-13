import { CodeBlock } from '@nicorp/nui';

interface CodeExampleProps {
  code: string;
  language?: string;
}

export function CodeExample({ code, language = 'tsx' }: CodeExampleProps) {
  return (
    <CodeBlock
      code={code.trim()}
      language={language}
      showLineNumbers
      showCopy
    />
  );
}
