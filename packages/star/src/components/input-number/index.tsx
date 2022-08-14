import React from 'react';
import { InputNumber as AntdInputNumber, InputNumberProps } from 'antd';

const InputNumber = ({ children, ...props }: InputNumberProps) => {
  return <AntdInputNumber {...props}>{children}</AntdInputNumber>
}

export default InputNumber;