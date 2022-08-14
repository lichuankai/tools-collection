import React from 'react';
import { Space as AntdSpace, SpaceProps } from 'antd';

const Space = ({ children, ...props }: SpaceProps) => {
  return <AntdSpace {...props}>{children}</AntdSpace>
}

export default Space;