import { memo, useCallback } from 'react';
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
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { AddCommentFormDeprecated } from './AddCommentFormDeprecated/AddCommentFormDeprecated';
import { AddCommentFormRedesigned } from './AddCommentFormRedesigned/AddCommentFormRedesigned';

export interface AddCommentFormProps {
  onSendCommit?: (value: string) => void;
  className?: string;
}

export interface AddCommentFormState extends AddCommentFormProps {
  text?: string;
  onChangeCommentText?: (value: string) => void;
  onSubmit?: () => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(
  ({ className, onSendCommit }: AddCommentFormProps) => {
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
        onSendCommit?.(text);
        handleChangeCommentText('');
      }
    }, [handleChangeCommentText, onSendCommit, text]);

    const commonProps = {
      className,
      text,
      onChangeCommentText: handleChangeCommentText,
      onSubmit: submitForm,
    };

    return (
      <DynamicModuleLoader
        reducers={reducers}
        removeAfterUnmount
      >
        <ToggleFeatures
          name="isAppRedesigned"
          on={<AddCommentFormRedesigned {...commonProps} />}
          off={<AddCommentFormDeprecated {...commonProps} />}
        />
      </DynamicModuleLoader>
    );
  }
);

AddCommentForm.displayName = 'AddCommentForm';

export default AddCommentForm;
