import React from 'react';
import { Upload as AntdUpload, UploadProps } from 'antd';

const Upload = ({ children, ...props }: UploadProps) => {
  return <AntdUpload {...props}>{children}</AntdUpload>
}

export default Upload;