import { h } from 'preact';
import { memo } from 'preact/compat';

import tatumLogo from '../assets/tatum.jpeg';
import { Image } from '@/components/Image';

export const Header = memo(function Header(): h.JSX.Element {
  return (
    <header class="bg-white p-2 border-white shadow-md" data-testid="header">
      <Image src={tatumLogo} alt="Tatum" height={48} width={48} />
    </header>
  );
});
