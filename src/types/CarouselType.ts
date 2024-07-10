export interface CarouselItem {
    id: number;
    url: React.ReactNode;
  }

export interface CarouselProps {
    items: CarouselItem[];
    renderItem: (item: CarouselItem) => JSX.Element;
  }
  