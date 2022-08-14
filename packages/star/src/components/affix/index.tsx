import React from 'react';
import { Affix as AntdAffix, AffixProps } from 'antd';

const Affix = ({ children, ...props }: AffixProps) => {
  return <AntdAffix {...props}>{children}</AntdAffix>
}

export default Affix;