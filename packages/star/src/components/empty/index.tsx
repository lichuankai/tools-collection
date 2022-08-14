import React from 'react';
import { Empty as AntdEmpty, EmptyProps } from 'antd';

const Empty = ({ children, ...props }: EmptyProps) => {
  return <AntdEmpty {...props}>{children}</AntdEmpty>
}

export default Empty;