import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeSwitcherDarkIcon from '@/shared/assets/icons/theme-switcher-dark.svg';
import ThemeSwitcherLightIcon from '@/shared/assets/icons/theme-switcher-light.svg';
import ThemeSwitcherOrangeIcon from '@/shared/assets/icons/theme-switcher-orange.svg';
import { Button } from '@/shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';
import { Theme } from '@/shared/constants/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

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
