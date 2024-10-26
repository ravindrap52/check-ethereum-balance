import { z } from 'zod';

// Regular expression for validating Ethereum addresses.
const ethereumAddressRegex = /^0x[a-fA-F0-9]{40}$/;

// Form schema for validating an Ethereum address.
// The 'ethereumAddress' field must not be empty and must match the valid Ethereum address format.
export const ethereumFormSchema = z.object({
  ethereumAddress: z
    .string()
    .min(1, { message: 'Address is required' })
    .regex(ethereumAddressRegex, { message: 'Invalid Ethereum address format' }),
});
