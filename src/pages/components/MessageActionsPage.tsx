import { useState } from 'react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { MessageActions } from '@nicorp/nui';
import { useDocLang } from '../../i18n';

export default function MessageActionsPage() {
  const { t } = useDocLang();
  const [likeState, setLikeState] = useState<'liked' | 'disliked' | null>(null);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">MessageActions</h1>
        <p className="text-xl text-muted-foreground">
          {t('pages.messageActions.desc')}
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title={t('pages.messageActions.preview1Title')}
          description={t('pages.messageActions.preview1Desc')}
          code={`<MessageActions actions={["copy"]} content="Hello world" visibility="always" />`}
        >
          <MessageActions actions={["copy"]} content="Hello world" visibility="always" />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.messageActions.preview2Title')}
          description={t('pages.messageActions.preview2Desc')}
          code={`<MessageActions
  actions={["copy", "retry", "edit", "like", "dislike", "share"]}
  content="Message content to copy"
  likeState={likeState}
  onLike={() => setLikeState(likeState === 'liked' ? null : 'liked')}
  onDislike={() => setLikeState(likeState === 'disliked' ? null : 'disliked')}
  visibility="always"
/>`}
        >
          <MessageActions
            actions={["copy", "retry", "edit", "like", "dislike", "share"]}
            content="Message content to copy"
            likeState={likeState}
            onLike={() => setLikeState(likeState === 'liked' ? null : 'liked')}
            onDislike={() => setLikeState(likeState === 'disliked' ? null : 'disliked')}
            visibility="always"
          />
        </ComponentPreview>

        <ComponentPreview
          title={t('pages.messageActions.preview3Title')}
          description="Common pattern for AI message actions"
          code={`<MessageActions
  actions={["copy", "retry", "like", "dislike"]}
  content="Response text..."
  visibility="always"
/>`}
        >
          <MessageActions
            actions={["copy", "retry", "like", "dislike"]}
            content="AI response example text"
            visibility="always"
          />
        </ComponentPreview>

        <PropsTable
          props={[
            { name: 'actions', type: 'MessageActionType[]', default: '["copy"]', description: 'Which actions to show' },
            { name: 'content', type: 'string', description: 'Text content for copy action' },
            { name: 'likeState', type: '"liked" | "disliked" | null', description: 'Current like/dislike state' },
            { name: 'visibility', type: '"always" | "hover"', default: '"hover"', description: 'Show always or on hover' },
            { name: 'onCopy', type: '() => void', description: 'Copy handler' },
            { name: 'onRetry', type: '() => void', description: 'Retry handler' },
            { name: 'onEdit', type: '() => void', description: 'Edit handler' },
            { name: 'onLike', type: '() => void', description: 'Like handler' },
            { name: 'onDislike', type: '() => void', description: 'Dislike handler' },
            { name: 'onShare', type: '() => void', description: 'Share handler' },
          ]}
        />
      </div>
    </div>
  );
}
