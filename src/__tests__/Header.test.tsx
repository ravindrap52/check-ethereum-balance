import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/preact';
import I18n from 'i18nline';
import { h } from 'preact';
import { describe, it, expect } from 'vitest';

import tatumLogo from '../assets/tatum.jpeg';
import { Header } from '@/components/Header';
import { I18nContext } from '@/context/i18nContext';
import { loadLocale } from '@/i18n';

const MyComponent = (): h.JSX.Element => (
  <I18nContext.Provider value={{ locale: 'en', setLocale: () => {} }}>
    <Header />
  </I18nContext.Provider>
);
describe('Header', async () => {
  const localeData = await loadLocale('en');
  // setting new locale
  I18n.locale = 'en';
  I18n.translations = localeData;

  it('should render header', () => {
    render(<MyComponent />);
  });
  it('should render header with image', () => {
    const { getByTestId } = render(<MyComponent />);
    expect(getByTestId('header')).toBeInTheDocument();
    const imgElement = screen.getByAltText('Tatum');
    expect(imgElement).toHaveAttribute('src', tatumLogo);
    expect(imgElement).toHaveAttribute('height', '64');
    expect(imgElement).toHaveAttribute('width', '64');
  });
});
