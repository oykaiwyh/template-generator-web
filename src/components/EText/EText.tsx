import { HTMLAttributes } from 'react';

type IETextProps = HTMLAttributes<HTMLDivElement>;

const EText = (props: IETextProps) => {
  console.log('--EText--');

  return (
    <div style={{ ...props }}>
      <div>EText</div>
    </div>
  );
};

export default EText;
