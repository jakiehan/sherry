import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeDecorator } from '@/shared/decorators/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';

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

export const Orange: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.ORANGE}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
