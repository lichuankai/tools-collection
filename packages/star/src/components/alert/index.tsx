import React from 'react';
import { Alert as AntdAlert, AlertProps } from 'antd';

const Alert = (props: AlertProps) => {
  return <AntdAlert {...props} />
}

export default Alert;