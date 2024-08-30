// @media (max-width: 767px) {

// }

// @media (min-width: 768px) {

// }

// @media (min-width: 1024px) {
// }

import styled, { css, createGlobalStyle } from "styled-components";
import { Route, Link as RouterLink } from "react-router-dom";
import {
  loadingSlide,
  moveArrow,
  bounce,
  drawLetter,
  fadeInRotate,
  openDrop,
  closeDrop,
  infiniteSlideLeft,
  animateIn,
  animateOut,
  FadeIn,
  FadeOut,
  slideUp,
  slideDown,
  shaking,
  pulse00,
  pulse01,
  pulse02,
  pulse03,
  moveUp,
  ClickAnimation,
} from "./animations";

import { lightTheme, darkTheme } from "../stores/colors";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { RiHome2Line } from "react-icons/ri"; //홈
import { GrSearch } from "react-icons/gr"; //검색
import { RxHamburgerMenu } from "react-icons/rx"; //햄버거
import { IoEyeOutline } from "react-icons/io5";

import { GoPerson } from "react-icons/go";
import { RiMailLine } from "react-icons/ri"; //메일
import { RiInstagramLine } from "react-icons/ri"; //인스타그램
import { BiLogoFacebook } from "react-icons/bi"; //페이스북
import { AiOutlineTikTok } from "react-icons/ai"; //틱톡
import { FaYoutube } from "react-icons/fa6"; //유튜브

import { ReactComponent as LetterTIcon } from "../assets/icons/letter_t.svg"; // T

import { PiSunBold } from "react-icons/pi"; //태양
import { PiMoonBold } from "react-icons/pi"; //달

import { FiArrowDownRight } from "react-icons/fi"; //대각선 화살표
import { MdOutlineArrowUpward } from "react-icons/md"; // 위 화살표
import { FaArrowRight } from "react-icons/fa6"; // 오른쪽 화살표

import { IoIosArrowBack } from "react-icons/io"; // 왼쪽 꺽쇠
import { IoIosArrowForward } from "react-icons/io"; // 오른쪽 꺽쇠
import { BiSolidDownArrow } from "react-icons/bi"; //아래 삼각형

import { TbExclamationMark } from "react-icons/tb"; //느낌표
import { GrSort } from "react-icons/gr"; //정렬
import { GoPlusCircle } from "react-icons/go"; //플러스
import { MdOutlineSmartphone } from "react-icons/md"; //스마트폰
import { LiaBirthdayCakeSolid } from "react-icons/lia"; //생일
import { IoExitOutline } from "react-icons/io5"; //로그아웃

import { ReactComponent as CheckboxBefore } from "../assets/icons/checkbox-passive.svg";
import { ReactComponent as CheckboxAfter } from "../assets/icons/checkbox-active.svg";

import { ReactComponent as Logo } from "../assets/icons/v.svg";
import { ReactComponent as HeartLine } from "../assets/icons/heart_outlined.svg";
import { ReactComponent as HeartFull } from "../assets/icons/heart_full.svg";

const Engraved = styled.div`
  background-color: #999;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: rgba(245, 245, 245, 0.5) 3px 3px 1px;
`;

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    height: 100%;
    background-color: ${(props) => props.theme.Light};
  }
`;

const Div = styled.div`
  background-color: ${(props) => props.theme.Green};

  &.App {
    min-width: 320px;
    background-color: ${(props) => props.theme.Light};
    position: relative;
    height: auto;
  }

  &.profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
  }

  &.profile-image-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    margin-bottom: 20px;
  }

  &.profile-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
  }

  &.profile-placeholder {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.Grey};
    color: white;
    border-radius: 50%;
  }

  &.profile-sidebar-container {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 20px;
  }

  &.profile-grid-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.new-img-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &.test {
    width: 100%;
    font-size: 200px;
    margin-top: 1000px;
  }

  &.cir-text-wrapper {
    width: 300px;
    height: 300px;
    border: 1px solid red;
    margin: 0 auto;
    background-color: transparent;
  }
`;

const Span = styled.span`
  display: inline-block;
  font-size: 12px;
  opacity: 0;

  &.FadeIn {
    animation: ${animateIn} 0.3s ease-in-out forwards;
  }

  &.FadeOut {
    animation: ${animateOut} 0.2s ease-in-out forwards;
  }
`;

const Line = styled.div`
width: 100%;
@media (max-width: 767px) {
    height: 1px;
}

@media (min-width: 768px) {
    height: 2px;
}

@media (min-width: 1024px) {
}

  &.carousel-line {
    background-color: ${lightTheme.White};
    
    position: absolute;
    z-index: 2;

    bottom: 20%;
    right: 0;

    @media (max-width: 767px) {
      display: none;
    }

    @media (min-width: 768px) {
      display: none;
    }

    @media (min-width: 1024px) {
    display: block;

    bottom: 16%;
    }
  }

  &.light {
    background-color: ${(props) => props.theme.White};
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, 50%);
  }

  &.infinite {
    background-color: ${(props) => props.theme.LightGrey};
    margin: 30px 0;
    display: block;
  }

  &.horizontal {
    display: block;
  }

  &.vertical {
    width: 2px;
    height: 100%;
  }

  &.dark {
    background-color: ${(props) => props.theme.Grey};
  }

  &.margin-h {
    margin: 30px 0px;
  }

  &.margin-v {
    margin: 0px 20px;
  }

  &.display-narrow {
    @media (max-width: 767px) {
      display: none;
    }

    @media (min-width: 768px) {
      display: none;
    }

    @media (min-width: 1024px) {
      display: block;
    }
  }

  &.display-mid {
    @media (max-width: 767px) {
      display: none;
    }

    @media (min-width: 768px) {
      display: block;
    }
  }

  &.footer {
    width: calc(100% - 428px);
    margin: 0px 30px;
    background-color: ${(props) => props.theme.Grey};
    opacity: 0.5;

    @media (min-width: 375px) {
     width: 0px;
    }

    @media (min-width: 768px) {
      width: calc(100% - 428px);
  }

  &.dark-mode {
    height: 1px;
    margin-bottom: 1px;
  }

`;

const Atag = styled.a`
  font-size: 16px;
  color: ${(props) => props.theme.Grey};
  text-transform: uppercase;
  text-decoration: none;
  text-align: left;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 8px;

  :hover {
    color: ${(props) => props.theme.HoverGrey};
  }

  &.light {
    color: ${(props) => props.theme.LightGrey};
    text-transform: lowercase;

    :hover {
      color: ${(props) => props.theme.Grey};
    }
  }

  &.artist-contact {
    text-align: right;
    color: ${(props) => props.theme.Grey};
    letter-spacing: -0.3px;
    text-transform: none;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.HoverGrey};
    }

    @media (max-width: 767px) {
      font-size: 12px;
      margin-top: 3px;
    }

    @media (min-width: 768px) {
      font-size: 14px;
    }

    @media (min-width: 1024px) {
      font-size: 16px;
      margin-top: 6px;
    }
  }
`;

const HeaderDiv = styled.div`
  &.header-wrapper {
    width: 100%;

    display: flex;
    flex-direction: row;

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
      background: transparent;
      width: 100%;
      height: 50px;
      padding: 0 20px;
      top: 0;
      justify-content: space-between;
      align-items: center;
    }
  }

  &.header-overlay {
    width: 100vw;
    height: 5vh;
    position: fixed;
    top: 0;
    pointer-events: none;
    z-index: 9998;
    backdrop-filter: blur(2px);

    @media (max-width: 767px) {
      display: none;
    }

    @media (min-width: 768px) {
      display: block;
    }
  }

  &.header-button-wrapper-left {
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
      width: 75%;
      height: auto;
    }

    @media (min-width: 768px) {
      width: 180px;
      height: 100%;
    }

    @media (min-width: 1024px) {
      width: 210px;
    }
  }

  &.header-button-wrapper-right {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
      width: auto;
    }

    @media (min-width: 768px) {
      width: 150px;
      height: 100%;
    }

    @media (min-width: 1024px) {
      width: 150px;
    }
  }
`;

const AboutDiv = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;

  &.wrapper {
    width: 100%;
    height: auto;
    position: relative;
    flex-direction: column;
    display: flex;

    margin: 0 auto;
  }

  &.title-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
  }

  &.mid-description {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: 767px) {
      width: 100%;
      margin-top: 60px;
    }

    @media (min-width: 768px) {
      width: 100%;
    }

    @media (min-width: 1024px) {
      width: 50%;
    }
  }

  &.description {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 40px 0px 40px 4px;

    @media (max-width: 767px) {
      width: 100%;
    }

    @media (min-width: 768px) {
      width: 100%;
    }

    @media (min-width: 1024px) {
      width: 50%;
    }
  }

  &.column {
    width: 57.8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    align-items: flex-start;
  }

  &.mid-title-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    z-index: 0;
    padding-left: 5px;

    @media (max-width: 511px) {
      flex-direction: column;
    }

    @media (min-width: 512px) {
    }

    @media (min-width: 768px) {
      height: 650px;
    }

    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }

  &.bottom-title-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 200px;
  }

  &.column-display {
    flex-direction: column;
    margin-left: 5px;
  }

  &.about-button-box {
    width: 200px;
    margin-left: 4px;
    margin-bottom: 20px;
  }

  &.box {
    flex-direction: column;
  }
`;

const SectionContainer = styled.div`
  width: 100%;
  position: relative;

  &.section-main {
    margin-top: 50px;
  }
`;

const BrandTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;

  &.MarginBottom {
    margin-bottom: 200px;
  }
