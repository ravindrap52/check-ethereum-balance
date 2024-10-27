import { h } from 'preact';

// Footer component to display the current year and copyright notice
export function Footer(): h.JSX.Element {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer class="p-4 text-center" data-testid="footer">
      <div class="container mx-auto text-center">
        <span
          data-testid="currentYear"
          class="text-primary"
          aria-label={`Current year: ${currentYear}`}
        >
          {currentYear} &#169;
        </span>
        <span class="text-primary">All rights reserved</span>
      </div>
    </footer>
  );
}
