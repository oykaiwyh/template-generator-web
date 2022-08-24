import { connect } from 'react-redux';
import { Dispatch, RootState } from '@/redux';
import styles from './content.module.less';
import { EText } from '@/components/EText';

// 获取state值
const mapStateToProps = (state: RootState) => ({
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

const showComp = [
  {
    tag: 'e-text',
    props: {
      color: '#000000',
      text: 'hello3',
      fontSize: '30px',
      fontFamily: '',
    },
  },
];

const ContentCanvas = ({ count, changeCount }: IContentCanvasProps) => {
  console.log('-- ContentCanvas --');

  return (
    <div className={`${styles['center-canvas-container']}`}>
      <div className={`${styles['content-bg']} ${styles['canvas-content']}`}>
        ContentCanvas:{count}
        <button type='submit' onClick={() => changeCount(Math.random() * 10)}>
          点击
        </button>
        {showComp.map((Comp) => (
          <>{CustomComponents(Comp.tag, Comp.props)}</>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentCanvas);
