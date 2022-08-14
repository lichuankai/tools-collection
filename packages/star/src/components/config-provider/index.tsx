import React, { ReactNode } from 'react';
import { ConfigProvider as AntdConfigProvider } from 'antd';

interface ConfigProviderProps {
  children: ReactNode;
}

const ConfigProvider = ({ children, ...props }: ConfigProviderProps) => {
  return <AntdConfigProvider {...props}>{children}</AntdConfigProvider>
}

export default ConfigProvider;