import { Col, Collapse, Input, Row } from 'antd';
import React, { Fragment, ReactNode } from 'react';

const { Panel } = Collapse;
const { TextArea } = Input;
const text = 'hello world';

type TBaseTreesTypes = 'TextArea' | 'Input' | 'Select';
interface IBaseTrees {
  id: number | string;
  title: string;
  type: TBaseTreesTypes;
  attribute: string;
}

const Wrapper = ({ children }: { children: ReactNode }) => (
  // <div style={{ display: 'flex', alignItems: 'center' }}>
  <Row align='middle' style={{ marginBottom: '10px' }}>
    {(children as []).map((child, index) => (
      <Col span={index === 0 ? 6 : 18}>{child}</Col>
    ))}
  </Row>
  // </div>
);

const renderComp = (item: IBaseTrees) => {
  switch (item.type) {
    case 'TextArea':
      return (
        <Wrapper>
          <span>{item.title}</span>
          <TextArea rows={4} />
        </Wrapper>
      );
    case 'Input':
      return (
        <Wrapper>
          <span>{item.title}</span>
          <Input />
        </Wrapper>
      );

    default:
      return <TextArea rows={4} />;
  }
};

const BaseAttribute = () => {
  const attributeTrees: IBaseTrees[] = [
    {
      id: 1,
      title: '文本',
      type: 'TextArea',
      attribute: 'text',
    },
    {
      id: 2,
      title: '字号',
      type: 'Input',
      attribute: 'fontSize',
    },
  ];
  return (
    <div>
      {attributeTrees.map((item) => (
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
