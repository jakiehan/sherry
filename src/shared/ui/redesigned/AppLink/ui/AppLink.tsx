import { memo, ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'secondary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  activeClassName?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
}

// Использовать memo когда есть prop children не совсем правильно и не имеет смысла
// (НО тут в 99% в children будет просто строка, поэтому использование memo оправдано)

export const AppLink = memo(
  ({
    className,
    children,
    activeClassName = '',
    to,
    variant = 'primary',
    ...otherProps
  }: AppLinkProps) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(cls.appLink, { [activeClassName]: isActive }, [
          className,
          cls[variant],
        ])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  )
);

AppLink.displayName = 'AppLink';
