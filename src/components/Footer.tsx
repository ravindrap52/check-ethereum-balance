import { h } from 'preact';
import { memo } from 'preact/compat';

export const Footer = memo(function Footer(): h.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="p-4 text-center" data-testid="footer">
      <div class="container mx-auto text-center">
        <span data-testid="currentYear" class="text-primary">
          {currentYear} &#169;
        </span>
        <span class="text-primary">All rights reserved</span>
      </div>
    </footer>
  );
});
