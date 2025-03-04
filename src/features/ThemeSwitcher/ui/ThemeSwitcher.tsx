import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeSwitcherDarkIcon from '@/shared/assets/icons/theme-switcher-dark.svg';
import ThemeSwitcherLightIcon from '@/shared/assets/icons/theme-switcher-light.svg';
import ThemeSwitcherOrangeIcon from '@/shared/assets/icons/theme-switcher-orange.svg';
import { Button } from '@/shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';
import { Theme } from '@/shared/constants/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useSetJsonSettingsMutation, useUserId } from '@/entities/User';

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

  const [setTheme] = useSetJsonSettingsMutation();
  const userId = useUserId();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme: Theme) => {
      if (userId) {
        setTheme({ userId, jsonSettings: { theme: newTheme } });
      }
    });
  }, [setTheme, toggleTheme, userId]);

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={onToggleHandler}
      type="button"
      variant="clear"
    >
      {activeIconTheme[theme]}
    </Button>
  );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
