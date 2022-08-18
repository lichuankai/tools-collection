import React from 'react';
import { Button as AntdButton, ButtonProps } from 'antd';

const Button = ({ children, ...props }: ButtonProps) => {
  return <AntdButton {...props}>{children}</AntdButton>
}

export default Button;