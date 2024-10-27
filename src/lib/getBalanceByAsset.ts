import { AddressBalance } from '@tatumio/tatum';
import I18n from 'i18nline';

import { currencyMapping } from './currencyMapping';

/**
 * Retrieves and formats the balance for a specific asset.
 *
 * @param {AddressBalance[]} data - An array of AddressBalance objects containing asset and balance information.
 * @param {string} currency - The currency code for which to retrieve the balance.
 * @returns {string} A formatted string displaying the balance or a message indicating no balance is available.
 */
export const getBalanceByAsset = (data: AddressBalance[], currency: string): string => {
  const balance = data.find(({ asset }) => asset === currency);

  if (balance) {
    const balanceValue = parseFloat(balance.balance);

    // user locale
    const locale = navigator.language;

    // currency code based on user's locale
    const currencyCode = currencyMapping[I18n.locale]  || 'USD';

    // Formatting the balance
    const formattedBalance = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
    }).format(balanceValue);

    return `${I18n.translations[I18n.locale]['currentBalance']} ${formattedBalance}`;
  }
  return `${I18n.translations[I18n.locale]['noBalance']}`;
};
