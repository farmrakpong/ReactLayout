import React, { useState } from 'react';
import './App.css';
import { Breadcrumb, Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Footer } from 'antd/lib/layout/layout';
import SideBarPos from './component/Sidebar/SidebarPos'
const { Header, Sider, Content } = Layout;
function App() {
  const [collapsed,setCollapsed] = useState<boolean>(false);
  const toggle = ():void => {
      setCollapsed(!collapsed)
  }
  return (
    <Layout style={{height:"100vh"}}>
    <Sider trigger={null} collapsible collapsed={collapsed}>
       <SideBarPos />
    </Sider>
    <Layout className="site-layout">
     <Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: toggle,
        })}
      </Header>
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {/* <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
        </Breadcrumb>
        <div  className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
           First
        </div>
      </Content>
      <Footer  style={{ textAlign: 'center',background:'#001529' }}>Autofast</Footer>
    </Layout>
  </Layout>
  );
}

export default App;
