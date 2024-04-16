import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/Button';
import { Input } from 'shared/Input';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input
        label={t('Введите имя')}
        autoFocus
      />
      <Input label={t('Введите пароль')} />
      <Button
        variant={ButtonTheme.OUTLINE}
        className={cls.btnLogin}
      >
        {t('Войти')}
      </Button>
    </div>
  );
};
