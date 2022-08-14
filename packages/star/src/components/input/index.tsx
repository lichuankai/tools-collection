import React from 'react';
import { Input as AntdInput, InputProps } from 'antd';

const Input = ({ children, ...props }: InputProps) => {
  return <AntdInput {...props}>{children}</AntdInput>
}

export default Input;