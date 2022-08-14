import React from 'react';
import { Modal as AntdModal, ModalProps } from 'antd';

const Modal = ({ children, ...props }: ModalProps) => {
  return <AntdModal {...props}>{children}</AntdModal>
}

export default Modal;