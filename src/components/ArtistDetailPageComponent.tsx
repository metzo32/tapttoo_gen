import React from "react";
import s from "../stores/styling";
import { ArtistDataProps } from "../assets/datas/artitst_data";

interface ArtistDetailPageProps {
  artist: ArtistDataProps;
}

const ArtistDetailPageComponent: React.FC<ArtistDetailPageProps> = ({artist}) => {
  const handleNavigation = () => {
  };

  const CopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then( //클립보드 API를 통해 텍스트를 클립보드에 쓴다.
      () => {
        alert('복사 완료!')
      },
      (err) => {
        console.error("복사 실패", err);
      }
    );
  };

  const handleCopy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const innerText = e.currentTarget.innerText;  
    // const innerText = e.target.innerText; --> 이 경우, target 속성에 innerText이 직접적으로 존재하지 않으므로 에러.
    CopyToClipboard(innerText); //복사할 텍스트를 복사
  };

  return (
    <s.ArtistDiv className="wrapper">
      <s.ArtistDiv className="title-wrapper">
        <s.ArtistDiv className="title-container-left">
          <s.StyledH1 className="artist-page-title">
            {artist.nickname}
          </s.StyledH1>
          <s.ArtistDiv className="h2-container">
            <s.StyledH2 className="artist-page-semititle">
              {artist.nickname} ipsum dolor sit amet consectetur adipisicing
              elit. Dicta perspiciatis possimus praesentium ipsum fugit a sint
              incidunt temporibus quod, modi, eaque earum, aut sequi voluptatum.
            </s.StyledH2>

            <s.ArtistDiv className="atags-container">
              <s.ArtistDiv className="atags-box">
                <s.StyledP className="artist-contact-left">Email</s.StyledP>
                <s.Atag
                  href="mailto:{artist.email}"
                  title="메일 보내기"
                  className="artist-contact-right"
                >
                  {artist.email}
                </s.Atag>
              </s.ArtistDiv>
              <s.hr className="artist-page" />
              <s.ArtistDiv className="atags-box">
                <s.StyledP className="artist-contact-left">Address</s.StyledP>
                <s.Atag
                  className="artist-contact-right"
                  title="주소 복사하기"
                  onClick={handleCopy}
                >
                  {artist.street_address}, {artist.city}
                </s.Atag>
              </s.ArtistDiv>
              <s.hr className="artist-page" />
              <s.ArtistDiv className="atags-box">
                <s.StyledP className="artist-contact-left">Website</s.StyledP>
                <s.Atag
                  className="artist-contact-right"
                  title="웹사이트 방문하기"
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{artist.nickname}_official
                </s.Atag>
              </s.ArtistDiv>
              <s.hr className="artist-page" />
              <s.ArtistDiv className="button-box">
                <s.Button className="Round" onClick={() => handleNavigation()}>
                  스케줄 확인하기
                </s.Button>
                <s.Button className="Round" onClick={() => handleNavigation()}>
                  예약 신청하기
                </s.Button>
              </s.ArtistDiv>
            </s.ArtistDiv>
          </s.ArtistDiv>
        </s.ArtistDiv>
      </s.ArtistDiv>
      <s.ArtistDiv className="img-wrapper">
        <s.Image
          src="https://picsum.photos/1200/600?random=${getRandomInt(1000)"
          alt={artist.nickname}
          loading="lazy"
          className="artist-page-main"
        />
      </s.ArtistDiv>

      <s.ArtistDiv className="mid-wrapper">
        <s.ArtistDiv className="mid-left">
          <s.ArtistDiv className="center-box">
            <s.StyledH3 className="mid-category">(Details)</s.StyledH3>
            <s.ArrowIcon />
          </s.ArtistDiv>
        </s.ArtistDiv>

        <s.ArtistDiv className="mid-line"></s.ArtistDiv>

        <s.ArtistDiv className="mid-right">
          <s.ArtistDiv className="mid-container">
            <s.StyledP className="number">1.</s.StyledP>
            <s.ArtistDiv className="h4-box">
              <s.StyledH4 className="artist-detail-header">
                Complex Desing Challenges
              </s.StyledH4>
            </s.ArtistDiv>
            <s.ArtistDiv className="p-box-line">
              <s.ArtistDiv className="p-box">
                <s.StyledP className="artist-interview">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Architecto rerum quo dolorem nostrum facere fuga suscipit
                  repudiandae sed non! Officiis explicabo quis, deleniti
                  perspiciatis quos pariatur porro ea nobis voluptate.
                </s.StyledP>
              </s.ArtistDiv>
            </s.ArtistDiv>
          </s.ArtistDiv>

          <s.ArtistDiv className="mid-container">
            <s.StyledP className="number">2.</s.StyledP>
            <s.ArtistDiv className="h4-box">
              <s.StyledH4 className="artist-detail-header">
                Enhance User Experience
              </s.StyledH4>
            </s.ArtistDiv>
            <s.ArtistDiv className="p-box-line">
              <s.ArtistDiv className="p-box">
                <s.StyledP className="artist-interview">
                  Zit amet consectetur adipisicing elit. Consequatur fuga
                  ducimus accusantium. Explicabo officiis aut tempora
                  praesentium, amet deserunt perferendis quis, maxime accusamus
                  distinctio, sit dolores dolor deleniti temporibus est? Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
                  explicabo illum quae quos odit reprehenderit amet voluptatibus
                  dolor dolore fuga ea ratione veritatis tempora quibusdam rem
                  modi ipsum, nemo quasi.
                </s.StyledP>
              </s.ArtistDiv>
            </s.ArtistDiv>
          </s.ArtistDiv>

          <s.ArtistDiv className="mid-container">
            <s.StyledP className="number">3.</s.StyledP>
            <s.ArtistDiv className="h4-box">
              <s.StyledH4 className="artist-detail-header">
                Revolutionizing the Digital Landscape
              </s.StyledH4>
            </s.ArtistDiv>
            <s.ArtistDiv className="p-box-line last">
              <s.ArtistDiv className="p-box">
                <s.StyledP className="artist-interview">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quibusdam quis nisi dignissimos labore, praesentium excepturi
                  ex eum optio voluptas maiores magni facilis deleniti
                  architecto suscipit explicabo amet aliquam ea? Fugit! Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
                  quis nisi dignissimos labore, praesentium excepturi ex eum
                  optio voluptas maiores magni facilis deleniti architecto
                  suscipit explicabo amet aliquam ea? Fugit! Lorem ipsum, dolor
                  sit amet consectetur adipisicing elit. Quibusdam quis nisi
                  dignissimos labore, praesentium excepturi ex eum optio
                  voluptas maiores magni facilis deleniti architecto suscipit
                  explicabo amet aliquam ea? Fugit! Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Quibusdam quis nisi dignissimos
                  labore, praesentium excepturi ex eum optio voluptas maiores
                  magni facilis deleniti architecto suscipit explicabo amet
                  aliquam ea? Fugit!
                </s.StyledP>
              </s.ArtistDiv>
            </s.ArtistDiv>
          </s.ArtistDiv>
        </s.ArtistDiv>
      </s.ArtistDiv>

      <s.ArtistDiv className="bottom-wrapper">와</s.ArtistDiv>
    </s.ArtistDiv>
  );
};

export default ArtistDetailPageComponent;
