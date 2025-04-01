import { memo } from 'react';
import cls from '../CommentCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteProfile } from '@/app/providers/Router/constants/router';
import { CommentCardProps } from '../CommentCard';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Flex';

export const CommentCardRedesigned = memo(
  ({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
      return (
        <Card
          className={classNames('', {}, [className])}
          max
          padding="24"
          data-testid="commentCard"
        >
          <VStack
            gap="16"
            max
          >
            <HStack
              gap="16"
              max
            >
              <Skeleton
                height={30}
                width={30}
                borderRadius="50%"
              />
              <Skeleton
                height={20}
                width={160}
              />
            </HStack>
            <Skeleton
              height={40}
              width="100%"
            />
          </VStack>
        </Card>
      );
    }

    if (!comment) {
      return null;
    }

    return (
      <Card
        className={classNames('', {}, [className])}
        max
        padding="24"
        data-testid="commentCard"
      >
        <VStack
          max
          gap="16"
        >
          <AppLink
            to={getRouteProfile(comment.user.id)}
            className={cls.header}
          >
            <Avatar
              src={comment.user.avatar}
              size={30}
            />
            <Text title={comment.user.username} />
          </AppLink>
          <Text text={comment.text} />
        </VStack>
      </Card>
    );
  }
);

CommentCardRedesigned.displayName = 'CommentCardRedesigned';
