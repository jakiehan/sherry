import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIconDeprecated from '@/shared/assets/icons/home-page.svg';
import AboutIconDeprecated from '@/shared/assets/icons/about-page.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile-page.svg';
import ArticlesIconDeprecated from '@/shared/assets/icons/articles-page.svg';
import ArticlesIcon from '@/shared/assets/icons/articles-page-new.svg';
import ProfileIcon from '@/shared/assets/icons/profile-page-new.svg';
import AboutIcon from '@/shared/assets/icons/about-page-new.svg';
import MainIcon from '@/shared/assets/icons/home-page-new.svg';
import { SideBarItemType } from '../types/sideBar';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/app/providers/Router/constants/router';
import { toggleFeatures } from '@/shared/lib/featureFlags';

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
  const sideBarItemsList: SideBarItemType[] = [
    {
      path: getRouteMain(),
      text: 'Главная',
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        on: () => MainIcon,
        off: () => MainIconDeprecated,
      }),
    },
    {
      path: getRouteAbout(),
      text: 'О сайте',
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        on: () => AboutIcon,
        off: () => AboutIconDeprecated,
      }),
    },
  ];

  if (userData) {
    sideBarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        text: 'Профиль',
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          on: () => ProfileIcon,
          off: () => ProfileIconDeprecated,
        }),
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        text: 'Статьи',
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          on: () => ArticlesIcon,
          off: () => ArticlesIconDeprecated,
        }),
        authOnly: true,
      }
    );
  }

  return sideBarItemsList;
});
