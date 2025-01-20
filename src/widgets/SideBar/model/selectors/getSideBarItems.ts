import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { routePath } from '@/app/providers/Router/lib/routeConfig/routeConfig';
import MainIcon from '@/app/styles/assets/icons/home-page.svg';
import AboutIcon from '@/app/styles/assets/icons/about-page.svg';
import ProfileIcon from '@/app/styles/assets/icons/profile-page.svg';
import ArticlesIcon from '@/app/styles/assets/icons/articles-page.svg';
import { SideBarItemType } from '../types/sideBar';

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
  const sideBarItemsList: SideBarItemType[] = [
    {
      path: routePath.main,
      text: 'Главная страница',
      Icon: MainIcon,
    },
    {
      path: routePath.about,
      text: 'О сайте',
      Icon: AboutIcon,
    },
  ];

  if (userData) {
    sideBarItemsList.push(
      {
        path: routePath.profile + userData.id,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: routePath.articles,
        text: 'Статьи',
        Icon: ArticlesIcon,
        authOnly: true,
      }
    );
  }

  return sideBarItemsList;
});