`;

const StyledH1 = styled.h1`
  color: ${(props) => props.theme.Green};
  font-size: 155px;
  font-weight: 400;
  line-height: 140px;
  margin: 0px;
  transform: scaleX(1);
  transform-origin: center;
  display: inline-block;

  @media (max-width: 767px) {
    font-size: 50px;
    line-height: 70px;
    letter-spacing: -4px;
  }

  @media (min-width: 768px) {
    font-size: 110px;
    line-height: 160px;
    letter-spacing: -10px;
  }

  @media (min-width: 1024px) {
    font-size: 155px;
    line-height: 210px;
    letter-spacing: -12px;
  }

  &.login-title {
    white-space: nowrap;
    margin: 0 auto;
    margin-bottom: 100px;
  }

  &.gen-title {
    color: ${lightTheme.Light};
    line-height: 135px;
    text-align: left;
  }

  &.brand-title {
    @media (max-width: 405px) {
      font-size: 45px;
      line-height: 50px;
      margin-bottom: 25px;
    }

    @media (min-width: 405px) {
      font-size: 60px;
      line-height: 60px;
      margin-bottom: 30px;
    }

    @media (min-width: 540px) {
      font-size: 80px;
      line-height: 80px;
      margin-bottom: 20px;
    }

    @media (min-width: 768px) {
      font-size: 110px;
      line-height: 110px;
      margin-bottom: 30px;
    }

    @media (min-width: 1024px) {
      font-size: 150px;
      line-height: 160px;
      margin-bottom: 40px;
    }

    @media (min-width: 1220px) {
      font-size: 180px;
      line-height: 180px;
      margin-bottom: 50px;
    }
  }

  &.career-title {
    margin-bottom: 200px;
  }

  &.career-detail-title {
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 20px;

    @media (max-width: 767px) {
      font-size: 50px;
      line-height: 70px;
    }

    @media (min-width: 768px) {
      font-size: 70px;
      line-height: 105px;
    }

    @media (min-width: 1024px) {
      font-size: 120px;
      line-height: 160px;
    }
  }

  &.new-artists-title {
    text-align: left;
  }

  &.contact-title {
    text-align: right;
    color: ${(props) => props.theme.Grey};
  }

  &.article-name {
    box-sizing: content-box;
    color: ${lightTheme.White};
    opacity: 0.5;
    font-size: 120px;
    text-align: center;
    line-height: 110px;
    text-align: right;
    white-space: nowrap;
    position: absolute;
    bottom: 0;
    right: 0;

    @media (max-width: 767px) {
      display: none;
    }

    @media (min-width: 768px) {
      display: block;
      font-size: 90px;
    }

    @media (min-width: 1024px) {
      font-size: 120px;
    }

    :hover {
      @media (max-width: 767px) {
        font-size: 40px;
      }

      @media (min-width: 768px) {
        font-size: 60px;
      }

      @media (min-width: 1024px) {
        font-size: 90px;
      }
    }
  }

  &.artist-page-title {
    text-align: left;
    color: ${(props) => props.theme.Grey};
    margin: 0;
    padding: 0;
    display: block;

    @media (max-width: 767px) {
      font-size: 60px;
      letter-spacing: -6px;
    }

    @media (min-width: 768px) {
      font-size: 200px;
      letter-spacing: -16px;
    }

    @media (min-width: 1024px) {
      font-size: 200px;
      letter-spacing: -16px;
    }
  }

  &.warning {
    color: ${lightTheme.Green};
    font-size: 28px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0px;

    @media (max-width: 767px) {
      font-size: 24px;
    }

    @media (min-width: 768px) {
      font-size: 28px;
    }

    @media (min-width: 1024px) {
    }
  }
`;

const StyledH2 = styled.h2`
  font-size: 30px;
  line-height: 35px;
  letter-spacing: -4px;
  color: ${(props) => props.theme.Grey};

  @media (max-width: 767px) {
  }

  @media (min-width: 768px) {
    font-size: 50px;
    line-height: 60px;
  }

  @media (min-width: 1024px) {
    font-size: 70px;
    line-height: 70px;
  }

  &.gradient-title {
    overflow: visible;
    font-weight: 300;

    transform: scaleX(1);
    transform-origin: center;

    background: -webkit-linear-gradient(
      170deg,
      rgba(46, 116, 47, 1) 40%,
      rgba(141, 194, 139, 1) 60%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background: linear-gradient(
      170deg,
      rgba(46, 116, 47, 1) 40%,
      rgba(141, 194, 139, 1) 60%
    );
    background-clip: text;
    color: transparent;

    @media (max-width: 767px) {
      font-size: 30px;
      line-height: 35px;
      letter-spacing: -2px;
      margin-top: 50px;
      margin-bottom: 100px;
    }

    @media (min-width: 768px) {
      font-size: 50px;
      line-height: 60px;
      margin-top: 120px;
      margin-bottom: 100px;
    }

    @media (min-width: 1024px) {
      font-size: 70px;
      line-height: 80px;
      margin-bottom: 190px;
    }

    &.bold {
      @media (max-width: 767px) {
        font-size: 40px;
        line-height: 45px;
        margin: 40px 0px;
      }

      @media (min-width: 768px) {
        font-size: 90px;
        line-height: 90px;
        margin: 60px 0px;
      }

      @media (min-width: 1024px) {
        font-size: 130px;
        line-height: 130px;
        margin: 80px 0px;
      }
    }
  }

  &.profile-name {
    color: ${(props) => props.theme.Grey};
    font-size: 30px;
    letter-spacing: 0px;
    line-height: 30px;

    @media (max-width: 767px) {
      font-size: 20px;
    }

    @media (min-width: 768px) {
      font-size: 24px;
    }

    @media (min-width: 1024px) {
      font-size: 30px;
    }
  }

  &.accordion-title2 {
    white-space: nowrap;
    font-weight: 300;

    @media (max-width: 767px) {
      font-size: 30px;
      line-height: 50px;
      letter-spacing: -1px;
    }

    @media (min-width: 768px) {
      font-size: 60px;
      line-height: 60px;
    }

    @media (min-width: 1024px) {
      font-size: 90px;
      line-height: 70px;
    }
  }

  &.contact-card-title {
    width: 100%;
    text-align: left;

    @media (max-width: 767px) {
      font-size: 28px;
      letter-spacing: -2px;
    }

    @media (min-width: 768px) {
      font-size: 40px;
      letter-spacing: -2px;
    }

    @media (min-width: 1024px) {
      font-size: 48px;
      letter-spacing: -2px;
    }
  }

  &.artist-description {
    text-align: left;
    font-weight: 300;
    letter-spacing: -2px;

    @media (max-width: 767px) {
      font-size: 20px;
      line-height: 26px;
      etter-spacing: -1px;
    }

    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 40px;
      letter-spacing: -2px;
    }

    @media (min-width: 1024px) {
      font-size: 34px;
      line-height: 45px;
    }
  }
`;

const StyledH3 = styled.h3`
  color: ${(props) => props.theme.Green};
  font-size: 50px;
  letter-spacing: -3px;
  font-weight: 400;
  padding: 0;
  margin: 0;
  text-align: left;

  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 35px;
  }

  @media (min-width: 768px) {
    font-size: 50px;
    line-height: 60px;
  }

  @media (min-width: 1024px) {
    font-size: 70px;
    line-height: 80px;
  }

  &.sidebar-logo {
    margin: 0 auto;
    font-size: 43px;
  }

  &.profile-nickname {
    color: ${(props) => props.theme.LightGrey};
    letter-spacing: 0px;
    line-height: 18px;

    @media (max-width: 767px) {
      font-size: 14px;
    }

    @media (min-width: 768px) {
      font-size: 18px;
    }

    @media (min-width: 1024px) {
      font-size: 22px;
    }
  }

  &.carousel-title {
    font-family: "Archivo Black", sans-serif;
    font-weight: 600;
    letter-spacing: -1px;
    color: ${lightTheme.Light};
    display: inline-block;
    white-space: normal;

    @media (max-width: 394px) {
      font-size: 30px;
      line-height: 30px;
    }

    @media (min-width: 395px) {
      font-size: 32px;
      line-height: 32px;
    }

    @media (min-width: 555px) {
      font-size: 35px;
      line-height: 35px;
    }

    @media (min-width: 768px) {
      font-size: 50px;
      line-height: 55px;
    }

    @media (min-width: 1024px) {
      font-size: 70px;
      line-height: 70px;
    }
  }

  &.search-title {
    font-family: "Archivo Black", sans-serif;
    color: ${(props) => props.theme.Grey};
    font-size: 80px;
    font-weight: 600;
    letter-spacing: -1px;

    @media (max-width: 767px) {
      font-size: 36px;
      line-height: 45px;
    }

    @media (min-width: 768px) {
      font-size: 55px;

      & br {
        display: none;
      }
    }

    @media (min-width: 1024px) {
      font-size: 80px;
      margin-bottom: 40px;
    }

    &.upcoming {
      @media (max-width: 767px) {
        margin-bottom: 10px;
      }

      @media (min-width: 768px) {
        margin-bottom: 20px;
      }

      @media (min-width: 1024px) {
        margin-bottom: 40px;
      }
    }
  }

  &.name {
    font-family: "Archivo Black", sans-serif;
    color: ${(props) => props.theme.Grey};
    font-weight: 600;
    letter-spacing: -1px;

    @media (max-width: 767px) {
      font-size: 28px;
    }

    @media (min-width: 768px) {
      font-size: 40px;
    }

    @media (min-width: 1024px) {
      font-size: 50px;
    }
  }

  &.work-title {
    color: ${(props) => props.theme.Grey};
    font-size: 30px;
    font-weight: 500;
    letter-spacing: -2px;
    line-height: 28px;

    @media (max-width: 767px) {
      display: none;
    }

    @media (min-width: 768px) {
      font-size: 24px;
      display: block;
    }

    @media (min-width: 1024px) {
      font-size: 30px;
    }
  }

  &.search-generate {
    width: 100%;

    @media (max-width: 475px) {
      font-size: 24px;
      line-height: 32px;
      text-align: left;
    }

    @media (min-width: 476px) {
      font-size: 28px;
      line-height: 40px;
    }

    @media (min-width: 768px) {
      white-space: nowrap;
      font-size: 40px;
      line-height: 60px;
    }

    @media (min-width: 1024px) {
      white-space: nowrap;
      font-size: 70px;
      line-height: 90px;
      text-align: center;
    }

    @media (min-width: 1495px) {
      font-size: 80px;
      line-height: 110px;

      br {
        display: none;
      }
    }
  }
