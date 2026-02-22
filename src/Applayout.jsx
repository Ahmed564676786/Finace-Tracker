import React, { useState } from 'react';
import Dashboard from './Dashbord';
import Profile from './Profile';
import StackedBarChart from './StackedBarChart';
import PieChartComponent from './PieChartComponent';
import InvoiceTable from './InvoiceTable';

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return { key, icon, children, label };
}

const items = [
  getItem('Dashbord', '1', <PieChartOutlined />),
  getItem('Data Area', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8'),
  ]),
  getItem('Files', '9', <FileOutlined />),
];

const Applayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>

      {/* Main Layout */}
      <Layout>
        <Profile />
        <Header style={{ padding: 0, background: colorBgContainer }} />
          <div className="top">
        <Dashboard /></div>

        {/* Charts side by side */}
        <div
          style={{
            display: 'flex',
            gap: '300px',
            flexWrap: 'wrap', // makes it responsive
            margin: '20px 16px',
          }}
        >
          <div style={{ flex: 1, minWidth: '300px',marginTop:'-2rem' }}>
            <h1>Income and Expense Overview</h1>
            <StackedBarChart />
          </div>

          <div style={{ flex: 1, minWidth: '300px',marginTop:'-2rem' }}>
            <h1>Spending by Catogary</h1>
            <PieChartComponent />
          </div>
        </div>

        {/* Content area */}
        <Content style={{ margin: '0 16px' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
              <div style={{ marginTop:'-2rem' }}>
            <InvoiceTable></InvoiceTable></div>
          </div>
        
        </Content>

        <Footer style={{ textAlign: 'center' }}>
         <h3>Made by Ahmed Sheikh </h3>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Applayout;