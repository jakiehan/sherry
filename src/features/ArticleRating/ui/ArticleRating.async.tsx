import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { ArticleRatingProps } from './ArticleRating';

// Лэзи компонент(code-splitting) разделение билда, на чанки(загружаем только те компоненты на которые перешли)
// ИСПОЛЬЗОВАТЬ ТОЛЬКО НА БОЛЬШИХ ТЯЖЕЛЫХ ЧАНКАХ!!! Каждый компонент оборачивать не нужно!
const ArticleRatingLazy = lazy(
  () =>
    new Promise((resolve) => {
      // Только для учебы! в реальности такое не используется!
      // @ts-ignore
      setTimeout(() => resolve(import('./ArticleRating')), 500);
    })
);

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
  return (
    <Suspense
      fallback={
        <Skeleton
          width="100%"
          height={120}
        />
      }
    >
      <ArticleRatingLazy {...props} />
    </Suspense>
  );
};
