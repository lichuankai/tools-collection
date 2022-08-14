import React from 'react';
import { Tabs as AntdTabs, TabsProps } from 'antd';

const Tabes = ({ children, ...props }: TabsProps) => {
  return <AntdTabs {...props}>{children}</AntdTabs>
}

export default Tabes;