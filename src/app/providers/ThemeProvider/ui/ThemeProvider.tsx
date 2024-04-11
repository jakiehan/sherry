import { FC, useEffect, useMemo, useState } from 'react';
import {
  LOCALE_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/ThemeContext';

const defaultTheme =
  (localStorage.getItem(LOCALE_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  useEffect(() => {
    document.body.className = defaultTheme;
  }, []);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
