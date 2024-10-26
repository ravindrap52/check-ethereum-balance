import { AddressBalance } from '@tatumio/tatum';

import { initiateTatumSDK } from '@/lib/initTatum';

/**
 * Retrieves the balance of a given cryptocurrency address using the Tatum SDK.
 *
 * @param {string} address - The cryptocurrency address for which to retrieve the balance.
 * @returns {Promise<AddressBalance[]>} - A promise that resolves to an array of AddressBalance objects
 *                                           containing the balance information for the specified address.
 *                                           Returns an empty array if an error occurs or if the API response status is not 'SUCCESS'.
 *
 * @throws {Error} - Throws an error if SDK initialization fails or if an unexpected error occurs
 *                   during the balance retrieval process.
 */
export async function getBalanceByAddress(address: string): Promise<AddressBalance[]> {
  const apiKey = import.meta.env.VITE_API_KEY;
  try {
    const sdk = await initiateTatumSDK(apiKey);

    if (!sdk) {
      console.error('SDK initialization failed:');
      throw new Error('SDK initialization failed');
    }
    const response = await sdk.address.getBalance({ addresses: [address] });
    // Check the response status
    if (response.status === 'SUCCESS') {
      return response.data;
    } else {
      console.error('Error from API:', response.error);
      return [];
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error retrieving balance:', error.message);
    } else {
      console.error('Unexpected error retrieving balance:', error);
    }
    return [];
  }
}
