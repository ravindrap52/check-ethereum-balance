import { h } from 'preact';

import tatumLogo from '../assets/tatum.jpeg';
import { Image } from '@/components/Image';
import { loadLocale } from '@/i18n';
import I18n from 'i18nline';
import { useI18nContext } from '@/context/i18nContext';

import { Button } from '@/components/ui/button';

// Header component to display the company logo
export function Header(): h.JSX.Element {
  const i18n = useI18nContext();

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
    <header
      class="flex justify-between items-center bg-white p-4 border-white shadow-md"
      data-testid="header"
    >
      <div class="flex items-center">
        <Image src={tatumLogo} alt="Tatum" height={64} width={64} />
      </div>
      <div class="flex items-center">
        <span class="pr-2 text-primary">{I18n.translations[i18n.locale]['changeLanguage']}</span>
        <Button
          className="text-primary cursor-pointer"
          type="button"
          variant="ghost"
          onClick={() => changeLocale('en')}
        >
          EN
        </Button>
        <Button
          className="text-primary cursor-pointer"
          type="button"
          variant="ghost"
          onClick={() => changeLocale('de')}
        >
          DE
        </Button>
      </div>
    </header>
  );
}
