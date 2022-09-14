import { v4 as uuidv4 } from 'uuid';
import { ITextCompProps } from '@/pages/Editor/interface';

const testShowComps: ITextCompProps[] = [
  {
    name: 'e-text',
    id: uuidv4(),
    props: {
      color: '#000000',
      text: 'hello3',
      fontSize: '30px',
      fontFamily: '',
    },
  },
  {
    name: 'e-text',
    id: uuidv4(),
    props: {
      color: '#000000',
      text: 'hello4',
      fontSize: '30px',
      fontFamily: '',
    },
  },
];

const initialEditorState = {
  count: 12,
  currentComponent: null,
  components: testShowComps,
};

export type initialEditorStateProps = typeof initialEditorState;

export { initialEditorState };
export default {
  initialEditorState,
};
