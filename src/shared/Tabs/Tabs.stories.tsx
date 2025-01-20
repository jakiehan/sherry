import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { action } from '@storybook/addon-actions';
import { ArticleType } from '@/entities/Article/model/types/article';

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tabs: [
      {
        value: ArticleType.ALL,
        content: 'tab1',
      },
      {
        value: ArticleType.IT,
        content: 'tab2',
      },
      {
        value: ArticleType.ECONOMICS,
        content: 'tab3',
      },
    ],
    value: ArticleType.IT,
    onTabClick: action('onTabClick'),
  },
};
