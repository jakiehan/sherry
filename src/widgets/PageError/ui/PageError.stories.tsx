import type { Meta, StoryObj } from '@storybook/react';
import { PageError } from './PageError';
import { ThemeDecorator } from '@/shared/decorators/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';

const meta = {
  title: 'widgets/PageError',
  component: PageError,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageError>;

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
