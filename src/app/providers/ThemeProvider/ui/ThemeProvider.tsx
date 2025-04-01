import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { Theme } from '@/shared/constants/theme';
import { LOCALE_STORAGE_THEME_KEY } from '@/shared/constants/localstorage';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const fallbackTheme = localStorage.getItem(LOCALE_STORAGE_THEME_KEY) as Theme;

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const [theme, setTheme] = useState<Theme>(
    initialTheme || fallbackTheme || Theme.DARK
  );
  const [isThemeInited, setThemeInited] = useState(false);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  useEffect(() => {
    if (!isThemeInited && initialTheme) {
      setTheme(initialTheme);
      setThemeInited(true);
    }

    if (!initialTheme && isThemeInited) {
      setThemeInited(false);
    }
    localStorage.setItem(LOCALE_STORAGE_THEME_KEY, theme);
    document.body.className = theme;
  }, [isThemeInited, theme, initialTheme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
