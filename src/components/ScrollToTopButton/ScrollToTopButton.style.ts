import styled from "styled-components";
import { lightTheme } from "../../stores/colors";
import { MdOutlineArrowUpward } from "react-icons/md";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.Overlay};
  z-index: 9997;
  transition: opacity 0.3s ease;

  width: 100vw;
  height: 100vh;
  background-color: transparent;
  pointer-events: none;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  color: ${lightTheme.Light};
  background-color: ${lightTheme.Green};
  border-radius: 50%;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  padding: 0;
  pointer-events: auto;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 9999;

  &:hover {
    color: ${lightTheme.Light};
    background-color: ${lightTheme.HoverGreen};
    transition: 0.3s ease;
  }

  @media (max-width: 767px) {
    transform: translate(-20%, -200%);
  }

  @media (min-width: 768px) {
    transform: translate(-100%, -100%);
  }
`;

export const TopArrowIcon = styled(MdOutlineArrowUpward)`
  border-radius: 100px;
  padding: 5px;
  fill: ${lightTheme.Light};
  transition: border 0.3s ease, fill 0.5s ease;

  @media (max-width: 767px) {
    width: 22px;
    height: 22px;
  }

  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }

  @media (min-width: 1024px) {
    width: 28px;
    height: 28px;
  }
`;
