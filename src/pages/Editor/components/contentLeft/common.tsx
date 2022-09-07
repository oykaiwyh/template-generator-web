import { Col, Input, InputNumber, Radio, Row, Select, Slider } from 'antd';
import { ReactNode, memo } from 'react';
import { getNumber } from '@/utils';
import { IBaseTrees } from '../../interface';

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

const RenderAdapterComp = memo(
  ({
    type,
    title,
    value,
    attribute,
    onChange,
  }: // eslint-disable-next-line react/require-default-props
  IBaseTrees & { onChange?: (item: any) => void }) => {
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
      case 'SelectAndRadio':
        return (
          <Wrapper>
            <span>{title}</span>
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
                <Radio.Button value='c'>U</Radio.Button>
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
  },
  (prevProps, nextProps) => prevProps.value === nextProps.value
);

const Test = ({
  type,
  title,
  value,
  attribute,
  onChange,
}: // eslint-disable-next-line react/require-default-props
IBaseTrees & { onChange?: (item: any) => void }) => {
  switch (type) {
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
    default:
      return (
        <Wrapper>
          <span>{title}</span>
          <Input />
        </Wrapper>
      );
  }
};

// const renderComp = (item: IBaseTrees) => {
//   let RenderComp: any;
//   let RenderCompOne: any = null;

//   switch (item.type) {
//     case 'TextArea':
//       RenderComp = (
//         <Wrapper>
//           <span>{item.title}</span>
//           <TextArea rows={4} value={item?.value as string} />
//         </Wrapper>
//       );
//       break;
//     case 'Input':
//       RenderComp = (
//         <Wrapper>
//           <span>{item.title}</span>
//           <InputNumber
//             min={1}
//             defaultValue={getNumber(item?.value as string)}
//           />
//         </Wrapper>
//       );
//       break;
//     case 'Slider':
//       RenderComp = (
//         <Wrapper>
//           <span>{item.title}</span>
//           <Slider defaultValue={30} value={Number(item?.value)} />
//         </Wrapper>
//       );
//       break;
//     case 'Radio':
//       RenderComp = (
//         <Wrapper>
//           <span>{item.title}</span>
//           <Radio.Group defaultValue='a' style={{ marginTop: 5 }}>
//             <Radio.Button value='a'>左</Radio.Button>
//             <Radio.Button value='b'>中</Radio.Button>
//             <Radio.Button value='c'>右</Radio.Button>
//           </Radio.Group>
//         </Wrapper>
//       );
//       break;
//     case 'ColorPick':
//       RenderComp = (
//         <Wrapper>
//           <span>{item.title}</span>
//           <input type='color' />
//         </Wrapper>
//       );
//       break;
//     case 'SelectAndRadio':
//       RenderComp = (
//         <Wrapper>
//           <span>{item.title}</span>
//           <div>
//             <Select style={{ width: '100%' }}>
//               <Option value='jack'>Jack</Option>
//               <Option value='lucy'>Lucy</Option>
//             </Select>
//             <Radio.Group
//               defaultValue='a'
//               buttonStyle='solid'
//               style={{ marginTop: '5px' }}
//             >
//               <Radio.Button value='a'>B</Radio.Button>
//               <Radio.Button value='b'>I</Radio.Button>
//               <Radio.Button value='c'>U</Radio.Button>
//             </Radio.Group>
//           </div>
//         </Wrapper>
//       );
//       break;
//     default:
//       RenderComp = (
//         <Wrapper>
//           <span>{item.title}</span>
//           <Input />
//         </Wrapper>
//       );
//       break;
//   }

//   RenderCompOne = connect()(() => RenderComp);

//   return <RenderCompOne />;
// };

export { Wrapper, RenderAdapterComp, Test };
