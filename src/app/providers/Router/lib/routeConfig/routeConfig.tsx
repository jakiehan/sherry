import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { AppRoutes, routePath } from '../../constants/router';
import { AppRoutesProps } from '../../types/router';

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
