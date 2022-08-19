import { Layout } from 'antd';
import EditorContent from './components/content';
import EditorHeader from './components/header';

const { Header, Content } = Layout;

const Editor = () => (
  <Layout>
    <Header>
      <EditorHeader />
    </Header>
    <Content>
      <EditorContent />
    </Content>
  </Layout>
);

export default Editor;
