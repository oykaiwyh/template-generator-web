import { Map, fromJS } from 'immutable';

interface fg {
  test: object;
  count: number;
}

const initialEditorState = fromJS({
  test: {
    props: {
      text: 'hello world',
    },
  },
  count: 12,
});

console.log(initialEditorState.getIn(['test', 'props', 'text']));

export type initialEditorStateProps = fg;

export { initialEditorState };
export default {
  initialEditorState,
};
