import React from 'react';
import { Comment as AntdComment, CommentProps } from 'antd';

const Comment = ({ children, ...props }: CommentProps) => {
  return <AntdComment {...props}>{children}</AntdComment>
}

export default Comment;