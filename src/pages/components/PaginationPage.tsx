import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@nicorp/nui';

export default function PaginationPage() {
  const [currentPage1, setCurrentPage1] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(5);

  const totalPages1 = 10;
  const totalPages2 = 20;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Pagination</h1>
        <p className="text-xl text-muted-foreground">
          A navigation component for multi-page content with numbered links and previous/next buttons.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Basic Pagination"
          description="Simple pagination with numbered pages"
          code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
        >
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </ComponentPreview>

        <ComponentPreview
          title="With Ellipsis"
          description="Pagination with ellipsis for large page ranges"
          code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">4</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>5</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">6</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">20</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
        >
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  5
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">6</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">20</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </ComponentPreview>

        <ComponentPreview
          title="Controlled Pagination"
          description="Pagination with controlled state for page navigation"
          code={`const [currentPage, setCurrentPage] = useState(1);
const totalPages = 10;

<div className="space-y-4">
  <div className="text-center text-sm text-muted-foreground">
    Page {currentPage} of {totalPages}
  </div>
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage(Math.max(1, currentPage - 1));
          }}
        />
      </PaginationItem>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
        <PaginationItem key={page}>
          <PaginationLink
            href="#"
            isActive={currentPage === page}
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(page);
            }}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationNext
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage(Math.min(totalPages, currentPage + 1));
          }}
        />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
</div>`}
        >
          <div className="space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              Page {currentPage1} of {totalPages1}
            </div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage1(Math.max(1, currentPage1 - 1));
                    }}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages1 }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage1 === page}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage1(page);
                      }}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage1(Math.min(totalPages1, currentPage1 + 1));
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Smart Pagination"
          description="Pagination that automatically shows ellipsis for many pages"
          code={`const [currentPage, setCurrentPage] = useState(5);
const totalPages = 20;

const renderPaginationItems = () => {
  const items = [];
  const maxVisible = 5;
  
  if (totalPages <= maxVisible + 2) {
    for (let i = 1; i <= totalPages; i++) {
      items.push(i);
    }
  } else {
    if (currentPage <= 3) {
      for (let i = 1; i <= 5; i++) items.push(i);
      items.push('ellipsis');
      items.push(totalPages);
    } else if (currentPage >= totalPages - 2) {
      items.push(1);
      items.push('ellipsis');
      for (let i = totalPages - 4; i <= totalPages; i++) items.push(i);
    } else {
      items.push(1);
      items.push('ellipsis');
      for (let i = currentPage - 1; i <= currentPage + 1; i++) items.push(i);
      items.push('ellipsis');
      items.push(totalPages);
    }
  }
  
  return items;
};

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" onClick={...} />
    </PaginationItem>
    {renderPaginationItems().map((item, idx) =>
      item === 'ellipsis' ? (
        <PaginationItem key={\`ellipsis-\${idx}\`}>
          <PaginationEllipsis />
        </PaginationItem>
      ) : (
        <PaginationItem key={item}>
          <PaginationLink
            href="#"
            isActive={currentPage === item}
            onClick={...}
          >
            {item}
          </PaginationLink>
        </PaginationItem>
      )
    )}
    <PaginationItem>
      <PaginationNext href="#" onClick={...} />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
        >
          <div className="space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              Page {currentPage2} of {totalPages2}
            </div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage2(Math.max(1, currentPage2 - 1));
                    }}
                  />
                </PaginationItem>
                {(() => {
                  const items = [];
                  if (currentPage2 <= 3) {
                    for (let i = 1; i <= 5; i++) items.push(i);
                    items.push('ellipsis');
                    items.push(totalPages2);
                  } else if (currentPage2 >= totalPages2 - 2) {
                    items.push(1);
                    items.push('ellipsis');
                    for (let i = totalPages2 - 4; i <= totalPages2; i++) items.push(i);
                  } else {
                    items.push(1);
                    items.push('ellipsis');
                    for (let i = currentPage2 - 1; i <= currentPage2 + 1; i++) items.push(i);
                    items.push('ellipsis');
                    items.push(totalPages2);
                  }
                  return items.map((item, idx) =>
                    item === 'ellipsis' ? (
                      <PaginationItem key={`ellipsis-${idx}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    ) : (
                      <PaginationItem key={item}>
                        <PaginationLink
                          href="#"
                          isActive={currentPage2 === item}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage2(item as number);
                          }}
                        >
                          {item}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  );
                })()}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage2(Math.min(totalPages2, currentPage2 + 1));
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Components</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">PaginationLink</h3>
              <PropsTable
                props={[
                  {
                    name: 'isActive',
                    type: 'boolean',
                    default: 'false',
                    description: 'Whether this is the current page',
                  },
                  {
                    name: 'size',
                    type: 'ButtonProps["size"]',
                    default: '"icon"',
                    description: 'Size variant from Button component',
                  },
                  {
                    name: 'href',
                    type: 'string',
                    default: '-',
                    description: 'URL for the page link',
                  },
                  {
                    name: 'onClick',
                    type: '(e: MouseEvent) => void',
                    default: '-',
                    description: 'Click handler for controlled pagination',
                  },
                ]}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">PaginationPrevious / PaginationNext</h3>
              <PropsTable
                props={[
                  {
                    name: 'href',
                    type: 'string',
                    default: '-',
                    description: 'URL for previous/next page',
                  },
                  {
                    name: 'onClick',
                    type: '(e: MouseEvent) => void',
                    default: '-',
                    description: 'Click handler for navigation',
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
          </div>
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Button Variants:</strong> Uses Button component styling for consistency
            </li>
            <li>
              <strong>Active State:</strong> Highlights current page with outline variant
            </li>
            <li>
              <strong>Icon Buttons:</strong> Previous/Next buttons with ChevronLeft/Right icons
            </li>
            <li>
              <strong>Ellipsis Support:</strong> MoreHorizontal icon for collapsed page ranges
            </li>
            <li>
              <strong>Accessible:</strong> Proper ARIA labels (aria-label, aria-current)
            </li>
            <li>
              <strong>Controlled/Uncontrolled:</strong> Works with both href links and onClick handlers
            </li>
            <li>
              <strong>Responsive:</strong> Flexible gap spacing adapts to content
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
