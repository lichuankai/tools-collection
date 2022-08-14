import React from 'react';
import { Calendar as AntdCalendar, CalendarProps } from 'antd';
import { Moment } from 'moment';

const Calendar = (props: CalendarProps<Moment>) => {
  return <AntdCalendar {...props} />
}

export default Calendar;