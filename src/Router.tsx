import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import { Detail, Home } from './pages';
import { ErrorComponent, NotFound } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'character/:id',
        element: <Detail />,
        errorElement: <NotFound />,
      },
    ],
  },
]);

export default router;
