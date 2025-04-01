import { matchPath, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import {
  appRouteByPathPattern,
  AppRoutes,
} from '@/app/providers/Router/constants/router';

export const useRouteChange = () => {
  const { pathname } = useLocation();

  return useMemo(() => {
    let currentRoute: AppRoutes = AppRoutes.MAIN;
    Object.entries(appRouteByPathPattern).forEach(([pattern, route]) => {
      if (matchPath(pattern, pathname)) {
        currentRoute = route;
      }
    });

    return currentRoute;
  }, [pathname]);
};
