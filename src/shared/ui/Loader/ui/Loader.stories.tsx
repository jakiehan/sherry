import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';
import { ThemeDecorator } from '@/shared/decorators/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';

const meta = {
  title: 'shared/Loader',
  component: Loader,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Loader>;

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
