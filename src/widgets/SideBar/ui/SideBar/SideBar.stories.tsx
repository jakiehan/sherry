import type { Meta, StoryObj } from '@storybook/react';
import { SideBar } from './SideBar';
import { ThemeDecorator } from '../../../../../config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from '../../../../../config/storybook/decorators/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'widgets/SideBar',
  component: SideBar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
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
};
