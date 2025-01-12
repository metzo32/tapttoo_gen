import styled from "styled-components";
import { FadeOut, closePop, ButtonFadeIn } from "../stores/animations";
import { lightTheme, darkTheme } from "../stores/colors";
import { ReactComponent as CheckboxBefore } from "../assets/icons/checkbox-passive.svg";
import { ReactComponent as CheckboxAfter } from "../assets/icons/checkbox-active.svg";

export const Div = styled.div`
  &.wrapper {
    height: 1400px;
    display: block;
    overflow: hidden;

    @media (max-width: 767px) {
        padding: 80px 30px;
    }

    @media (min-width: 768px) {
        padding: 170px 100px;
    }

    @media (min-width: 1024px) {
    }
  }

  &.gen-input-container {
    height: auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;

    @media (max-width: 767px) {
      width: 80%;
    }

    @media (min-width: 768px) {
      width: 50%;
    }

    @media (min-width: 1024px) {
      width: 30%;
    }
  }

  &.gen-title-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &.gen-semi-title-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    // margin: 30px 0px;
    color: ${(props) => props.theme.Grey};
  }

  &.gen-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:last-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
    }
  }

  &.water-box {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.fadeout-box {
    animation: ${FadeOut} 1s forwards;
  }

  &.gen-button-container {
    width: 30vw;
    max-width: 512px;
    min-width: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.gen-input-container {
    height: auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;

    @media (max-width: 767px) {
      width: 80%;
    }

    @media (min-width: 768px) {
      width: 50%;
    }

    @media (min-width: 1024px) {
      width: 30%;
    }
  }
`;

export const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => props.theme.LightGrey};
  border: none;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  border-radius: 5px;
  white-space: nowrap;

  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.HoverGrey};
  }
  &.water-btn {
    color: ${darkTheme.Grey};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    visibility: hidden;

    animation: ${ButtonFadeIn} 0.3s forwards;

    &:hover {
      color: ${lightTheme.White};
      transition: color 0.3 ease;
    }

    @media (max-width: 767px) {
      font-size: 18px;
    }

    @media (min-width: 768px) {
      font-size: 20px;
    }

    @media (min-width: 1024px) {
      font-size: 24px;
    }
  }
`;

export const H1 = styled.h1`
  color: ${(props) => props.theme.Green};
  text-align: left;
  text-transform: uppercase;

  @media (max-width: 767px) {
    font-size: 4rem;
    line-height: 60px;
    letter-spacing: -4px;
  }

  @media (min-width: 768px) {
    font-size: 7rem;
    line-height: 100px;
    letter-spacing: -6px;
  }

  @media (min-width: 1024px) {
    font-size: 8rem;
    line-height: 120px;
    letter-spacing: -10px;
  }
`;

export const H2 = styled.h2`
    font-family: "Arimo", sans-serif;
    color: ${(props) => props.theme.Grey};
    font-weight: 700;
    text-align: left;
    letter-spacing: -2px;
    opacity: 0.5;
    color: grey;
    text-transform: uppercase;
    white-space: nowrap;

    -webkit-text-fill-color: transparent;

    @media (max-width: 767px) {
      font-size: 28px;
      letter-spacing: -1px;

      -webkit-text-stroke: 1px ${(props) => props.theme.Grey};;
    }

    @media (min-width: 768px) {
      font-size: 48px;
      letter-spacing: 0px;

      -webkit-text-stroke: 2px ${(props) => props.theme.Grey};;
    }
`;

export const H3 = styled.h3`
  display: inline;
  letter-spacing: -1px;

  @media (max-width: 767px) {
    font-size: 1.2rem;
    line-height: 24px;
  }

  @media (min-width: 768px) {
    font-size: 1.4rem;
    line-height: 30px;
  }

  @media (min-width: 1024px) {
    font-size: 1.8rem;
    line-height: 35px;
  }
`;

export const P = styled.p`
  color: ${(props) => props.theme.Grey};
  font-size: 24px;

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }

  @media (min-width: 1024px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: ${(props) => props.theme.Grey};
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  height: 36px;
  background: transparent;
  color: ${(props) => props.theme.Grey};
  border: none;
  outline: none;
  font-size: 16px;
  cursor: pointer;
  padding: 0;
  margin: 0;
  text-indent: 0;
  box-sizing: border-box;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-transition: background-color 9999s ease-out;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
    -webkit-text-fill-color: ${(props) => props.theme.Grey} !important;
  }

  &.input-hide {
    display: none;
  }

  &.prompt-input {
    border-bottom: 2px solid ${(props) => props.theme.Grey};
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  height: auto;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;

  &.img-gen-form {
    width: 100%;
    height: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px 0px;

    &.submit-hidden {
      animation: ${closePop} 0.5s forwards;
    }
  }
`;

export const CheckboxBeforeIcon = styled(CheckboxBefore)`
  width: 20px;
  height: 20px;
  margin: 0px 5px;
`;

export const CheckboxAfterIcon = styled(CheckboxAfter)`
  width: 20px;
  height: 20px;
  margin: 0px 5px;
  color: ${(props) => props.theme.Green};
`;
