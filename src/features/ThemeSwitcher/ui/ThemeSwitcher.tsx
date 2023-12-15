import { FC } from 'react';
import cls from './ThemeSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import ThemeSwitcherDarkIcon from 'app/styles/assets/icons/theme-switcher-dark.svg';
import ThemeSwitcherLightIcon from 'app/styles/assets/icons/theme-switcher-light.svg';
import { Button, ButtonVariant } from 'shared/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
      type='button'
      variant={ButtonVariant.CLEAR}
    >
      {theme === Theme.DARK ? <ThemeSwitcherDarkIcon className={cls.icon} /> : <ThemeSwitcherLightIcon className={cls.icon} />}
    </Button>
  );
};