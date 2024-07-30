import React from "react";
import s from "../stores/styling";

export default function BrandMidTitle() {
  return (
    <>
      <s.AboutDiv className="mid-title-wrapper ">
        <s.AboutDiv className="service-wrapper">
          <s.StyledH3>The service we use</s.StyledH3>
          <s.StyledUl className="section-ul">
            <s.StyledLi>Digital Marketing</s.StyledLi>
            <s.StyledLi>Content Creation</s.StyledLi>
            <s.StyledLi>Digital Strategy</s.StyledLi>
            <s.StyledLi>Branding Strategy</s.StyledLi>
          </s.StyledUl>
        </s.AboutDiv>

        <s.AboutDiv className="mid-description">
          <s.StyledH3 className="SemiTitle">
            Indivesins' Journey into <br />a Sustatinable Future
          </s.StyledH3>
          <s.StyledP className="section-p margin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            dolores voluptatibus eum impedit eligendi quae nesciunt commodi
            totam hic consectetur, deleniti soluta dolorem? Excepturi enim
            aliquid pariatur dolore? Sapiente! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eveniet labore asperiores voluptatibus
            ea cum aperiam rem sunt veniam. Voluptate sed ipsum laborum eveniet
            veritatis debitis itaque, rem voluptatum et.
          </s.StyledP>
        </s.AboutDiv>
      </s.AboutDiv>
    </>
  );
}
