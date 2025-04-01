import { memo } from 'react';
import { Comment } from '../../model/types';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { CommentCardDeprecated } from './CommentCardDeprecated/CommentCardDeprecated';
import { CommentCardRedesigned } from './CommentCardRedesigned/CommentCardRedesigned';

export interface CommentCardProps {
  comment: Comment;
  className?: string;
  isLoading?: boolean;
}

export const CommentCard = memo(
  ({ className, comment, isLoading }: CommentCardProps) => {
    const commonProps = {
      className,
      comment,
      isLoading,
    };

    return (
      <ToggleFeatures
        name="isAppRedesigned"
        on={<CommentCardRedesigned {...commonProps} />}
        off={<CommentCardDeprecated {...commonProps} />}
      />
    );
  }
);

CommentCard.displayName = 'CommentCard';
