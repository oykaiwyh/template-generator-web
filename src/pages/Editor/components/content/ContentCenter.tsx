import {
  QuestionOutlined,
  RedoOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import styles from './content.module.less';
import ContentCanvas from './ContentCanvas';

const ControlInfo = () => {
  console.log('-- ControlInfo --');

  return (
    <div className={styles['center-control-container']}>
      <span datatype='canvas-area'>画布区域</span>
      {/* icon-list */}
      <div className={styles['control-icon']}>
        <Tooltip title='快捷键提示'>
          <Button shape='circle' icon={<QuestionOutlined />} />
        </Tooltip>
        <Tooltip title='撤销'>
          <Button shape='circle' icon={<UndoOutlined />} />
        </Tooltip>
        <Tooltip title='重做'>
          <Button shape='circle' icon={<RedoOutlined />} />
        </Tooltip>
      </div>
    </div>
  );
};

const ContentCenter = () => {
  console.log('-- ContentCenter --');

  return (
    <div>
      <ControlInfo />
      <ContentCanvas />
    </div>
  );
};

export default ContentCenter;
