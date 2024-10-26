import { Ethereum } from '@tatumio/tatum';
import { describe, it, expect } from 'vitest';

import { initiateTatumSDK } from '@/lib/initTatum';

describe('Initiate TatumSDK', async () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  it('should initiate TatumSDK', async () => {
    const ethereumSDK = await initiateTatumSDK(apiKey);
    expect(ethereumSDK).not.toBeNull();
    expect(ethereumSDK).instanceOf(Ethereum);
  });
});
