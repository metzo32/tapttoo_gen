import {
  Button,
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
}

const HoverButton = ({
  type,
  value,
  className,
  onClick,
  circle,
  text,
}: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      value={value}
      className={`${circle ? "with-circle" : ""} ${className}`}
    >
      {circle && (
        <GreenButtonCircle>
          <ButtonArrow />
        </GreenButtonCircle>
      )}
      {text}
    </Button>
  );
};

export default HoverButton;
