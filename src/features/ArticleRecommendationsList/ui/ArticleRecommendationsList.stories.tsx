import type { Meta, StoryObj } from '@storybook/react';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { StoreDecorator } from '../../../../config/storybook/decorators/StoreDecorator';
import { Article } from '@/entities/Article';

const meta = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

const article: Article = {
  id: '1',
  img: 'https://img.goodfon.ru/wallpaper/big/a/69/kartinka-3d-dikaya-koshka.webp',
  createdAt: '',
  views: 123,
  user: { id: '1', username: '123', avatar: '' },
  blocks: [],
  type: [],
  title: '123',
  subtitle: 'asfsa',
};

export const Primary: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: 'GET',
        status: 200,
        response: [
          { ...article, id: '1' },
          { ...article, id: '2' },
          { ...article, id: '3' },
        ],
      },
    ],
  },
};
