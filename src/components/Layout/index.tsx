/* eslint-disable react/destructuring-assignment */

import { Layout } from 'antd';
import { useEffect, useState } from 'react';
import HeaderLayout from './Components/Header';
import SidenavLayout from './Components/Sidenav';

const { Sider, Content } = Layout;

/**
 * This layout wraps all of routes that are being rendered as part of PrivateRoute.
 * The auth page is the only place that does not use this container
 */
const ProtectedLayout = (props: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const style = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
  };

  useEffect(() => {}, []);

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          setCollapsed(broken);
        }}
        width={270}
        style={style}
      >
        <SidenavLayout />
      </Sider>
      <Layout
        className="app-wrapper"
        style={{ marginLeft: collapsed ? '0' : '270px' }}
      >
        <HeaderLayout
          setCollapsed={(value) => setCollapsed(value)}
          collapsed={collapsed}
        />
        <Content className="app-content">{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default ProtectedLayout;