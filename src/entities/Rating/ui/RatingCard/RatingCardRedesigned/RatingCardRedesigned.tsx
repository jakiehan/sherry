import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Flex';
import { Text } from '@/shared/ui/redesigned/Text';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { RatingCardState } from '../RatingCard';

export const RatingCardRedesigned = memo(
  ({
    className,
    feedbackTitle = '',
    title = '',
    feedback = '',
    setFeedback,
    isOpenModal = false,
    starCount,
    onClickCancel,
    onClickSend,
    closeModal,
    selectStars,
  }: RatingCardState) => {
    const isMobile = useDevice();

    const { t } = useTranslation();

    const contentModal = (
      <>
        <Text title={feedbackTitle} />
        <Input
          label={t('Ваш отзыв')}
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
        max
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
            <Card padding="24">
              <VStack gap="24">
                {contentModal}
                <HStack
                  max
                  gap="16"
                  justify="end"
                >
                  <Button
                    onClick={onClickCancel}
                    variant="outline"
                    data-testid="ratingCard.Close"
                  >
                    {t('Закрыть')}
                  </Button>
                  <Button
                    onClick={onClickSend}
                    data-testid="ratingCard.Send"
                  >
                    {t('Отправить')}
                  </Button>
                </HStack>
              </VStack>
            </Card>
          </Modal>
        )}
        {isMobile && (
          <Drawer
            lazy
            isOpen={isOpenModal}
            onClose={onClickCancel}
          >
            <VStack
              gap="24"
              max
            >
              {contentModal}
              <Button
                onClick={onClickSend}
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

RatingCardRedesigned.displayName = 'RatingCardRedesigned';
