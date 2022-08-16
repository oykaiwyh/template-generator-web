import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import Editor from '@/pages/Editor';
import PageLayout from '@/components/Layout';

const Home = lazy(() => import(/* webpackChunkName: "Home" */ '@/pages/Home'));
const Template = lazy(
  () => import(/* webpackChunkName: "Template" */ '@/pages/Template')
);

const routes: RouteObject[] = [
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/template/:id',
        element: <Template />,
      },
    ],
  },
  {
    path: '/editor',
    element: <Editor />,
  },
];

export { routes };

export default {};
