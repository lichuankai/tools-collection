import React from 'react';
import { Table as AntdTable, TableProps } from 'antd';

const Table = ({ children, ...props }: TableProps<any>) => {
  return <AntdTable {...props}>{children}</AntdTable>
}

export default Table;