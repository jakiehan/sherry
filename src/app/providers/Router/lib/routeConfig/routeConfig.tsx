import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  NOT_FOUND = 'not_found',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // +id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // +id
  [AppRoutes.NOT_FOUND]: '*',
  [AppRoutes.ADMIN_PANEL]: '/admin',
  [AppRoutes.FORBIDDEN]: '/forbidden',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: routePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: routePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${routePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: routePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${routePath['article_details']}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: routePath['not_found'],
    element: <NotFoundPage />,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: routePath['admin_panel'],
    element: <AdminPanelPage />,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
    authOnly: true,
  },
  [AppRoutes.FORBIDDEN]: {
    path: routePath['forbidden'],
    element: <ForbiddenPage />,
  },
};
