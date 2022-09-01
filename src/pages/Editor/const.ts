import { CSSProperties } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IBaseTrees, TTextType } from './interface';

const commonDefaultProps = {
  // actions
  actionType: '',
  url: '',
  // size
  height: '',
  width: '',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: 1,
  // position and x,y
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0',
};

const textDefaultProps = {
  // basic props - font styles
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'center',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps,
  width: '318px',
};

const canvasLeftTextLists: (CSSProperties & {
  tag: TTextType;
  text: string;
})[] = [
  {
    text: '大标题',
    fontSize: '30px',
    fontWeight: 'bold',
    tag: 'h2',
  },
  {
    text: '楷体副标题',
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: '"KaiTi","STKaiti"',
    tag: 'h2',
  },
  {
    text: '正文内容',
    tag: 'p',
  },
  {
    text: '宋体正文内容',
    tag: 'p',
    fontFamily: '"SimSun","STSong"',
  },
  {
    text: 'Arial style',
    tag: 'p',
    fontFamily: '"Arial", sans-serif',
  },
  {
    text: 'Comic Sans',
    tag: 'p',
    fontFamily: '"Comic Sans MS"',
  },
  {
    text: 'Courier New',
    tag: 'p',
    fontFamily: '"Courier New", monospace',
  },
  {
    text: 'Times New Roman',
    tag: 'p',
    fontFamily: '"Times New Roman", serif',
  },
  {
    text: '链接内容',
    color: '#1890ff',
    textDecoration: 'underline',
    tag: 'p',
  },
  {
    text: '按钮内容',
    color: '#ffffff',
    backgroundColor: '#1890ff',
    borderWidth: '1px',
    borderColor: '#1890ff',
    borderStyle: 'solid',
    borderRadius: '2px',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '5px',
    paddingBottom: '5px',
    width: '100px',
    tag: 'button',
    // textAlign: 'center',
  },
];

const canvasDefaultTextLists = canvasLeftTextLists.map((prop) => ({
  name: 'l-text',
  id: uuidv4(),
  props: {
    ...(textDefaultProps as CSSProperties),
    ...prop,
    ...{
      fontSize: '14px',
      width: '125px',
      height: '36px',
      left: `${320 / 2 - 125 / 2}px`,
      top: `${500 / 2 - 36 / 2}px`,
    },
  },
}));

// left - 属性设置
const baseAttributeTrees: IBaseTrees[] = [
  {
    id: 1,
    title: '文本:',
    type: 'TextArea',
    attribute: 'text',
  },
  {
    id: 2,
    title: '字号:',
    type: 'Input',
    attribute: 'fontSize',
  },
  {
    id: 3,
    title: '字体:',
    type: 'SelectAndRadio',
    attribute: 'fontFamily',
  },
  {
    id: 4,
    title: '行高:',
    type: 'Slider',
    attribute: 'fontSize',
  },
  {
    id: 5,
    title: '对齐:',
    type: 'Radio',
    attribute: 'textAlign',
  },
  {
    id: 6,
    title: '文字颜色:',
    type: 'ColorPick',
    attribute: 'color',
  },
  {
    id: 7,
    title: '背景颜色:',
    type: 'ColorPick',
    attribute: 'backgroundColor',
  },
];

export {
  commonDefaultProps,
  textDefaultProps,
  canvasLeftTextLists,
  canvasDefaultTextLists,
  baseAttributeTrees,
};

export default {
  canvasLeftTextLists,
};
