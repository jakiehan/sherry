import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectOptions } from '@/shared/ui/deprecated/Select';
import { Currency } from '../../model/types/currency';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import cls from './CurrencySelect.module.scss';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}

export const CurrencySelect = memo(
  ({ className, value, onChange, readOnly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const options: SelectOptions<Currency>[] = useMemo(() => {
      return (Object.keys(Currency) as Array<keyof typeof Currency>).map(
        (key) => ({
          value: Currency[key],
          content: Currency[key],
        })
      );
    }, []);

    return (
      <ToggleFeatures
        name="isAppRedesigned"
        on={
          <ListBox
            value={value}
            options={options}
            defaultValue={t('Валюта')}
            label={`${t('Валюта')}:`}
            onChange={onChange}
            readOnly={readOnly}
          />
        }
        off={
          <ListBoxDeprecated
            value={value}
            options={options}
            defaultValue={t('Валюта')}
            label={t('Валюта')}
            onChange={onChange}
            classNameLabel={cls.label}
            readOnly={readOnly}
          />
        }
      />
    );
  }
);

CurrencySelect.displayName = 'CurrencySelect';
