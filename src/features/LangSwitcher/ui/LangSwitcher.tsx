import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/Button';

interface LangSwitcherProps {
  className?: string;
  shortName?: boolean;
}

export const LangSwitcher = memo(
  ({ className, shortName = false }: LangSwitcherProps) => {
    const { i18n, t } = useTranslation();

    const toggleLang = async () => {
      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
      <Button
        className={classNames('', {}, [className])}
        variant="clear"
        onClick={toggleLang}
      >
        {t(!shortName ? 'Язык' : 'Короткий язык')}
      </Button>
    );
  }
);

LangSwitcher.displayName = 'LangSwitcher';
