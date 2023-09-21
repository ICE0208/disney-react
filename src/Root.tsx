import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <h1>Header</h1>
      <Outlet />
    </>
  );
}

export default Root;
