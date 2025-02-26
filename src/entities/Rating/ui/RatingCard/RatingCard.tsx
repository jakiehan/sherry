import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Flex';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  onCancel?: (starCount: number) => void;
  onAccept?: (starCount: number, feedback?: string) => void;
  rate?: number;
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

    const isMobile = useDevice();

    const { t } = useTranslation();

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

    const contentModal = (
      <>
        <Text title={feedbackTitle} />
        <Input
          label={t('Ваш отзыв')}
          labelWidth={120}
          value={feedback}
          onChange={setFeedback}
          data-testid="ratingCard.Input"
        />
      </>
    );

    return (
      <Card
        className={className}
        data-testid="ratingCard"
      >
        <VStack
          gap="24"
          align="center"
        >
          <Text title={starCount ? t('Спасибо за оценку!') : title} />
          <StarRating
            size={40}
            onSelect={selectStars}
            selectedStars={starCount}
          />
        </VStack>
        {!isMobile && (
          <Modal
            lazy
            isOpen={isOpenModal}
            onClose={closeModal}
          >
            <VStack gap="24">
              {contentModal}
              <HStack
                max
                gap="16"
                justify="end"
              >
                <Button
                  onClick={handleClickCancel}
                  variant="outlineRed"
                  data-testid="ratingCard.Close"
                >
                  {t('Закрыть')}
                </Button>
                <Button
                  onClick={handleClickSend}
                  data-testid="ratingCard.Send"
                >
                  {t('Отправить')}
                </Button>
              </HStack>
            </VStack>
          </Modal>
        )}
        {isMobile && (
          <Drawer
            lazy
            isOpen={isOpenModal}
            onClose={handleClickCancel}
          >
            <VStack
              gap="24"
              max
            >
              {contentModal}
              <Button
                onClick={handleClickSend}
                fullWidth
              >
                {t('Отправить')}
              </Button>
            </VStack>
          </Drawer>
        )}
      </Card>
    );
  }
);

RatingCard.displayName = 'RatingCard';
