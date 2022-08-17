import { Col, Row } from 'antd';
import styles from './Footer.module.less';

const lists = [
  {
    title: '购买课程',
    content: ['购买课程', '作业和打卡', '开源仓库', '帮助'],
  },
  {
    title: '作业和打卡',
    content: ['购买课程', '作业和打卡', '开源仓库', '帮助'],
  },
  {
    title: '开源仓库',
    content: ['购买课程', '作业和打卡', '开源仓库', '帮助'],
  },
  {
    title: '帮助',
    content: ['购买课程', '作业和打卡', '开源仓库', '帮助'],
  },
];
const ContactInfo = () => (
  <Row>
    {lists.map((list) => (
      <Col span={6}>
        <ul style={{ listStyle: 'none' }}>
          <h2 style={{ color: '#fff' }}>{list.title}</h2>
          {list.content.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </Col>
    ))}
  </Row>
);
const PropertyInfo = () => (
  <div style={{ textAlign: 'center' }}>
    © 慕课网（imooc.com）版权所有 | 津ICP备20000929号-2 购买课程 作业和打卡
    开源仓库 帮助
  </div>
);

const FooterPage = () => {
  console.log('--FooterPage--');

  return (
    <div className={styles.container}>
      <ContactInfo />
      <PropertyInfo />
    </div>
  );
};

export default FooterPage;
