import { Layout } from 'antd';
import { useOutlet as RouterView } from 'react-router-dom';
import HeaderPage from './Header/Header';

const { Header, Footer, Content } = Layout;

const PageLayout = () => {
  console.log('--PageLayout--');

  return (
    <Layout>
      <Header>
        <HeaderPage />
      </Header>
      <Content>
        <RouterView />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default PageLayout;
