import { Col, Input, InputNumber, Radio, Row, Select, Slider } from 'antd';
import { CSSProperties, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNumber } from '@/utils';
import { IBaseTrees, ITextCompProps } from '../../interface';
import { Dispatch, RootState } from '@/redux';

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

const renderComp = (item: IBaseTrees) => {
  const Dispath: Dispatch = useDispatch();
  const State = useSelector((state: RootState) => ({
    components: state.editorReducer.components,
    currentComponent: state.editorReducer.currentComponent || 0,
  }));

  switch (item.type) {
    case 'TextArea':
      return (
        <Wrapper>
          <span>{item.title}</span>
          <TextArea
            rows={4}
            value={item?.value as string}
            onChange={(e) => {
              console.log(e.target.value);
              const newComps: ITextCompProps[] = JSON.parse(
                JSON.stringify(State.components)
              );
              newComps[State.currentComponent].props[item.attribute as 'text'] =
                e.target.value;
              Dispath({
                type: 'EDIT_CURRENT_COMPONENT',
                payload: newComps,
              });
            }}
          />
        </Wrapper>
      );
    case 'Input':
      return (
        <Wrapper>
          <span>{item.title}</span>
          <InputNumber
            min={1}
            defaultValue={getNumber(item?.value as string)}
          />
        </Wrapper>
      );
    case 'Slider':
      return (
        <Wrapper>
          <span>{item.title}</span>
          <Slider defaultValue={30} value={Number(item?.value)} />
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
              <Radio.Button value='c'>U</Radio.Button>
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

export { Wrapper, renderComp };
