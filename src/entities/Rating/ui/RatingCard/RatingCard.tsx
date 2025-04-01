import { memo, useCallback, useState } from 'react';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { RatingCardDeprecated } from './RatingCardDeprecated/RatingCardDeprecated';
import { RatingCardRedesigned } from './RatingCardRedesigned/RatingCardRedesigned';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  onCancel?: (starCount: number) => void;
  onAccept?: (starCount: number, feedback?: string) => void;
  rate?: number;
}

export interface RatingCardState extends RatingCardProps {
  feedback?: string;
  setFeedback?: (feedback: string) => void;
  isOpenModal?: boolean;
  starCount?: number;
  onClickCancel: () => void;
  onClickSend: () => void;
  closeModal: () => void;
  selectStars: (starCount: number) => void;
}

export const RatingCard = memo(
  ({
    className,
    onAccept,
    onCancel,
    feedbackTitle = '',
    title = '',
    rate = 0,
  }: RatingCardProps) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [starCount, setStarCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const selectStars = useCallback(
      (starCount: number) => {
        setStarCount(starCount);

        if (feedbackTitle) {
          setIsOpenModal(true);
        } else {
          onAccept?.(starCount);
        }
      },
      [feedbackTitle, onAccept]
    );

    const handleClickSend = useCallback(() => {
      setIsOpenModal(false);
      onAccept?.(starCount, feedback);
    }, [feedback, onAccept, starCount]);

    const handleClickCancel = useCallback(() => {
      setIsOpenModal(false);
      onCancel?.(starCount);
    }, [onCancel, starCount]);

    const closeModal = useCallback(() => {
      setIsOpenModal(false);
    }, []);

    const commonProps = {
      className: className,
      feedbackTitle: feedbackTitle,
      title: title,
      feedback: feedback,
      setFeedback,
      isOpenModal: isOpenModal,
      starCount: starCount,
      onClickCancel: handleClickCancel,
      onClickSend: handleClickSend,
      closeModal: closeModal,
      selectStars: selectStars,
    };

    return (
      <ToggleFeatures
        name="isAppRedesigned"
        on={<RatingCardRedesigned {...commonProps} />}
        off={<RatingCardDeprecated {...commonProps} />}
      />
    );
  }
);

RatingCard.displayName = 'RatingCard';
