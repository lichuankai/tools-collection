import React from 'react';
import { Popconfirm as AntdPopconfirm, PopconfirmProps } from 'antd';

const Popconfirm = ({ children, ...props }: PopconfirmProps) => {
  return <AntdPopconfirm {...props}>{children}</AntdPopconfirm>
}

export default Popconfirm;