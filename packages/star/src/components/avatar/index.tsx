import React from 'react';
import { Avatar as AntdAvatar, AvatarProps } from 'antd';

const Avatar = ({ children, ...props }: AvatarProps) => {
  return <AntdAvatar {...props}>{children}</AntdAvatar>
}

export default Avatar;