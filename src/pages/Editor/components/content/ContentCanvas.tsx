import { connect } from 'react-redux';
import { Dispatch, RootState } from '@/redux';
import styles from './content.module.less';

// 获取state值
const mapStateToProps = (state: RootState) => ({
  count: (state.editorReducer.get('count') || 0) as number,
  test: state.editorReducer.getIn(['test', 'props', 'text']),
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

const ContentCanvas = ({ count, test, changeCount }: IContentCanvasProps) => {
  console.log('-- ContentCanvas --');

  return (
    <div className={`${styles['center-canvas-container']}`}>
      <div className={`${styles['content-bg']} ${styles['canvas-content']}`}>
        ContentCanvas:{count}
        <button type='submit' onClick={() => changeCount(Math.random() * 10)}>
          点击
        </button>
        {test}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentCanvas);