`;

const StyledH4 = styled.h4`
  width: auto;
  color: ${(props) => props.theme.Green};
  letter-spacing: -1px;
  line-height: 55px;
  font-weight: 400;
  text-align: left;
  white-space: nowrap;
  padding: 0;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 1024px) {
    font-size: 30px;
  }

  &.artist-detail-header {
    color: ${(props) => props.theme.Grey};
    font-weight: 600;
    line-height: 30px;
  }

  &.profile-details {
    color: ${(props) => props.theme.LightGrey};
    letter-spacing: 0px;
    line-height: 18px;

    @media (max-width: 767px) {
      font-size: 12px;
      margin-bottom: 0px;
    }

    @media (min-width: 768px) {
      font-size: 15px;
      margin-bottom: 2px;
    }

    @media (min-width: 1024px) {
      font-size: 18px;
      margin-bottom: 0px;
    }
  }

  &.profile-likes {
    color: ${(props) => props.theme.Grey};
    letter-spacing: 0px;
    line-height: 18px;

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

  &.event-title {
    color: ${(props) => props.theme.Grey};

    @media (max-width: 767px) {
      font-size: 16px;
    }

    @media (min-width: 768px) {
      font-size: 18px;
    }

    @media (min-width: 1024px) {
      font-size: 26px;
    }
  }

  &.today-title {
    color: ${(props) => props.theme.Grey};
  }

  &.work {
    font-size: 30px;
    line-height: 1;
    color: ${(props) => props.theme.Grey};

    @media (max-width: 767px) {
      font-size: 20px;
    }

    @media (min-width: 768px) {
      font-size: 24px;
    }

    @media (min-width: 1024px) {
      font-size: 30px;
    }
  }

  &.brand-text {
    color: ${(props) => props.theme.Grey};
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 20px;
    margin-left: 5px;
  }
`;

const StyledP = styled.p`
  color: ${(props) => props.theme.Grey};
  font-weight: 300;
  text-align: left;
  padding: 0;

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
    line-height: 28px;
  }

  &.about-first-title {
    text-align: center;

    @media (max-width: 405px) {
      margin-bottom: 25px;
    }

    @media (min-width: 405px) {
      margin-bottom: 30px;
    }

    @media (min-width: 540px) {
      margin-bottom: 20px;
    }

    @media (min-width: 768px) {
      margin-bottom: 30px;
    }

    @media (min-width: 1024px) {
      margin-bottom: 40px;
    }

    @media (min-width: 1220px) {
      margin-bottom: 50px;
    }
  }
  }

  &.about-last-title {
    color: ${(props) => props.theme.Green};
    text-align: center;

    @media (max-width: 767px) {
      width: 90%;
      margin: 0 auto;
      margin-bottom: 50px;
    }

    @media (min-width: 768px) {
      width: 100%;
      margin: 0 auto;
      margin-bottom: 50px;
    }

    @media (min-width: 1024px) {
      margin: 0 auto;
      margin-bottom: 50px;
    }
  }

  &.section-p {
    @media (max-width: 767px) {
    }

    @media (min-width: 768px) {
    }

    @media (min-width: 1024px) {
    }

    &.margin {
      @media (max-width: 767px) {
        margin-top: 20px;
      }

      @media (min-width: 768px) {
        margin-top: 10px;
      }

      @media (min-width: 1024px) {
        margin-top: 40px;
      }
    }
  }

  &.event-address {
    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 15px;
    }

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 18px;
    }

    @media (min-width: 1024px) {
      font-size: 20px;
      line-height: 30px;
    }
  }

  &.career-info {
    width: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  &.accordion-number {
    display: inline;
    width: auto;
    height: 20px;

    @media (max-width: 767px) {
      margin: 15px 10px;
    }

    @media (min-width: 768px) {
      margin: 10px 30px 0px 15px;
    }
  }

  &.card-title {
    color: ${lightTheme.Grey};
    font-weight: 500;
    font-size: 32px;
    margin-top: 30px;
    letter-spacing: -0.5px;
  }

  &.card-semititle {
    color: ${lightTheme.Grey};
    font-size: 20px;
    line-height: 22px;
    opacity: 0.7;
    margin-top: 10px;
  }

  &.card-text {
    color: ${lightTheme.Grey};

    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 20px;
    }

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 24px;
    }

    @media (min-width: 1024px) {
    }
  }

  &.hashtag {
    margin: 10px 0px 10px 0px;
  }

  &.contact-info {
    font-size: 16px;
    text-transform: uppercase;
  }

  &.footer-copyright {
    font-size: 12px;
    width: auto;

    @media (max-width: 767px) {
      height: 25px;
    }

    @media (min-width: 768px) {
      height: 30px;
    }

    @media (min-width: 1024px) {
    }
  }

  &.artist-contact-left {
    white-space: nowrap;
    font-weight: bold;
    margin-left: 5px;
    margin-top: 5px;
  }

  &.artist-interview {
  }

  &.number {
    font-size: 16px;
    font-weight: 500;
  }

  &.modal-text {
    color: ${lightTheme.Grey};
    font-size: 16px;
    line-height: 22px;
    text-align: center;
  }

  &.small {
    @media (max-width: 767px) {
      font-size: 12px;
    }

    @media (min-width: 768px) {
      font-size: 14px;
    }

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }

  &.infinite-text {
    font-family: "Tourney", sans-serif;
    font-weight: 200;
    font-size: 60px;
    color: ${(props) => props.theme.LightGrey};
    white-space: nowrap;

    animation: ${infiniteSlideLeft} 24000s linear infinite;
  }

  &.work-description {
    margin-top: 10px;
  }

  &.search-top-des-main {
    width: calc(50% - 15px);
    font-weight: 500;

    @media (max-width: 767px) {
      font-size: 18px;
      line-height: 20px;
    }

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 22px;
    }

    @media (min-width: 1024px) {
      font-size: 22px;
      line-height: 28px;
    }

    @media (min-width: 1258px) {
      font-size: 28px;
      line-height: 32px;
    }
  }

  &.search-top-des-sub {
    width: calc(50% - 15px);

    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 20px;
    }

    @media (min-width: 768px) {
      font-size: 12px;
      line-height: 20px;
    }

    @media (min-width: 1024px) {
      font-size: 15px;
      line-height: 24px;
    }

    @media (min-width: 1258px) {
      font-size: 18px;
      line-height: 30px;
    }
  }

  &.loading-text {
    color: ${darkTheme.Grey};
    @media (max-width: 767px) {
      font-size: 3vw;
      line-height: 3vw;
    }

    @media (min-width: 768px) {
      font-size: 2vw;
      line-height: 2vw;
    }

    @media (min-width: 1024px) {
      font-size: 1.5vw;
      line-height: 1.5vw;
    }

    &.bold {
      font-weight: 600;
      letter-spacing: -1px;

      @media (max-width: 767px) {
        font-size: 4vw;
        line-height: 4vw;
      }

      @media (min-width: 768px) {
        font-size: 3vw;
        line-height: 3vw;
      }

      @media (min-width: 1024px) {
        font-size: 2vw;
        line-height: 2vw;
      }
    }
  }
