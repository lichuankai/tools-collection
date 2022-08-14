import React from 'react';
import { Badge as AntdBadge, BadgeProps } from 'antd';

const Badge = ({ children, ...props }: BadgeProps) => {
  return <AntdBadge {...props}>{children}</AntdBadge>
}

export default Badge;