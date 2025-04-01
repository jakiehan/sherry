import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from '../AddCommentForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/deprecated/Input';
import { Button } from '@/shared/ui/deprecated/Button';
import { AddCommentFormState } from '../AddCommentForm';

export const AddCommentFormDeprecated = memo(
  ({ className, text, onChangeCommentText, onSubmit }: AddCommentFormState) => {
    const { t } = useTranslation('comments');

    return (
      <div
        className={classNames(cls.addCommentForm, {}, [className])}
        data-testid="addCommentForm"
      >
        <Input
          value={text}
          onChange={onChangeCommentText}
          label={`${t('Введите текст комментария')}:`}
          variant="outlined"
          className={cls.input}
          data-testid="addCommentForm.Input"
        />
        <Button
          onClick={onSubmit}
          data-testid="addCommentForm.Button"
        >
          {t('Отправить')}
        </Button>
      </div>
    );
  }
);

AddCommentFormDeprecated.displayName = 'AddCommentFormDeprecated';
