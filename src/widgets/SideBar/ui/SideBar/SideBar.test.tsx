import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';

describe('sidebar', () => {
  test('test render', () => {
    renderWithTranslation(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test render', () => {
    renderWithTranslation(<SideBar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
