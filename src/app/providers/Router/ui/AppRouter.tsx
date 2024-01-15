import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'app/providers/Router';
import { useTranslation } from 'react-i18next';

export const AppRouter = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>{t('...Загрузка')}</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className="pageWrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
