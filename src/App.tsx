import './App.css';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
// import 'antd/dist/antd.min.css';

const App = () => {
  const RouterView = useRoutes(routes);
  return <div style={{ height: '100%' }}>{RouterView}</div>;
};

export default App;
