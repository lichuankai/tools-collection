import React from 'react';
import { Result as AntdResult, ResultProps } from 'antd';

const Result = ({ children, ...props }: ResultProps) => {
  return <AntdResult {...props}>{children}</AntdResult>
}

export default Result;