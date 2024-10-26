import '@testing-library/jest-dom';
import { render } from '@testing-library/preact';
import { describe, it, expect } from 'vitest';

import { Footer } from '@/components/Footer';

describe('Footer', () => {
  it('should render footer', () => {
    render(<Footer />);
  });
  it('should show the current year and the copy right symbol', () => {
    const currentYear = new Date().getFullYear();
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('currentYear').innerHTML).toBe(`${currentYear} ©`);
  });
  it('should show the policy text', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('All rights reserved')).toBeInTheDocument();
  });
});