`;

const Mask = styled.div`
  &.mask-wrapper {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    position: relative;
    top: 40%;
  }

  &.mask-container {
    min-height: 100vh;
    padding: clamp(1rem, 2vw, 5rem);
    display: flex;
    align-items: center;
  }

  &.circle-mask {
    --clip: circle(600px at 50%);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    background: linear-gradient(
      306deg,
      rgba(246, 105, 0, 1) 0%,
      rgba(245, 139, 46, 1) 50%,
      rgba(245, 86, 46, 1) 100%
    );
    -webkit-clip-path: var(--clip);
    clip-path: var(--clip);

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Loading = styled.div`
  &.loading-wrapper {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
`;

const MaskText = styled.div`
  &.text-contatiner {
    width: 100%;
    height: 50%;
    overflow: hidden;
    position: absolute;

    display: flex;
    flex-direction: column-reverse;

    @media (max-width: 767px) {
    height: 40%;
    }

    @media (min-width: 768px) {
    height: 50%;
    }

    @media (min-width: 1024px) {
        height: 60%;
    }
  }

  &.white-box {
    width: 100%;
    flex-grow: 1; 
  background-color: ${lightTheme.Light};
  }

  &.small-text-container {
    height: 20%;
    background-color: ${lightTheme.Light};

    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;

    z-index: 1;

    @media (max-width: 767px) {
      width: calc(100vw - 20px);
      padding: 0 10px;
    }

    @media (min-width: 768px) {
      width: calc(100vw - 40px);
      padding: 0 20px;
    }
  }

  &.small-text-box {
    font-size: 12px;
    letter-spacing: 0;

    display: flex;
    flex-direction: column;
  }

  &.loading-title {
    width: 200%;
    background-color: ${lightTheme.Light};

    color: #000;
    font-size: 31vw;
    font-weight: 600;
    line-height: 1em;
    letter-spacing: -2vw;
    text-align- bottom;
    margin: 0;
    
    position: absolute;
    bottom: 0;
    left: 50%;
    transform-origin: bottom;
    transform: translateX(-50%) translateY(18%); 

     mix-blend-mode: lighten;
     animation: ${loadingSlide} 1.5s ease;
  }
  
  &.fake-box {
    display: block;
    width: 100%;
    margin: 0;

    color: transparent;
    font-size: 22vw;
    font-weight: 600;
    line-height: 1em;
    letter-spacing: -2vw;
    text-align- bottom;
  }
`;

const CirText = styled.span`
  &.splitting {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    position: relative;
    margin: auto;
    border-radius: 50%;
    border: 1px solid green;
  }

  &.splitting .char {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: 0 0;
    opacity: 0;
    animation: ${fadeInRotate} 2s ease forwards;
  }
`;

const CareerDiv = styled.div`
  &.career-row {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    padding: 0 20px;
    justify-content: space-between;
    position: relative;
  }

  &.career-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    align-items: flex-start;
  }
`;

const CareerItem = styled.div`
  width: calc(100% / 4);
  aspect-ratio: 1 / 1;
  overflow: hidden;
  position: relative;
  filter: brightness(1);
  cursor: pointer;

  :hover {
    filter: brightness(0.5);
    transition: 0.3s ease;
  }

  &.half {
    width: calc(100% / 2);
    height: 800px;
    aspect-ratio: 1 / 1;
  }
`;

const Accordion = styled.div`
  &.accordion-wrapper {
    margin-top: 50px;
    width: 100%;
  }

  &.acc {
    max-height: auto;
    position: relative;
  }

  &.acc-open {
    max-height: auto;
    padding-bottom: 50px;
    position: relative;
  }

  &.item-box {
    width: calc(100% - 40px);
    height: 90px;

    display: flex;
    flex-direction: row;
    transition: transform 0.3s ease;
  }

  &.border-container {
    position: relative;

    @media (max-width: 767px) {
      height: 50px;
    }

    @media (min-width: 768px) {
      height: 100px;
    }

    @media (min-width: 1024px) {
      height: 114px;
    }
  }

  &.accordion-border {
    width: calc(100% - 48px);
    height: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    margin: 0px 20px;

    @media (max-width: 767px) {
      border: 2px solid ${(props) => props.theme.Grey};
      border-bottom: none;
    }

    @media (min-width: 768px) {
      border: 4px solid ${(props) => props.theme.Grey};
      border-bottom: none;
    }
  }

  &.accordion-title-wrapper {
    width: calc(100% - 40px);
    height: 90px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;

    @media (max-width: 767px) {
      height: 40px;
      position: absolute;
      top: 0px;
      left: 28px;
    }

    @media (min-width: 768px) {
    }

    @media (min-width: 1024px) {
    }

    &:hover .accordion-number {
      transition: transform 0.3s ease;
      transform: translateY(-5px);
      color: ${(props) => props.theme.Green};
    }

    &:hover .accordion-title2 {
      transition: transform 0.3s ease;
      transform: translateY(-5px);
      color: ${(props) => props.theme.Green};
    }
  }

  &.cardbox {
    width: calc(100% - 40px);
    max-height: 0px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    opacity: 0;
    overflow: hidden;

    transition: max-height 0.3s ease, opacity 0.5s ease;
  }

  &.cardbox-open {
    width: calc(100% - 40px);
    height: 850px;
    max-height: 850px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    opacity: 1;
    overflow: hidden;

    overflow: visible;
    transition: max-height 0.3s ease, opacity 0.5s ease;
  }
`;

const CareerDetail = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  &.wrapper {
    height: auto;
    margin-top: 50px;
  }

  &.img-container {
    width: 100%;
    height: auto;
  }

  &.accordion-title-wrapper {
    width: calc(100% - 40px);
    height: auto;
    padding: 30px 20px 15px 20px;
    display: flex;
    flex-direction: column;

    &:hover .accordion-number {
      transition: transform 0.3s ease;
      transform: translateY(-5px);
      color: ${(props) => props.theme.Green};
    }

    &:hover .accordion-title2 {
      transition: transform 0.3s ease;
      transform: translateY(-5px);
      color: ${(props) => props.theme.Green};
    }
  }

  &.card-item-container {
    width: 500px;

    height: 500px;
    position: relative;
    top: 180px;
  }

  &.card-title-box {
  }

  &.card-item,
  &.card-item-next {
    width: 400px;
    height: 400px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: rgba(238, 237, 235, 0.8);
    border: 1px solid ${lightTheme.Grey};
    padding: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  &.card-item {
    z-index: 2;
    opacity: 1;
  }

  &.card-item-next {
    z-index: 1;
    opacity: 0;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  }

  .cardImage {
    width: 400px;
    height: 400px;
    border-radius: 10px;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0.5;
    overflow: hidden;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .card-item-container:hover .card-item {
    opacity: 0;
    transform: translateX(30px) translateY(200px) rotate(2deg);
  }

  .card-item-container:hover .card-item-next {
    background-color: rgba(238, 237, 235, 1);
    opacity: 1;
    transform: translateX(30px) translateY(200px) rotate(2deg);
    z-index: 3;
  }

  .card-item-container:hover .cardImage {
    opacity: 1;
    z-index: 3;
    transform: translateX(-25px) translateY(-100px) rotate(-5deg);
  }

  .mid-title-container {
    height: 200px;
    margin-top: 200px;
  }
`;

const Username = styled.div`
  font-size: 24px;
`;

const DrawIcon = styled.div`
  &.draw-wrapper {
    width: 500px;
    height: 500px;
    margin: 0 auto;
    margin-top: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.icon {
    width: 200px;

    path {
      stroke-width: 5;
      stroke: ${(props) => props.theme.Green};

      stroke-dasharray: 1642;
      stroke-dashoffset: 1642;

      animation: ${drawLetter} 1s ease forwards;
    }
  }
`;

const StyledUl = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
    margin; 0;
    position: relative;

    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 20px;
    }

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 30px;
    }

    @media (min-width: 1024px) {
      font-size: 24px;
      line-height: 40px;
    }

    &.dropdown-box {
      width: 120px;
      height: 200px;
      background-color:  ${(props) => props.theme.Light};
      border-radius: 10px;
      padding: 20px 0;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      opacity: 0;

      position: fixed;
      z-index: 9999;

      @media (max-width: 767px) {
        right: 12px;
        bottom: 180px;
        transform: translate(-20%, -150%);
      }

      @media (min-width: 768px) {
        right: 35px;
        bottom: 160px;
        transform: translate(-100%, -100%);
      }

      &.open-drop-left {
        animation: ${openDrop} 0.3s forwards;
        transform-origin: top right;
      }

      &.close-drop-left {
        animation: ${closeDrop} 0.3s forwards;
        transform-origin: top right;
      }

    }

    &.section-ul {
      justify-content: space-between;

      @media (max-width: 767px) {
        height: 20%;
        margin-top: 20px;
      }

      @media (min-width: 768px) {
        height: 30%;
        margin-top: 40px;
      }

      @media (min-width: 1024px) {
        height: 38%;
        }
    }

    &.nav-menu-items {
      height: auto;
      display: flex;
      justify-content: flex-start;
      margin-left: 38px;

      @media (max-width: 767px) {
        margin-bottom: 20px;   
      }

      @media (min-width: 768px) {
        margin-bottom: 30px;   
      }

      @media (min-width: 1024px) {
        margin-bottom: 40px;   
      }
    }
      
    &.article-ul {
      display: flex;
      padding: 0;
      margin; 0;
      position: relative;
    }
`;
const StyledLi = styled.li`
  color: ${(props) => props.theme.Green};
  margin-bottom: 5px;

  @media (max-width: 767px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 24px;
  }

  &.name-li {
    color: ${(props) => props.theme.HoverGrey};
  }

  &.square-test {
    position: absolute;
    top: 0px;
    left: 0px;
    width: calc(100%);
    height: calc(100vh - 50px - 2px);
    margin: 0;
    display: flex;
  }

  &.dropdown-li {
    margin-bottom: 0px;
  }

  &.sidebar-text {
    margin: 0;
    line-height: 35px;
  }
`;

const ArticleCard = styled.div`
  position: relative;
  width: calc(100% - 2px);
  height: calc(100vh - 50px - 2px);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;

  &.article-random-image {
    object-fit: cover;
    object-position: center;
  }

  &.loading-image {
    width: 100vw;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &.BrandMidImage {
    height: auto;
    object-fit: cover;
  }

  &.long-img {
    width: 100%;
    aspect-ratio: 4/1;
    overflow: hidden;
    object-fit: cover;

    position: relative;
  }

  &.artist-bg {
    width: 100%;
    opacity: 0.6;
  }

  &.article-fetched-img {
    overflow: hidden;
    margin: 0;
  }

  &.card-image {
    object-fit: cover;
    overflow: hidden;
  }

  &.new-artist-img {
    width: calc(100% / 3);
    margin: 0;
    object-fit: cover;
  }

  &.test {
    height: 1500px;
    object-fit: cover;
    margin-top: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.carousel-image {
    object-fit: cover;
    width: 100%;
    @media (max-width: 767px) {
      aspect-ratio: 3/2;
    }

    @media (min-width: 768px) {
      aspect-ratio: 3/2;
    }

    @media (min-width: 1024px) {
      aspect-ratio: 5/2;
    }
  }

  &.proflie-label {
    width: 100%;
    height: 40%;
    object-fit: cover;
  }

  &.artist-page-main {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  &.search-circle-profile {
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);

    @media (max-width: 767px) {
      width: 150px;
      aspect-ratio: 1/1;
    }

    @media (min-width: 768px) {
      width: 180px;
      aspect-ratio: 1/1;
    }

    @media (min-width: 1024px) {
      width: 200px;
      aspect-ratio: 1/1;
    }
  }

  &.search-square {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    overflow: hidden;

    &.hover-event {
      transition: filter 0.3s ease;

      &:hover {
        filter: brightness(0.5);
      }
    }
  }

  &.search-wide {
    width: 100%;
  }

  &.artist-page-profile {
    width: calc(100% + 40px);
    aspect-ratio: 4/1;
    margin-left: -20px;
    object-fit: cover;

    @media (max-width: 767px) {
      aspect-ratio: 1/1;
    }

    @media (min-width: 768px) {
    }

    @media (min-width: 1024px) {
      aspect-ratio: 4/1;
    }
  }

  &.artist-page-portfolio {
    width: calc(100% + 40px);
    margin-left: -20px;
  }
`;

const Sticky = styled.div`
  &.main-content {
    width: 100%;
    height: 300vh;
    margin-top: 50px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    background-color: ${lightTheme.Light};
  }

  &.sticky {
    border: 1px solid blue;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: ${lightTheme.LightGrey};

    position: sticky;
    top: 0;
  }
  &.section {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: pink;
  }
  &.title {
    border-top: 1px solid black;
    background-color: #22ee66;
  }
  &.content {
  }
`;

const Modal = styled.div`
  user-select: none;
  font-family: "NanumSquare";

  &.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.Overlay};
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    animation: ${FadeIn} 0.1s ease-in-out forwards;
    z-index: 9999;

    &.closing {
      animation: ${FadeOut} 0.8s forwards;
    }
  }

  &.modal-wrapper {
    background-color: ${lightTheme.Light};
    border-radius: 10px;
    margin: 0 auto;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
    position: fixed;
    animation: ${slideUp} 0.2s ease-in-out;

    &.closing {
      animation: ${slideDown} 0.5s forwards;
    }

    @media (max-width: 767px) {
      width: 300px;
      height: 300px;
    }

    @media (min-width: 768px) {
      width: 400px;
      height: 400px;
    }

    @media (min-width: 1024px) {
    }
  }

  &.circle {
    width: 90px;
    height: 90px;
    background-color: ${lightTheme.Yellow};
    border-radius: 50%;
    border: 3px solid ${lightTheme.Light};

    position: absolute;
    left: 50%;
    transform: translate(-50%, -254%);
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
      width: 70px;
      height: 70px;
      top: calc(50% + 10px);
    }

    @media (min-width: 768px) {
      width: 90px;
      height: 90px;
      top: 50%;
    }

    @media (min-width: 1024px) {
    }
  }

  &.modal-container {
    width: 300px;
    height: 200px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);

    @media (max-width: 767px) {
      height: 160px;
    }

    @media (min-width: 768px) {
      height: 200px;
    }

    &.with-checkbox {
      @media (max-width: 767px) {
        width: 235x;
        height: 180px;
      }

      @media (min-width: 768px) {
        height: 250px;
      }

      @media (min-width: 1024px) {
      }
    }
  }

  &.checkbox-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 0px;
  }

  &.modal-button-box {
    width: 60%;
    display: flex;
    justify-content: center;

    &.two-buttons {
      justify-content: space-between;
    }
  }
`;

const Echo = styled.div`
  &.wrapper {
    overflow: hidden;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -200%);

    @media (max-width: 767px) {
      width: 180px;
      height: 90px;
      top: calc(50% + 30px);
    }

    @media (min-width: 768px) {
      width: 200px;
      height: 100px;
      top: 50%;
    }

    @media (min-width: 1024px) {
    }
  }

  &.circle00 {
    background-color: ${(props) => props.theme.Yellow};
    opacity: 0.5;
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -97%);

    animation: ${pulse00} 1s infinite;

    @media (max-width: 767px) {
      width: 82px;
      height: 82px;
    }

    @media (min-width: 768px) {
      width: 98px;
      height: 98px;
    }

    @media (min-width: 1024px) {
    }
  }

  &.circle01 {
    background-color: ${(props) => props.theme.Yellow};
    opacity: 0.3;
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -88%);

    animation: ${pulse01} 1s infinite;

    @media (max-width: 767px) {
      width: 100px;
      height: 100px;
    }

    @media (min-width: 768px) {
      width: 120px;
      height: 120px;
    }
  }

  &.circle02 {
    background-color: ${(props) => props.theme.Yellow};
    opacity: 0.2;
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -81%);

    animation: ${pulse02} 1s infinite;

    @media (max-width: 767px) {
      width: 120px;
      height: 120px;
    }

    @media (min-width: 768px) {
      width: 140px;
      height: 140px;
    }
  }

  &.circle03 {
    width: 160px;
    height: 160px;
    background-color: ${(props) => props.theme.Yellow};
    opacity: 0.1;
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -76%);

    animation: ${pulse03} 1s infinite;

    @media (max-width: 767px) {
      width: 140px;
      height: 140px;
    }

    @media (min-width: 768px) {
      width: 160px;
      height: 160px;
    }
  }
`;

const Home = styled.div`
  &.home-wrapper {
    width: 100%;
    height: 1200px;
    display: flex;
    flex-direction: column;
    margin: 50px 0px 20px 0px;
  }

  &.image-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
  }
`;

const Search = styled.div`
  margin: 0;

  &.search-wrapper {
    width: 100%;
    height: auto;
    margin-top: 50px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    text-align: left;
  }

  &.top-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    position: relative;

    &.column {
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: 767px) {
      margin-bottom: 50px;
    }

    @media (min-width: 768px) {
      margin-bottom: 100px;
    }

    @media (min-width: 1024px) {
      margin-bottom: 150px;
    }
  }

  &.circles-container {
    width: 100%;
    aspect-ratio: 10/1;

    display: flex;
    align-items: center;
    flex-direction: row;
    overflow: hidden;

    @media (max-width: 767px) {
    }

    @media (min-width: 768px) {
    }

    @media (min-width: 1024px) {
    }
  }

  &.sub-container {
    width: calc(100% - 160px);
    height: auto;
    display: flex;

    @media (max-width: 767px) {
      width: calc(100% - 40px);
      margin: 0px 20px 150px 20px;
      flex-direction: column;
      justify-content: space-between;
    }

    @media (min-width: 768px) {
      width: calc(100% - 80px);
      margin: 0px 40px 150px 40px;
      flex-direction: row;
      justify-content: space-between;
    }

    @media (min-width: 1024px) {
      width: calc(100% - 160px);
      margin: 0px 80px 150px 80px;
    }
  }

  &.extra-margin {
    margin: 0px 80px 150px 80px;

    @media (max-width: 767px) {
      margin: 0px 20px 150px 20px;
    }

    @media (min-width: 768px) {
      margin: 0px 40px 150px 40px;
    }

    @media (min-width: 1024px) {
      margin: 0px 80px 150px 80px;
    }
  }

  &.mid-container {
    height: 100%;
    display: flex;
    flex-direction: column;

    &.left {
      @media (max-width: 767px) {
        width: 100%;
      }

      @media (min-width: 768px) {
        width: calc(60% - 28px);
      }

      @media (min-width: 1024px) {
      }
    }

    &.right {
      @media (max-width: 767px) {
        width: 100%;
      }

      @media (min-width: 768px) {
        width: calc(40% - 28px);
      }

      @media (min-width: 1024px) {
      }
    }
  }

  &.search-container {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;

    &.center {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      @media (max-width: 767px) {
        width: calc(100% - 40px);
        margin: 0px 20px 200px 20px;
      }

      @media (min-width: 768px) {
        width: calc(100% - 40px);
        margin: 0px 0px 250px 40px;
      }

      @media (min-width: 1024px) {
        width: 100%;
        margin: 0 auto;
        align-items: center;
        margin: 0px 0px 250px 0px;
      }
    }
  }

  &.search-gen-titles {
    height: auto;

    @media (max-width: 767px) {
      margin-bottom: 10px;
    }

    @media (min-width: 768px) {
      margin-bottom: 40px;
    }

    @media (min-width: 1024px) {
    }
  }

  &.circle-profile-box {
    display: flex;
    flex-direction: column;

    align-items: center;

    @media (max-width: 767px) {
      margin: 0px 100px 0px 0px;
    }

    @media (min-width: 768px) {
      margin: 0px 60px 0px 0px;
    }

    @media (min-width: 1024px) {
      margin: 0px 80px 0px 0px;
    }
  }

  &.item-box {
    display: flex;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
  }

  &.line-box {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
      width: calc(100% - 40px);
      margin: 0px 20px;
    }

    @media (min-width: 768px) {
      width: calc(100% - 80px);
      margin: 0px 40px;
    }

    @media (min-width: 1024px) {
      width: calc(100% - 160px);
      margin: 0px 80px;
    }
  }

  &.event-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  &.event-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
  }

  &.event-title-box {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
      display: none;
    }

    @media (min-width: 768px) {
      width: 13%;
      margin-left: 30px;
    }

    @media (min-width: 1024px) {
    }
  }

  &.event-image-box {
    border: 1px solid blue;
    @media (max-width: 767px) {
      width: 90px;
      height: 90px;
      margin-left: 10px;
    }

    @media (min-width: 768px) {
      width: 120px;
      height: 120px;
      margin: 0px;
    }

    @media (min-width: 1024px) {
      width: 120px;
      height: 120px;
      margin: 0px;
    }
  }

  &.event-text-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 767px) {
      width: 55%;
      margin-left: 40px;
    }

    @media (min-width: 768px) {
      width: 60%;
      margin-left: 50px;
    }

    @media (min-width: 1024px) {
      margin-left: 90px;
    }
  }

  &.today-container {
    @media (max-width: 767px) {
      width: 100%;
      margin-bottom: 30px;
    }

    @media (min-width: 768px) {
      width: calc(50% - 40px);
      margin-bottom: 0px;
    }

    @media (min-width: 1024px) {
    }
  }

  &.today-image-container {
    aspect-ratio: 1/1;

    @media (max-width: 767px) {
      width: 100%;
    }

    @media (min-width: 768px) {
      width: 50%;
    }

    @media (min-width: 1024px) {
    }
  }

  &.arrow {
  }

  &.review-container {
    width: 35%;
  }

  &.review-image-container {
    height: 70%;
  }
`;

const ModalText = styled.div`
  width: 80%;
  height: auto;
`;

const ArticleGrid = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const ArticleDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  &.article-wrapper {
    flex-direction: column;
  }

  &.mid-wrapper {
    display: flex;
    flex-direction: column;
  }

  .article-cards {
    margin: 0;
    position: relative;
    z-index: 1;
    overflow: hidden;
    cursor: pointer;

    &:hover .article-grid-image {
      // filter: brightness(0.6);
      transition: filter 0.5s ease 0.5s;
    }

    &:hover .article-name {
      font-size: 100px;
      letter-spacing: -4px;
      opacity: 1;
      transition: 0.5s ease 0.5s;
    }

    @media (max-width: 767px) {
      width: 100vw;
      aspect-ratio: 1/1;

      &:hover .article-grid-image,
      &:hover .article-name {
        filter: none;
        font-size: inherit;
        letter-spacing: inherit;
        opacity: inherit;
        transition: none;
      }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      width: 100vw;
      aspect-ratio: 16/9;
    }

    @media (min-width: 1024px) {
      width: 100vw;
      aspect-ratio: 16/9;
    }
  }

  &.article-grid-image {
    overflow: hidden;
  }

  &.article-text-container {
    width: 100%;
    height: 20%;
    margin: 0;
    box-sizing: content-box;

    position: absolute;
    bottom: 3%;
    right: 1%;
    z-index: 2;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &.heart-wrapper {
    position: absolute;
    z-index: 3;
    touch-action: manipulation;

    @media (max-width: 767px) {
      width: 50px;
      height: 50px;
      bottom: 10px;
      right: 10px;
    }

    @media (min-width: 768px) {
      width: 30px;
      height: 30px;
      top: 10px;
      right: 10px;
    }

    @media (min-width: 1024px) {
      width: 50px;
      height: 50px;
    }
  }
`;

const Portfolio = styled.div`
  &.portfolio-wrapper {
    width: calc(100vw - 40px);
    height: auto;
    margin: 0 auto;
    margin-top: 65px;

    @media (max-width: 767px) {
      width: calc(100vw - 20px);
      margin-bottom: 120px;
    }

    @media (min-width: 768px) {
      width: calc(100vw - 40px);
    }

    @media (min-width: 1024px) {
      margin-bottom: 20px;
    }
  }

  &.header-wrapper {
    width: 100%;
    height: auto;
    margin-bottom: 40px;

    display: flex;
    flex-direction: column;
  }

  &.header-container {
    height: auto;

    margin-bottom: 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 767px) {
      margin-top: 20px;
      flex-direction: column;
    }

    @media (min-width: 768px) {
      margin-top: 40px;
      flex-direction: column;

      align-items: flex-end;
    }

    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: flex-start;
    }
  }

  &.mid-box-left {
    @media (max-width: 767px) {
      width: 100%;
    }

    @media (min-width: 768px) {
      width: 100%;
    }

    @media (min-width: 1024px) {
      width: calc(60% - 10px);
    }
  }

  &.mid-box-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 767px) {
      width: 100%;
      height: 140px;
      margin-top: 30px;
    }

    @media (min-width: 768px) {
      width: 50%;
      height: 200px;
      margin-top: 20px;
    }

    @media (min-width: 1024px) {
      width: calc(30% - 10px);
      height: 200px;
      margin-top: 0px;
    }

    &.centered {
      @media (max-width: 767px) {
        align-items: center;
      }

      @media (min-width: 768px) {
        align-items: flex-start;
      }
    }
  }

  &.sns-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 767px) {
      width: 65%;
      align-items: center;
    }

    @media (min-width: 768px) {
      width: 50%;
    }

    @media (min-width: 1024px) {
    }
  }

  &.header-profile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &.header-profile-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  &.mid-wrapper {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    margin: 40px 0px;
  }

  &.work-wrapper-line {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &.work-wrapper {
    height: auto;
    display: flex;
    flex-direction: row;

    @media (max-width: 767px) {
      height: auto;
    }

    @media (min-width: 768px) {
    }

    @media (min-width: 1024px) {
    }
  }

  &.work-container-left {
    width: calc(30% - 21px);
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 767px) {
      justify-content: flex-end;
    }

    @media (min-width: 768px) {
      justify-content: space-between;
    }

    @media (min-width: 1024px) {
    }
  }

  &.work-container-right {
    width: calc(70% - 21px);
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &.work-box {
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    @media (max-width: 767px) {
      flex-direction: column;
      margin-bottom: 20px;
    }

    @media (min-width: 768px) {
      flex-direction: row;
      margin-bottom: 0px;
    }

    @media (min-width: 1024px) {
    }
  }

  &.work-div {
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
      width: 100%;
      margin-bottom: 20px;

      &:last-child {
        margin: 0;
      }
    }

    @media (min-width: 768px) {
      width: calc(50% - 11px);
      margin-bottom: 0px;
    }

    @media (min-width: 1024px) {
    }
  }

  &.img-wrapper {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
  }
