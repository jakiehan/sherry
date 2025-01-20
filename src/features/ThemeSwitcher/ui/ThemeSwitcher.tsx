import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import ThemeSwitcherDarkIcon from '@/app/styles/assets/icons/theme-switcher-dark.svg';
import ThemeSwitcherLightIcon from '@/app/styles/assets/icons/theme-switcher-light.svg';
import ThemeSwitcherOrangeIcon from '@/app/styles/assets/icons/theme-switcher-orange.svg';
import { Button } from '@/shared/Button';
import cls from './ThemeSwitcher.module.scss';

const activeIconTheme: Record<Theme, ReactNode> = {
  [Theme.DARK]: <ThemeSwitcherDarkIcon />,
  [Theme.LIGHT]: <ThemeSwitcherLightIcon />,
  [Theme.ORANGE]: <ThemeSwitcherOrangeIcon />,
};

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  console.log(theme);

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
      type="button"
      variant="clear"
    >
      {activeIconTheme[theme]}
    </Button>
  );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
