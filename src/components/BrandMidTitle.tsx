import React from 'react'
import s from '../stores/styling'

export default function BrandMidTitle() {
  return (
    <s.BrandMidTitleWrapper>
      <s.ServiceWrapper>
        <s.StyledH3>The service we use</s.StyledH3>
        <s.StyledUl>
            <s.StyledLi>Digital Marketing</s.StyledLi>
            <s.StyledLi>Content Creation</s.StyledLi>
            <s.StyledLi>Digital Strategy</s.StyledLi>
            <s.StyledLi>Branding Strategy</s.StyledLi>
        </s.StyledUl>
      </s.ServiceWrapper>
      <s.ServiceDescriptionWrapper>
        <s.ServiceDescription >
            <s.StyledH4 className='SemiTitle'>Indivesins' Journey into <br />a Sustatinable Future</s.StyledH4>
            <s.StyledP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolores voluptatibus eum magni impedit eligendi quae nesciunt commodi totam hic consectetur, deleniti soluta dolorem? Excepturi enim aliquid pariatur dolore? Sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore asperiores voluptatibus ea cum aperiam rem sunt veniam. Voluptate sed ipsum laborum eveniet veritatis debitis itaque, doloribus rem voluptatum et.</s.StyledP>
        </s.ServiceDescription>
      </s.ServiceDescriptionWrapper>
    </s.BrandMidTitleWrapper>
        
    )
}