`;

const Test = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000;
  font-size: 50px;

  position: sticky;
  top: 0;
  left: 0;

  &.wrapper {
    margin-top: 50px;
  }

  &.gradient {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      45deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
  }

  &.animate {
    animation: ${moveUp} 1s forwards;
  }

  &.active {
    animation: ${moveUp} 1s forwards;
  }
`;

const Carousel = styled.div`
  &.carousel-wrapper {
    position: relative;
    height: 100%;

    overflow: hidden;
    margin: 0 auto;

    @media (max-width: 767px) {
      aspect-ratio: 3/2;
    }

    @media (min-width: 768px) {
      aspect-ratio: 3/2;
    }

    @media (min-width: 1024px) {
      aspect-ratio: 5/2;
    }
  }

  &.title-box {
    height: 100%;
    position: absolute;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 767px) {
      width: 85%;
      left: 30px;
    }

    @media (min-width: 768px) {
      width: 85%;
      left: 30px;
    }

    @media (min-width: 1024px) {
      width: 65%;
      left: 30px;
    }
  }

  &.carousel-box {
    // 가상요소까지 모두 포함
    display: flex;
  }

  &.carousel-item {
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    flex: none; // 이 속성을 넣어야 화면에 1개씩 보여진다.
    position: relative;
  }

  &.progress-box {
    position: absolute;
    z-index: 1;
    bottom: 30%;
    right: 3%;

    @media (max-width: 512px) {
      display: none;
    }

    @media (min-width: 513px) {
      width: 80px;
      bottom: 22%;
      right: 4%;
    }

    @media (min-width: 1024px) {
      width: 90px;
      bottom: 32%;
      right: 3%;
    }
  }
`;

