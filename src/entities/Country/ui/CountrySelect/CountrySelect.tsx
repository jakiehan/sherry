import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectOptions } from 'shared/Select';
import { Country } from '../../model/types/country';
import { ListBox } from 'shared/ListBox';
import cls from './CountrySelect.module.scss';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readOnly?: boolean;
}

export const CountrySelect = memo(
  ({ className, value, onChange, readOnly }: CountrySelectProps) => {
    const { t } = useTranslation();

    const options: SelectOptions<Country>[] = useMemo(() => {
      return (Object.keys(Country) as Array<keyof typeof Country>).map(
        (key) => ({
          value: Country[key],
          content: Country[key],
        })
      );
    }, []);

    return (
      <ListBox
        value={value}
        options={options}
        defaultValue={t('Страна')}
        label={t('Страна')}
        onChange={onChange}
        classNameLabel={cls.label}
        readOnly={readOnly}
        direction="top"
      />
    );
  }
);

CountrySelect.displayName = 'CountrySelect';
