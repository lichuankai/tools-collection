import React from 'react';
import { Spin as AntdSpin, SpinProps } from 'antd';

const Spin = ({ children, ...props }: SpinProps) => {
  return <AntdSpin {...props}>{children}</AntdSpin>
}

export default Spin;