import { Col, Row } from 'antd';
import styles from './content.module.less';
import ContentCenter from './ContentCenter';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';

const EditorContent = () => {
  console.log('---------EditorContent----------');

  return (
    <div className={styles.container}>
      <Row style={{ height: '100%' }}>
        <Col span={5}>
          <ContentLeft />
        </Col>
        <Col span={14}>
          <ContentCenter />
        </Col>
        <Col span={5}>
          <ContentRight />
        </Col>
      </Row>
    </div>
  );
};

export default EditorContent;
