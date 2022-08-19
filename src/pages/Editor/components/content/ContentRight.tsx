import { Tabs } from 'antd';
import styles from './content.module.less';

const { TabPane } = Tabs;

const ContentRight = () => {
  console.log('-- ContentRight --');

  return (
    <div className={`${styles['content-bg']} ${styles['content-size']} `}>
      <Tabs defaultActiveKey='1' type='card'>
        <TabPane tab='属性设置' key='attribute'>
          属性设置
        </TabPane>
        <TabPane tab='图层设置' key='pageLevel'>
          图层设置
        </TabPane>
        <TabPane tab='页面设置' key='pageSetting'>
          页面设置
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ContentRight;
