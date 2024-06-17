declare module 'react-slick' {
    import React from 'react';
  
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;

    }
  
    const Slider: React.FC<Settings>;
    export default Slider;
  }
  