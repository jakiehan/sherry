import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

// Лэзи компонент(code-splitting) разделение билда, на чанки(загружаем только те компоненты на которые перешли)
// ИСПОЛЬЗОВАТЬ ТОЛЬКО НА БОЛЬШИХ ТЯЖЕЛЫХ ЧАНКАХ!!! Каждый компонент оборачивать не нужно!
export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () =>
    new Promise((resolve) => {
      // Только для учебы! в реальности такое не используется!
      // @ts-ignore
      setTimeout(() => resolve(import('./LoginForm')), 1500);
    })
);
