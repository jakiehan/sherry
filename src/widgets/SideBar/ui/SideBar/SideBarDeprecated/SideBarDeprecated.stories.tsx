import type { Meta, StoryObj } from '@storybook/react';
import { SideBarDeprecated } from './SideBarDeprecated';
import { ThemeDecorator } from '@/shared/decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/decorators/StoreDecorator';

import { Theme } from '@/shared/constants/theme';

const meta = {
  title: 'widgets/SideBarDeprecated',
  component: SideBarDeprecated,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SideBarDeprecated>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: { collapsed: false },
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
};

export const Dark: Story = {
  args: { collapsed: false },
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
