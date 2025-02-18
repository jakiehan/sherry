import { FC, ReactElement, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';
import { useLocation, Navigate } from 'react-router-dom';
import { getRouteForbidden, getRouteMain } from '../constants/router';

interface RequireAuthProps {
  children: ReactElement;
  roles?: UserRole[];
}

export const RequireAuth: FC<RequireAuthProps> = ({ children, roles }) => {
  const location = useLocation();
  const auth = useSelector(getUserAuthData);
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requiredRole) => {
      const hasRole = userRoles?.includes(requiredRole);
      return hasRole;
    });
  }, [roles, userRoles]);

  if (!hasRequiredRoles) {
    return (
      <Navigate
        to={getRouteForbidden()}
        state={{ from: location }}
        replace
      />
    );
  }

  if (!auth) {
    return (
      <Navigate
        to={getRouteMain()}
        state={{ from: location }}
        replace
      />
    );
  }
  return children;
};
