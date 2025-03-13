import React, { memo } from 'react';
import cls from './AppLogo.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import logo from '@/shared/assets/image/logo.webp';
import { HStack } from '../Flex';
import { AppImage } from '../AppImage';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = memo(({ className, size = 100 }: AppLogoProps) => {
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
        width={size}
        height={size}
      />
    </HStack>
  );
});

AppLogo.displayName = 'AppLogo';
