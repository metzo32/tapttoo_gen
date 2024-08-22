import  { useState, useEffect } from 'react';

interface ProgressiveImageProps {
    lowResSrc: string;
    highResSrc: string;
}

const useProgressiveImage = ({ lowResSrc, highResSrc }: ProgressiveImageProps): string => {
    const [src, setSrc] = useState(lowResSrc);

  useEffect(() => {
    const img = new Image();
    img.src = highResSrc;
    img.onload = () => {
      setSrc(highResSrc);
    };
  }, [highResSrc]);

  return src;
};

export default useProgressiveImage;