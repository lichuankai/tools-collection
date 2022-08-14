import React from 'react';
import { Descriptions as AntdDescriptions, DescriptionsProps } from 'antd';

const Descriptions = ({ children, ...props }: DescriptionsProps) => {
  return <AntdDescriptions {...props}>{children}</AntdDescriptions>
}

export default Descriptions;