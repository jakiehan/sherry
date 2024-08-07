import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOptions } from 'shared/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readOnly?: boolean;
}

export const CountrySelect = memo(
  ({ className, value, onChange, readOnly }: CountrySelectProps) => {
    const { t } = useTranslation();

    const handleChange = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange]
    );

    const options: SelectOptions[] = useMemo(() => {
      return (Object.keys(Country) as Array<keyof typeof Country>).map(
        (key) => ({
          value: Country[key],
          content: Country[key],
        })
      );
    }, []);

    return (
      <Select
        className={className}
        label={t('Страна')}
        options={options}
        value={value}
        onChange={handleChange}
        readOnly={readOnly}
      />
    );
  }
);

CountrySelect.displayName = 'CountrySelect';
