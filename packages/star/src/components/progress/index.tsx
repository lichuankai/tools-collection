import React from 'react';
import { Progress as AntdProgress, ProgressProps } from 'antd';

const Progress = ({ children, ...props }: ProgressProps) => {
  return <AntdProgress {...props}>{children}</AntdProgress>
}

export default Progress;