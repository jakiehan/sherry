import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsComments.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
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
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { VStack } from '@/shared/ui/redesigned/Flex';

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
      return (
        <ToggleFeatures
          name="isAppRedesigned"
          on={<Text text="Ошибка загрузки комментариев" />}
          off={<TextDeprecated text="Ошибка загрузки комментариев" />}
        />
      );
    }

    return (
      <VStack
        max
        className={classNames('', {}, [className])}
        gap="8"
      >
        <ToggleFeatures
          name="isAppRedesigned"
          on={
            <Text
              title={t('Комментарии')}
              size="sizeL"
            />
          }
          off={
            <TextDeprecated
              className={cls.title}
              title={t('Комментарии')}
            />
          }
        />

        <AddCommentForm onSendCommit={handleSendComment} />
        <CommentList
          comments={comments}
          isLoading={isLoading}
        />
      </VStack>
    );
  }
);

ArticleDetailsComments.displayName = 'ArticleDetailsComments';
