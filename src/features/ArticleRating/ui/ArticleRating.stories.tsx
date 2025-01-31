import type { Meta, StoryObj } from '@storybook/react';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '../../../../config/storybook/decorators/StoreDecorator';

const meta = {
  title: 'features/ArticleRating',
  component: ArticleRating,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { articleId: '1' },
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          user: {
            autData: {
              id: '1',
            },
          },
        }}
      >
        <Story />
      </StoreDecorator>
    ),
  ],
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [{ rate: 5 }],
      },
    ],
  },
};

export const NoRate: Story = {
  args: { articleId: '1' },
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          user: {
            autData: {
              id: '1',
            },
          },
        }}
      >
        <Story />
      </StoreDecorator>
    ),
  ],
};
