import { FC } from 'react';
import cls from './Loader.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
  className?: string;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classNames(cls.loader, {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
