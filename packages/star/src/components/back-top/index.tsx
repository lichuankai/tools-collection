import React from 'react';
import { BackTop as AntdBackTop, BackTopProps } from 'antd';

const BackTop = ({ children, ...props }: BackTopProps) => {
  return <AntdBackTop {...props}>{children}</AntdBackTop>
}

export default BackTop;