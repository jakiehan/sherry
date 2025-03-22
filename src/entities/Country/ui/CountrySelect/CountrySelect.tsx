import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectOptions } from '@/shared/ui/deprecated/Select';
import { Country } from '../../model/types/country';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import cls from './CountrySelect.module.scss';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { ListBox } from '@/shared/ui/redesigned/Popups';

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
      <ToggleFeatures
        name="isAppRedesigned"
        on={
          <ListBox
            value={value}
            options={options}
            defaultValue={t('Страна')}
            label={`${t('Страна')}:`}
            onChange={onChange}
            readOnly={readOnly}
            direction="top"
          />
        }
        off={
          <ListBoxDeprecated
            value={value}
            options={options}
            defaultValue={t('Страна')}
            label={`${t('Страна')}:`}
            onChange={onChange}
            classNameLabel={cls.label}
            readOnly={readOnly}
            direction="top"
          />
        }
      />
    );
  }
);

CountrySelect.displayName = 'CountrySelect';