const GenDiv = styled.div`
  &.gen-wrapper {
    width: 100%;
    height: calc(100vh - 50px);
    margin-top: 50px;
    background-color: beige;
    position: relative;
  }

  &.gen-image-box {
    width: 512px;
    height: 512px;
    margin: 0 auto;
    border: 1px solid yellow;
  }

  &.gen-input-container {
    width: 30%;
    height: auto;
    background-color: pink;
    display: flex;
    flex-direction: row;
  }

  &.gen-grad-wrapper01 {
    width: calc(100% - 80px);
    height: 60%;
    padding: 0px 40px;

    display: flex;
    flex-direction: column;
    border: 1px solid red;

    position: absolute;
    bottom: 0;
    left: 0;

    background: rgb(38, 38, 38);
    background: linear-gradient(
      0deg,
      rgba(38, 38, 38, 1) 0%,
      rgba(28, 28, 28, 0) 100%
    );
  }

  &.gen-grad-wrapper02 {
    width: calc(100% - 80px);
    height: 100%;
    padding: 0px 40px;
    border: 1px solid green;

    display: flex;
    flex-direction: column;

    position: absolute;
    top: 0;
    left: 0;

    background: rgb(38, 38, 38);
    background: linear-gradient(
      0deg,
      rgba(38, 38, 38, 1) 0%,
      rgba(28, 28, 28, 0) 100%
    );
  }
`;

const Map = styled.div`
  width: 100%;
  height: 500px;
`;

const WishIconLine = styled(HeartLine)`
  width: 100%;
  height: 100%;
  fill: ${lightTheme.White};
  opacity: 0.6;
`;

const WishIconHover = styled(HeartFull)`
  width: 100%;
  height: 100%;
  fill: ${lightTheme.White};
`;

const WishIconClicked = styled(HeartFull)`
  width: 100%;
  height: 100%;
  fill: ${(props) => props.theme.Orange};
  animation: ${ClickAnimation} 0.3s ease-in-out;
`;

