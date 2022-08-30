import { CSSProperties } from 'react';

type positionType = Pick<CSSProperties, 'position'>;
type textAlignType = Pick<CSSProperties, 'textAlign'>;

interface IComponentsCommonProps {
  actionType: string; // actions
  url: string;
  height: string; // size
  width: string;
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  paddingBottom: string;
  borderStyle: string; // border type
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  boxShadow: string; // shadow and opacity
  opacity: number | string;
  position: positionType; // position and x,y
  left: string;
  top: string;
  right: string;
}

interface IETextDefaultProps extends IComponentsCommonProps {
  text: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  lineHeight: string;
  textAlign: textAlignType;
  color: string;
  backgroundColor: string;
  width: string;
}

// editor现支持dom元素类型
type TTextType = 'h2' | 'p' | 'button';

interface ITextCompProps {
  id: string;
  name: string;
  props: React.CSSProperties & {
    tag: TTextType;
    text: string;
  };
}

export type {
  IComponentsCommonProps,
  IETextDefaultProps,
  TTextType,
  ITextCompProps,
};

export default {};
