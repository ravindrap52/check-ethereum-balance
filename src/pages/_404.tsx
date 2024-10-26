import { h } from 'preact';
import { useLocation } from 'preact-iso';

export function NotFound(): h.JSX.Element {
  const location = useLocation();
  const handleGoHome = (): void => {
    location.route('/');
  };

  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-red-500">404</h1>
        <p class="text-xl mt-4 text-gray-600">Page Not Found</p>
        <p class="mt-2 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={handleGoHome}
          class="mt-6 bg-primary2 text-white p-2 rounded cursor-pointer"
          type="button"
          data-testid='goToHome'
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
