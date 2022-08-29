import { HTMLAttributes } from 'react';
import { TTextType } from '@/pages/Editor/interface';

type IETextProps = HTMLAttributes<HTMLDivElement> & {
  tag: TTextType;
  text: string;
};

const EText = ({ text, tag: Tag = 'p', ...styleProps }: IETextProps) => {
  console.log('--EText--');

  return <Tag style={{ ...styleProps }}>{text}</Tag>;
};

export default EText;
