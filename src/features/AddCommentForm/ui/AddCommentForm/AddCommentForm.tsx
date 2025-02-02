import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './AddCommentForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useSelector } from 'react-redux';
import { getAddCommentsFormText } from '../../model/selectors/selectAddCommentForm';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface AddCommentFormProps {
  onSendCommit: (value: string) => void;
  className?: string;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(
  ({ className, onSendCommit }: AddCommentFormProps) => {
    const { t } = useTranslation('comments');

    const dispatch = useAppDispatch();

    const text = useSelector(getAddCommentsFormText);
    //const error = useSelector(getAddCommentsFormError);

    const handleChangeCommentText = useCallback(
      (value: string) => {
        dispatch(addCommentFormActions.setText(value));
      },
      [dispatch]
    );

    const submitForm = useCallback(() => {
      if (text) {
        onSendCommit(text);
        handleChangeCommentText('');
      }
    }, [handleChangeCommentText, onSendCommit, text]);

    return (
      <DynamicModuleLoader
        reducers={reducers}
        removeAfterUnmount
      >
        <div className={classNames(cls.addCommentForm, {}, [className])}>
          <Input
            value={text}
            onChange={handleChangeCommentText}
            label={`${t('Введите текст комментария')}:`}
            variant="outlined"
            className={cls.input}
          />
          <Button onClick={submitForm}>{t('Отправить')}</Button>
        </div>
      </DynamicModuleLoader>
    );
  }
);

AddCommentForm.displayName = 'AddCommentForm';

export default AddCommentForm;
