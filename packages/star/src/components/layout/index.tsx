import React from 'react';
import { Layout as AntdLayout, LayoutProps } from 'antd';

const Layout = ({ children, ...props }: LayoutProps) => {
  return <AntdLayout {...props}>{children}</AntdLayout>
}

export default Layout;