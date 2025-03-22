import { FC, ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
  className?: string;
  left?: ReactElement;
  content: ReactElement;
  right?: ReactElement;
}

export const StickyContentLayout: FC<StickyContentLayoutProps> = ({
  className,
  content,
  left,
  right,
}) => {
  return (
    <div className={classNames(cls.stickyContentLayout, {}, [className])}>
      {right && <div className={cls.left}>{left}</div>}
      <div className={cls.content}>{content}</div>
      {left && <div className={cls.right}>{right}</div>}
    </div>
  );
};
