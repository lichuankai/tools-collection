import React from 'react';
import { TimePicker as AntdTimePicker, TimePickerProps } from 'antd';

const TimePicker = (props: TimePickerProps) => {
  return <AntdTimePicker {...props} />
}

export default TimePicker;