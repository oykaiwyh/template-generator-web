import { Button, Col, Dropdown, Input, Menu, Row } from 'antd';
import { useState } from 'react';
import styles from './header.module.less';
import LogoImg from '@/assets/logo.png';

const HeaderLeft = () => {
  const [showInp, setShowInp] = useState(true);
  const [inpValue, setInpValue] = useState('未命名作品');
  return (
    <div>
      <img src={LogoImg} alt='' height='44' width='40' />
      <div style={{ marginLeft: '20px', display: 'inline-block' }}>
        {showInp ? (
          <span role='none' onClick={() => setShowInp(false)}>
            {inpValue}
          </span>
        ) : (
          <Input
            style={{ width: '180px', borderRadius: '20px' }}
            placeholder='请输入作品名'
            value={inpValue}
            onChange={(e) => setInpValue(e.target.value)}
            onBlur={() => setShowInp(true)}
          />
        )}
      </div>
    </div>
  );
};

const HeaderRight = () => {
  const menus = [
    {
      label: (
        <a target='_blank' rel='noopener noreferrer' href='/'>
          我的作品
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a target='_blank' rel='noopener noreferrer' href='/'>
          个人设置
        </a>
      ),
      key: '1',
    },
    {
      label: (
        <a target='_blank' rel='noopener noreferrer' href='/'>
          退出
        </a>
      ),
      key: '2',
    },
  ];
  return (
    <Row>
      <Col span={4} offset={2}>
        <Button type='primary' shape='round'>
          预览和设置
        </Button>
      </Col>
      <Col span={4} offset={2}>
        <Button type='primary' shape='round'>
          保存
        </Button>
      </Col>
      <Col span={4}>
        <Button type='primary' shape='round'>
          发布
        </Button>
      </Col>
      <Col span={6}>
        <Dropdown.Button
          style={{ borderRadius: '20px' }}
          overlay={<Menu className={styles['menu-setting']} items={menus} />}
        >
          登录账号
        </Dropdown.Button>
      </Col>
    </Row>
  );
};

const EditorHeader = () => {
  console.log('---------EditorHeader----------');

  return (
    <div className={styles.container}>
      <Row>
        <Col span={14}>
          <HeaderLeft />
        </Col>
        <Col span={10}>
          <HeaderRight />
        </Col>
      </Row>
    </div>
  );
};

export default EditorHeader;
