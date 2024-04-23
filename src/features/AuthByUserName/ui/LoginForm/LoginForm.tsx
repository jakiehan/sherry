import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/Button';
import { Input } from 'shared/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text } from 'shared/Text';
import { TextTheme } from 'shared/Text/ui/Text';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../..//model/selectors/getLoginUsername/getLoginUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

export interface LoginFormProps {
  className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch = useDispatch();

  const password = useSelector(getLoginPassword);
  const username = useSelector(getLoginUsername);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const { t } = useTranslation();

  const handleChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const handleChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const handleLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  const isDisabledLoginButton =
    isLoading || !username.length || !password.length;

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount
    >
      <div className={classNames(cls.loginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        <div className={cls.message}>
          {error && (
            <Text
              text={error}
              variant={TextTheme.ERROR}
            />
          )}
        </div>
        <Input
          label={t('Введите имя')}
          onChange={handleChangeUsername}
          value={username}
          autoFocus
        />
        <Input
          label={t('Введите пароль')}
          onChange={handleChangePassword}
          value={password}
        />
        <Button
          variant={ButtonTheme.OUTLINE}
          className={cls.btnLogin}
          onClick={handleLoginClick}
          disabled={isDisabledLoginButton}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

LoginForm.displayName = 'LoginForm';
export default LoginForm;
