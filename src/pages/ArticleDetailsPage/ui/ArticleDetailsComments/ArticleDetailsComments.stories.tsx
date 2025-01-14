import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetailsComments } from './ArticleDetailsComments';

const meta = {
  title: 'shared/ArticleDetailsComments',
  component: ArticleDetailsComments,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ArticleDetailsComments>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
export const Primary: Story = {
  args: {},
};*/