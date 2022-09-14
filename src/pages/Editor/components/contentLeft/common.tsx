import { Col, Input, InputNumber, Radio, Row, Select, Slider } from 'antd';
import { ReactNode, memo } from 'react';

import { getNumber } from '@/utils';
import { IBaseTrees } from '../../interface';
import { defaultFontMode } from '../../const';

const { TextArea } = Input;
const { Option } = Select;
const Wrapper = ({ children }: { children: ReactNode }) => (
  // <div style={{ display: 'flex', alignItems: 'center' }}>
  <Row align='middle' style={{ marginBottom: '10px' }}>
    {(children as []).map((child, index) => (
      <Col key={`${child + index}`} span={index === 0 ? 6 : 18}>
        {child}
      </Col>
    ))}
  </Row>
  // </div>
);

const AdapterComp = ({
  type,
  title,
  value,
  attribute,
  attributeValue,
  onChange,
}: IBaseTrees & { onChange?: (item: any) => void }) => {
  switch (type) {
    case 'TextArea':
      return (
        <Wrapper>
          <span>{title}</span>
          <TextArea
            rows={4}
            value={value as string}
            onChange={(e) => onChange?.({ attribute, value: e.target.value })}
          />
        </Wrapper>
      );
    case 'Input':
      return (
        <Wrapper>
          <span>{title}</span>
          <InputNumber
            min={1}
            value={getNumber(value as string)}
            onChange={(value) => onChange?.({ attribute, value })}
          />
        </Wrapper>
      );
    case 'Slider':
      return (
        <Wrapper>
          <span>{title}</span>
          <Slider defaultValue={30} value={Number(value)} />
        </Wrapper>
      );
    case 'Radio':
      return (
        <Wrapper>
          <span>{title}</span>
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
          <span>{title}</span>
          <input type='color' />
        </Wrapper>
      );
    case 'SelectAndRadio': // 字体定制类型
      return (
        <Wrapper>
          <span>{title}</span>
          <div>
            <Select style={{ width: '100%' }}>
              {(attributeValue as [])?.map((option: any) => (
                <Option key={option?.id} value={option.value}>
                  <span style={{ fontFamily: `${option.value}` }}>
                    {option.text}
                  </span>
                </Option>
              ))}
            </Select>
            <Radio.Group
              defaultValue='a'
              buttonStyle='solid'
              style={{ marginTop: '5px' }}
            >
              {defaultFontMode.map((Comp) => (
                <Radio.Button key={Comp.id} value={Comp.value}>
                  <Comp.IconName />
                </Radio.Button>
              ))}
            </Radio.Group>
          </div>
        </Wrapper>
      );

    default:
      return (
        <Wrapper>
          <span>{title}</span>
          <Input />
        </Wrapper>
      );
  }
};
AdapterComp.defaultProps = {
  onChange: () => {
    //
  },
};

const RenderAdapterComp = memo(
  AdapterComp,
  (prevProps, nextProps) => prevProps.value === nextProps.value
);

export { Wrapper, RenderAdapterComp };
