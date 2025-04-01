import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from '../AddCommentForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { AddCommentFormState } from '../AddCommentForm';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Flex';

export const AddCommentFormRedesigned = memo(
  ({ className, text, onChangeCommentText, onSubmit }: AddCommentFormState) => {
    const { t } = useTranslation('comments');

    return (
      <Card
        padding="24"
        max
        className={classNames('', {}, [className])}
        data-testid="addCommentForm"
      >
        <HStack
          max
          gap="32"
        >
          <Input
            value={text}
            onChange={onChangeCommentText}
            placeholder={t('Введите текст комментария')}
            className={cls.input}
            data-testid="addCommentForm.Input"
          />
          <Button
            onClick={onSubmit}
            data-testid="addCommentForm.Button"
          >
            {t('Отправить')}
          </Button>
        </HStack>
      </Card>
    );
  }
);

AddCommentFormRedesigned.displayName = 'AddCommentFormRedesigned';
