import { Col, Input, Radio, Row, Select, Slider } from 'antd';
import { ReactNode } from 'react';
import { IBaseTrees } from '../../interface';

const { TextArea } = Input;
const { Option } = Select;
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
    case 'Slider':
      return (
        <Wrapper>
          <span>{item.title}</span>
          <Slider defaultValue={30} />
        </Wrapper>
      );
    case 'Radio':
      return (
        <Wrapper>
          <span>{item.title}</span>
          <Radio.Group defaultValue='a' style={{ marginTop: 5 }}>
            <Radio.Button value='a'>左</Radio.Button>
            <Radio.Button value='b'>中</Radio.Button>
            <Radio.Button value='c'>右</Radio.Button>
          </Radio.Group>
        </Wrapper>
      );
    case 'ColorPick':
      return (
        <Wrapper>
          <span>{item.title}</span>
          <input type='color' />
        </Wrapper>
      );
    case 'SelectAndRadio':
      return (
        <Wrapper>
          <span>{item.title}</span>
          <div>
            <Select style={{ width: '100%' }}>
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
            </Select>
            <Radio.Group
              defaultValue='a'
              buttonStyle='solid'
              style={{ marginTop: '5px' }}
            >
              <Radio.Button value='a'>B</Radio.Button>
              <Radio.Button value='b'>I</Radio.Button>
              <Radio.Button value='b'>U</Radio.Button>
            </Radio.Group>
          </div>
        </Wrapper>
      );

    default:
      return (
        <Wrapper>
          <span>{item.title}</span>
          <Input />
        </Wrapper>
      );
  }
};

export { Wrapper, renderComp };
