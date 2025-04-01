import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../lib/routeConfig/routeConfig';
import { RequireAuth } from './RequireAuth';
import { AppRoutesProps } from '../types/router';

const routeWithWrapper = (route: AppRoutesProps) => {
  const element = <>{route.element}</>;

  return (
    <Route
      key={route.path}
      path={route.path}
      element={
        route.authOnly ? (
          <RequireAuth roles={route.roles}>{element}</RequireAuth>
        ) : (
          element
        )
      }
    />
  );
};

export const AppRouter = () => {
  return (
    <Suspense fallback="">
      <Routes>{Object.values(routeConfig).map(routeWithWrapper)}</Routes>
    </Suspense>
  );
};
