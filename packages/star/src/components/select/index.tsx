import React from 'react';
import { Select as AntdSelect, SelectProps } from 'antd';

const Select = ({ children, ...props }: SelectProps) => {
  return <AntdSelect {...props}>{children}</AntdSelect>
}

export default Select;