import { Collapse, Empty } from 'antd';
import { Fragment, ReactNode } from 'react';
import { renderComp } from './common';
import { useGetCurrentComponentAttr, useGetEditorState } from '../../hook';
import { checkIsNull } from '@/utils';

const { Panel } = Collapse;
const text = 'hello world';

const BaseAttribute = () => {
  console.log('--BaseAttribute--');
  const baseAttributeTrees = useGetCurrentComponentAttr();

  return (
    <div>
      {baseAttributeTrees.map((item) => (
        <Fragment key={item.id}>{renderComp(item)}</Fragment>
      ))}
    </div>
  );
};

const AttributeSetting = () => {
  console.log('-- AttributeSetting --');

  const { currentComponent } = useGetEditorState();

  return (
    <div>
      {checkIsNull(currentComponent) ? (
        <Collapse defaultActiveKey={['1']}>
          <Panel header='基本属性' key='1'>
            <BaseAttribute />
          </Panel>
          <Panel header='尺寸' key='2'>
            <p>{text}</p>
          </Panel>
          <Panel header='边框' key='3'>
            <p>{text}</p>
          </Panel>
          <Panel header='阴影与透明度' key='4'>
            <p>{text}</p>
          </Panel>
          <Panel header='位置' key='5'>
            <p>{text}</p>
          </Panel>
          <Panel header='事件功能' key='6'>
            <p>{text}</p>
          </Panel>
        </Collapse>
      ) : (
        <Empty description='暂无数据' />
      )}
    </div>
  );
};

export default AttributeSetting;
