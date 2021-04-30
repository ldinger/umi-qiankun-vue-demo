import { Layout, Menu } from 'antd';
import Link from 'umi/link';
import style from './style.less';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default ({ children }) => (
  <Layout className={style.layout}>
    <Sider width={200} className={style.sider}>
      <Menu mode="inline" defaultSelectedKeys={['dashboard']} style={{ height: '100%', borderRight: 0 }}>
        <Menu.Item key="dashboard">
          <Link to="/">企业管理</Link>
        </Menu.Item>
        <Menu.Item key="user">
          <Link to="/user">用户管理</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Content
      style={{
        background: '#fff',
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      {children}
    </Content>
  </Layout>
);