import React from 'react';
import { DatePicker as AntdDatePicker, DatePickerProps } from 'antd';

const DatePicker = (props: DatePickerProps) => {
  return <AntdDatePicker {...props} />
}

export default DatePicker;