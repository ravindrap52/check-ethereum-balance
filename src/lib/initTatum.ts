import { Network, TatumSDK, Ethereum } from '@tatumio/tatum';

/**
 * Initializes the Tatum SDK for the Ethereum network.
 *
 * @returns {Promise<Ethereum | null>} - A promise that resolves to an instance of the Ethereum SDK.
 *                                         Returns null if SDK initialization fails.
 *
 * @throws {Error} - Throws an error if the SDK cannot be initialized.
 *
 */
export async function initiateTatumSDK(apiKey: string): Promise<Ethereum | null> {
  try {
    const ethereumSDK = await TatumSDK.init<Ethereum>({
      network: Network.ETHEREUM,
      apiKey: { v4: apiKey },
      verbose: true,
    });
    console.log('Tatum SDK initialized successfully.');
    return ethereumSDK;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error initializing Tatum SDK:', error.message);
    } else {
      console.error('Unexpected error retrieving balance:', error);
    }
    return null;
  }
}
