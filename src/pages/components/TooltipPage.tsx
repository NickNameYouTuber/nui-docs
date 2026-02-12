import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { Plus, Settings, Trash2 } from 'lucide-react';

export function TooltipPage() {
  return (
    <div>
      <PageHeader
        title="Tooltip"
        description="A popup that displays information related to an element on hover or focus. Built on Radix UI Tooltip."
        badge="Overlay"
      />

      <ComponentPreview
        title="Basic Tooltip"
        code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>This is a tooltip</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </ComponentPreview>

      <ComponentPreview
        title="Tooltip Positions"
        code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Top</Button>
  </TooltipTrigger>
  <TooltipContent side="top">Top tooltip</TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Right</Button>
  </TooltipTrigger>
  <TooltipContent side="right">Right tooltip</TooltipContent>
</Tooltip>`}
      >
        <TooltipProvider>
          <div className="flex gap-4">
            {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
              <Tooltip key={side}>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">{side}</Button>
                </TooltipTrigger>
                <TooltipContent side={side}>
                  <p>{side} tooltip</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </ComponentPreview>

      <ComponentPreview
        title="Icon Button with Tooltip"
        code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="ghost" size="icon">
      <Plus className="h-4 w-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>Add new item</TooltipContent>
</Tooltip>`}
      >
        <TooltipProvider>
          <div className="flex gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon"><Plus className="h-4 w-4" /></Button>
              </TooltipTrigger>
              <TooltipContent>Add new item</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon"><Settings className="h-4 w-4" /></Button>
              </TooltipTrigger>
              <TooltipContent>Settings</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4" /></Button>
              </TooltipTrigger>
              <TooltipContent>Delete</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </ComponentPreview>

      <PropsTable
        title="TooltipContent Props"
        props={[
          { name: 'side', type: '"top" | "right" | "bottom" | "left"', default: '"top"', description: 'Preferred side of the trigger to render the tooltip.' },
          { name: 'sideOffset', type: 'number', default: '4', description: 'Distance in pixels from the trigger.' },
          { name: 'align', type: '"start" | "center" | "end"', default: '"center"', description: 'Alignment relative to the trigger.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
        ]}
      />
    </div>
  );
}
