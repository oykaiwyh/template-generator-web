import { CSSProperties } from 'react';
import { TTextType } from '@/pages/Editor/interface';
import styles from './EText.module.less';

export type IETextProps = CSSProperties & {
  tag: TTextType;
  text: string;
  onClick?: (e?: any) => {
    //
  };
};

const EText = ({
  text,
  tag: Tag = 'p',
  onClick,
  ...styleProps
}: IETextProps) => {
  console.log('--EText--', text);

  return (
    <Tag
      className={styles.container}
      style={{ ...styleProps }}
      onClick={onClick}
    >
      {text}
    </Tag>
  );
};

EText.defaultProps = {
  onClick: () => {
    //
  },
};

export default EText;
