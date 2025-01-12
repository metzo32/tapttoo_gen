import {
  GreenButton,
  GreenButtonCircle,
  ButtonArrow,
} from "./HoverButton.style";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  value?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void);
  circle: boolean;
  text: React.ReactNode;
  ignoreDark?: boolean;
}

const HoverButton = ({
  type,
  value,
  className,
  onClick,
  circle,
  text,
  ignoreDark,
}: ButtonProps) => {
  return (
    <GreenButton
      onSubmit={onClick}
      type={type}
      value={value}
      className={`${circle ? "with-circle" : ""} ${
        ignoreDark ? "always-light" : ""
      } ${className}`}
    >
      {circle && (
        <GreenButtonCircle>
          <ButtonArrow />
        </GreenButtonCircle>
      )}
      {text}
    </GreenButton>
  );
};

export default HoverButton;
