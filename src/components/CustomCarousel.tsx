import React from 'react';
import s from '../stores/styling';
import Carousel from './Carousel';
import { CarouselItem, CarouselProps } from '../types/CarouselType'

const searchMainImages = [
  <s.Image src="" alt="image"/>,
  <s.Image src="" alt="image"/>,
  <s.Image src="" alt="image"/>,
  <s.Image src="" alt="image"/>,
  <s.Image src="" alt="image"/>,
]

const SearchPage: CarouselItem[] = searchMainImages.map((image, index) => ({
  id: index + 1,
  url: image,
}));


const CustomCarousel: React.FC = () => {
  const renderItem = (item: CarouselItem) => (
    <>
      {item.url}
    </>
  );

  return (
    <Carousel items={SearchPage} renderItem={renderItem} />
  );
};

export default CustomCarousel;
