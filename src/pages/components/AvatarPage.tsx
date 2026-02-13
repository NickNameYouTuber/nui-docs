import { Avatar, AvatarImage, AvatarFallback } from '@nicorp/nui';
import { PageHeader } from '~/components/PageHeader';
import { ComponentPreview } from '~/components/ComponentPreview';
import { PropsTable } from '~/components/PropsTable';
import { useDocLang } from '../../i18n';
import { User } from 'lucide-react';

export function AvatarPage() {
  const { t } = useDocLang();

  return (
    <div>
      <PageHeader
        title="Avatar"
        description={t('pages.avatar.desc')}
        badge={t('common.badgeAtom')}
      />

      <ComponentPreview
        title={t('pages.avatar.basicAvatar')}
        code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
      >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.avatar.fallbackOnly')}
        description={t('pages.avatar.fallbackDesc')}
        code={`<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
      >
        <div className="flex gap-3">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>XY</AvatarFallback>
          </Avatar>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.avatar.withIconFallback')}
        code={`<Avatar>
  <AvatarImage src="/invalid-url.jpg" alt="User" />
  <AvatarFallback>
    <User className="h-4 w-4" />
  </AvatarFallback>
</Avatar>`}
      >
        <Avatar>
          <AvatarImage src="/invalid-url.jpg" alt="User" />
          <AvatarFallback>
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      </ComponentPreview>

      <ComponentPreview
        title={t('pages.avatar.differentSizes')}
        code={`<Avatar className="h-8 w-8">
  <AvatarFallback className="text-xs">SM</AvatarFallback>
</Avatar>

<Avatar className="h-12 w-12">
  <AvatarFallback>MD</AvatarFallback>
</Avatar>

<Avatar className="h-16 w-16">
  <AvatarFallback className="text-lg">LG</AvatarFallback>
</Avatar>`}
      >
        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">SM</AvatarFallback>
          </Avatar>
          <Avatar className="h-12 w-12">
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar className="h-16 w-16">
            <AvatarFallback className="text-lg">LG</AvatarFallback>
          </Avatar>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Avatar Group"
        code={`<div className="flex -space-x-2">
  <Avatar className="border-2 border-background">
    <AvatarFallback>A1</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>A2</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>A3</AvatarFallback>
  </Avatar>
</div>`}
      >
        <div className="flex -space-x-2">
          <Avatar className="border-2 border-background">
            <AvatarFallback>A1</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-background">
            <AvatarFallback>A2</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-background">
            <AvatarFallback>A3</AvatarFallback>
          </Avatar>
        </div>
      </ComponentPreview>

      <PropsTable
        title="Avatar Props"
        props={[
          { name: 'className', type: 'string', description: 'Additional CSS classes. Use for custom sizing.' },
        ]}
      />

      <PropsTable
        title="AvatarImage Props"
        props={[
          { name: 'src', type: 'string', required: true, description: 'Image source URL.' },
          { name: 'alt', type: 'string', required: true, description: 'Alt text for accessibility.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
        ]}
      />

      <PropsTable
        title="AvatarFallback Props"
        props={[
          { name: 'children', type: 'ReactNode', required: true, description: 'Fallback content — typically initials or an icon.' },
          { name: 'className', type: 'string', description: 'Additional CSS classes.' },
        ]}
      />
    </div>
  );
}
