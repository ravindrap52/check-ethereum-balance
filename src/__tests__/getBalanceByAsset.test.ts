import { AddressBalance } from '@tatumio/tatum';
import I18n from 'i18nline';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';

import { loadLocale } from '@/i18n';
import { getBalanceByAsset } from '@/lib/getBalanceByAsset';

// mocking data
const mockData: AddressBalance[] = [
  {
    address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
    asset: 'ETH',
    balance: '14579.6789',
    type: 'nft',
  },
];
const mockInvalidData: AddressBalance[] = [
  {
    address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA86045',
    asset: 'ETH',
    balance: '14579.6789',
    type: 'nft',
  },
];
const zeroBalanceData: AddressBalance[] = [
  {
    address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
    asset: 'ETH',
    balance: '0.00',
    type: 'nft',
  },
];

describe('Get Balance By Asset', async () => {
  const localeData = await loadLocale('en');
  // setting new locale
  I18n.locale = 'en';
  I18n.translations = localeData;

  beforeAll(() => {
    Object.defineProperty(navigator, 'language', { value: 'en-US', writable: true });
  });
  it('should return formatted balance if the asset is present', () => {
    const result = getBalanceByAsset(mockData, 'ETH');
    expect(result).toBe(`${I18n.translations['en']['currentBalance']} $14,579.68`);
  });

  it('should return no balance message if asset is not found', () => {
    const result = getBalanceByAsset(mockInvalidData, 'BTC');
    expect(result).toBe(`${I18n.translations['en']['noBalance']}`);
  });

  it('should handle cases with no balance data', () => {
    const result = getBalanceByAsset([], 'ETH');
    expect(result).toBe(`${I18n.translations['en']['noBalance']}`);
  });

  it('should handle a zero balance correctly', () => {
    const result = getBalanceByAsset(zeroBalanceData, 'ETH');
    expect(result).toBe(`${I18n.translations['en']['currentBalance']} $0.00`);
  });
  afterAll(() => {
    Object.defineProperty(navigator, 'language', { value: 'en-US', writable: false });
  });
});
