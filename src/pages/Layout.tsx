import { h } from 'preact';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export function Layout({ children }: { children: h.JSX.Element | h.JSX.Element[] }): h.JSX.Element {
  return (
    <div class="bg-gray-100 flex flex-col h-screen">
      <Header />
      <main class="flex flex-1 justify-center items-center p-4 md:p-0">{children}</main>
      <Footer />
    </div>
  );
}
