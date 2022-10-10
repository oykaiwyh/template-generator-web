import { Collapse, Empty } from 'antd';
import { useSelector } from 'react-redux';
import { RenderAdapterComp } from './common';
import { useGetCurrentComponentAttr } from '../../hook';
import { checkIsNull } from '@/utils';
import { RootState } from '@/redux';

const { Panel } = Collapse;
const text = 'hello world';

const BaseAttribute = () => {
  console.log('--BaseAttribute--');
  const { showBaseAttributeTrees, handleEditComponentsAttr } =
    useGetCurrentComponentAttr();

  return (
    <div>
      {showBaseAttributeTrees.map((item) => (
        <RenderAdapterComp
          key={item.id}
          {...item}
          onChange={handleEditComponentsAttr}
        />
      ))}
    </div>
  );
};

const AttributeSetting = () => {
  console.log('-- AttributeSetting --');

  const currentComponent = useSelector(
    (state: RootState) => state.editorReducer.currentComponent
  );
  // XXX: 只要改变右侧属性的值 AttributeSetting组件就会重新渲染（换成下面方式只取单个只也会如此）--- 奇怪的问题
  // FIXME: 原因为 useGetEditorState 中 useSelector 导出的是一个对象，所以会导致，数据更新，导出的对象就会更新
  // const { currentComponent } = useSelector((state: RootState) => ({
  //   currentComponent: state.editorReducer.currentComponent,
  // }));

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
