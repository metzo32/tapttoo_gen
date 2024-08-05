import React from "react";
import { useNavigate } from "react-router-dom";
import s from "../stores/styling";

export default function BrandBottomTitle() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <s.AboutDiv className="bottom-title-wrapper">
      <s.StyledH2 className="gradient-title bold">
        Turn your dreams
        <br /> into reality with us
      </s.StyledH2>
      <s.StyledP className="about-last-title">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        <br />
        Temporibus corrupti numquam in excepturi dolores inventore debitis
        perspiciatis odit.
      </s.StyledP>
      <s.Button className="Round" onClick={() => handleNavigation("/your_custom_tattoo")}>
        나만의 도안 만들기
      </s.Button>
    </s.AboutDiv>
  );
}
