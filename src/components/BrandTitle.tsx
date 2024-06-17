import React from 'react'
import mainImage from '../assets/images/main.jpg';
import s from '../stores/styling'

export default function BrandTitle() {
  return (
    <s.BrandTitleWrapper>
      <s.StyledH1>Tapttoo</s.StyledH1>
      <s.StyledTitleP>Lorem ipsum dolor sit amet consectetur adipisicing elit maiores placeat nihil commodi animi illo. <br /> Doloribus sint, explicabo rem quasi at dolore exercitationem aliquid obcaecati fuga neque recusandae xplicabo, ea id.</s.StyledTitleP>
      <s.MainImage src={mainImage} alt='photo'/>
      <s.StyledH2 className='gradient-title'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ex, sint consequatur tempore praesentium nesciunt.</s.StyledH2>
    </s.BrandTitleWrapper>
    )
}