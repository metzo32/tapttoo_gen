import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa6";
import { moveArrow } from "../../stores/animations";

export const GreenButton = styled.button`
  cursor: pointer;

  height: 38px;
  border: 2px solid ${(props) => props.theme.Green};
  border-radius: 30px;

  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => props.theme.Green};
  font-weight: 500;
  white-space: nowrap;
  text-transform: uppercase;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: border 0.5s ease, width 0.5s ease, transform 0.5s ease,
    background-color 0.5s ease, color 0.5s ease;
  transform-origin: 100% 50%;

  &:hover {
    background-color: ${(props) => props.theme.HoverGreen};
    border: 2px solid ${(props) => props.theme.HoverGreen};
    color: ${(props) => props.theme.Light};
  }

  @media (max-width: 767px) {
    padding: 10px 20px;
    font-size: 12px;
  }

  @media (min-width: 768px) {
    padding: 10px 20px 10px 20px;
    font-size: 14px;
  }

  &.with-circle {
    padding: 10px 15px;

    @media (max-width: 767px) {
      padding: 10px 15px;
    }
  }
`;

export const GreenButtonCircle = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.theme.Green};
  border-radius: 50%;
  margin-right: 10px;
  overflow: hidden;

  transition: margin 0.5s ease, transform 0.3s ease, background-color 0.5s ease;
  transform-origin: center;

  ${GreenButton}:hover & {
    transform: none; /* 부모의 scaleX 효과를 무시 */
    transform: scale(2);
    margin-right: 15px;
    background-color: ${(props) => props.theme.Light};
  }

  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonArrow = styled(FaArrowRight)`
  width: 10px;
  height: 10px;
  fill: ${(props) => props.theme.HoverGreen};
  opacity: 0;

  ${GreenButton}:hover &,
  ${GreenButton}:focus & {
    animation: ${moveArrow} 0.6s ease forwards;

    opacity: 1;
  }
`;
