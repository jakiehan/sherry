import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'app/providers/Router';
import { PageLoader } from 'widgets/PageLoader';
import { AppRoutesProps } from 'app/providers/Router/lib/routeConfig/routeConfig';
import { RequireAuth } from 'app/providers/Router/ui/RequireAuth';

const routeWithWrapper = (route: AppRoutesProps) => {
  const element = <div className="pageWrapper">{route.element}</div>;

  return (
    <Route
      key={route.path}
      path={route.path}
      element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
    />
  );
};

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(routeWithWrapper)}</Routes>
    </Suspense>
  );
};
