import { Outlet } from 'react-router-dom';
import Globalstyle from './GlobalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function Root() {
  return (
    <>
      <Globalstyle />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <h1>Header</h1>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default Root;
