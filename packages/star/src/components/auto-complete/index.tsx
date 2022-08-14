import React from 'react';
import { AutoComplete as AntdAutoComplete, AutoCompleteProps } from 'antd';

const AutoComplete = ({ children, ...props }: AutoCompleteProps) => {
  return <AntdAutoComplete {...props}>{children}</AntdAutoComplete>
}

export default AutoComplete;