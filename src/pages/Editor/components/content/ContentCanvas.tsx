import styles from './content.module.less';

const ContentCanvas = () => {
  console.log('-- ContentLeft --');

  return (
    <div className={`${styles['center-canvas-container']}`}>
      <div className={`${styles['content-bg']} ${styles['canvas-content']}`}>
        ContentCanvas
      </div>
    </div>
  );
};

export default ContentCanvas;
