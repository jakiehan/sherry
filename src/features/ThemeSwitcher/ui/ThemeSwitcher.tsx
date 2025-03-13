import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeSwitcherDarkIcon from '@/shared/assets/icons/theme-switcher-dark.svg';
import ThemeSwitcherLightIcon from '@/shared/assets/icons/theme-switcher-light.svg';
import ThemeSwitcherOrangeIcon from '@/shared/assets/icons/theme-switcher-orange.svg';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import cls from './ThemeSwitcher.module.scss';
import { Theme } from '@/shared/constants/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useSetJsonSettingsMutation, useUserId } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { Button } from '@/shared/ui/redesigned/Button';
import { Icon } from '@/shared/ui/redesigned/Icon';

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
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <Button
          className={classNames(cls.themeSwitcherRedesigned, {}, [className])}
          onClick={onToggleHandler}
          type="button"
          variant="clear"
        >
          <Icon Svg={ThemeIcon} />
        </Button>
      }
      off={
        <ButtonDeprecated
          className={classNames(cls.themeSwitcher, {}, [className])}
          onClick={onToggleHandler}
          type="button"
          variant="clear"
        >
          {activeIconTheme[theme]}
        </ButtonDeprecated>
      }
    />
  );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
