import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsComments.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/Text';
import { AddCommentForm } from '@/features/AddCommentForm';
import { CommentList } from '@/entities/Comment';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticleComments } from '../../model/slice/articleDetailsCommentSlice';
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from '../../model/selectors/comments';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComments = memo(
  ({ className, id }: ArticleDetailsCommentsProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id));
    });

    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);

    const handleSendComment = useCallback(
      (value: string) => {
        dispatch(addCommentForArticle(value));
      },
      [dispatch]
    );

    if (error) {
      return <Text text="Ошибка загрузки комментариев" />;
    }

    return (
      <div className={classNames(cls.articleDetailsComments, {}, [className])}>
        <Text
          className={cls.title}
          title={t('Комментарии')}
        />
        <AddCommentForm onSendCommit={handleSendComment} />
        <CommentList
          comments={comments}
          isLoading={isLoading}
        />
      </div>
    );
  }
);

ArticleDetailsComments.displayName = 'ArticleDetailsComments';
