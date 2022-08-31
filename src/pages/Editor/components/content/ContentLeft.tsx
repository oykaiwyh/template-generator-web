import {
  BuildOutlined,
  FieldStringOutlined,
  FileImageOutlined,
} from '@ant-design/icons';
import { Tabs } from 'antd';
import { connect } from 'react-redux';
import { EText } from '@/components/EText';
import { canvasDefaultTextLists } from '../../const';
import styles from './content.module.less';
import { Dispatch } from '@/redux';
import { ITextCompProps } from '../../interface';

const { TabPane } = Tabs;

// 改变state的值的方法
const mapDispatchToProps = (dispatch: Dispatch) => ({
  addComponents: (data: ITextCompProps) => {
    dispatch({
      type: 'ADD_COMPONENT',
      payload: data,
    });
  },
});
type reduxEventType = ReturnType<typeof mapDispatchToProps>;
const TextItem = connect(
  null,
  mapDispatchToProps
)(({ addComponents }: reduxEventType) => (
  <div>
    {canvasDefaultTextLists.map((compAttribute) => (
      <div
        key={`${compAttribute.id}`}
        onClick={() => addComponents(compAttribute)}
        role='none'
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <EText {...compAttribute.props} position='static' />
      </div>
    ))}
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
