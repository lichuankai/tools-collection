import React from 'react';
import { Popover as AntdPopover, PopoverProps } from 'antd';

const Popover = ({ children, ...props }: PopoverProps) => {
  return <AntdPopover {...props}>{children}</AntdPopover>
}

export default Popover;