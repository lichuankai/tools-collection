import React from 'react';
import { Timeline as AntdTimeline, TimelineProps } from 'antd';

const Timeline = ({ children, ...props }: TimelineProps) => {
  return <AntdTimeline {...props}>{children}</AntdTimeline>
}

export default Timeline;