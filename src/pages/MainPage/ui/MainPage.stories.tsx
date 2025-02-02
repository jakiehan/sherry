import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';
import { ThemeDecorator } from '@/shared/decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/decorators/StoreDecorator';
import { Theme } from '@/shared/constants/theme';

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MainPage>;

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
      <ThemeDecorator theme={Theme.DARK}>
        <StoreDecorator state={{}}>
          <Story />
        </StoreDecorator>
      </ThemeDecorator>
    ),
  ],
};
