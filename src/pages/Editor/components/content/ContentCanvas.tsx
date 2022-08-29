import { connect } from 'react-redux';
import React from 'react';
import { Dispatch, RootState } from '@/redux';
import styles from './content.module.less';
import { EText } from '@/components/EText';

// 获取state值
const mapStateToProps = (state: RootState) => ({
  canvansComponents: state.editorReducer.components,
  count: state.editorReducer.count,
});

// 改变state的值的方法
const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeCount: (data: any) => {
    dispatch({
      type: 'SET_COUNT',
      payload: data,
    });
  },
});

type reduxEventType = ReturnType<typeof mapDispatchToProps>;
type reduxStateType = ReturnType<typeof mapStateToProps>;
export type IContentCanvasProps = Required<reduxStateType & reduxEventType>;

const CustomComponents = (tag: string, props?: any) => {
  switch (tag) {
    case 'e-text':
      return <EText {...props} />;
    default:
      return <EText {...props} />;
  }
};

const ContentCanvas = ({
  count,
  canvansComponents,
  changeCount,
}: IContentCanvasProps) => {
  console.log('-- ContentCanvas --');

  return (
    <div className={`${styles['center-canvas-container']}`}>
      <div className={`${styles['content-bg']} ${styles['canvas-content']}`}>
        ContentCanvas:{count}
        <button type='submit' onClick={() => changeCount(Math.random() * 10)}>
          点击
        </button>
        {canvansComponents?.map((Comp) => (
          <React.Fragment key={Comp.id}>
            {CustomComponents(Comp.tag, Comp.props)}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentCanvas);
