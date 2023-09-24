import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Globalstyle from './GlobalStyle.ts';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme.ts';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Globalstyle />
      <ReactQueryDevtools />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ThemeProvider>,
);
