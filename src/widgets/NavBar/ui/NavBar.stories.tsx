import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from 'widgets/NavBar';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from '../../../../config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from '../../../../config/storybook/decorators/StoreDecorator';

const meta = {
  title: 'widgets/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NavBar>;

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

export const LogedIn: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={{ user: { autData: {} } }}>
        <Story />
      </StoreDecorator>
    ),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
};
