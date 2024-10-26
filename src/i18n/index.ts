// localization.js
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
      default:
        const defaultModule = await import('./en.json');
        return defaultModule.default; // Fallback to English
    }
  } catch (error) {
    console.error(`Failed to load locale "${locale}":`, error);
    return {}; // Return an empty object if there's an error
  }
};

const initI18n = async (): Promise<void> => {
  const browserLocale = navigator.language.split('-')[0]; // Get the language part
  const localeData = await loadLocale(browserLocale);

  // Assuming you set the locale in a way that the library supports:
  I18n.locale = browserLocale; // Set the current locale
  I18n.translations = { ...localeData }; // Store the translations
};

export default initI18n;
