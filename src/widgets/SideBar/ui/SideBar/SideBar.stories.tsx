import type { Meta, StoryObj } from '@storybook/react';
import { SideBar } from 'widgets/SideBar';
import { ThemeDecorator } from '../../../../../config/storybook/decorators/ThemeDecorator';
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
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
