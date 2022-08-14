import React from 'react';
import { Statistic as AntdStatistic, StatisticProps } from 'antd';

const Statistic = (props: StatisticProps) => {
  return <AntdStatistic {...props} />
}

export default Statistic;