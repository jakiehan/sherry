import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';
import { Comment } from '../../model/types';
import { StoreDecorator } from '@/shared/decorators/StoreDecorator';

const meta = {
  title: 'entities/CommentList',
  component: CommentList,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

const comments: Comment[] = [
  {
    id: '1',
    user: {
      id: '2',
      username: 'sherry',
      avatar:
        'https://images.unsplash.com/photo-1652726692250-45965ba38a70?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    text: 'первый коммент',
  },
  {
    id: '2',
    user: {
      id: '2',
      username: 'sherry',
      avatar:
        'https://images.unsplash.com/photo-1652726692250-45965ba38a70?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    text: 'спам',
  },
  {
    id: '3',
    user: {
      id: '1',
      username: 'admin',
      avatar:
        'https://images.unsplash.com/photo-1649000313856-7360316a546c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    text: 'админ заблочь ботов!!!',
  },
];

export const Primary: Story = {
  args: {
    comments,
  },
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
};

export const IsLoading: Story = {
  args: {
    isLoading: true,
    comments,
  },
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
};
