import { Outlet } from 'react-router-dom';
import Globalstyle from './GlobalStyle';

function Root() {
  return (
    <>
      <Globalstyle />
      <h1>Header</h1>
      <Outlet />
    </>
  );
}

export default Root;
