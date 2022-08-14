import React from 'react';
import { Divider as AntdDivider, DividerProps } from 'antd';

const Divider = ({ children, ...props }: DividerProps) => {
  return <AntdDivider {...props}>{children}</AntdDivider>
}

export default Divider;