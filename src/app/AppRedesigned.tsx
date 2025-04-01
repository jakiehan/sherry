import { FC, Suspense } from 'react';
import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';
import { AppRouter } from './providers/Router/ui/AppRouter';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { useAppToolbar } from './lib/hooks/useAppToolbar';

export const AppRedesigned: FC = () => {
  const toolbar = useAppToolbar();

  return (
    <div className="appRedesigned">
      <Suspense fallback="">
        <MainLayout
          header={<NavBar />}
          content={<AppRouter />}
          sidebar={<SideBar />}
          toolbar={toolbar}
        />
      </Suspense>
    </div>
  );
};
