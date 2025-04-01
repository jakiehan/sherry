import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { User } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/redesigned/Flex';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleControlProps {
  className?: string;
  author: User;
  views: number;
  createdAt: string;
}

export const ArticleControl = memo(
  ({ className, author, views, createdAt }: ArticleControlProps) => {
    const { t } = useTranslation('article');

    return (
      <div className={className}>
        <VStack gap="24">
          <HStack gap="8">
            <Avatar
              src={author?.avatar}
              size={32}
            />
            <Text
              text={author?.username}
              bold
            />
            <Text text={createdAt} />
          </HStack>
          <Text text={t('{{count}} просмотров', { count: views })} />
        </VStack>
      </div>
    );
  }
);

ArticleControl.displayName = 'ArticleControl';
