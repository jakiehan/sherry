import { StateSchema } from '@/app/providers/StoreProvider';
import { useSelector } from 'react-redux';

//** Функция обертка для useSelector,
// чтобы в каждом месте приложения не импортировать useSelector,
// а сразу использовать hook useSelectorHook(получая из него значение),
// пример использования в компоненте Counter(entities/Counter)

type Selector<T> = (state: StateSchema) => T;
type Result<T> = [() => T, Selector<T>];

export function buildSelectors<T>(selector: Selector<T>): Result<T> {
  const useSelectorHook = () => {
    return useSelector(selector);
  };

  return [useSelectorHook, selector];
}
