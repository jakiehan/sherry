import type { Meta, StoryObj } from '@storybook/react';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const meta = {
  title: 'shared/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
export const Primary: Story = {
  args: {},
};*/
