import { FC, ReactNode } from 'react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

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
