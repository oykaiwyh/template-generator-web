import {
  BuildOutlined,
  FieldStringOutlined,
  FileImageOutlined,
} from '@ant-design/icons';
import { Tabs } from 'antd';
import { connect } from 'react-redux';
import { canvasLeftTextLists } from '../../const';
import styles from './content.module.less';

const { TabPane } = Tabs;

const TextItem = connect(
  null,
  null
)(() => (
  <div style={{ textAlign: 'center' }}>
    {canvasLeftTextLists.map((props, index) => {
      const { text = '', tag: Tag = 'p', ...styleProps } = props;
      return (
        <Tag key={`${Tag + index}`} style={{ ...styleProps }}>
          {text}
        </Tag>
      );
    })}
  </div>
));

const ContentLeft = () => {
  console.log('-- ContentLeft --');

  return (
    <div
      className={`${styles['content-bg']} ${styles['content-size']}  ${styles['left-container']} `}
    >
      <Tabs centered>
        <TabPane
          tab={
            <span>
              <FieldStringOutlined />
              文本
            </span>
          }
          key='text'
        >
          <TextItem />
        </TabPane>
        <TabPane
          tab={
            <span>
              <FileImageOutlined />
              图片
            </span>
          }
          key='img'
        >
          图片
        </TabPane>
        <TabPane
          tab={
            <span>
              <BuildOutlined />
              形状
            </span>
          }
          key='shap'
        >
          形状
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ContentLeft;