const SideBar = styled.div`
  width: 200px;
  height: 100%;
  padding: 0;

  &.sidebar-wrapper {
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
  }

  &.sidebar-box {
    width: 100%;
    height: auto;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const NavBar = styled.nav`
  background-color: ${(props) => props.theme.HoverGrey};
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;

  position: absolute;
  z-index: 3;

  &.nav-menu {
    background-color: ${(props) => props.theme.Light};
    left: -120%;
    transition: ease 0.3s;
    opacity: 0;
    visibility: hidden;

    display: flex;
    flex-direction: column;

    &.active {
      left: 0;
      transition: ease 0.3s;
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    @media (max-width: 767px) {
      height: calc(100% - 80px);
      padding: 40px 0px;
    }

    @media (min-width: 768px) {
      height: calc(100% - 60px);
      padding: 30px 0px;
    }

    @media (min-width: 1024px) {
      height: calc(100% - 60px);
      padding: 30px 0px;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.Overlay};
  z-index: 9997;
  transition: opacity 0.3s ease;

  &.scroll-top-box {
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    pointer-events: none;
  }
`;

const StyledLink = styled(RouterLink)`
  &.menu-texts {
    text-decoration: none;
    color: ${(props) => props.theme.Grey};
    white-space: nowrap;

    &:hover {
      color: ${(props) => props.theme.HoverGrey};
    }

    @media (max-width: 767px) {
      font-size: 16px;
    }

    @media (min-width: 768px) {
      font-size: 16px;
    }

    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }

  &.close-arrow {
    margin: 20px 10px 20px 126px;
  }
`;

const HomeImage = styled.img`
  &.LayeredImage01 {
    width: 700px;
    position: absolute;
    left: 23%;
    bottom: -20%;
    z-index: 2;
  }

  &.LayeredImage02 {
    width: 700px;
    position: absolute;
    left: 43%;
    bottom: 4%;
    z-index: 1;
  }
`;
const MainImage = styled.img`
  width: 100%;
  border-bottom-right-radius: 50% 95%;
  border-bottom-left-radius: 50% 95%;
`;

const Footer = styled.div`
  &.footer-wrapper {
    width: calc(100% - 20px);
    height: 70px;
    background-color: transparent;
    margin: 0px 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    overflow: hidden;

    @media (max-width: 767px) {
      height: auto;
      margin-bottom: 130px;
    }

    @media (min-width: 768px) {
      margin: 0;
    }
  }

  &.footer-container {
    height: auto;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
      height: auto;
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    @media (min-width: 1024px);
  }

  &.footer-icon-box {
    width: 165px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
      width: 70%;
      justify-content: space-between;
      margin: 0 auto;
    }

    @media (min-width: 768px) {
      width: 165px;
      margin: 0;
    }

    @media (min-width: 1024px) {
    }
  }

  &.copyright {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    white-space: nowrap;

    @media (max-width: 767px) {
      margin-top: 10px;
      flex-direction: column;
    }

    @media (min-width: 768px) {
      margin: 0;
      flex-direction: row;
    }
  }

  &.footer-box-left {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &.footer-box-right {
    width: 168px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
      width: 198px;
    }

    @media (min-width: 768px) {
      width: 168px;
    }
  }

  &.brand-wrapper {
    color: ${(props) => props.theme.Grey};
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 60px;

    @media (max-width: 767px) {
      width: 150px;
      margin: 0 auto;
      justify-content: center;
    }

    @media (min-width: 768px) {
      width: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0px 60px 0px 0px;
    }
  }

  &.footer-button-wrapper {
    width: 100%;
    height: 30px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 767px) {
      width: 90%;
      justify-content: space-between;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    @media (min-width: 768px) {
      width: 50%;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 0;
    }

    @media (min-width: 1024px) {
      width: 30%;
    }
  }
`;

const Contact = styled.div`
  &.contact-wrapper {
    width: 100%;
    height: auto;
    margin: 50px 0px;
  }

  &.contact-container {
    width: calc(100% - 20px);
    padding: 0px 10px 0px 10px;
  }

  &.title {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &.line {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 20px 0px 20px 0px;
  }

  &.icon-text-box {

    :hover: {
        color: red;
    }
}
    
  }

  &.card-wrapper {
    width: 100%;
    height: 560px;
    display: flex;
    flex-direction: column;

    margin-bottom: 100px;
  }

  &.card-container {
    height: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }

  &.card-box-left {
    width: 50%;
    height: calc(50% - 20px);
    position: relative;
  }

  &.card-box-right {
    width: 50%;
    height: 100%;
  }

  &.maps {
    height: 100%;
  }

  &.contact-info-box {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    position: absolute;
    left: 0;
    bottom: -250px;
  }
`;

const hr = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #acafb0;
  margin: 0 2% 0 2%;

  &.footer {
    width: calc(100% - 400px);
  }

  &.double {
    height: 2px;
    margin: 1px 120px 0 0;
  }

  &.upper-line {
    margin: 100px 0px 20px 0px;
  }

  &.lower-line {
    margin: 20px 0px 10px 0px;
  }

  &.card-line {
    width: calc(100% - 10px);
    margin: 0px 0px 10px 0px;
  }

  &.artist-page {
    width: 99%;
    margin: 0;
  }
`;

const PolicyWrapper = styled.div`
  width: 220px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Form = styled.form`
  display: flex;
  height: auto;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;

  &.login {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
  }

  &.img-gen-form {
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ProfileDiv = styled.div`
  &.profile-wrapper {
    width: 100vw;
    height: 100vh;
    position: relative;

    @media (max-width: 767px) {
      margin-bottom: 30%;
    }

    @media (min-width: 768px) {
      margin-bottom: 20px;
    }

    @media (min-width: 1024px) {
      margin-bottom: 20px;
    }
  }

  &.profile-section {
    width: 60%;
    aspect-ratio: 16/9;
    border-radius: 30px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
    background-color: ${(props) => props.theme.Light};

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 767px) {
      width: 70%;
      aspect-ratio: 3/4;
    }

    @media (min-width: 768px) {
      width: 60%;
      aspect-ratio: 4/3;
    }

    @media (min-width: 1024px) {
      width: 60%;
      aspect-ratio: 4/3;
    }

    @media (min-width: 1440px) {
      width: 60%;
      aspect-ratio: 16/9;
    }
  }

  &.user-image {
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: ${(props) => props.theme.Light};
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 767px) {
      width: 40%;
    }

    @media (min-width: 768px) {
      width: 30%;
    }

    @media (min-width: 1024px) {
      width: 20%;
    }
  }

  &.profile-text-container {
    width: 60%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 425px) {
      height: calc(65% - 15px);
      padding-top: 15px;
    }

    @media (min-width: 426px) {
      height: calc(70% - 35px);
      padding-top: 35px;
    }

    @media (min-width: 768px) {
      height: calc(70% - 50px);
      padding-top: 50px;
    }

    @media (min-width: 1024px) {
      height: calc(70% - 40px);
      padding-top: 40px;
    }
  }

  &.profile-name-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
      height: 45px;
    }

    @media (min-width: 1024px) {
      height: 60px;
      margin-bottom: 10px;
    }
  }

  &.profile-text-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
      height: 40px;
    }

    @media (min-width: 768px) {
      height: 60px;
      margin-bottom: 0px;
    }

    @media (min-width: 1024px) {
      height: 85px;
      margin-bottom: 10px;
    }
  }

  &.profile-contact-container {
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
      flex-direction: row;
      height: 45px;
    }

    @media (min-width: 768px) {
      flex-direction: column;
      height: 45px;
    }

    @media (min-width: 1024px) {
      height: 45px;
    }
  }

  &.profile-contact-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.profile-like-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
      height: 43px;
    }

    @media (min-width: 768px) {
      height: 45px;
    }

    @media (min-width: 1024px) {
      height: 48px;
    }
  }
`;

const LoginDiv = styled.div`
  &.login-wrapper {
    width: 100%;
    height: auto;
    display: flex;

    @media (max-width: 767px) {
      margin: 45px 0px 240px 0px;
    } 

    @media (min-width: 768px) {
      margin: 80px 0px;
    }

    @media (min-width: 1024px) {
      margin: 80px 0px 130px 0px;
    }
  }

  &.container {
    background-color: ${(props) => props.theme.Light};
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    transition: transform 0.4s ease;

      @media (max-width: 767px) {
        width: 250px;
        height: 490px;
        border-radius: 20px;
      }
  
      @media (min-width: 768px) {
        width: 320px;
        height: 550px;
        border-radius: 25px;

      }
  
      @media (min-width: 1024px) {
        width: 400px;
        height: 700px;
        border-radius: 35px;
      }

    &:hover {
      transform: scale(1.02);
    }
  }

  &.input-wrapper {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

      @media (max-width: 767px) {
        height: 30%;
        margin-bottom: 30px;
      }

      @media (min-width: 768px) {
        width: 77%;
        height: 30%;
        margin-bottom: 40px;
      }

      @media (min-width: 1024px) {
        width: 80%;
        height: 30%;
        margin-top: 50px;
        margin-bottom: 70px;
      }

    &.login-page-box {
      height: 25%;
      margin-bottom: 30px;
    }

    &.step01 {
      @media (max-width: 767px) {
        height: 40%;
        margin-bottom: 20px;
      }

      @media (min-width: 768px) {
        width: 80%;
        height: 40%;
        margin-bottom: 60px;
      }

      @media (min-width: 1024px) {
        width: 80%;
        height: 40%;
        margin-top: 50px;
        margin-bottom: 70px;
      }
    }

    &.step02 {

      @media (max-width: 767px) {
        width: 80%;
        height: 55%;
        margin-bottom: 0px;
      }

      @media (min-width: 768px) {
        height: 50%;
        margin-top: 20px;
      }

      @media (min-width: 1024px) {
        width: 80%;
        height: 45%;
        margin-top: 50px;
        margin-bottom: 50px;
      }
    }
}

  &.input-box {
    position: relative;
    display: flex;
    border-bottom: 2px solid ${(props) => props.theme.Grey};
    
    @media (max-width: 767px) {
      width: 100%;
      height: 25px;
    }

    @media (min-width: 768px) {
       width: 100%;
      height: 25px;
    }

    @media (min-width: 1024px) {
         width: 100%;
    height: 25px;
    }
    
    &.phonenumber-box {
      width: 200px;
      position: relative;
      display: flex;
      border-bottom: 2px solid ${(props) => props.theme.Grey};
      margin: 25px 0px 25px 15px;
    }
  }

  &.number-box {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

     &.valid Select {
      border: 2px solid ${(props) => props.theme.Green};
    }

    &.invalid Select {
      border: 2px solid ${(props) => props.theme.Orange};
      animation: ${shaking} 0.2s infinite;
    }
    }
  }

  &.countrycode-box {
    width: 90px;
    display: flex;
  }

  &.item-box {
    width: 90%;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    &.register {
      width: 100%;
      height: 50%;
      align-items: flex-start;
    }
  }

  &.checkbox-box {
    color: ${(props) => props.theme.Grey};
    width: 140px;
    display: flex;
    justify-content: space-around;

    @media (max-width: 767px) {
      align-items: flex-start;
    }

    @media (min-width: 768px) {
      align-items: center;
    }

    @media (min-width: 1024px) {
    }
  }

  &.button-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
  }
  
  &.button-wrapper {
    width: 90%;
    height: 18%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
      margin-top: 20px;
    }

    @media (min-width: 768px) {
      margin-top: 0px;
    }

    @media (min-width: 1024px) {
    margin-top: 0px;
    }

    &.login {
      height: 20%;
      margin-top: 40px;
    }
  }

  &.calandar-container {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.valid Select {
      border: 2px solid ${(props) => props.theme.Green};
    }

    &.invalid Select {
      border: 2px solid ${(props) => props.theme.Orange};
      animation: ${shaking} 0.2s infinite;
    }
  }

  &.calandar-item-box {
    width: 30%;
  }

  &.radio-container {
    width: 90%;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
      width: 98%;
      margin: 0;
    }

    @media (min-width: 768px) {
      width: 90%;
      margin-left: 10px;
    }

    Input, Label {
    cursor: pointer;
    }
  }

  &.radio-box {
    width: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Select = styled.select`
  width: 100%;
  height: 30px;
  background-color: ${(props) => props.theme.Light};
  color: ${(props) => props.theme.Grey};
  outline: 0;
  border: 2px solid ${(props) => props.theme.Grey};
  padding: 4px;
  border-radius: 8px;
  cursor: pointer;

  }
`;

const Option = styled.option``;

const Input = styled.input`
  width: 100%;
  height: 30px;
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

  &::placeholder {
    color: transparent;
  }

  &:focus::placeholder {
    color: ${(props) => props.theme.LightGrey};
  }

  &.modal-check {
    display: none;
  }

  &.remember-check {
    display: none;
  }

  &.gender-radio {
    display: none;
  }

  &.prompt-input {
    background: red;
  }
`;

const Label = styled.label`
  color: ${(props) => props.theme.Grey};
  letter-spacing: -0.1px;
  cursor: pointer;

  &.login-info {
    position: absolute;
    top: 10px;
    left: 0px;
    transform: translateY(-30%);
    transition: 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.HoverGrey};
    }

    @media (max-width: 767px) {
      font-size: 14px;
    }

    @media (min-width: 768px) {
      font-size: 16px;
    }

    ${Input}:focus + &,
      &.active {
      top: -20px;
      transform: translateY(0%);
      color: ${(props) => props.theme.Grey};
    }

    &.active.valid {
      color: ${(props) => props.theme.Green};
    }

    &.active.invalid {
      color: ${(props) => props.theme.Orange};
      animation: ${shaking} 0.2s infinite;
    }
  }

  &.remember {
    font-size: 12px;
    margin-top: 3px;
  }

  &.understand {
    width: 100px;
    font-size: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: color 0.5s ease;

    &:hover {
      color: ${(props) => props.theme.HoverGrey};

      .checkbox-icon-checked {
        @media (max-width: 767px) {
          color: ${(props) => props.theme.Green};
        }

        @media (min-width: 768px) {
          color: ${(props) => props.theme.HoverGreen};
        }
      }
    }

    .checkbox-icon-checked {
      color: ${(props) => props.theme.Green};
    }
  }

  &.modal-label,
  &.check-label {
    font-size: 12px;
    color: ${(props) => props.theme.LightGrey};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.HoverGrey};

      .checkbox-icon-checked {
        color: ${(props) => props.theme.Green};
      }
    }

    .checkbox-icon-checked {
      color: ${(props) => props.theme.Green};
    }

    &.invalid {
      color: ${(props) => props.theme.Orange};
      animation: ${shaking} 0.2s infinite;
    }

    @media (min-width: 768px) {
      font-size: 13px;

      &:hover {
        color: ${(props) => props.theme.HoverGrey};

        .checkbox-icon-checked {
          color: ${(props) => props.theme.HoverGreen};
        }
      }
    }

    @media (min-width: 1024px) {
      font-size: 14px;
    }
  }
`;

const DarkButton = styled.div`
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

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  height: 40px;
  color: ${(props) => props.theme.LightGrey};
  border: none;
  padding: 10px 20px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  border-radius: 5px;
  white-space: nowrap;

  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.HoverGrey};
  }

  &.register-back {
    position: absolute;
    margin: 0;
    padding: 10px;

    @media (max-width: 767px) {
      top: 12px;
      left: 10px;
    }

    @media (min-width: 768px) {
      top: 20px;
      left: 15px;
    }

    @media (min-width: 1024px) {
      top: 30px;
      left: 25px;
    }

    &:hover .back-button {
      stroke: ${(props) => lightTheme.HoverGrey};
      fill: ${(props) => lightTheme.HoverGrey};
      color: ${(props) => lightTheme.HoverGrey};
    }
  }

  &.footer-btn {
    @media (max-width: 767px) {
      font-size: 12px;
      margin: 0;
      padding: 10px;
    }

    @media (min-width: 768px) {
      font-size: 13px;
      margin: 4px 2px;
      padding: 10px 20px;
    }

    @media (min-width: 1024px) {
    }
  }

  &.login-btn {
    color: ${(props) => props.theme.LightGrey};
    height: 20px;
    margin: 0;
    padding: 0px 20px;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.HoverGrey};
      transition: 0.3s ease;
    }
  }

  &.dropdown-btn {
    color: ${(props) => props.theme.Green};
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    padding: 0px 20px;

    &:hover {
      color: ${(props) => props.theme.HoverGreen};
      transition: 0.3s ease;
    }
  }

  &.left {
    position: absolute;
    left: 0;
    top: 0;
  }

  &.responsive-logout {
    @media (max-width: 767px) {
      display: none;
    }

    @media (min-width: 768px) {
      display: none;
    }

    @media (min-width: 1024px) {
      display: block;
    }
  }

  &.Round {
    width: auto;
    color: ${(props) => props.theme.Green};
    border: 2px solid ${(props) => props.theme.Green};
    border-radius: 100px;
    padding: 8px 20px 8px 20px;

    &:hover {
      color: ${(props) => props.theme.White};
      background-color: ${(props) => props.theme.HoverGreen};
      border-color: ${(props) => props.theme.HoverGreen};
      transition: 0.3s ease;
    }

    &.modal {
      color: ${lightTheme.Green};

      &:hover {
        color: ${lightTheme.White};
        background-color: ${lightTheme.HoverGreen};
        border-color: ${lightTheme.HoverGreen};
        transition: 0.3s ease;
      }
    }

    &.reserve {
      margin-top: 10px;
    }
  }

  &:hover {
    color: ${(props) => props.theme.HoverGrey};
  }

  &.header-button-item {
    padding: 0;
    width: 55px;

    &:last-child {
      margin: 0;
    }

    @media (max-width: 767px) {
      height: 30px;
    }

    @media (min-width: 768px) {
      height: 100%;
    }

    @media (min-width: 1024px) {
    }
  }

  &.carousel-btn-left {
    position: absolute;
    bottom: 5%;
    left: 0;
    z-index: 1;
  }

  &.carousel-btn-right {
    position: absolute;
    bottom: 5%;
    right: 0;
    z-index: 1;
  }

  &.scroll-top-btn {
    width: 60px;
    height: 60px;
    color: ${lightTheme.Light};
    background-color: ${lightTheme.Green};
    border-radius: 50%;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
    padding: 0;
    pointer-events: auto;

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
      transform: translate(-20%, -175%);

      &:hover {
        color: ${lightTheme.Light};
        background-color: ${lightTheme.Green};
        transition: none;
      }
    }

    @media (min-width: 768px) {
      transform: translate(-100%, -100%);
    }
  }
