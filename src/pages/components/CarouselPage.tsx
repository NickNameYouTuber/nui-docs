import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  Card,
} from '@nicorp/nui';

export default function CarouselPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Carousel</h1>
        <p className="text-xl text-muted-foreground">
          A responsive carousel component built with Embla Carousel featuring touch gestures and keyboard navigation.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Basic Carousel"
          description="Simple carousel with navigation buttons"
          code={`<Carousel className="w-full max-w-xs">
  <CarouselContent>
    <CarouselItem>
      <Card className="p-6">
        <div className="text-center">
          <div className="text-4xl mb-2">1</div>
          <p>First slide</p>
        </div>
      </Card>
    </CarouselItem>
    <CarouselItem>
      <Card className="p-6">
        <div className="text-center">
          <div className="text-4xl mb-2">2</div>
          <p>Second slide</p>
        </div>
      </Card>
    </CarouselItem>
    <CarouselItem>
      <Card className="p-6">
        <div className="text-center">
          <div className="text-4xl mb-2">3</div>
          <p>Third slide</p>
        </div>
      </Card>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
        >
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <CarouselItem key={num}>
                  <Card className="p-6">
                    <div className="text-center">
                      <div className="text-4xl mb-2">{num}</div>
                      <p className="text-muted-foreground">Slide {num}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ComponentPreview>

        <ComponentPreview
          title="Multiple Items"
          description="Show multiple slides at once"
          code={`<Carousel
  opts={{
    align: 'start',
  }}
  className="w-full max-w-sm"
>
  <CarouselContent>
    {Array.from({ length: 8 }).map((_, index) => (
      <CarouselItem key={index} className="basis-1/2">
        <Card className="p-4">
          <div className="text-center">
            <div className="text-2xl">{index + 1}</div>
          </div>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
        >
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full max-w-sm mx-auto"
          >
            <CarouselContent>
              {Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/2">
                  <Card className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-semibold">{index + 1}</div>
                      <p className="text-xs text-muted-foreground">Item</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ComponentPreview>

        <ComponentPreview
          title="Three Items Per View"
          description="Display three slides simultaneously"
          code={`<Carousel
  opts={{
    align: 'start',
  }}
  className="w-full max-w-lg"
>
  <CarouselContent>
    {Array.from({ length: 9 }).map((_, index) => (
      <CarouselItem key={index} className="basis-1/3">
        <Card className="p-6">
          <div className="text-center">
            <div className="text-xl">{index + 1}</div>
          </div>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
        >
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full max-w-lg mx-auto"
          >
            <CarouselContent>
              {Array.from({ length: 9 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/3">
                  <Card className="p-6">
                    <div className="text-center">
                      <div className="text-xl font-semibold">{index + 1}</div>
                      <p className="text-xs text-muted-foreground mt-1">Card</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ComponentPreview>

        <ComponentPreview
          title="With Loop"
          description="Infinite loop carousel"
          code={`<Carousel
  opts={{
    align: 'start',
    loop: true,
  }}
  className="w-full max-w-xs"
>
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
        <Card className="p-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🎨</div>
            <p>Slide {index + 1}</p>
          </div>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-xs mx-auto"
          >
            <CarouselContent>
              {['🎨', '🎭', '🎪', '🎬', '🎮'].map((emoji, index) => (
                <CarouselItem key={index}>
                  <Card className="p-6">
                    <div className="text-center">
                      <div className="text-5xl mb-2">{emoji}</div>
                      <p className="text-muted-foreground">Slide {index + 1}</p>
                      <p className="text-xs text-muted-foreground mt-1">Loop enabled</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ComponentPreview>

        <ComponentPreview
          title="Vertical Orientation"
          description="Vertical scrolling carousel"
          code={`<Carousel
  orientation="vertical"
  className="w-full max-w-xs h-[300px]"
>
  <CarouselContent className="h-[300px]">
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
        <Card className="p-6">
          <div className="text-center">
            <div className="text-3xl mb-2">↕️</div>
            <p>Vertical {index + 1}</p>
          </div>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
        >
          <Carousel
            orientation="vertical"
            className="w-full max-w-xs mx-auto h-[300px]"
          >
            <CarouselContent className="h-[300px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <Card className="p-6">
                    <div className="text-center">
                      <div className="text-3xl mb-2">↕️</div>
                      <p className="font-medium">Vertical {index + 1}</p>
                      <p className="text-xs text-muted-foreground mt-1">Use arrow keys</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ComponentPreview>

        <ComponentPreview
          title="Image Carousel"
          description="Showcase images with captions"
          code={`<Carousel className="w-full max-w-md">
  <CarouselContent>
    <CarouselItem>
      <Card>
        <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-500" />
        <div className="p-4">
          <h3 className="font-semibold">Image 1</h3>
          <p className="text-sm text-muted-foreground">Description here</p>
        </div>
      </Card>
    </CarouselItem>
    {/* More items */}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
        >
          <Carousel className="w-full max-w-md mx-auto">
            <CarouselContent>
              {[
                { from: 'blue-500', to: 'purple-500', title: 'Mountain View', desc: 'Beautiful landscape' },
                { from: 'green-500', to: 'teal-500', title: 'Forest Path', desc: 'Nature photography' },
                { from: 'orange-500', to: 'red-500', title: 'Sunset Beach', desc: 'Coastal scenery' },
                { from: 'pink-500', to: 'rose-500', title: 'Cherry Blossoms', desc: 'Spring flowers' },
              ].map((item, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <div className={`aspect-video bg-gradient-to-br from-${item.from} to-${item.to} flex items-center justify-center`}>
                      <span className="text-white text-4xl">📷</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Component Structure</h2>
          <p className="text-muted-foreground mb-4">
            Carousel consists of the following sub-components:
          </p>
          <ul className="space-y-2 text-sm list-disc pl-5">
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">Carousel</code> - Root component with configuration</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">CarouselContent</code> - Container for carousel items</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">CarouselItem</code> - Individual slide wrapper</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">CarouselPrevious</code> - Previous button (optional)</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">CarouselNext</code> - Next button (optional)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          
          <h3 className="text-lg font-semibold mb-2 mt-4">Carousel (Root)</h3>
          <PropsTable
            props={[
              {
                name: 'opts',
                type: 'CarouselOptions',
                default: '-',
                description: 'Embla Carousel options (align, loop, slidesToScroll, etc.)',
              },
              {
                name: 'plugins',
                type: 'CarouselPlugin[]',
                default: '-',
                description: 'Embla plugins (autoplay, etc.)',
              },
              {
                name: 'orientation',
                type: '"horizontal" | "vertical"',
                default: '"horizontal"',
                description: 'Scroll direction',
              },
              {
                name: 'setApi',
                type: '(api: CarouselApi) => void',
                default: '-',
                description: 'Callback to access Embla API',
              },
              {
                name: 'className',
                type: 'string',
                default: '-',
                description: 'Additional CSS classes',
              },
            ]}
          />

          <h3 className="text-lg font-semibold mb-2 mt-6">CarouselItem</h3>
          <PropsTable
            props={[
              {
                name: 'className',
                type: 'string',
                default: '-',
                description: 'Additional CSS classes (use basis-1/2, basis-1/3 for multiple items)',
              },
              {
                name: 'children',
                type: 'ReactNode',
                default: '-',
                description: 'Slide content',
              },
            ]}
          />

          <h3 className="text-lg font-semibold mb-2 mt-6">CarouselPrevious / CarouselNext</h3>
          <PropsTable
            props={[
              {
                name: 'variant',
                type: 'ButtonProps["variant"]',
                default: '"outline"',
                description: 'Button variant',
              },
              {
                name: 'size',
                type: 'ButtonProps["size"]',
                default: '"icon"',
                description: 'Button size',
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

        <div>
          <h2 className="text-2xl font-semibold mb-4">Carousel Options</h2>
          <p className="text-muted-foreground mb-4">
            Common options you can pass to the opts prop:
          </p>
          <PropsTable
            props={[
              {
                name: 'align',
                type: '"start" | "center" | "end"',
                default: '"center"',
                description: 'Slide alignment',
              },
              {
                name: 'loop',
                type: 'boolean',
                default: 'false',
                description: 'Enable infinite loop',
              },
              {
                name: 'slidesToScroll',
                type: 'number',
                default: '1',
                description: 'Number of slides to scroll per navigation',
              },
              {
                name: 'skipSnaps',
                type: 'boolean',
                default: 'false',
                description: 'Skip snap points when dragging',
              },
            ]}
          />
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Embla Carousel:</strong> Built on powerful Embla library
            </li>
            <li>
              <strong>Touch Gestures:</strong> Swipe on mobile devices
            </li>
            <li>
              <strong>Keyboard Navigation:</strong> Use arrow keys to navigate
            </li>
            <li>
              <strong>Multiple Items:</strong> Show 2, 3, or more slides at once with basis-1/2, basis-1/3
            </li>
            <li>
              <strong>Infinite Loop:</strong> Seamless looping with loop option
            </li>
            <li>
              <strong>Vertical Orientation:</strong> Vertical scrolling carousels
            </li>
            <li>
              <strong>Plugin Support:</strong> Add autoplay and other Embla plugins
            </li>
            <li>
              <strong>Accessible:</strong> Proper ARIA roles and keyboard support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
