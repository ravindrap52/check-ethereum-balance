import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/preact';
import { describe, it, expect } from 'vitest';

import tatumLogo from '../assets/tatum.jpeg';
import { Header } from '@/components/Header';

describe('Header', () => {
  it('should render header', () => {
    render(<Header />);
  });
  it('should render header with image', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('header')).toBeInTheDocument();
    const imgElement = screen.getByAltText('Tatum');
    expect(imgElement).toHaveAttribute('src', tatumLogo);
    expect(imgElement).toHaveAttribute('height', '48');
    expect(imgElement).toHaveAttribute('width', '48');
  });
});
