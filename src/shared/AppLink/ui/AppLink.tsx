import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';

export enum AppLinkVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
  className?: string;
  variant?: AppLinkVariant;
}

export const AppLink: FC<AppLinkProps> = ({ className, children, to, variant = AppLinkVariant.PRIMARY, ...otherProps}) => {
  return (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};