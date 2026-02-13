import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { FilePreview } from '@nicorp/nui';

const files = [
  { name: 'report.pdf', size: 2400000, type: 'application/pdf' },
  { name: 'photo.jpg', size: 850000, type: 'image/jpeg', thumbnail: 'https://picsum.photos/seed/1/200/200' },
  { name: 'data.csv', size: 15000, type: 'text/csv' },
  { name: 'screenshot.png', size: 1200000, type: 'image/png', thumbnail: 'https://picsum.photos/seed/2/200/200' },
  { name: 'notes.txt', size: 3200, type: 'text/plain' },
];

export default function FilePreviewPage() {
  const [compactFiles, setCompactFiles] = useState(files.slice(0, 3));
  const [gridFiles, setGridFiles] = useState(files);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">FilePreview</h1>
        <p className="text-xl text-muted-foreground">
          File attachment preview — compact horizontal row or grid with thumbnails.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Compact"
          description="Horizontal scrollable row of file chips"
          code={`<FilePreview
  files={files}
  variant="compact"
  onRemove={(index) => { /* remove */ }}
/>`}
        >
          <FilePreview
            files={compactFiles}
            variant="compact"
            onRemove={(i) => setCompactFiles(compactFiles.filter((_, idx) => idx !== i))}
          />
          {compactFiles.length < 3 && (
            <button onClick={() => setCompactFiles(files.slice(0, 3))} className="text-xs text-primary hover:underline mt-2">
              ↻ Reset
            </button>
          )}
        </ComponentPreview>

        <ComponentPreview
          title="Grid"
          description="Two-column grid with image thumbnails"
          code={`<FilePreview
  files={files}
  variant="grid"
  onRemove={(index) => { /* remove */ }}
/>`}
        >
          <div className="max-w-sm">
            <FilePreview
              files={gridFiles}
              variant="grid"
              onRemove={(i) => setGridFiles(gridFiles.filter((_, idx) => idx !== i))}
            />
          </div>
          {gridFiles.length < 5 && (
            <button onClick={() => setGridFiles(files)} className="text-xs text-primary hover:underline mt-2">
              ↻ Reset
            </button>
          )}
        </ComponentPreview>

        <ComponentPreview
          title="Read Only"
          description="Without remove buttons — for displaying received files"
          code={`<FilePreview files={files} variant="compact" />`}
        >
          <FilePreview files={files.slice(0, 3)} variant="compact" />
        </ComponentPreview>

        <PropsTable
          props={[
            { name: 'files', type: 'FileItem[]', required: true, description: 'Array of file objects to display' },
            { name: 'onRemove', type: '(index: number) => void', description: 'Remove button handler (hides button when omitted)' },
            { name: 'variant', type: '"compact" | "grid"', default: '"compact"', description: 'Display layout' },
          ]}
        />

        <div>
          <h3 className="text-lg font-semibold mb-3">FileItem</h3>
          <PropsTable
            props={[
              { name: 'name', type: 'string', required: true, description: 'File name' },
              { name: 'size', type: 'number', required: true, description: 'File size in bytes' },
              { name: 'type', type: 'string', required: true, description: 'MIME type' },
              { name: 'url', type: 'string', description: 'File URL for download/open' },
              { name: 'thumbnail', type: 'string', description: 'Thumbnail URL for image preview' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
