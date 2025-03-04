import { StateSchema } from '@/app/providers/StoreProvider';
import { useSelector } from 'react-redux';

//** Функция обертка для useSelector,
// чтобы в каждом месте приложения не импортировать useSelector,
// а сразу использовать hook useSelectorHook(получая из него значение),
// пример использования в компоненте Counter(entities/Counter)

type Selector<T, Args extends any[]> = (state: StateSchema, ...args: Args) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;
type Result<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>];

export function buildSelectors<T, Args extends any[]>(
  selector: Selector<T, Args>
): Result<T, Args> {
  const useSelectorHook: Hook<T, Args> = (...args: Args) => {
    return useSelector((state: StateSchema) => selector(state, ...args));
  };

  return [useSelectorHook, selector];
}
