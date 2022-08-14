import React from 'react';
import { Cascader as AntdCascader, CascaderProps } from 'antd';
import { Moment } from 'moment';

const Cascader = ({ children, ...props }: CascaderProps<Moment>) => {
  return <AntdCascader {...props}>{children}</AntdCascader>
}

export default Cascader;