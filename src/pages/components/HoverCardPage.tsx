import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Avatar,
  Button,
} from '@nicorp/nui';
import { CalendarDays, MapPin } from 'lucide-react';

export default function HoverCardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">HoverCard</h1>
        <p className="text-xl text-muted-foreground">
          A popover that appears on hover, built with Radix UI for displaying rich content.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Basic Hover Card"
          description="Hover over the trigger to see content"
          code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@username</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="space-y-2">
      <h4 className="text-sm font-semibold">@username</h4>
      <p className="text-sm text-muted-foreground">
        The React Framework for the Web
      </p>
    </div>
  </HoverCardContent>
</HoverCard>`}
        >
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@nextjs</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm text-muted-foreground">
                  The React Framework for the Web – used by some of the world's largest companies.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-xs text-muted-foreground">Joined December 2021</span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </ComponentPreview>

        <ComponentPreview
          title="User Profile Card"
          description="Rich user information on hover"
          code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@shadcn</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <div className="space-y-1 flex-1">
        <h4 className="text-sm font-semibold">@shadcn</h4>
        <p className="text-sm">
          The React Framework – created and maintained by @vercel.
        </p>
        <div className="flex items-center pt-2">
          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}
        >
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@shadcn</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar className="h-12 w-12">
                  <div className="bg-primary text-primary-foreground flex items-center justify-center h-full text-lg font-bold">
                    SC
                  </div>
                </Avatar>
                <div className="space-y-1 flex-1">
                  <h4 className="text-sm font-semibold">@shadcn</h4>
                  <p className="text-sm text-muted-foreground">
                    The React Framework – created and maintained by @vercel.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs text-muted-foreground">Joined December 2021</span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </ComponentPreview>

        <ComponentPreview
          title="Location Info"
          description="Display location details"
          code={`<HoverCard>
  <HoverCardTrigger asChild>
    <span className="cursor-pointer underline decoration-dotted">
      San Francisco
    </span>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="space-y-2">
      <div className="flex items-center">
        <MapPin className="mr-2 h-4 w-4" />
        <h4 className="text-sm font-semibold">San Francisco, CA</h4>
      </div>
      <p className="text-sm text-muted-foreground">
        Known for its hilly terrain and iconic landmarks.
      </p>
    </div>
  </HoverCardContent>
</HoverCard>`}
        >
          <p className="text-sm">
            I visited{' '}
            <HoverCard>
              <HoverCardTrigger asChild>
                <span className="cursor-pointer underline decoration-dotted text-primary font-medium">
                  San Francisco
                </span>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    <h4 className="text-sm font-semibold">San Francisco, CA</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A cultural and commercial center of Northern California, known for its hilly terrain and iconic landmarks.
                  </p>
                  <div className="text-xs text-muted-foreground pt-1">
                    Population: 873,965
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            {' '}last summer.
          </p>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Component Structure</h2>
          <p className="text-muted-foreground mb-4">
            HoverCard consists of three sub-components:
          </p>
          <ul className="space-y-2 text-sm list-disc pl-5">
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">HoverCard</code> - Root component (Radix Root)</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">HoverCardTrigger</code> - Element that triggers hover (use asChild with Button/span)</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">HoverCardContent</code> - Popover content that appears on hover</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          
          <h3 className="text-lg font-semibold mb-2 mt-4">HoverCardContent</h3>
          <PropsTable
            props={[
              {
                name: 'align',
                type: '"start" | "center" | "end"',
                default: '"center"',
                description: 'Horizontal alignment',
              },
              {
                name: 'sideOffset',
                type: 'number',
                default: '4',
                description: 'Distance from trigger in pixels',
              },
              {
                name: 'className',
                type: 'string',
                default: '-',
                description: 'Additional CSS classes',
              },
            ]}
          />
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Radix UI:</strong> Built on Radix HoverCard primitive
            </li>
            <li>
              <strong>Hover Activated:</strong> Opens on mouse enter, closes on mouse leave
            </li>
            <li>
              <strong>Smooth Animations:</strong> Fade and zoom in/out transitions
            </li>
            <li>
              <strong>Smart Positioning:</strong> Auto-adjusts to stay within viewport
            </li>
            <li>
              <strong>Flexible Triggers:</strong> Use with buttons, links, spans via asChild
            </li>
            <li>
              <strong>Accessible:</strong> Proper ARIA attributes and keyboard support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
