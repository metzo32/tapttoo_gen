import React from "react";
import s from "../stores/styling";

interface DescriptionProps {
  alignRight: boolean;
  title: React.ReactNode;
  text: string;
}

export default function Description({alignRight, title, text,}: DescriptionProps) {
  return (
    <s.AboutDiv className={alignRight ? "alignRight" : "alignLeft"}>
      <s.AboutDiv className="column">
        <s.StyledH4 className="SemiTitle">{title}</s.StyledH4>
        <s.StyledP className="section-p">{text}</s.StyledP>
      </s.AboutDiv>
    </s.AboutDiv>
  );
}
