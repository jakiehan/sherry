import { FC } from 'react';
import { Button } from '@/shared/ui/deprecated/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

export const Counter: FC = () => {
  const { t } = useTranslation();

  //использование хука обертки над useSelector
  const value = useCounterValue();

  //использование хука обертки над useAppDispatch
  const { decrement, increment } = useCounterActions();

  const handleIncrement = () => {
    increment();
  };

  const handleDecrement = () => {
    decrement();
  };

  return (
    <div>
      <h2 data-testid="value-title">{value}</h2>
      <Button
        onClick={handleIncrement}
        data-testid="increment-btn"
      >
        {t('increment')}
      </Button>
      <Button
        onClick={handleDecrement}
        data-testid="decrement-btn"
      >
        {t('decrement')}
      </Button>
    </div>
  );
};
