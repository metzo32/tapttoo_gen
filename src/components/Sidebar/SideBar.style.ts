import styled from "styled-components";

export const Div = styled.div`
  width: 200px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: content-box;
  position: fixed;
  top: 48px;
  left: 0;
  z-index: 9999;

  pointer-events: none;

  @media (max-width: 767px) {
    top: 0;
  }

  @media (min-width: 768px) {
    top: 48px;
  }
`;

export const H3 = styled.h3`
  width: 140px;
  font-size: 42px;
  color: ${(props) => props.theme.Green};
`;

export const NavBar = styled.nav`
  background-color: ${(props) => props.theme.Light};
  width: 140px;
  height: 100%;
  padding: 50px 30px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  opacity: 0;
  visibility: hidden;

  position: absolute;
  top: 0;
  left: -120%;
  z-index: 3;
  transition: ease 0.3s;

  &.active {
    left: 0;
    transition: ease 0.3s;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.Overlay};
  z-index: 9997;
  transition: opacity 0.3s ease;
`;

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  color: ${(props) => props.theme.Grey};

  @media (max-width: 767px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Li = styled.li`
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.HoverGrey};
  }
`;
