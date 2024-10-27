import { render, screen, fireEvent } from '@testing-library/preact';
import I18n from 'i18nline';
import { h } from 'preact';
import { useLocation } from 'preact-iso';
import { describe, it, expect, vi } from 'vitest';

import { I18nContext } from '@/context/i18nContext';
import { loadLocale } from '@/i18n';
import { NotFound } from '@/pages/_404';

vi.mock('preact-iso', () => ({
  ...vi.importActual('preact-iso'),
  useLocation: vi.fn(),
}));

const MyComponent = (): h.JSX.Element => (
  <I18nContext.Provider value={{ locale: 'en', setLocale: () => {} }}>
    <NotFound />
  </I18nContext.Provider>
);
describe('Not Found', async () => {
  const localeData = await loadLocale('en');
  // setting new locale
  I18n.locale = 'en';
  I18n.translations = localeData;
  it('should render page not found', () => {
    render(<MyComponent />);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(
      screen.getByText(`${I18n.translations[I18n.locale]['pageNotFound']}`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${I18n.translations[I18n.locale]['pageNotFoundMessage']}`),
    ).toBeInTheDocument();
  });

  it('should navigate back to home', () => {
    const mockRoute = vi.fn();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (useLocation as any).mockReturnValue({ route: mockRoute });

    const { getByTestId } = render(<MyComponent />);
    const button = getByTestId('goToHome');
    fireEvent.click(button);

    expect(mockRoute).toHaveBeenCalledWith('/');
  });
});
