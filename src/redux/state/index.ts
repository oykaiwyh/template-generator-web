import { v4 as uuidv4 } from 'uuid';

const testShowComps = [
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
];

const initialEditorState = {
  count: 12,
  components: testShowComps,
};

export type initialEditorStateProps = typeof initialEditorState;

export { initialEditorState };
export default {
  initialEditorState,
};
