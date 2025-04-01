import { AppRoutes } from '@/app/providers/Router/constants/router';
import { ReactElement } from 'react';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { useRouteChange } from '../../providers/Router/lib/hooks/useRouteChange';

export const useAppToolbar = () => {
  const appRoute = useRouteChange();

  const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
    [AppRoutes.ARTICLES]: <ScrollToolbar />,
    [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
  };

  return toolbarByAppRoute[appRoute];
};
