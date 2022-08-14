import React from 'react';
import { Tag as AntdTag, TagProps } from 'antd';

const Tag = ({ children, ...props }: TagProps) => {
  return <AntdTag {...props}>{children}</AntdTag>
}

export default Tag;