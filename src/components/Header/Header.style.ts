import styled, { css } from "styled-components";
import { RiHome2Line } from "react-icons/ri"; //홈
import { RxHamburgerMenu } from "react-icons/rx"; //햄버거
import { GrSearch } from "react-icons/gr"; //검색

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  position: fixed;
  z-index: 9999;

  @media (max-width: 767px) {
    background-color: ${(props) => props.theme.Light};
    width: calc(100% - 20px);
    height: 70px;
    padding: 20px 10px 0 10px;
    bottom: 0;
    box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.3);
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 4%,
      rgba(0, 0, 0, 0.2) 40%,
      rgba(0, 0, 0, 0.4) 88%
    );
    width: calc(100% - 40px);
    height: 50px;
    padding: 10px 20px;
    top: 0;
    gap: 150px;
    align-items: center;
  }
`;

export const Button = styled.button`

  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => props.theme.Grey};
  text-align: center;
  display: inline-block;
  cursor: pointer;
  border-radius: 5px;
  white-space: nowrap;

  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.HoverGrey};
  }

  @media (max-width: 767px) {
    font-size: 12px;
    height: 42px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 768px) {
    display: block;
    font-size: 18px;
  }
`;

const StyledHeaderIcon = css`
  fill: ${(props) => props.theme.Grey};
  color: ${(props) => props.theme.Grey};
  transition: color 0.3s ease, fill 0.5s ease;

  &:hover {
    fill: ${(props) => props.theme.HoverGrey};
    color: ${(props) => props.theme.HoverGrey};
  }

  @media (max-width: 767px) {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const HomeIcon = styled(RiHome2Line)`
  ${StyledHeaderIcon}
`;

export const HamburgerIcon = styled(RxHamburgerMenu)`
  ${StyledHeaderIcon}
`;

export const SearchIcon = styled(GrSearch)`
  ${StyledHeaderIcon}
`;
