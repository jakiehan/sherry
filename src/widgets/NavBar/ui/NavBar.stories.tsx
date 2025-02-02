import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './NavBar';
import { ThemeDecorator } from '@/shared/decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/decorators/StoreDecorator';
import { Theme } from '@/shared/constants/theme';

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
      <StoreDecorator state={{}}>
        <ThemeDecorator theme={Theme.DARK}>
          <Story />
        </ThemeDecorator>
      </StoreDecorator>
    ),
  ],
};
