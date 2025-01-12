import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/Text';
import { CommentList } from 'entities/Comment';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getArticleComments } from '../../model/slice/articleDetailsCommentSlice';
import { useSelector } from 'react-redux';
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from '../../model/selectors/comments';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/AddCommentForm';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleDetailsError } from 'entities/Article/model/selectors/articleDetails';
import { Button } from 'shared/Button';
import { useNavigate } from 'react-router-dom';
import { routePath } from 'app/providers/Router/lib/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import { getArticleRecommendations } from '../../model/slice/articleDetailsRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slice';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article');

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const isLoadingRecommendations = useSelector(
    getArticleRecommendationsIsLoading
  );
  const errorArticle = useSelector(getArticleDetailsError);
  const error = useSelector(getArticleCommentsError);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  const handleSendComment = useCallback(
    (value: string) => {
      dispatch(addCommentForArticle(value));
    },
    [dispatch]
  );

  const handleClickBackToList = useCallback(() => {
    navigate(routePath.articles);
  }, [navigate]);

  if (!id) {
    return (
      <Page className={classNames(cls.articledetailspage, {}, [className])}>
        {t('Статья не найдена')}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <Page
        className={classNames(cls.articledetailspage, {}, [className])}
        isSaveScrollPosition
      >
        <Button
          onClick={handleClickBackToList}
          variant="outline"
        >
          {t('Назад к списку')}
        </Button>
        <ArticleDetails id={id} />
        <Text
          className={cls.title}
          title={t('Рекомендуем')}
        />
        <ArticleList
          articles={recommendations}
          isLoading={isLoadingRecommendations}
          className={cls.recommendations}
          target="_blank"
        />
        {!error && !errorArticle && (
          <>
            <Text
              className={cls.title}
              title={t('Комментарии')}
            />
            <AddCommentForm onSendCommit={handleSendComment} />
            <CommentList
              comments={comments}
              isLoading={isLoading}
            />
          </>
        )}
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