`;

const GreenButton = styled.button`
  cursor: pointer;

  height: 38px;
  border: 2px solid ${(props) => props.theme.Green};
  border-radius: 30px;

  background-color: rgba(0, 0, 0, 0);
  font-size: 14px;
  color: ${(props) => props.theme.Green};
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
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
  }

  @media (min-width: 768px) {
    padding: 10px 20px 10px 20px;
  }
  ya &.with-circle {
    padding: 10px 15px;

    @media (max-width: 767px) {
      padding: 10px 15px;
    }
  }

  &.always-light {
    border: 2px solid ${lightTheme.Green};
    color: ${lightTheme.Green};

    &:hover {
      background-color: ${lightTheme.HoverGreen};
      border: 2px solid ${lightTheme.HoverGreen};
      color: ${lightTheme.Light};
    }
  }
`;

const GreenButtonCircle = styled.span`
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

const StyledGrid = styled.div`
  width: 100%;
  min-width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const ProfileGrid = styled.div`
  width: 1000px;
  height: 300px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 0px;

  overflow: hidden;
`;

const GridImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;

  &.gridimg01 {
    grid-column: 1 / 4;
    grid-row: 1;
  }

  &.gridimg02 {
    grid-column: 4 / 6;
    grid-row: 1;
  }

  &.gridimg03 {
    grid-column: 1 / 6;
    grid-row: 2;
  }

  &.gridimg04 {
    grid-column: 1 / 3;
    grid-row: 3;
  }

  &.gridimg05 {
    grid-column: 3 / 6;
    grid-row: 3;
  }

  &.gridlikeimg01 {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  &.gridlikeimg02 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  &.gridlikeimg03 {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
`;

const StyledCircularProgressbar = styled(CircularProgressbar)`
  .CircularProgressbar-path {
    stroke-width: 3;
    stroke: rgba(255, 255, 255, 0.8);
  }

  .CircularProgressbar-text {
    fill: #fff;
  }

  .CircularProgressbar-trail {
    stroke: rgba(255, 255, 255, 0.3);
  }
`;

const StyledIcon = css`
  width: 16px;
  height: 16px;
  stroke: ${(props) => props.theme.Grey};
  fill: ${(props) => props.theme.Grey};
  color: ${(props) => props.theme.Grey};

  &.outlined {
    width: 20px;
    height: 20px;
    border-radius: 100px;
    border: 1px solid ${(props) => props.theme.Grey};
    padding: 5px;
    transition: border 0.3s ease, fill 0.5s ease;

    &:hover {
      fill: ${(props) => props.theme.HoverGrey};
      border: 1px solid ${(props) => props.theme.HoverGrey};
    }
  }
`;

const BrandLogo = styled(Logo)`
  width: 20px;
  height: 20px;
  fill: ${(props) => props.theme.Grey};
`;

const Moon = styled(PiMoonBold)`
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

const Sun = styled(PiSunBold)`
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

const LeftIcon = styled(IoIosArrowBack)`
  ${StyledIcon};
  width: 26px;
  height: 26px;
  transition: fill 0.3s ease;

  &.carousel-arrow {
    fill: ${(props) => lightTheme.Light};
  }
`;

const RightIcon = styled(IoIosArrowForward)`
  ${StyledIcon};
  fill: white;
  width: 26px;
  height: 26px;

  &.carousel-arrow {
    fill: ${(props) => lightTheme.Light};
  }
`;

const ButtonArrow = styled(FaArrowRight)`
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

const CheckboxBeforeIcon = styled(CheckboxBefore)`
  width: 15px;
  height: 15px;
  margin: 0px 5px;
`;

const CheckboxAfterIcon = styled(CheckboxAfter)`
  width: 15px;
  height: 15px;
  margin: 0px 5px;
`;

//Header Icons
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
    width: 20px;
    height: 20px;
  }
`;

const SortIcon = styled(GrSort)`
  fill: ${lightTheme.Light};
  color: ${lightTheme.Light};
  @media (max-width: 767px) {
    width: 27px;
    height: 27px;
  }

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const OutIcon = styled(IoExitOutline)`
  color: ${(props) => props.theme.Green};
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 767px) {
    display: block;
    transform: translate(-35%, 50%);
  }

  @media (min-width: 768px) {
    display: block;
    transform: translate(-50%, 50%);
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const HomeIcon = styled(RiHome2Line)`
  ${StyledHeaderIcon}

  @media (max-width: 767px) {
    width: 26px;
    height: 26px;
    margin-top: 1px;
  }

  @media (min-width: 768px) {
    width: 21px;
    height: 21px;
    margin-top: 0px;
  }
`;

const HamburgerIcon = styled(RxHamburgerMenu)`
  ${StyledHeaderIcon}
`;

const EyeIcon = styled(IoEyeOutline)`
  ${StyledHeaderIcon}
`;

const SearchIcon = styled(GrSearch)`
  ${StyledHeaderIcon}

  @media (max-width: 767px) {
    margin-top: 2px;
  }

  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;

const ProfileIcon = styled(GoPerson)`
  ${StyledHeaderIcon}
  @media (max-width: 767px) {
    width: 28px;
    height: 28px;
    padding-bottom: 2px;
  }

  @media (min-width: 768px) {
    width: 23px;
    height: 23px;
  }
`;

const PhoneIcon = styled(MdOutlineSmartphone)`
  ${StyledHeaderIcon};
  fill: ${(props) => props.theme.LightGrey};
  margin-right: 3px;

  @media (max-width: 767px) {
    width: 15px;
    height: 15px;
  }

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const BdIcon = styled(LiaBirthdayCakeSolid)`
  ${StyledHeaderIcon};
  fill: ${(props) => props.theme.LightGrey};
  margin-right: 3px;

  @media (max-width: 767px) {
    width: 15px;
    height: 15px;
  }

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

//Footer Icons
const FaceBookIcon = styled(BiLogoFacebook)`
  ${StyledIcon}
`;

const TiktokIcon = styled(AiOutlineTikTok)`
  ${StyledIcon}
`;

const InstagramIcon = styled(RiInstagramLine)`
  ${StyledIcon}

  &.light {
    fill: ${(props) => props.theme.LightGrey};
  }
`;

const ArrowIcon = styled(FiArrowDownRight)`
  ${StyledIcon}
  fill: none;
  width: 20px;
  height: 20px;
`;

const MailIcon = styled(RiMailLine)`
  ${StyledIcon}

  &.light {
    fill: ${(props) => props.theme.LightGrey};
  }
`;

const YoutubeIcon = styled(FaYoutube)`
  ${StyledIcon}
`;

const TopArrowIcon = styled(MdOutlineArrowUpward)`
  ${StyledIcon}
  fill: ${lightTheme.Light};
  width: 28px;
  height: 28px;
`;

const MoreIcon = styled(BiSolidDownArrow)`
  ${StyledIcon}
  width: 30px;
  height: 30px;
  animation: ${bounce} 2s ease infinite;
`;

const WarnIcon = styled(TbExclamationMark)`
  font-size: 100px;
  color: ${lightTheme.White};
`;

const PlusIcon = styled(GoPlusCircle)`
  font-size: 40px;
  color: ${lightTheme.LightGrey};
`;

const s = {
  GlobalStyle,
  Engraved,
  ArticleCard,
  Accordion,
  ArticleDiv,
  ArticleGrid,
  AboutDiv,
  Line,
  Atag,
  BrandTitleWrapper,
  DarkButton,
  Button,
  Loading,
  MaskText,
  CirText,
  CareerDetail,
  CareerDiv,
  CareerItem,
  Portfolio,
  Carousel,
  Test,
  Contact,
  Div,
  ModalText,
  Footer,
  Form,
  GridImage,
  HeaderDiv,
  Modal,
  Sticky,
  Echo,
  Home,
  Search,
  HomeImage,
  hr,
  Image,
  Select,
  Option,
  Input,
  Label,
  ProfileDiv,
  LoginDiv,
  MainImage,
  GenDiv,
  Map,
  Mask,
  NavBar,
  Overlay,
  PolicyWrapper,
  ProfileGrid,
  SectionContainer,
  SideBar,
  Span,
  GreenButton,
  GreenButtonCircle,
  StyledGrid,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledLi,
  StyledLink,
  StyledP,
  StyledUl,
  Username,
  DrawIcon,

  StyledCircularProgressbar,

  BrandLogo,
  Moon,
  Sun,

  LeftIcon,
  RightIcon,
  ButtonArrow,

  CheckboxBeforeIcon,
  CheckboxAfterIcon,

  SortIcon,
  OutIcon,
  HomeIcon,
  HamburgerIcon,
  EyeIcon,
  SearchIcon,
  ProfileIcon,
  PhoneIcon,
  BdIcon,
  FaceBookIcon,
  TiktokIcon,
  InstagramIcon,
  ArrowIcon,
  MailIcon,
  YoutubeIcon,
  WishIconLine,
  WishIconHover,
  WishIconClicked,
  StyledIcon,
  StyledHeaderIcon,
  TopArrowIcon,
  MoreIcon,
  WarnIcon,
  PlusIcon,
};

export default s;
