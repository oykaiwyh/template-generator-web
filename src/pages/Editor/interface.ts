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

type TCssProperties = Partial<
  React.CSSProperties & {
    tag: TTextType;
    text: string;
  }
>;
interface ITextCompProps {
  id: string;
  name: string;
  props: TCssProperties;
}

// left - 属性设置
type TBaseTreesTypes =
  | 'TextArea'
  | 'Input'
  | 'Select'
  | 'SelectAndRadio'
  | 'Slider'
  | 'Radio'
  | 'ColorPick';
interface IBaseTrees {
  id: number | string;
  title: string;
  type: TBaseTreesTypes;
  attribute: keyof (CSSProperties & { text: string });
  value?: unknown;
  attributeOptions?: unknown;
  attributeRange?: {
    min: number;
    max: number;
    step: number;
  };
}

export type {
  // global
  TCssProperties,
  IComponentsCommonProps,
  IETextDefaultProps,
  TTextType,
  ITextCompProps,
  // left - 属性设置
  TBaseTreesTypes,
  IBaseTrees,
};

export default {};
