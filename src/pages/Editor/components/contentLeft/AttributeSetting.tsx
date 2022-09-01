import { Collapse } from 'antd';
import { Fragment } from 'react';
import { baseAttributeTrees } from '../../const';
import { renderComp } from './common';

const { Panel } = Collapse;
const text = 'hello world';

const BaseAttribute = () => {
  console.log('--BaseAttribute--');

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

  return (
    <div>
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
    </div>
  );
};

export default AttributeSetting;
