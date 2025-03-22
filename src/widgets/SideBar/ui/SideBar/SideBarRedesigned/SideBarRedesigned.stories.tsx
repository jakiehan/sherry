import type { Meta, StoryObj } from '@storybook/react';
import { SideBarRedesigned } from './SideBarRedesigned';
import { ThemeDecorator } from '@/shared/decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/decorators/StoreDecorator';

import { Theme } from '@/shared/constants/theme';

const meta = {
  title: 'widgets/SideBarRedesigned',
  component: SideBarRedesigned,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SideBarRedesigned>;

export default meta;
type Story = StoryObj<typeof meta>;

/*export const Light: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <ThemeDecorator theme={Theme.DARK}>
          <Story />
        </ThemeDecorator>
      </StoreDecorator>
    ),
  ],
};*/
