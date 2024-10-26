import { render } from '@testing-library/preact';
import { h } from 'preact';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';

import { Layout } from '@/pages/Layout';

vi.mock('@/components/Footer', () => ({
  Footer: (): h.JSX.Element => <div>Mock Footer</div>,
}));

vi.mock('@/components/Header', () => ({
  Header: (): h.JSX.Element => <div>Mock Header</div>,
}));

describe('Layout Component', () => {
  it('renders children and includes Header and Footer', () => {
    const { getByText } = render(
      <Layout>
        <div>Test Child</div>
      </Layout>,
    );

    expect(getByText('Mock Header')).toBeInTheDocument();
    expect(getByText('Mock Footer')).toBeInTheDocument();

    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('renders multiple children', () => {
    const { getByText } = render(
      <Layout>
        <div>Child 1</div>
        <div>Child 2</div>
      </Layout>,
    );

    expect(getByText('Child 1')).toBeInTheDocument();
    expect(getByText('Child 2')).toBeInTheDocument();
  });
});
