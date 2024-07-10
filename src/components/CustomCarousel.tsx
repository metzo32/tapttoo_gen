import React from 'react';
import s from '../stores/styling';
import Carousel from './Carousel';
import { CarouselItem, CarouselProps } from '../types/CarouselType';

const CustomCarousel: React.FC<CarouselProps> = ({ items, renderItem }) => {
  return <Carousel items={items} renderItem={renderItem} />;
};

const defaultRenderItem = (item: CarouselItem): JSX.Element => <>{item.url}</>;

export { CustomCarousel, defaultRenderItem };
