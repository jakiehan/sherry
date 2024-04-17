import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/Button';
import { Input } from 'shared/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername/loginByUsername';
import { Text } from 'shared/Text';
import { TextTheme } from 'shared/Text/ui/Text';
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch = useDispatch();
  const { password, username, isLoading, error } = useSelector(getLoginState);

  const { t } = useTranslation();

  const handleChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, []);

  const handleChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, []);

  const handleLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [username, password]);

  const isDisabledLoginButton =
    isLoading || !username.length || !password.length;

  return (
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
  );
});

LoginForm.displayName = 'LoginForm';
