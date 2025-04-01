import { memo } from 'react';
import { ArticleControl } from '@/widgets/ArticleControl';
import { Card } from '@/shared/ui/redesigned/Card';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '@/entities/Article';

interface ArticleDetailsControlContainerProps {
  className?: string;
}

export const ArticleDetailsControlContainer = memo(
  ({ className }: ArticleDetailsControlContainerProps) => {
    const article = useSelector(getArticleDetailsData);

    if (!article) {
      return null;
    }

    return (
      <Card padding="16">
        <ArticleControl
          className={className}
          author={article?.user}
          views={article?.views}
          createdAt={article?.createdAt}
        />
      </Card>
    );
  }
);

ArticleDetailsControlContainer.displayName = 'ArticleDetailsContainer';
