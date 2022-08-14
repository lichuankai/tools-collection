import React from 'react';
import { Drawer as AntdDrawer, DrawerProps } from 'antd';

const Drawer = ({ children, ...props }: DrawerProps) => {
  return <AntdDrawer {...props}>{children}</AntdDrawer>
}

export default Drawer;