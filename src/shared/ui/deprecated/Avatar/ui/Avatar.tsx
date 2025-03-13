import { CSSProperties, FC, useMemo } from 'react';
import cls from './Avatar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../../../redesigned/AppImage';
import FallbackAvatar from '@/shared/assets/icons/avatar.svg';
import { Skeleton } from '../../Skeleton';

interface AvatarProps {
  src?: string;
  alt?: string;
  className?: string;
  size?: number;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Avatar: FC<AvatarProps> = ({
  className,
  src = '',
  alt = 'Фото профиля',
  size = 100,
}) => {
  const sizeAvatar = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  return (
    <AppImage
      className={classNames(cls.avatar, {}, [className])}
      src={src}
      alt={alt}
      style={sizeAvatar}
      fallback={
        <Skeleton
          width={size}
          height={size}
          borderRadius="50%"
        />
      }
      errorFallback={
        <FallbackAvatar
          className={cls.fallbackAvatar}
          height={size}
          width={size}
        />
      }
    />
  );
};
