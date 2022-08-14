import React from 'react';
import { Radio as AntdRadio, RadioProps } from 'antd';

const Radio = ({ children, ...props }: RadioProps) => {
  return <AntdRadio {...props}>{children}</AntdRadio>
}

export default Radio;