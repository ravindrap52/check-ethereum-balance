import { h } from 'preact';

import tatumLogo from '../assets/tatum.jpeg';
import { Image } from '@/components/Image';
import { loadLocale } from '@/i18n';
import I18n from 'i18nline';
import { useI18nContext } from '@/context/i18nContext';

// Header component to display the company logo
export function Header(): h.JSX.Element {
  const i18n = useI18nContext()

  const changeLocale = async (newLocale: string) => {
    // loading the translation file for new locale
    const localeData = await loadLocale(newLocale);
    // setting in context
    i18n.setLocale(newLocale);
    // setting new locale
    I18n.locale = newLocale;
    I18n.translations = localeData;
  };
  return (
    <header class="bg-white p-2 border-white shadow-md" data-testid="header">
      <Image src={tatumLogo} alt="Tatum" height={48} width={48} />
      <button class="text-primary pr-4" onClick={() => changeLocale('en')}>
        EN
      </button>
      <button class="text-primary" onClick={() => changeLocale('de')}>
        DE
      </button>
    </header>
  );
}
