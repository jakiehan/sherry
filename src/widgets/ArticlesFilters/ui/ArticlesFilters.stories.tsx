import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesFilters } from './ArticlesFilters';

const meta = {
  title: 'widgets/ArticlesFilters',
  component: ArticlesFilters,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ArticlesFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
export const Primary: Story = {
  args: {},
};*/
