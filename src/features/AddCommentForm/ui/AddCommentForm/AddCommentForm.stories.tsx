import type { Meta, StoryObj } from '@storybook/react';
import AddCommentForm from './AddCommentForm';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '../../../../../config/storybook/decorators/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { AVATAR_URL } from '@/shared/Avatar/lib/constants';

const meta = {
  title: 'feature/AddCommentForm',
  component: AddCommentForm,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { onSendCommit: action('onSendCommit') },
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          addCommentForm: {
            text: '',
          },
        }}
      >
        <Story />
      </StoreDecorator>
    ),
  ],
};
