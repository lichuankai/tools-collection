import React from 'react';
import { Skeleton as AntdSkeleton, SkeletonProps } from 'antd';

const Skeleton = ({ children, ...props }: SkeletonProps) => {
  return <AntdSkeleton {...props}>{children}</AntdSkeleton>
}

export default Skeleton;