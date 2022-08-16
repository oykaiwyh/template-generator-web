import { Col, Row, Button } from 'antd';
import { useState } from 'react';
import styles from './Header.module.less';
import LogoImg from '@/assets/logo.png';

const LoginComp = () => {
  const [isLogin, setLogin] = useState(false);
  return (
    <div style={{ float: 'right' }}>
      {isLogin ? (
        <Button
          onClick={() => setLogin(!isLogin)}
          role='none'
          type='primary'
          shape='round'
          size='middle'
        >
          登陆
        </Button>
      ) : (
        <Button
          onClick={() => setLogin(!isLogin)}
          role='none'
          type='primary'
          shape='round'
          size='middle'
        >
          登出
        </Button>
      )}
    </div>
  );
};

const HeaderPage = () => {
  console.log('--HeaderPage--');

  return (
    <div className={styles.container}>
      <Row>
        <Col span={12}>
          <img src={LogoImg} alt='' height='64px' />
        </Col>
        <Col span={12}>
          <LoginComp />
        </Col>
      </Row>
    </div>
  );
};

export default HeaderPage;
