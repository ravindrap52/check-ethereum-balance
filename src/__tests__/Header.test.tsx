import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/preact';
import { describe, it, expect } from 'vitest';

import tatumLogo from '../assets/tatum.jpeg';
import { Header } from '@/components/Header';
import { I18nContext } from '@/context/i18nContext';

const MyComponent = () => (
  <I18nContext.Provider value={{ locale: 'en', setLocale: () => {} }}>
    <Header />
  </I18nContext.Provider>
);
describe('Header', () => {
  it('should render header', () => {
    render(<MyComponent />);
  });
  it('should render header with image', () => {
    const { getByTestId } = render(<MyComponent />);
    expect(getByTestId('header')).toBeInTheDocument();
    const imgElement = screen.getByAltText('Tatum');
    expect(imgElement).toHaveAttribute('src', tatumLogo);
    expect(imgElement).toHaveAttribute('height', '48');
    expect(imgElement).toHaveAttribute('width', '48');
  });
});
