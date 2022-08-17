import { Button, Card, Col, Row } from 'antd';
import { useState } from 'react';
import styles from './lists.module.less';

const ListTitle = () => (
  <div className={styles.title}>
    <span datatype='title'>热门海报</span>
    <span datatype='desc'>只需替换文字和图片，一键自动生成H5</span>
  </div>
);

const ListInfo = () => {
  const [hover, setHover] = useState<number | null>(null);
  const lists = [1, 2, 3, 4];
  console.log('------------', hover);

  return (
    <div className={styles['list-info']}>
      <Row style={{ width: '100%' }} justify='space-between'>
        {lists.map((item, index) => (
          <Col
            span={4}
            style={{ position: 'relative', height: '400px' }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          >
            <Card style={{ width: '100%', height: '100%' }} hoverable>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            {hover !== null && index === hover ? (
              <div className={styles.mantle}>
                <Button type='primary' shape='round'>
                  使用该模版创建
                </Button>
              </div>
            ) : null}
          </Col>
        ))}
      </Row>
    </div>
  );
};

const HomeLists = () => {
  console.log('---------HomeLists----------');

  return (
    <div className={styles.container}>
      <ListTitle />
      <ListInfo />
    </div>
  );
};

export default HomeLists;
