import React from 'react';
import { Anchor as AntdAnchor, AnchorProps } from 'antd';

const Anchor = ({ children, ...props }: AnchorProps) => {
  return <AntdAnchor {...props}>{children}</AntdAnchor>
}

export default Anchor;