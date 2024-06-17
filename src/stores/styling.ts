import styled, { keyframes } from "styled-components";
import { Route, Link as RouterLink } from "react-router-dom";

import { GoHome } from "react-icons/go"; //홈
import { GrSearch } from "react-icons/gr"; //검색
import { MdMenu } from "react-icons/md"; //햄버거

import { ReactComponent as Profile } from "../assets/icons/profile.svg";
import { RiMailLine } from "react-icons/ri"; //메일
import { RiInstagramLine } from "react-icons/ri"; //인스타그램
import { BiLogoFacebook } from "react-icons/bi"; //페이스북
import { AiOutlineTikTok } from "react-icons/ai"; //틱톡
import { FaYoutube } from "react-icons/fa6"; //유튜브

import { ReactComponent as Logo } from "../assets/icons/v.svg";
import { ReactComponent as Tapttoo } from "../assets/icons/Tapttoo.svg";
import { ReactComponent as HeartLine } from "../assets/icons/heart_outlined.svg";
import { ReactComponent as HeartFull } from "../assets/icons/heart_full.svg";

// 배경색 #eeedeb; 초록 #40A93E; 회색 #6e6560; 호버: #272423; 주황 #F66900;
// 버튼 초록: #40A93E;

const Div = styled.div`
  background-color: transparent;

  &.App {
    background-color: #eeedeb;
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
    background-color: #6e6560;
    color: white;
    font-size: 1.5em;
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

  &.search-new-wrapper {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: left;

    margin-top: 100px;
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
`;

const animateIn = keyframes`
  from {
    transform: translateY(150px);
    opacity: 0;
  }
  to {
    transform: translateY(150px);
    opacity: 1;
  }
`;

const animateOut = keyframes`
  from {
    transform: translateY(150px);
    opacity: 1;
  }
  to {
    transform: translateY(150px);
    opacity: 0;
  }
`;

const Span = styled.span`
  display: inline-block;
  font-size: 1em;
  opacity: 0;

  &.pizza {
    display: inline-block;
  }
  
  &.FadeIn {
     animation: ${animateIn} 0.3s ease-in-out forwards;
}

  &.FadeOut {
     animation: ${animateOut} 0.2s ease-in-out forwards;
}
`;

const Atag = styled.a`
  font-size: 1.1em;
  color: #6e6560;
  text-transform: uppercase;
  text-decoration: none;
  text-align: left;
    
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 8px;

  :hover {
    color: #000;
  }

  &.light {
    color: #a8a29c;
     text-transform: lowercase;

    :hover {
      color: #6e6560;
    }
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #eeedeb;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  z-index: 5;
`;

const SectionContainer = styled.div`
  width: 100%;
  position: relative;

  &.section-main {
    margin-top: 50px;
  }
`;

const SectionFrame = styled.div`
  display: flex;

  &.right {
    display: flex;
    flex-direction: column;
    margin-left: 500px;
  }

  &.carousel-frame {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.career-img-wrapper {
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;

    display: flex;
    justify-content: space-between;
  }

  &.career-img-items {
    width: calc(100% / 4);
    aspect-ratio: 1 / 1;
  }
`;

const LongImgWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;

  margin-bottom: 150px;
  position: relative;

  &.contact {
    margin: 0;
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
  font-family: "DM Serif Display", serif;
  color: #40a93e;
  font-size: 18em;
  letter-spacing: -0.05em;
  font-weight: 400;
  line-height: 110px;
  margin: 0px;
  margin-bottom: 160px;

  transform: scaleX(1);
  transform-origin: center;

  &.career-title {
    line-height: 200px;
    margin-bottom: 200px;
  }

  &.career-detail-title {
    font-family: "Roboto", sans-serif;
    font-size: 9em;
    letter-spacing: -0.05em;
    font-weight: 400;
    line-height: 150px;
    text-align: left;
  }

  &.new-artists-title {
    font-family: "Roboto", sans-serif;
    font-size: 9em;
    letter-spacing: -0.05em;
    font-weight: 400;
    line-height: 150px;
    text-align: left;
  }

  &.contact-title {
    width: 900px;
    font-family: "Roboto";
    font-size: 9em;
    font-weight: 400;
    text-align: right;
    color: #6e6560;
    letter-spacing: -0.05em;
    margin: 40px 0px 20px 0px;
  }
`;

const StyledH2 = styled.h2`
  &.gradient-title {
    overflow: visible;
    font-family: "DM Serif Display", serif;
    font-size: 4em;
    letter-spacing: -0.05em;
    font-weight: 400;
    line-height: 65px;
    padding: 0;
    margin: 0 auto;
    margin-top: 120px;
    margin-bottom: 200px;

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
  }

  &.bold {
    width: 100%;
    font-size: 11em;
    line-height: 170px;
    margin-bottom: 0px;
    padding-bottom: 20px;
  }

  &.accordion-title2 {
    display: inline-block;
    width: 100%;
    height: 100px;
    cursor: pointer;

    font-family: "Roboto", sans-serif;
    color: black;
    font-size: 5em;
    letter-spacing: -0.05em;
    font-weight: 400;
    text-align: left;
    padding: 0;
    margin: 0;

    &.active {
      color: blue;
    }
  }

  &.artist-name {
    font-size: 4em;
    font-weight: bold;
    letter-spacing: -0.05em;
  }

  &.contact-card-title {
    width: 100%;
    font-size: 3em;
    text-align: left;
  }
`;

const StyledH3 = styled.h3`
  display: flex;
  font-family: "DM Serif Display", serif;
  color: #40a93e;
  font-size: 3.3em;
  letter-spacing: -0.05em;
  font-weight: 400;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  transform: scaleX(1);
  transform-origin: center;
`;

const StyledH4 = styled.h4`
  width: 90%;
  font-family: "DM Serif Display", serif;
  color: #40a93e;
  font-size: 3.3em;
  letter-spacing: -0.05em;
  line-height: 55px;
  font-weight: 400;
  text-align: left;
  white-space: nowrap;
  padding: 0;
  margin: 0;

  &.SemiTitle {
    font-size: 4em;
    line-height: 65px;
  }
`;
const StyledTitleP = styled.p`
  width: 70%;
  color: #6e6560;
  font-size: 1.5em;
  line-height: 40px;
  text-align: center;

  &.coloredP {
    color: #40a93e;
    font-weight: bold;
    margin-top: 100px;
    margin-bottom: 30px;
  }
`;

const StyledP = styled.p`
  width: 100%;
  color: #6e6560;
  font-size: 1.3em;
  text-align: left;

  &.section-p {
    line-height: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  &.article-text {
    text-align: right;
    font-size: 1.2em;
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
    margin: 10px 30px 0px 15px;
  }

  &.card-title {
    font-weight: bold;
    font-size: 2em;
    margin-top: 30px;
  }

  &.card-semititle {
    font-size: 1.2em;
    line-height: 25px;
    opacity: 0.7;
    margin-top: 10px;
  }

  &.card-text {
    margin-top: 250px;
    line-height: 25px;
  }

  &.hashtag {
    margin: 10px 0px 10px 0px;
  }

  &.contact-info {
    font-size: 1.1em;
    text-transform: uppercase;
  }

  &.footer-copyright {
    font-size: 1.2em;
    width: auto;
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

const MaskText = styled.p`
  font-family: "DM Serif Display", serif;
  color: #40a93e;
  font-size: 48em;
  letter-spacing: -0.05em;
  font-weight: 400;
  line-height: 110px;
  margin: 0px;

  transform: scaleX(1);
  transform-origin: center;

  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);

  &.masked {
    color: #eeedeb;
  }
`;

const BrandMidTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  z-index: 0;
`;

const ServiceWrapper = styled.div`
  width: 29.48%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

const ServiceDescriptionWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  &.alignRight {
    justify-content: flex-end;
  }
`;

const ArtistReg = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  &.artist-wrapper {
    margin-top: 10px;
    position: relative;
  }

  &.bg-filter {
    width: 95%;
    height: 100vh;
    background: rgb(64, 169, 62);
    background: linear-gradient(
      135deg,
      rgba(64, 169, 62, 1) 0%,
      rgba(72, 186, 255, 1) 50%
    );
    opacity: 0.5;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const ProfileWrapper = styled.div`
  width: 100%;
  // height: calc(100vh - 130px);
  height: auto;
  display: flex;
  flex-direction: row;
`;

const ProfileSideBarWrapper = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: flex-start;
  z-index: 4;
  margin-left: 20px;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  justify-content: space-between;
`;
const ColumnWrapper = styled.div`
  width: 57.8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  align-items: flex-start;

  &.profileinfo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

const CareerP = styled.p`
  font-size: 2em;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%) scale(1);
  background-color: transparent;
  padding: 10px;
  text-align: center;
  z-index: 1;
  pointer-events: none;

  ${CareerItem}:hover & {
    transform: translate(-50%, -80%) scale(1.5);
    transition: 0.3s ease;
  }
`;

const Accordion = styled.div`
  &.acc {
    max-height: auto;
    position: relative;
  }

  &.acc-open {
    max-height: auto;
    padding-bottom: 50px;
    position: relative;
  }
`;

const CareerDetail = styled.div`
  width: 100%;
  height: 100vh;

  &.wrapper {
    width: 100%;
    height: auto;
  }

  &.img-container {
    width: 100%;
    height: auto;
  }

  &.accordion-wrapper {
    width: calc(100% - 40px);
    height: auto;
    padding: 30px 20px 15px 20px;
    display: flex;
    flex-direction: column;
  }

  &.accordion-item {
    width: calc(100% - 40px);
    height: auto;
    margin: 0 20px 0 20px;
    position: relative;
  }

  &.accordion-border {
    width: 99%;
    height: 20px;
    position: absolute;
    left: 9px;
    border: 4px solid #6e6560;
    border-bottom: none;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  &.item-box {
    width: calc(100% - 40px);
    height: 90px;
    display: flex;
  }

  &.cardbox {
    width: calc(100% - 40px);
    max-height: 0px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    // border: 1px solid green;
    margin: 0 auto;
    margin-top: 0px;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease;
  }

  &.cardbox-open {
    width: calc(100% - 40px);
    max-height: 980px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    // border: 1px solid green;
    margin: 0 auto;

    overflow: visible;
    transition: 0.3s ease, opacity 0.3s ease;
  }

  &.card-item-container {
    width: 500px;
    height: 500px;
    position: relative;
    top: 180px;
    // border: 1px solid pink;
  }

  &.card-item,
  &.card-item-next {
    width: 100%;
    height: 500px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: rgba(238, 237, 235, 0.8);
    // background-color: #eeedeb;
    border: 1px solid #6e6560;
    padding: 20px;
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
  }

  .cardImage {
    width: 100%;
    height: 500px;
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
`;
const Username = styled.div`
  font-size: 2em;
`;

const StyledUl = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0;
    margin; 0;
    position: relative;

    &.section-ul {
        height: 120px;
        margin-top: 30px;
        justify-content: space-between;
    }

    &.nav-menu-items {
        display: flex;
        justify-content: flex-start;
        width: 200px;
        height: 100%;
    }
`;
const StyledLi = styled.li`
  color: #40a93e;
  font-size: 1em;
  margin-bottom: 5px;

  &.name-li {
    color: black;
  }
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 300px;

  &.BrandMidImage {
    height: auto;
    object-fit: cover;
  }

  &.LongImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.artist-bg {
    width: 100%;
    opacity: 0.6;
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
`;

const Home = styled.div`
  &.home-wrapper {
    width: 100%;
    height: 1200px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  &.image-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
  }
`;

const ArticleWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const ArticleMidWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  width: 50%;
  height: 80vh;
  display: flex;
  flex-direction: column;

  &.article-cards {
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  &.article-hover-box {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }

  &.article-test {
    position: relative;
    z-index: 1;
    color: red;
    top: 0;
    left: 0;
  }

  &.article-grid-image {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(217, 217, 217, 1) 0%,
      rgba(102, 102, 102, 1) 100%
    );
    object-fit: cover;
    overflow: hidden;
    position: absolute;
    z-index: 1;
  }

  &.article-text-container {
    width: 80%;
    height: auto;
    position: absolute;
    bottom: -15px;
    right: 0;
    z-index: 1;
    box-sizing: content-box;

    display: flex;
    align-items: flex-end;
  }

  &.article-name {
    width: auto;
    height: auto;
    color: #000;
    font-family: "DM Serif Display", serif;
    font-size: 10em;
    text-align: center;
    letter-spacing: -0.05em;
    font-weight: 400;
    line-height: 110px;
    margin: 0px;
    margin-bottom: 160px;
    white-space: nowrap;
    transform: scaleX(1);
    transform-origin: center;
    position: absolute;
    bottom: -100px;
    right: 7px;
    z-index: 1;

    &:hover {
      color: white;
    }
  }
`;

const Carousel = styled.div`
  background-color: ivory;
  width: 100%;
  height: 200px;

  &.carousel-container {
    position: relative;
  }

  &.carousel-wrapper {
    overflow: hidden;
  }

  &.carousel-box {
    display: flex;
  }

  &.carousel-item {
    width: 100%;
    height: 200px;
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    flex: none; // 이 속성을 넣어야 화면에 1개씩 보여진다.
  }
`;

const Map = styled.div`
  width: 100%;
  height: 500px;
`;

const WishIconContainer = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
`;

const WishIconLine = styled(HeartLine)`
  width: 100%;
  height: 100%;
  fill: #6e6560;
`;

const WishIconHover = styled(HeartFull)`
  width: 100%;
  height: 100%;
  fill: #6e6560;
`;

const WishIconClicked = styled(HeartFull)`
  width: 100%;
  height: 100%;
  fill: #40a93e;
`;

const SideBar = styled.div`
  width: 200px;
  height: 100%;
  padding: 0;

  &.sidebar-dark {
    width: 200px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: content-box;
    position: fixed;
    top: 48px;

    z-index: 5;

    pointer-events: none;
  }

  &.sidebar-box {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  &.sidebar-item {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
  }
`;

const NavBar = styled.nav`
  background-color: #eeedeb;
  font-size: 1em;
  height: 100%;

  display: flex;
  justify-content: flex-start;

  position: absolute;
  z-index: 3;

  &.nav-menu {
    left: -120%;
    transition: ease 0.3s;
    opacity: 0;
    visibility: hidden;

    &.active {
      left: 0;
      transition: ease 0.3s;
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
  }
`;

const SidebarLi = styled.li`
  margin-top: 15px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 3;
  opacity: 0.3;
  transition: opacity 0.3s ease;
`;

const TapttooIcon = styled(Tapttoo)`
  width: 6em;
  height: 100px;
  margin: 0 auto;
  display: block;
`;

const StyledLink = styled(RouterLink)`
  &.menu-texts {
    text-decoration: none;
    color: #6e6560;
    margin-left: 20px;
    padding: 10px 20px;
    white-space: nowrap;

    &:hover {
      color: #272423;
    }
  }

  &.close-arrow {
    margin-left: 150px;
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
  margin-top: 20px;
`;

const Footer = styled.div`
  &.column {
    width: 100%;
    height: 80px;
    background-color: #eeedeb;
    margin-top: 50px;
    display: flex;
    flex-direction: column;

    position: absolute;
    bottom: 0;
    z-index: 4;
  }

  &.row {
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &.footer-box {
    width: 170px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &.long {
    width: 205px;
  }

  &.copyright {
    color: #6e6560;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    white-space: nowrap;
    margin-top: 10px;
  }

  &.margintop {
    margin-top: 50px;
  }
`;

const BrandWrapper = styled.div`
  color: #6e6560;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 60px;
`;

const BrandLogo = styled(Logo)`
  width: 1.5em;
  height: 1.5em;
  fill: #6e6560;
`;

const BrandText = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-left: 5px;
`;

const PageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  min-height: 75vh;

  &.career-wrapper {
    width: 100%;
  }
`;

const Contact = styled.div`
  &.contact-wrapper {
    width: 100%;
    height: auto;
    margin: 0 auto;
    margin-bottom: 50px;
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
    width: calc(100% - 450px);
    margin: 0;
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
`;

const PolicyWrapper = styled.div`
  width: 220px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const LoginPageWrapper = styled.div`
  width: 30%;
  height: 60vh;
  margin-bottom: 200px;
  transform: translateY(20%);
`;

const InputWrapper = styled.div`
  width: 300px;
  position: relative;
  display: flex;
  border-bottom: 2px solid #6e6560;
  margin: 25px 0;
`;

const CheckboxWrapper = styled.div`
  color: #6e6560;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 15px 0;
`;

const RememberLabel = styled.label`
  font-size: 0.8em;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;

  &.input-hide {
    display: none;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 20%;
  left: 5px;
  transform: translateY(-50%);
  pointer-events: none;
  transition: 0.3s ease;

  ${Input}:focus + &,
    ${Input}:valid + & {
    top: -25px;
    transform: translateY(0%);
    color: #6e6560;
  }
`;

const SubmitButton = styled.button`
  width: 50%;
  font-size: 0.8em;
  background-color: transparent;
  border: 2px solid #40a93e;
  border-radius: 50px;
  color: #40a93e;
  padding: 10px 20px;
  text-align: center;
  margin: 20px 2px;
  cursor: pointer;

  &.Round {
    border: 2px solid #40a93e;
    border-radius: 100px;
    margin-top: 20px;
  }

  &:hover {
    color: #276e27;
    border-color: #276e27;
  }
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  height: 40px;
  color: #6e6560;
  border: none;
  padding: 10px 20px;
  text-align: center;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;

  &.Round {
    color: #40a93e;
    border: 2px solid #40a93e;
    border-radius: 100px;
    padding: 8px 20px 12px 20px;

    &:hover {
      color: #276e27;
      border-color: #276e27;
    }
  }

  &:hover {
    color: #272423;
  }

  &.carousel-btn-left {
    position: absolute;
    z-index: 1;

    top: 40%;
    left: 0;
  }

  &.carousel-btn-right {
    position: absolute;
    z-index: 1;

    top: 40%;
    right: 0;
  }
`;

const StyledGrid = styled.div`
  width: 100%;
  min-width: 100%;
  height: 800px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-bottom: 300px;
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

//icons
// const GreenIcon = `

//   width: 1.5em;
//   height: 1.5em;
//   fill: #6e6560;
//   border-radius: 100px;
//   border: 2px solid #40a93e;
//   padding: 5px 18px;

//   &:hover {
//     fill: #272423;
//     // border: 2px solid #276e27;
// }
const StyledIcon = `

  width: 1.4em;
  height: 1.4em;
  fill: #6e6560;

  &.outlined {
    border-radius: 100px;
    border: 1px solid #6e6560;
    padding: 5px;
    
        &:hover {
        fill: #272423;
        border: 1px solid #272423;
    }
  }

  &.header {
      width: 2em;
  height: 2em;
  }

`;

//Header Icons
const HomeIcon = styled(GoHome)`
  ${StyledIcon}
`;
const HamburgerIcon = styled(MdMenu)`
  ${StyledIcon}
`;

const SearchIcon = styled(GrSearch)`
  ${StyledIcon}
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
    fill: #a8a29c;
  }
`;

const MailIcon = styled(RiMailLine)`
  ${StyledIcon}

  &.light {
    fill: #a8a29c;
  }
`;

const YoutubeIcon = styled(FaYoutube)`
  ${StyledIcon}
`;

const s = {
  Div,
  Span,
  Atag,
  HeaderWrapper,
  SectionContainer,
  SectionFrame,
  LongImgWrapper,
  BrandTitleWrapper,
  ServiceWrapper,
  Mask,
  MaskText,
  BrandMidTitleWrapper,
  ServiceDescriptionWrapper,
  SectionWrapper,
  ArtistReg,
  ProfileWrapper,
  ProfileSideBarWrapper,
  RowWrapper,
  ColumnWrapper,
  CareerDiv,
  CareerItem,
  CareerP,
  Accordion,
  CareerDetail,
  Username,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledTitleP,
  StyledP,
  StyledUl,
  StyledLi,
  TapttooIcon,
  Image,
  Home,
  HomeImage,
  ArticleWrapper,
  ArticleMidWrapper,
  ArticleGrid,
  ArticleDiv,
  Carousel,
  Map,
  WishIconContainer,
  SideBar,
  NavBar,
  Overlay,
  SidebarLi,
  StyledLink,
  MainImage,
  Footer,
  BrandWrapper,
  BrandText,
  hr,
  PageWrapper,
  Contact,
  PolicyWrapper,
  ButtonWrapper,
  ButtonBox,
  FormWrapper,
  LoginPageWrapper,
  InputWrapper,
  CheckboxWrapper,
  RememberLabel,
  Input,
  Label,
  SubmitButton,
  Button,
  StyledGrid,
  ProfileGrid,
  GridImage,
  BrandLogo,

  HomeIcon,
  HamburgerIcon,
  SearchIcon,

  FaceBookIcon,
  TiktokIcon,
  InstagramIcon,
  MailIcon,
  YoutubeIcon,
  WishIconLine,
  WishIconHover,
  WishIconClicked,
  StyledIcon,
};

export default s;
