import React from 'react'
import s from '../stores/styling'

interface WideImageProps {
    image: string;
    alt?: string;
}

const WideImage: React.FC<WideImageProps> = ({ image, alt = 'photo'}) => {
  return (
    <s.Image className="BrandMidImage" src={image} alt={alt || 'photo'}/>
  )
}

export default WideImage