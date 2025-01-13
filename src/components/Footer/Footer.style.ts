import styled, { css } from "styled-components";
import { RiInstagramLine } from "react-icons/ri"; //인스타그램
import { BiLogoFacebook } from "react-icons/bi"; //페이스북
import { AiOutlineTikTok } from "react-icons/ai"; //틱톡
import { FaYoutube } from "react-icons/fa6"; //유튜브

export const BrandLogo = styled.div`
  width: 20px;
  height: 20px;
  fill: ${(props) => props.theme.Grey};
`;

export const H4 = styled.h4`
  color: ${(props) => props.theme.Grey};
  font-size: 24px;
  font-weight: 600;
  line-height: 20px;
  margin-left: 5px;

  @media (max-width: 767px) {
    margin-left: 0px;
  }
`;

export const P = styled.p`
  color: ${(props) => props.theme.Grey};
  font-size: 16px;
  width: auto;
`;

export const Div = styled.div`
  &.wrapper {
    padding: 0px 30px;

    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media (max-width: 767px) {
      height: auto;
      margin-bottom: 130px;
    }

    @media (min-width: 768px) {
      margin: 0;
    }
  }

  &.container {
    height: auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    border-bottom: 1px solid ${(props) => props.theme.Grey};

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
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    white-space: nowrap;

    @media (max-width: 767px) {
      flex-direction: column;
      gap: 5px;
    }

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  &.footer-box-left {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &.footer-box-right {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
      width: 200px;
    }

    @media (min-width: 768px) {
      width: 200px;
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
      margin-bottom: 20px;
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
`;

export const Icon = css`
  width: 20px;
  height: 20px;
  stroke: ${(props) => props.theme.Grey};
  fill: ${(props) => props.theme.Grey};
  color: ${(props) => props.theme.Grey};

  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.Grey};
  padding: 5px;
  transition: border 0.3s ease, fill 0.5s ease;
  cursor: pointer;

  &:hover {
    fill: ${(props) => props.theme.HoverGrey};
    border: 1px solid ${(props) => props.theme.HoverGrey};
  }
`;

export const FaceBookIcon = styled(BiLogoFacebook)`
  ${Icon}
`;

export const TiktokIcon = styled(AiOutlineTikTok)`
  ${Icon}
`;

export const InstagramIcon = styled(RiInstagramLine)`
  ${Icon}

  &.light {
    fill: ${(props) => props.theme.LightGrey};
  }
`;

export const YoutubeIcon = styled(FaYoutube)`
  ${Icon}
`;
