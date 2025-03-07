import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from './SideBar';
import { componentRender } from '@/shared/lib/tests/componentRender';

describe('sidebar', () => {
  test('test render', () => {
    componentRender(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test render', () => {
    componentRender(<SideBar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
