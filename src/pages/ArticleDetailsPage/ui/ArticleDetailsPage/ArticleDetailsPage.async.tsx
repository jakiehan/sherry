import { lazy } from 'react';

// Лэзи компонент(code-splitting) разделение билда, на чанки(загружаем только те компоненты на которые перешли)
// ИСПОЛЬЗОВАТЬ ТОЛЬКО НА БОЛЬШИХ ТЯЖЕЛЫХ ЧАНКАХ!!! Каждый компонент оборачивать не нужно!
export const ArticleDetailsPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // Только для учебы! в реальности такое не используется!
      // @ts-ignore
      setTimeout(() => resolve(import('./ArticleDetailsPage')), 500);
    })
);
