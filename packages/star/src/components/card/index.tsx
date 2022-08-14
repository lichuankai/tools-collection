import React from 'react';
import { Card as AntdCard, CardProps } from 'antd';

const Card = ({ children, ...props }: CardProps) => {
  return <AntdCard {...props}>{children}</AntdCard>
}

export default Card;