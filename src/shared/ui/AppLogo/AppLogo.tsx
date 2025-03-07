import React, { memo } from 'react';
import cls from './AppLogo.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../AppImage';
import { HStack } from '../Flex';
import logo from '@/shared/assets/image/logo.webp';

interface AppLogoProps {
  className?: string;
}

export const AppLogo = memo(({ className }: AppLogoProps) => {
  return (
    <HStack
      max
      justify="center"
      className={classNames(cls.appLogo, {}, [className])}
    >
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
      <AppImage
        className={cls.img}
        src={logo}
      />
    </HStack>
  );
});

AppLogo.displayName = 'AppLogo';
