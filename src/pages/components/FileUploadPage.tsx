import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { FileUpload, Label } from '@nicorp/nui';

export default function FileUploadPage() {
  const [files1, setFiles1] = useState<File[]>([]);
  const [files2, setFiles2] = useState<File[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [docFiles, setDocFiles] = useState<File[]>([]);
  const [files3, setFiles3] = useState<File[]>([]);
  const [files4, setFiles4] = useState<File[]>([]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">FileUpload</h1>
        <p className="text-xl text-muted-foreground">
          A drag-and-drop file upload component with file list management and size validation.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Basic File Upload"
          description="Simple file upload with drag and drop"
          code={`const [files, setFiles] = useState<File[]>([])

<FileUpload
  onUpload={setFiles}
/>`}
        >
          <div className="space-y-4">
            <FileUpload onUpload={setFiles1} />
            {files1.length > 0 && (
              <p className="text-sm text-muted-foreground">
                Selected: {files1[0]?.name}
              </p>
            )}
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Multiple Files"
          description="Allow uploading multiple files at once"
          code={`const [files, setFiles] = useState<File[]>([])

<FileUpload
  multiple
  onUpload={setFiles}
/>`}
        >
          <div className="space-y-4">
            <FileUpload multiple onUpload={setFiles2} />
            {files2.length > 0 && (
              <p className="text-sm text-muted-foreground">
                Selected {files2.length} file(s)
              </p>
            )}
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Accept Specific Types"
          description="Restrict file types with accept attribute"
          code={`const [files, setFiles] = useState<File[]>([])

<div className="space-y-4">
  <div>
    <Label>Images Only (.jpg, .png)</Label>
    <FileUpload
      accept="image/jpeg,image/png"
      onUpload={setFiles}
    />
  </div>
  <div>
    <Label>Documents Only (.pdf, .docx)</Label>
    <FileUpload
      accept=".pdf,.docx"
      onUpload={setFiles}
    />
  </div>
</div>`}
        >
          <div className="space-y-4">
            <div>
              <Label>Images Only (.jpg, .png)</Label>
              <FileUpload
                accept="image/jpeg,image/png"
                onUpload={setImageFiles}
              />
            </div>
            <div>
              <Label>Documents Only (.pdf, .docx)</Label>
              <FileUpload
                accept=".pdf,.docx"
                onUpload={setDocFiles}
              />
            </div>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Max File Size"
          description="Validate file sizes with maxSize prop (in bytes)"
          code={`const [files, setFiles] = useState<File[]>([])

<FileUpload
  maxSize={5 * 1024 * 1024} // 5MB
  onUpload={setFiles}
/>`}
        >
          <div className="space-y-4">
            <FileUpload
              maxSize={5 * 1024 * 1024} // 5MB
              onUpload={setFiles3}
            />
            <p className="text-sm text-muted-foreground">
              Files larger than 5MB will be rejected
            </p>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With File List"
          description="Files are automatically displayed with remove buttons"
          code={`const [files, setFiles] = useState<File[]>([])

<FileUpload
  multiple
  maxSize={10 * 1024 * 1024} // 10MB
  onUpload={setFiles}
/>`}
        >
          <FileUpload
            multiple
            maxSize={10 * 1024 * 1024} // 10MB
            onUpload={setFiles4}
          />
        </ComponentPreview>

        <ComponentPreview
          title="Disabled State"
          description="FileUpload in disabled state"
          code={`<FileUpload
  disabled
/>`}
        >
          <FileUpload disabled />
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              {
                name: 'accept',
                type: 'string',
                default: '-',
                description: 'Accepted file types (e.g., "image/*", ".pdf,.docx")',
              },
              {
                name: 'maxSize',
                type: 'number',
                default: '-',
                description: 'Maximum file size in bytes',
              },
              {
                name: 'multiple',
                type: 'boolean',
                default: 'false',
                description: 'Allow selecting multiple files',
              },
              {
                name: 'onUpload',
                type: '(files: File[]) => void',
                default: '-',
                description: 'Callback when files are uploaded or removed',
              },
              {
                name: 'disabled',
                type: 'boolean',
                default: 'false',
                description: 'Whether the file upload is disabled',
              },
              {
                name: 'className',
                type: 'string',
                default: '-',
                description: 'Additional CSS classes for the container',
              },
            ]}
          />
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>Drag & Drop:</strong> Files can be dragged into the drop zone
            </li>
            <li>
              <strong>File List:</strong> Uploaded files are automatically displayed with name, size, and remove button
            </li>
            <li>
              <strong>Size Validation:</strong> Files exceeding maxSize are automatically filtered out
            </li>
            <li>
              <strong>File Size Formatting:</strong> File sizes are displayed in B, KB, or MB for readability
            </li>
            <li>
              <strong>Visual Feedback:</strong> Border color changes when dragging files over the drop zone
            </li>
            <li>
              <strong>Click to Select:</strong> Clicking the drop zone opens the native file picker
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
