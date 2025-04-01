import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetailsComments } from '../../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/ArticleRating';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ArticleDetailsContainer } from '../../ArticleDetailsContainer/ArticleDetailsContainer';
import { ArticleDetailsControlContainer } from '../../ArticleDetailsControlContainer/ArticleDetailsControlContainer';
import { VStack } from '@/shared/ui/redesigned/Flex';

interface ArticleDetailsPageRedesignedProps {
  className?: string;
  id?: string;
  errorArticle?: string;
}

export const ArticleDetailsPageRedesigned: FC<
  ArticleDetailsPageRedesignedProps
> = ({ className, errorArticle, id }) => {
  return (
    <StickyContentLayout
      content={
        <Page
          className={classNames('', {}, [className])}
          isSaveScrollPosition
          data-testid="article-details-page"
        >
          <VStack
            max
            gap="24"
            align="normal"
          >
            <ArticleDetailsContainer id={id} />
            <ArticleRating articleId={id!} />
            <ArticleRecommendationsList />
            {!errorArticle && <ArticleDetailsComments id={id} />}
          </VStack>
        </Page>
      }
      right={<ArticleDetailsControlContainer />}
    />
  );
};
