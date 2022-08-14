import React from 'react';
import { Mentions as AntdMentions, MentionProps } from 'antd';

const Mentions = ({ children, ...props }: MentionProps) => {
  return <AntdMentions {...props}>{children}</AntdMentions>
}

export default Mentions;