import { memo } from 'react';
import cls from './CommentCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Comment } from '../../model/types';
import { Avatar } from '@/shared/Avatar';
import { Text } from '@/shared/Text';
import { Skeleton } from '@/shared/Skeleton/ui/Skeleton';
import { AppLink } from '@/shared/AppLink';
import { routePath } from '@/app/providers/Router/lib/routeConfig/routeConfig';

interface CommentCardProps {
  comment: Comment;
  className?: string;
  isLoading?: boolean;
}

export const CommentCard = memo(
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

    return (
      <div className={classNames(cls.commentCard, {}, [className])}>
        <AppLink
          to={`${routePath.profile}${comment.user.id}`}
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

CommentCard.displayName = 'CommentCard';
