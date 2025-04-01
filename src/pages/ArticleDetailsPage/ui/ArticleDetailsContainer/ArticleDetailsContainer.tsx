import { memo } from 'react';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface ArticleDetailsContainerProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsContainer = memo(
  ({ className, id }: ArticleDetailsContainerProps) => {
    return (
      <Card
        padding="24"
        max
      >
        <ArticleDetails
          id={id}
          className={className}
        />
      </Card>
    );
  }
);

ArticleDetailsContainer.displayName = 'ArticleDetailsContainer';
