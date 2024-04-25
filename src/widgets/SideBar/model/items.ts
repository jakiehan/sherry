import { SVGProps, VFC } from 'react';
import { routePath } from 'app/providers/Router/lib/routeConfig/routeConfig';
import MainIcon from 'app/styles/assets/icons/home-page.svg';
import AboutIcon from 'app/styles/assets/icons/about-page.svg';
import ProfileIcon from 'app/styles/assets/icons/profile-page.svg';

export interface SideBarItemType {
  path: string;
  text: string;
  Icon: VFC<SVGProps<SVGElement>>;
}

export const sideBarItemsList: SideBarItemType[] = [
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
  {
    path: routePath.profile,
    text: 'Профиль',
    Icon: ProfileIcon,
  },
];
