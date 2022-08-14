import React from 'react';
import { Tooltip as AntdTooltip, TooltipProps } from 'antd';

const Tooltip = ({ children, ...props }: TooltipProps) => {
  return <AntdTooltip {...props}>{children}</AntdTooltip>
}

export default Tooltip;