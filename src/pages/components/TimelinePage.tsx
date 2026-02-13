import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import {
  Timeline,
  TimelineItem,
  TimelineIcon,
  TimelineConnector,
  TimelineContent,
} from '@nicorp/nui';
import { Check, Clock, Package, Truck } from 'lucide-react';
import { useDocLang } from '../../i18n';

export default function TimelinePage() {
  const { t } = useDocLang();
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Timeline</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.timeline.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.timeline.preview1Title')}
          description={t('pages.timeline.preview1Desc')}
          code={`<Timeline>
  <TimelineItem>
    <TimelineConnector />
    <TimelineIcon>
      <Check className="h-4 w-4" />
    </TimelineIcon>
    <TimelineContent>
      <h4 className="font-semibold">Order Placed</h4>
      <p className="text-sm text-muted-foreground">
        Your order was placed successfully
      </p>
    </TimelineContent>
  </TimelineItem>
  {/* More items */}
</Timeline>`}
        >
          <Timeline>
            <TimelineItem>
              <TimelineConnector />
              <TimelineIcon>
                <Check className="h-4 w-4" />
              </TimelineIcon>
              <TimelineContent>
                <h4 className="font-semibold">Order Placed</h4>
                <p className="text-sm text-muted-foreground">December 10, 2024</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineIcon>
                <Package className="h-4 w-4" />
              </TimelineIcon>
              <TimelineContent>
                <h4 className="font-semibold">Processing</h4>
                <p className="text-sm text-muted-foreground">December 11, 2024</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineIcon>
                <Truck className="h-4 w-4" />
              </TimelineIcon>
              <TimelineContent>
                <h4 className="font-semibold">Shipped</h4>
                <p className="text-sm text-muted-foreground">December 12, 2024</p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.timeline.preview2Title')}
          description={t('pages.timeline.preview2Desc')}
          code={`<Timeline>
  <TimelineItem>
    <TimelineConnector />
    <TimelineIcon className="bg-primary text-primary-foreground border-primary">
      <Check className="h-4 w-4" />
    </TimelineIcon>
    <TimelineContent>
      <h4 className="font-semibold">Order Confirmed</h4>
      <p className="text-sm text-muted-foreground">
        Your order has been confirmed
      </p>
      <p className="text-xs text-muted-foreground mt-1">
        Dec 10, 2024 at 2:30 PM
      </p>
    </TimelineContent>
  </TimelineItem>
  {/* More items */}
</Timeline>`}
        >
          <Timeline>
            <TimelineItem>
              <TimelineConnector />
              <TimelineIcon className="bg-primary text-primary-foreground border-primary">
                <Check className="h-4 w-4" />
              </TimelineIcon>
              <TimelineContent>
                <h4 className="font-semibold">Order Confirmed</h4>
                <p className="text-sm text-muted-foreground">Your order has been confirmed</p>
                <p className="text-xs text-muted-foreground mt-1">Dec 10, 2024 at 2:30 PM</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineIcon className="bg-primary text-primary-foreground border-primary">
                <Package className="h-4 w-4" />
              </TimelineIcon>
              <TimelineContent>
                <h4 className="font-semibold">Packed</h4>
                <p className="text-sm text-muted-foreground">Order packed and ready to ship</p>
                <p className="text-xs text-muted-foreground mt-1">Dec 11, 2024 at 10:15 AM</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineIcon className="bg-primary text-primary-foreground border-primary">
                <Truck className="h-4 w-4" />
              </TimelineIcon>
              <TimelineContent>
                <h4 className="font-semibold">Shipped</h4>
                <p className="text-sm text-muted-foreground">Package is on the way</p>
                <p className="text-xs text-muted-foreground mt-1">Dec 12, 2024 at 8:00 AM</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineIcon className="border-dashed">
                <Clock className="h-4 w-4" />
              </TimelineIcon>
              <TimelineContent>
                <h4 className="font-semibold text-muted-foreground">Out for Delivery</h4>
                <p className="text-sm text-muted-foreground">Estimated Dec 13, 2024</p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </ComponentPreview>

        <ComponentPreview
          title="Project Timeline"
          description="Development milestones"
          code={`<Timeline>
  <TimelineItem>
    <TimelineConnector />
    <TimelineIcon className="bg-green-500 text-white border-green-500">
      <Check className="h-4 w-4" />
    </TimelineIcon>
    <TimelineContent>
      <h4 className="font-semibold">Planning Complete</h4>
      <p className="text-sm text-muted-foreground">
        Requirements gathered and documented
      </p>
      <span className="text-xs text-muted-foreground">Week 1</span>
    </TimelineContent>
  </TimelineItem>
  {/* More items */}
</Timeline>`}
        >
          <Timeline>
            <TimelineItem>
              <TimelineConnector />
              <TimelineIcon className="bg-green-500 text-white border-green-500">
                <Check className="h-4 w-4" />
              </TimelineIcon>
              <TimelineContent>
                <h4 className="font-semibold">Planning Complete</h4>
                <p className="text-sm text-muted-foreground">Requirements gathered and documented</p>
                <span className="text-xs text-muted-foreground">Week 1-2</span>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineIcon className="bg-green-500 text-white border-green-500">
                <Check className="h-4 w-4" />
              </TimelineIcon>
              <TimelineContent>
                <h4 className="font-semibold">Design Phase</h4>
                <p className="text-sm text-muted-foreground">UI/UX designs finalized</p>
                <span className="text-xs text-muted-foreground">Week 3-4</span>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineIcon className="bg-blue-500 text-white border-blue-500">
                <Clock className="h-4 w-4" />
              </TimelineIcon>
              <TimelineContent>
                <h4 className="font-semibold">Development</h4>
                <p className="text-sm text-muted-foreground">Currently in progress</p>
                <span className="text-xs text-muted-foreground">Week 5-8</span>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineIcon className="border-dashed">
                <div className="h-2 w-2 rounded-full bg-muted-foreground" />
              </TimelineIcon>
              <TimelineContent>
                <h4 className="font-semibold text-muted-foreground">Testing</h4>
                <p className="text-sm text-muted-foreground">Upcoming</p>
                <span className="text-xs text-muted-foreground">Week 9-10</span>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Component Structure</h2>
          <p className="text-muted-foreground mb-4">
            Timeline consists of five sub-components:
          </p>
          <ul className="space-y-2 text-sm list-disc pl-5">
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">Timeline</code> - Root container with vertical flex layout</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">TimelineItem</code> - Individual timeline entry wrapper</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">TimelineIcon</code> - Icon container (circular with border)</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">TimelineConnector</code> - Vertical line connecting items</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">TimelineContent</code> - Content area for text/descriptions</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <p className="text-muted-foreground mb-4">
            All components accept standard HTML div props plus className for custom styling.
          </p>
          <PropsTable
            props={[
              {
                name: 'className',
                type: 'string',
                default: '-',
                description: 'Additional CSS classes for all components',
              },
              {
                name: 'children',
                type: 'ReactNode',
                default: '-',
                description: 'Child content',
              },
            ]}
          />
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Vertical Layout:</strong> Chronological top-to-bottom display
            </li>
            <li>
              <strong>Icon Support:</strong> Customizable icons from lucide-react
            </li>
            <li>
              <strong>Visual Connectors:</strong> Lines connecting timeline items
            </li>
            <li>
              <strong>Flexible Styling:</strong> Colored icons/borders for status indication
            </li>
            <li>
              <strong>Semantic Structure:</strong> Clear hierarchy with icon, content separation
            </li>
            <li>
              <strong>Responsive:</strong> Works on all screen sizes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
