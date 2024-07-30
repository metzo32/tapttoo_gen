import React from "react";
import s from "../stores/styling";

interface DescriptionProps {
  title: string;
  text: string;
}

export default function Description({title, text,}: DescriptionProps) {
  return (
    <s.AboutDiv className="description">
        <s.StyledH3>{title}</s.StyledH3>
        <s.StyledP className="section-p margin">{text}</s.StyledP>
    </s.AboutDiv>
  );
}
