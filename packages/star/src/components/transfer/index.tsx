import React from 'react';
import { Transfer as AntdTransfer, TransferProps } from 'antd';

const Transfer = ({ children, ...props }: TransferProps<any>) => {
  return <AntdTransfer {...props}>{children}</AntdTransfer>
}

export default Transfer;