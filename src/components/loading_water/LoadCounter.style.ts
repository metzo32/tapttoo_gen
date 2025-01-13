import styled from "styled-components";
import { lightTheme } from "../../stores/colors";
import { CounterMove } from "../../stores/animations";

export const H4 = styled.h4`
  color: ${lightTheme.Light};
  letter-spacing: -1px;
  line-height: 55px;
  font-weight: 400;
  word-break: keep-all;
  text-align: left;
  white-space: nowrap;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  @media (max-width: 767px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 1024px) {
    font-size: 30px;
  }

  &.move-counter {
    animation: ${CounterMove} 2s forwards;
  }
`;
