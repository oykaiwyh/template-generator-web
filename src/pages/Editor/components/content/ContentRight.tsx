import styles from './content.module.less';

const ContentRight = () => {
  console.log('-- ContentRight --');

  return (
    <div className={`${styles['content-bg']} ${styles['content-size']} `}>
      ContentRight
    </div>
  );
};

export default ContentRight;
