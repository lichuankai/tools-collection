import React from 'react';
import { Col as AntdCol, ColProps } from 'antd';

const Col = ({ children, ...props }: ColProps) => {
  return <AntdCol {...props}>{children}</AntdCol>
}

export default Col;