import { CSSProperties } from 'react';
import { TTextType } from '@/pages/Editor/interface';
import styles from './EText.module.less';

export type IETextProps = CSSProperties & {
  tag: TTextType;
  text: string;
};

const EText = ({ text, tag: Tag = 'p', ...styleProps }: IETextProps) => {
  console.log('--EText--', text);

  return (
    <Tag className={styles.container} style={{ ...styleProps }}>
      {text}
    </Tag>
  );
};

export default EText;
