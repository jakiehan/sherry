import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('button', () => {
  test('test render', () => {
    render(<Button>Тест</Button>);
    expect(screen.getByText('Тест')).toBeInTheDocument();
  });

  test('test clear theme', () => {
    render(<Button variant="clear">Тест</Button>);
    expect(screen.getByText('Тест')).toHaveClass('clear');
    screen.debug();
  });
});
