import { useState, type ReactNode } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@nicorp/nui';
import { CodeExample } from './CodeExample';

interface ComponentPreviewProps {
  title?: string;
  description?: string;
  code: string;
  children: ReactNode;
}

export function ComponentPreview({ title, description, code, children }: ComponentPreviewProps) {
  return (
    <div className="mb-8 rounded-lg border border-border overflow-hidden">
      {(title || description) && (
        <div className="px-4 py-3 border-b border-border bg-card">
          {title && <h3 className="text-sm font-semibold text-foreground">{title}</h3>}
          {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
        </div>
      )}
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent px-4 h-10">
          <TabsTrigger value="preview" className="text-xs data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
            Preview
          </TabsTrigger>
          <TabsTrigger value="code" className="text-xs data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="p-6 flex flex-wrap items-center gap-4 min-h-[80px]">
          {children}
        </TabsContent>
        <TabsContent value="code" className="p-0 m-0">
          <CodeExample code={code} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
