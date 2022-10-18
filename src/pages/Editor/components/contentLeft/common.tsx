import {
  Col,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Slider,
  Button,
  Tooltip,
} from 'antd';

import { ReactNode, memo } from 'react';

import { getNumber } from '@/utils';
import { IBaseTrees } from '../../interface';
// import { defaultFontMode } from '../../const';
import { handleTransformValue } from '../../utils';

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
  attributeOptions,
  ExtraOptions,
  attributeRange,
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
            onChange={(value) =>
              onChange?.({
                attribute,
                value: handleTransformValue(attribute, value),
              })
            }
          />
        </Wrapper>
      );
    case 'Slider':
      return (
        <Wrapper>
          <span>{title}</span>
          <Slider
            max={attributeRange?.max || 10}
            min={attributeRange?.min || 0}
            step={attributeRange?.step || 0.5}
            defaultValue={Number(value)}
            value={Number(value)}
            onChange={(value) => onChange?.({ attribute, value })}
          />
        </Wrapper>
      );
    case 'Radio':
      return (
        <Wrapper>
          <span>{title}</span>
          <Radio.Group
            value={value || ''}
            style={{ marginTop: 5 }}
            onChange={(e) => onChange?.({ attribute, value: e.target.value })}
          >
            {(attributeOptions as []).map((item: any) => (
              <Radio.Button key={item.id} value={item.value}>
                {item.text}
              </Radio.Button>
            ))}
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
    case 'ButtonTip':
      return (
        <div style={{ display: 'inline-block' }} className='font-restyle'>
          <span>{title}</span>
          <Tooltip title={(ExtraOptions as any)?.tip}>
            <Button
              shape='circle'
              type={value ? 'primary' : 'default'}
              onClick={() =>
                onChange?.({
                  attribute,
                  value: value ? '' : ExtraOptions.value,
                })
              }
            >
              <ExtraOptions.IconName />
            </Button>
          </Tooltip>
        </div>
      );
    case 'SelectAndRadio': // 字体定制类型
      return (
        <Wrapper>
          <span>{title}</span>
          <div>
            <Select
              value={value || ''}
              style={{ width: '100%' }}
              // 修复静态问题 `label` of `value` is not same as `label` in Select options.（）
              optionLabelProp='children' // https://github.com/ant-design/ant-design/issues/34048
              onChange={(value) => onChange?.({ attribute, value })}
            >
              {(attributeOptions as [])?.map((option: any) => (
                <Option key={option?.id} value={option.value}>
                  <span style={{ fontFamily: `${option.value}` }}>
                    {option.text}
                  </span>
                </Option>
              ))}
            </Select>
            {/* <Radio.Group buttonStyle='solid' style={{ marginTop: '5px' }}>
              {defaultFontMode.map((Comp) => (
                <Radio.Button
                  key={Comp.id}
                  value={Comp.value}
                  onChange={(e) =>
                    onChange?.({
                      attribute: Comp.attribute,
                      value: e.target.value,
                    })
                  }
                >
                  <Comp.IconName />
                </Radio.Button>
              ))}
            </Radio.Group> */}
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
