import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { h } from 'preact';
import { LocationProvider, Router, Route, ErrorBoundary } from 'preact-iso';

import { NotFound } from '@/pages/_404';
import { Home } from '@/pages/Home/index';
import { Layout } from '@/pages/Layout';

// creating a new instance of QueryClient for server state
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // stale time for queries
    },
  },
});

// home component, wrapped in layout
const HomeRoute = (): h.JSX.Element => (
  <Layout>
    <Home />
  </Layout>
);

export function App(): h.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <LocationProvider>
        <ErrorBoundary>
          <Router>
            {/* route for home */}
            <Route path="/" component={HomeRoute} />

            {/* Catch all non-matching routes */}
            <Route path="*" component={() => <NotFound />} />
          </Router>
        </ErrorBoundary>
      </LocationProvider>
      {/* React Query Devtools for debugging purposes */}
      <ReactQueryDevtools buttonPosition="bottom-right" />
    </QueryClientProvider>
  );
}
