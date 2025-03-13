import { memo, useCallback, useState } from 'react';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { SideBarRedesigned } from './SideBarRedesigned/SideBarRedesigned';
import { SideBarDeprecated } from './SideBarDeprecated/SideBarDeprecated';
import { useSelector } from 'react-redux';
import { getSideBarItems } from '../../model/selectors/getSideBarItems';

export const SideBar = memo(() => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSideBar = useCallback(() => setCollapsed((prev) => !prev), []);

  const sideBarItemsList = useSelector(getSideBarItems);

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <SideBarRedesigned
          collapsed={collapsed}
          toggleSidebar={toggleSideBar}
          sidebarItems={sideBarItemsList}
        />
      }
      off={
        <SideBarDeprecated
          collapsed={collapsed}
          toggleSidebar={toggleSideBar}
          sidebarItems={sideBarItemsList}
        />
      }
    />
  );
});

SideBar.displayName = 'SideBar';
