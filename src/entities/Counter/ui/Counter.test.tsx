import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';
import { componentRender } from '@/shared/lib/tests/componentRender';

describe('counter', () => {
  test('test render', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    await userEvent.setup().click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    await userEvent.setup().click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
