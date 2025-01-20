import { CSSProperties, FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Avatar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AvatarProps {
  src?: string;
  alt?: string;
  className?: string;
  size?: number;
}

export const Avatar: FC<AvatarProps> = ({
  className,
  src = '',
  alt = 'Фото профиля',
  size = 100,
}) => {
  const { t } = useTranslation();

  const sizeAvatar = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  return (
    <img
      src={src}
      alt={alt}
      style={sizeAvatar}
      className={classNames(cls.avatar, {}, [className])}
    />
  );
};
