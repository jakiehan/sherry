import { FC, ReactNode } from 'react';
import { ThemeProvider } from '../../app/providers/ThemeProvider/ui/ThemeProvider';
import { Theme } from '@/shared/constants/theme';

interface ThemeDecoratorProps {
  children: ReactNode;
  theme: Theme;
}

export const ThemeDecorator: FC<ThemeDecoratorProps> = ({
  children,
  theme,
}) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>{children}</div>;
    </ThemeProvider>
  );
};
