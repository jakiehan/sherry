import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import ThemeSwitcherDarkIcon from 'app/styles/assets/icons/theme-switcher-dark.svg';
import ThemeSwitcherLightIcon from 'app/styles/assets/icons/theme-switcher-light.svg';
import { Button, ButtonTheme } from 'shared/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
      type="button"
      variant={ButtonTheme.CLEAR}
    >
      {theme === Theme.DARK ? (
        <ThemeSwitcherDarkIcon className={cls.icon} />
      ) : (
        <ThemeSwitcherLightIcon className={cls.icon} />
      )}
    </Button>
  );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
