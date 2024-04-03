import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/Button';

interface LangSwitcherProps {
  className?: string;
  shortName?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({
  className,
  shortName = false,
}) => {
  const { i18n, t } = useTranslation();

  const toggleLang = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      variant={ButtonTheme.CLEAR}
      onClick={toggleLang}
    >
      {t(!shortName ? 'Язык' : 'Короткий язык')}
    </Button>
  );
};
