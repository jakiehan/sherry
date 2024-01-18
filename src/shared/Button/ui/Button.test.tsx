import { render, screen } from '@testing-library/react';
import { Button, ButtonVariant } from 'shared/Button';

describe('button', () => {
  test('test render', () => {
    render(<Button>Тест</Button>);
    expect(screen.getByText('Тест')).toBeInTheDocument();
  });

  test('test clear theme', () => {
    render(<Button variant={ButtonVariant.CLEAR}>Тест</Button>);
    expect(screen.getByText('Тест')).toHaveClass('clear');
    screen.debug();
  });
});
