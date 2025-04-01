import type { Meta, StoryObj } from '@storybook/react';
import { ArticleControl } from './ArticleControl';

const meta = {
  title: 'shared/ArticleControl',
  component: ArticleControl,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ArticleControl>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
export const Primary: Story = {
  args: {},
};*/
