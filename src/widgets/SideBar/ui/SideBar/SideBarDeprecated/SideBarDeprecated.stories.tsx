import type { Meta, StoryObj } from '@storybook/react';
import { SideBarDeprecated } from './SideBarDeprecated';
import { ThemeDecorator } from '@/shared/decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/decorators/StoreDecorator';

import { Theme } from '@/shared/constants/theme';
import { SideBarItemType } from '../../../model/types/sideBar';
import {
  getRouteAbout,
  getRouteMain,
} from '@/app/providers/Router/constants/router';
import { toggleFeatures } from '@/shared/lib/featureFlags';
import MainIcon from '@/shared/assets/icons/home-page-new.svg';
import MainIconDeprecated from '@/shared/assets/icons/home-page.svg';
import AboutIcon from '@/shared/assets/icons/about-page-new.svg';
import AboutIconDeprecated from '@/shared/assets/icons/about-page.svg';

const meta = {
  title: 'widgets/SideBarDeprecated',
  component: SideBarDeprecated,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SideBarDeprecated>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Light: Story = {
  args: { collapsed: false, sidebarItems: sideBarItemsList },
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
};

export const Dark: Story = {
  args: { collapsed: true, sidebarItems: sideBarItemsList },
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <ThemeDecorator theme={Theme.DARK}>
          <Story />
        </ThemeDecorator>
      </StoreDecorator>
    ),
  ],
};
