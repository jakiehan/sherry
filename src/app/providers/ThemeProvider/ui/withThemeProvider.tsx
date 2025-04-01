import { ComponentType } from 'react';
import { useJsonSettings } from '@/entities/User';
import { ThemeProvider } from './ThemeProvider';

//Вынос бизнесовой логики из провайдера темы
export const withThemeProvider = (Component: ComponentType) => {
  return function Wrapper() {
    const { theme: userTheme } = useJsonSettings();
    return (
      <ThemeProvider initialTheme={userTheme}>
        <Component />
      </ThemeProvider>
    );
  };
};
