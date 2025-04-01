import { memo } from 'react';
import cls from '../CommentCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Text } from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { getRouteProfile } from '@/app/providers/Router/constants/router';
import { CommentCardProps } from '../CommentCard';

export const CommentCardDeprecated = memo(
  ({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
      return (
        <div className={classNames(cls.commentCard, {}, [className])}>
          <div className={cls.header}>
            <Skeleton
              height={30}
              width={30}
              borderRadius="50%"
            />
            <Skeleton
              height={20}
              width={160}
            />
          </div>
          <Skeleton
            height={40}
            width="100%"
          />
        </div>
      );
    }

    if (!comment) {
      return null;
    }

    return (
      <div
        className={classNames(cls.commentCard, {}, [className])}
        data-testid="commentCard"
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
      </div>
    );
  }
);

CommentCardDeprecated.displayName = 'CommentCardDeprecated';
