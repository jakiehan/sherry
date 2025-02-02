import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { StoreDecorator } from '@/shared/decorators/StoreDecorator';

const meta = {
  title: 'pages/ArticleDetailsComments',
  component: ArticleDetailsComments,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ArticleDetailsComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { id: '1' },
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
};
