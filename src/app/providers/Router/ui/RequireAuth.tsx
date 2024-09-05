import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { useLocation, Navigate } from 'react-router-dom';
import { routePath } from 'app/providers/Router/lib/routeConfig/routeConfig';

interface RequireAuthProps {
  children: ReactElement;
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return (
      <Navigate
        to={routePath.main}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};
