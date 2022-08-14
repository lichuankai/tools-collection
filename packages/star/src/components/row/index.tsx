import React from 'react';
import { Row as AntdRow, RowProps } from 'antd';

const Row = ({ children, ...props }: RowProps) => {
  return <AntdRow {...props}>{children}</AntdRow>
}

export default Row;