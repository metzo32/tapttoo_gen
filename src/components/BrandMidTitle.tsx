import React from "react";
import s from "../stores/styling";
import BrandDropDescription from "./BrandDropDescription";

export default function BrandMidTitle() {

  


  return (
    <>
      <s.AboutDiv className="mid-title-wrapper ">
        <s.AboutDiv className="mid-description">
          <s.StyledH3>The service we use</s.StyledH3>
          <s.StyledUl className="section-ul">
            <s.StyledLi>Digital Marketing</s.StyledLi>
            <s.StyledLi>Content Creation</s.StyledLi>
            <s.StyledLi>Digital Strategy</s.StyledLi>
            <s.StyledLi>Branding Strategy</s.StyledLi>
          </s.StyledUl>
        </s.AboutDiv>

        <BrandDropDescription
          title={<>Tapttoo's Journey into a Sustatinable Future</>}
          text={
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              dolores voluptatibus eum impedit eligendi quae nesciunt commodi
              totam hic consectetur, deleniti soluta dolorem? Excepturi enim
              aliquid pariatur dolore? Sapiente! Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </>
          }
        />
      </s.AboutDiv>
    </>
  );
}
