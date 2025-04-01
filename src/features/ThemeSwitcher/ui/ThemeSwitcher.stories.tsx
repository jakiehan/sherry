import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeDecorator } from '@/shared/decorators/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { StoreDecorator } from '@/shared/decorators/StoreDecorator';

const meta = {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ThemeSwitcher>;

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

export const Orange: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.ORANGE}>
        <StoreDecorator state={{}}>
          <Story />
        </StoreDecorator>
      </ThemeDecorator>
    ),
  ],
};
