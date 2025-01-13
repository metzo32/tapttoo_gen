import styled from "styled-components";
import { PiSunBold } from "react-icons/pi"; //태양
import { PiMoonBold } from "react-icons/pi"; //달

export const DarkButton = styled.div`
  width: 52px;
  height: 22px;
  border: 2px solid green;
  border-radius: 20px;

  position: relative;
  cursor: pointer;

  &.dark-circle {
    border: none;
    background-color: ${(props) => props.theme.Green};

    position: absolute;
    top: calc(58% - 11px);

    transition: left 0.3s ease;
    z-index: 1;

    @media (max-width: 767px) {
      width: 19px;
      height: 19px;
    }

    @media (min-width: 768px) {
      width: 18px;
      height: 18px;
    }

    &.dark-mode {
      left: 2px;
    }

    &.light-mode {
      left: 32px;
    }
  }
`;

export const Moon = styled(PiMoonBold)`
  fill: ${(props) => props.theme.Grey};
  width: 18px;
  height: 18px;
  position: absolute;
  top: calc(50% - 9px);
  left: 2px;

  &.off {
    opacity: 0;
  }
`;

export const Sun = styled(PiSunBold)`
  fill: ${(props) => props.theme.Grey};
  width: 16px;
  height: 16px;
  position: absolute;
  top: calc(50% - 8px);
  left: 33px;

  &.off {
    opacity: 0;
  }
`;
