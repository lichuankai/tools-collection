import React from 'react';
import { Pagination as AntdPagination, PaginationProps } from 'antd';

const Pagination = (props: PaginationProps) => {
  return <AntdPagination {...props} />
}

export default Pagination;