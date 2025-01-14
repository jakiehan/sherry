import { lazy } from 'react';

// Лэзи компонент(code-splitting) разделение билда, на чанки(загружаем только те компоненты на которые перешли)
// ИСПОЛЬЗОВАТЬ ТОЛЬКО НА БОЛЬШИХ ТЯЖЕЛЫХ ЧАНКАХ!!! Каждый компонент оборачивать не нужно!
export const ForbiddenPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // Только для учебы! в реальности такое не используется!
      // @ts-ignore
      setTimeout(() => resolve(import('./ForbiddenPage')), 500);
    })
);