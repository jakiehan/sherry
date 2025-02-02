import type { Meta, StoryObj } from '@storybook/react';
import { ArticleViewSwitcher } from './ArticleViewSwitcher';
import { ThemeDecorator } from '@/shared/decorators/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';

const meta = {
  title: 'features/ArticleViewSwitcher',
  component: ArticleViewSwitcher,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ArticleViewSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { views: 'place' },
};

export const Orange: Story = {
  args: { views: 'place' },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.ORANGE}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
