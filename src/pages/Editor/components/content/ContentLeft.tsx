import styles from './content.module.less';

const ContentLeft = () => {
  console.log('-- ContentLeft --');

  return (
    <div className={`${styles['content-bg']} ${styles['content-size']} `}>
      ContentLeft
    </div>
  );
};

export default ContentLeft;
