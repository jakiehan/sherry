import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
}

// Использовать memo когда есть prop children не совсем правильно и не имеет смысла
// (НО тут в 99% в children будет просто строка, поэтому использование memo оправдано)
export const AppLink = memo(
  ({
    className,
    children,
    to,
    variant = AppLinkVariant.PRIMARY,
    ...otherProps
  }: AppLinkProps) => (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
);

AppLink.displayName = 'AppLink';
