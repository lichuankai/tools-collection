import React from 'react';
import { Steps as AntdSteps, StepsProps } from 'antd';

const Steps = ({ children, ...props }: StepsProps) => {
  return <AntdSteps {...props}>{children}</AntdSteps>
}

export default Steps;