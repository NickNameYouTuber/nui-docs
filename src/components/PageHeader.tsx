import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  badge?: string;
  children?: ReactNode;
}

export function PageHeader({ title, description, badge, children }: PageHeaderProps) {
  return (
    <div className="mb-8 pb-6 border-b border-border">
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">{title}</h1>
        {badge && (
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
            {badge}
          </span>
        )}
      </div>
      <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">{description}</p>
      {children}
    </div>
  );
}
