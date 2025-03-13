import { useState } from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { SideBarDeprecated } from './SideBarDeprecated';
import { componentRender } from '@/shared/lib/tests/componentRender';
import { SideBarItemType } from '../../../model/types/sideBar';
import {
  getRouteAbout,
  getRouteMain,
} from '@/app/providers/Router/constants/router';
import AboutIcon from '@/shared/assets/icons/about-page-new.svg';
import MainIcon from '@/shared/assets/icons/home-page-new.svg';

const items: SideBarItemType[] = [
  { Icon: MainIcon, text: 'Главная', authOnly: true, path: getRouteMain() },
  { Icon: AboutIcon, text: 'О сайте', authOnly: true, path: getRouteAbout() },
];

describe('sidebar', () => {
  const WrapperSideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
      <SideBarDeprecated
        sidebarItems={items}
        collapsed={isCollapsed}
        toggleSidebar={() => setIsCollapsed(!isCollapsed)}
      />
    );
  };

  test('test render', () => {
    componentRender(<WrapperSideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test render', () => {
    componentRender(<WrapperSideBar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
