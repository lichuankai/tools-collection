import React from 'react';
import { Collapse as AntdCollapse, CollapseProps } from 'antd';

const Collapse = ({ children, ...props }: CollapseProps) => {
  return <AntdCollapse {...props}>{children}</AntdCollapse>
}

export default Collapse;