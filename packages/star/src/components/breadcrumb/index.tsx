import React from 'react';
import { Breadcrumb as AntdBreadcrumb, BreadcrumbProps } from 'antd';

const Breadcrumb = ({ children, ...props }: BreadcrumbProps) => {
  return <AntdBreadcrumb {...props}>{children}</AntdBreadcrumb>
}

export default Breadcrumb;