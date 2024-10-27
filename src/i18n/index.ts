// localization.js
import { defaultLocale, supportedLocales } from '@/lib/constansts';
import I18n from 'preact-i18nline/i18n';

type LocaleData = Record<string, Record<string, string>>;

export const loadLocale = async (locale: string): Promise<LocaleData> => {
  try {
    switch (locale) {
      case 'en':
        const enModule = await import('./en.json');
        return enModule.default;
      case 'de':
        const deModule = await import('./de.json');
        return deModule.default;
      case 'cs':
        const csModule = await import('./cs.json');
        return csModule.default;

      default:
        const defaultModule = await import('./en.json');
        return defaultModule.default; // Fallback to English
    }
  } catch (error) {
    console.error(`Failed to load locale "${locale}":`, error);
    return {};
  }
};

const initI18n = async (): Promise<void> => {
  // getting browser locale
  const browserLocale = navigator.language.includes('-')
    ? navigator.language.split('-')[0]
    : navigator.language;
  // Load locale data, fallback to default if not supported
  const localeData = await loadLocale(
    supportedLocales.includes(browserLocale) ? browserLocale : defaultLocale,
  );

  // checking if the browser locale available or falling back to default locale which is english
  I18n.locale = supportedLocales.includes(browserLocale) ? browserLocale : defaultLocale;
  // adding translations
  I18n.translations = { ...localeData };
};

export default initI18n;
