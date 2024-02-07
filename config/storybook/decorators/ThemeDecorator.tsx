import { FC, ReactNode } from 'react';
import { Theme } from 'app/providers/ThemeProvider';

interface ThemeDecoratorProps {
  children: ReactNode;
  theme: Theme;
}

export const ThemeDecorator: FC<ThemeDecoratorProps> = ({
  children,
  theme,
}) => {
  return <div className={`app ${theme}`}>{children}</div>;
};
