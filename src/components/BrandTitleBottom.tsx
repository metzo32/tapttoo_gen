import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from '../stores/styling'

export default function BrandTitleBottom() {

  const navigate = useNavigate()

  const handleNavigation = (path: string) => {
    navigate(path)
  }

  return (
    <s.BrandTitleWrapper className='MarginBottom'>
      <s.StyledH2 className='boldTitle'>Turn your dreams<br /> into reality with us</s.StyledH2>
      <s.StyledTitleP className="coloredP">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus corrupti numquam <br />in excepturi dolores inventore debitis perspiciatis odit.</s.StyledTitleP>
      <s.Button className='Round' onClick={() => handleNavigation('/joinus')}>아티스트 등록하기</s.Button>
    </s.BrandTitleWrapper>
    
    )
}
