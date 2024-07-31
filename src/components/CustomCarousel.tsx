import React from "react";
import Carousel from "./CarouselStructure";
import { CarouselItem } from "../types/CarouselType";
import CarouselData from "../assets/datas/CarouselData";
import s from "../stores/styling";

interface SearchPageMainProps {
  title: string;
  image: string;
}

const CarouselImage: React.FC<SearchPageMainProps> = ({ title, image }) => {
  return (
    <>
      <s.Image src={image} alt="image" />
      <s.Carousel className="title-box">
        <s.StyledH3 className="carousel-title">{title}</s.StyledH3>
      </s.Carousel>
    </>
  );
};

const carouselItems: CarouselItem[] = CarouselData.map((data, index) => ({
  id: index + 1,
  url: <CarouselImage key={index} title={data.title} image={data.image} />,
}));

const CustomCarousel: React.FC = () => {
  const renderItem = (item: CarouselItem): JSX.Element => <>{item.url}</>;

  return <Carousel items={carouselItems} renderItem={renderItem} />;
};

export default CustomCarousel;
