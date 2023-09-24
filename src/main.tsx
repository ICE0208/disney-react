import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Globalstyle from './GlobalStyle.ts';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme.ts';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { isDarkAtom } from './atoms.ts';

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

export const App = () => {
  const isDark = useRecoilValue(isDarkAtom); // Recoil 상태 가져오기
  const theme = isDark ? darkTheme : lightTheme; // 테마 선택

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Globalstyle />
        <ReactQueryDevtools />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
);
