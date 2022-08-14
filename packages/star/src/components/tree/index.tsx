import React from 'react';
import { Tree as AntdTree, TreeProps } from 'antd';

const Tree = ({ children, ...props }: TreeProps) => {
  return <AntdTree {...props}>{children}</AntdTree>
}

export default Tree;