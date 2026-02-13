import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { ColorPicker, Label } from '@nicorp/nui';
import { useDocLang } from '../../i18n';

export default function ColorPickerPage() {
  const { t } = useDocLang();
  const [color1, setColor1] = useState('#3b82f6');
  const [color2, setColor2] = useState('#ef4444');
  const [color3, setColor3] = useState('#22c55e');
  const [brandColor, setBrandColor] = useState('#8b5cf6');

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">ColorPicker</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.colorPicker.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.colorPicker.preview1Title')}
          description={t('pages.colorPicker.preview1Desc')}
          code={`const [color, setColor] = useState('#3b82f6');

<ColorPicker
  value={color}
  onChange={setColor}
/>`}
        >
          <div className="space-y-2">
            <ColorPicker
              value={color1}
              onChange={setColor1}
            />
            <div className="flex items-center gap-2">
              <div
                className="w-16 h-16 rounded-lg border shadow-sm"
                style={{ backgroundColor: color1 }}
              />
              <div className="text-sm text-muted-foreground">
                Selected: {color1}
              </div>
            </div>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.colorPicker.preview2Title')}
          description={t('pages.colorPicker.preview2Desc')}
          code={`const [color, setColor] = useState('#ef4444');

<div className="space-y-2">
  <Label>Primary Color</Label>
  <ColorPicker
    value={color}
    onChange={setColor}
  />
</div>`}
        >
          <div className="space-y-2">
            <Label>Primary Color</Label>
            <ColorPicker
              value={color2}
              onChange={setColor2}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.colorPicker.preview3Title')}
          description={t('pages.colorPicker.preview3Desc')}
          code={`const [primaryColor, setPrimaryColor] = useState('#3b82f6');
const [secondaryColor, setSecondaryColor] = useState('#22c55e');

<div className="space-y-4">
  <div>
    <Label>Primary</Label>
    <ColorPicker value={primaryColor} onChange={setPrimaryColor} />
  </div>
  <div>
    <Label>Secondary</Label>
    <ColorPicker value={secondaryColor} onChange={setSecondaryColor} />
  </div>
</div>`}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Primary</Label>
              <ColorPicker value={color1} onChange={setColor1} />
            </div>
            <div className="space-y-2">
              <Label>Secondary</Label>
              <ColorPicker value={color3} onChange={setColor3} />
            </div>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Brand Color Editor"
          description="Practical example for brand color configuration"
          code={`const [brandColor, setBrandColor] = useState('#8b5cf6');

<div className="space-y-4">
  <ColorPicker value={brandColor} onChange={setBrandColor} />
  <div className="flex gap-2">
    <div className="p-4 rounded-lg" style={{ backgroundColor: brandColor }}>
      <p className="text-white font-semibold">Brand Button</p>
    </div>
    <div className="p-4 rounded-lg border-2" style={{ borderColor: brandColor, color: brandColor }}>
      <p className="font-semibold">Outline Button</p>
    </div>
  </div>
</div>`}
        >
          <div className="space-y-4">
            <ColorPicker value={brandColor} onChange={setBrandColor} />
            <div className="flex gap-2">
              <div className="p-4 rounded-lg" style={{ backgroundColor: brandColor }}>
                <p className="text-white font-semibold">Brand Button</p>
              </div>
              <div className="p-4 rounded-lg border-2" style={{ borderColor: brandColor, color: brandColor }}>
                <p className="font-semibold">Outline Button</p>
              </div>
            </div>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Disabled State"
          description="Color picker in disabled state"
          code={`<ColorPicker
  value="#3b82f6"
  disabled
/>`}
        >
          <ColorPicker
            value="#3b82f6"
            disabled
          />
        </ComponentPreview>

        <ComponentPreview
          title="Custom Width"
          description="Color picker with custom width using className"
          code={`const [color, setColor] = useState('#3b82f6');

<ColorPicker
  value={color}
  onChange={setColor}
  className="w-64"
/>`}
        >
          <ColorPicker
            value={color1}
            onChange={setColor1}
            className="w-64"
          />
        </ComponentPreview>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable
            props={[
              {
                name: 'value',
                type: 'string',
                default: '"#3b82f6"',
                description: 'Color value in hex format (e.g., "#ff0000")',
              },
              {
                name: 'onChange',
                type: '(value: string) => void',
                default: '-',
                description: 'Callback when color is selected',
              },
              {
                name: 'disabled',
                type: 'boolean',
                default: 'false',
                description: 'Whether the color picker is disabled',
              },
              {
                name: 'className',
                type: 'string',
                default: '-',
                description: 'Additional CSS classes for the button',
              },
            ]}
          />
        </div>

        <div className="rounded-lg border p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>
              <strong>HSL Gradient:</strong> Interactive saturation/lightness gradient area with cursor indicator
            </li>
            <li>
              <strong>Hue Slider:</strong> Horizontal slider for selecting hue (0-360°)
            </li>
            <li>
              <strong>Preset Colors:</strong> 10 common colors for quick selection (red, orange, yellow, green, teal, blue, purple, pink, black, white)
            </li>
            <li>
              <strong>Hex Input:</strong> Direct hex code input with validation
            </li>
            <li>
              <strong>Color Preview:</strong> Button displays current color with hex value
            </li>
            <li>
              <strong>Popover UI:</strong> Color picker opens in a clean popover interface
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
