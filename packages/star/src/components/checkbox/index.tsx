import React from 'react';
import { Checkbox as AntdCheckbox, CheckboxProps } from 'antd';

const Checkbox = ({ children, ...props }: CheckboxProps) => {
  return <AntdCheckbox {...props}>{children}</AntdCheckbox>
}

export default Checkbox;