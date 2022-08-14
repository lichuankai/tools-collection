import React from 'react';
import { PageHeader as AntdPageHeader, PageHeaderProps } from 'antd';

const PageHeader = ({ children, ...props }: PageHeaderProps) => {
  return <AntdPageHeader {...props}>{children}</AntdPageHeader>
}

export default PageHeader;