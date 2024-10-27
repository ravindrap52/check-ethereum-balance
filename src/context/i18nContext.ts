import { createContext } from 'preact';
import { useContext } from 'preact/hooks';

import I18n from 'i18nline';

interface I18n {
  locale: string;
  setLocale: (locale: string) => void;
}

export const I18nContext = createContext<I18n | undefined>(undefined);

export function useI18nContext() {
  const i18nContext = useContext(I18nContext);

  if (i18nContext === undefined) {
    throw new Error('useI18nContext must be used with in a I18nProvider');
  }

  return i18nContext;
}
