import { memo, useCallback, useState } from 'react';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { SideBarRedesigned } from './SideBarRedesigned/SideBarRedesigned';
import { SideBarDeprecated } from './SideBarDeprecated/SideBarDeprecated';
import { useSelector } from 'react-redux';
import { getSideBarItems } from '../../model/selectors/getSideBarItems';
import { SideBarItemType } from '../../model/types/sideBar';

export interface SideBarProps {
  className?: string;
  sidebarItems: SideBarItemType[];
  toggleSidebar: () => void;
  collapsed: boolean;
}

export const SideBar = memo(() => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = useCallback(() => setCollapsed((prev) => !prev), []);

  const sidebarItems = useSelector(getSideBarItems);

  const props = {
    collapsed,
    toggleSidebar,
    sidebarItems,
  };

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={<SideBarRedesigned {...props} />}
      off={<SideBarDeprecated {...props} />}
    />
  );
});

SideBar.displayName = 'SideBar';
