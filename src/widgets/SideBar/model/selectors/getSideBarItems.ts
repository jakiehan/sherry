import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/home-page.svg';
import AboutIcon from '@/shared/assets/icons/about-page.svg';
import ProfileIcon from '@/shared/assets/icons/profile-page.svg';
import ArticlesIcon from '@/shared/assets/icons/articles-page.svg';
import { SideBarItemType } from '../types/sideBar';
import { routePath } from '@/app/providers/Router/constants/router';

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
