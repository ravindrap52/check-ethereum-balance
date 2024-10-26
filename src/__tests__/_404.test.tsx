import { render, screen, fireEvent } from '@testing-library/preact';
import { useLocation } from 'preact-iso';
import { describe, it, expect, vi } from 'vitest';

import { NotFound } from '@/pages/_404';

vi.mock('preact-iso', () => ({
  ...vi.importActual('preact-iso'),
  useLocation: vi.fn(),
}));

describe('Not Found', () => {
  it('should render page not found', () => {
    render(<NotFound />);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    expect(
      screen.getByText("The page you're looking for doesn't exist or has been moved."),
    ).toBeInTheDocument();
  });

  it('should navigate back to home', () => {
    const mockRoute = vi.fn();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (useLocation as any).mockReturnValue({ route: mockRoute });

    const { getByTestId } = render(<NotFound />);
    const button = getByTestId('goToHome');
    fireEvent.click(button);

    expect(mockRoute).toHaveBeenCalledWith('/');
  });
});
