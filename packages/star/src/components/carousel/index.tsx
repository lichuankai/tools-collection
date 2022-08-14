import React from 'react';
import { Carousel as AntdCarousel, CarouselProps } from 'antd';

const Carousel = ({ children, ...props }: CarouselProps) => {
  return <AntdCarousel {...props}>{children}</AntdCarousel>
}

export default Carousel;