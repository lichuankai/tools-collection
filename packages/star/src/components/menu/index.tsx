import React from 'react';
import { Menu as AntdMenu, MenuProps } from 'antd';

const Menu = ({ children, ...props }: MenuProps) => {
  return <AntdMenu {...props}>{children}</AntdMenu>
}

export default Menu;