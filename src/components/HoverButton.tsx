import React from "react";
import s from "../stores/styling";

interface ButtonProps {
  type? : "button" | "submit" | "reset";
  value?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  circle: boolean;
  text: string;
}

const HoverButton = ({ type, onClick, circle, text, value }: ButtonProps) => {
  return (
    <s.GreenButton onClick={onClick} type={type} value={value} className={circle ? "with-circle" : "" }>
      {circle && <s.GreenButtonCircle/>}
      {text}
    </s.GreenButton>
  );
};

export default HoverButton;
