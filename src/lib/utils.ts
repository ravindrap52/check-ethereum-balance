import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Combines class names and merges Tailwind CSS utility classes.
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
