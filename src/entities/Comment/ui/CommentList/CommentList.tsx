import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './CommentList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types';
import { Text } from 'shared/Text';

interface CommentListProps {
  comments?: Comment[];
  isLoading?: boolean;
  className?: string;
}

export const CommentList = memo(
  ({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation('comments');

    return (
      <div className={classNames(cls.commentList, {}, [className])}>
        {comments?.length !== 0 &&
          comments?.map((comment) => (
            <CommentCard
              comment={comment}
              isLoading={isLoading}
              key={comment.id}
            />
          ))}
        {!comments?.length && <Text text={t('Комментарии отсутствуют')} />}
      </div>
    );
  }
);

CommentList.displayName = 'CommentList';
