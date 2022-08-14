import React from 'react';
import { List as AntdList, ListProps } from 'antd';

const List = ({ children, ...props }: ListProps<any>) => {
  return <AntdList {...props}>{children}</AntdList>
}

export default List;