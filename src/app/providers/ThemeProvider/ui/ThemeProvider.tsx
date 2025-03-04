import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { Theme } from '@/shared/constants/theme';
import { useJsonSettings } from '@/entities/User';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const { theme: userTheme } = useJsonSettings();

  const [theme, setTheme] = useState<Theme>(initialTheme ?? Theme.DARK);
  const [isThemeInited, setThemeInited] = useState(false);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  useEffect(() => {
    if (!isThemeInited && userTheme) {
      setTheme(userTheme);
      setThemeInited(true);
    }

    if (!userTheme && isThemeInited) {
      setThemeInited(false);
    }
    document.body.className = theme;
  }, [isThemeInited, theme, userTheme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
