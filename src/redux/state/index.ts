const testShowComps = [
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

const initialEditorState = {
  count: 12,
  components: testShowComps,
};

export type initialEditorStateProps = typeof initialEditorState;

export { initialEditorState };
export default {
  initialEditorState,
};
