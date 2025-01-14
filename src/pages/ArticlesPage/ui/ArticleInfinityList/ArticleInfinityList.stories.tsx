import type { Meta, StoryObj } from '@storybook/react';
import { ArticleInfinityList } from './ArticleInfinityList';
import { StoreDecorator } from '../../../../../config/storybook/decorators/StoreDecorator';

const meta = {
  title: 'shared/ArticleInfinityList',
  component: ArticleInfinityList,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ArticleInfinityList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
};
