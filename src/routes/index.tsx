import { Navigate, RouteObject } from 'react-router-dom';
import Home from '@/pages/Home';
import Editor from '@/pages/Editor';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/home' />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/editor',
    element: <Editor />,
  },
];

export { routes };

export default {};
