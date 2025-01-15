import { FC, ReactNode, Suspense } from 'react';

interface SuspenseDecoratorProps {
  children: ReactNode;
}
// Для lazy компонентов
export const SuspenseDecorator: FC<SuspenseDecoratorProps> = ({ children }) => {
  return <Suspense>{children}</Suspense>;
};
