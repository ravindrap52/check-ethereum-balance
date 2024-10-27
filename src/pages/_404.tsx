import { h } from 'preact';
import { useLocation } from 'preact-iso';
import I18n from 'i18nline';

import { Button } from '@/components/ui/button';
import { useI18nContext } from '@/context/i18nContext';

export function NotFound(): h.JSX.Element {
  // i18n context
  const i18n = useI18nContext();
  // location context
  const location = useLocation();
  // navigating back to home page
  const handleGoHome = (): void => {
    location.route('/');
  };

  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-red-500">404</h1>
        <p class="text-xl mt-4 text-gray-600">{I18n.translations[i18n.locale]['pageNotFound']}</p>
        <p class="mt-2 text-gray-600">
        {I18n.translations[i18n.locale]['pageNotFoundMessage']}
        </p>
        <Button
          className="mt-6 bg-primary2 text-white p-2 rounded w-full cursor-pointer"
          type="button"
          data-testid="goToHome"
          onClick={handleGoHome}
        >
          {I18n.translations[i18n.locale]['home']}
        </Button>
      </div>
    </div>
  );
}
