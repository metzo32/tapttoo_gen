import React from 'react'
import mainImage from '../assets/images/main.jpg';
import s from '../stores/styling'

export default function BrandTitle() {
  return (
    <s.BrandTitleWrapper>
      <s.StyledH1>Tapttoo</s.StyledH1>
      <s.StyledTitleP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus corrupti porro ex numquam in excepturi dolores inventore debitis perspiciatis odit nemo dolor.</s.StyledTitleP>
      <s.MainImage src={mainImage} alt='photo'/>
      <s.StyledH2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ex, sint consequatur tempore praesentium nesciunt.</s.StyledH2>
    </s.BrandTitleWrapper>
    )
}
