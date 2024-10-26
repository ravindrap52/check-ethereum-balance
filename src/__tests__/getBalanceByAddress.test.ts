import { describe, it, expect } from 'vitest';

import { getBalanceByAddress } from '@/lib/getBalanceByAddress';

const validAddress = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';
const invalidAddress = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA95045';

describe('Get Balance By Address', async () => {
  it('should return data if it is valid address', async () => {
    const data = await getBalanceByAddress(validAddress);
    expect(data).toBeInstanceOf(Array);
    expect(data.length).toBeGreaterThan(0);
  });
  it('should return empty array if not valid address', async () => {
    const data = await getBalanceByAddress(invalidAddress);
    expect(data).toBeInstanceOf(Array);
    expect(data).toHaveLength(0);
  });
});
