import React from 'react';
import { Layout } from 'antd';
import { AiOutlineMenu } from '@react-icons/all-files/ai/AiOutlineMenu';

const { Header: AntHeader  }  = Layout;

const Header =  (props: {
  collapsed: Boolean,
  setCollapsed: Function
}) => (
  <AntHeader className="site-layout-background">
    {React.createElement(props.collapsed ? AiOutlineMenu : AiOutlineMenu, {
      className: 'trigger',
      onClick: () => props.setCollapsed(!props.collapsed),
    })}
  </AntHeader>
);

export default Header;