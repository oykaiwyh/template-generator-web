import { Layout } from 'antd';
import { useOutlet as RouterView } from 'react-router-dom';
import FooterPage from './Footer/Footer';
import HeaderPage from './Header/Header';

const { Header, Footer, Content } = Layout;

const PageLayout = () => {
  console.log('--PageLayout--');

  return (
    <Layout style={{ height: '100%' }}>
      <Header>
        <HeaderPage />
      </Header>
      <Content>
        <RouterView />
      </Content>
      <Footer
        style={{
          background: '#333',
          color: '#999',
        }}
      >
        <FooterPage />
      </Footer>
    </Layout>
  );
};

export default PageLayout;