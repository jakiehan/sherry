import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOptions } from 'shared/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}

export const CurrencySelect = memo(
  ({ className, value, onChange, readOnly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const handleChange = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange]
    );

    const options: SelectOptions[] = useMemo(() => {
      return (Object.keys(Currency) as Array<keyof typeof Currency>).map(
        (key) => ({
          value: Currency[key],
          content: Currency[key],
        })
      );
    }, []);

    return (
      <Select
        className={className}
        label={t('Валюта')}
        options={options}
        value={value}
        onChange={handleChange}
        readOnly={readOnly}
      />
    );
  }
);

CurrencySelect.displayName = 'CurrencySelect';
