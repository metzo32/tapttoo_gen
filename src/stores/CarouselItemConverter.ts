
import { CarouselItem } from '../types/CarouselType';
import searchMainImages from '../stores/CarouselData'

export const CarouselItemConverter = (images: React.ReactNode[]): CarouselItem[] => {
  return images.map((image, index) => ({
    id: index + 1,
    url: image,
  }));
};
