import s from "../stores/styling";
import { ArtistDataProps } from "../assets/datas/artitst_data";
import ArtistSkillComponent from "../components/ArtistSkillComponent";

interface ArtistDetailPageProps {
  artist: ArtistDataProps;
}

const ArtistProfile: React.FC<ArtistDetailPageProps> = ({ artist }) => {
  const handleNavigation = () => {};

  const CopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      //클립보드 API를 통해 텍스트를 클립보드에 쓴다.
      () => {
        alert("복사 완료!");
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
    <>
      <s.Portfolio className="portfolio-wrapper">
        <s.Portfolio className="header-wrapper">
          <s.StyledH1 className="artist-page-title">
            {artist.nickname}
          </s.StyledH1>

          <s.Portfolio className="header-container">
            <s.Portfolio className="mid-box-left">
              <s.StyledH2 className="artist-description">
                {artist.nickname} Mauris enim leo, rhoncus sed, vestibulum sit
                amet, cursus id, turpis. Integer aliquet, massa id lobortis
                convallis, tortor risus dapibus augue, vel accumsan tellus nisi
                eu orci. Mauris lacinia sapien quis libero.
              </s.StyledH2>
            </s.Portfolio>

            <s.Portfolio className="mid-box-right">
              <s.Portfolio className="header-profile">
                <s.Portfolio className="header-profile-box">
                  <s.StyledP className="small">Works</s.StyledP>
                  <s.StyledP className="small">100+</s.StyledP>
                </s.Portfolio>
                <s.Line className="horizontal dark" />
              </s.Portfolio>

              <s.Portfolio className="header-profile">
                <s.Portfolio className="header-profile-box">
                  <s.StyledP className="small">Region</s.StyledP>
                  <s.Atag
                    className="artist-contact"
                    title="주소 복사하기"
                    onClick={handleCopy}
                  >
                    {artist.street_address}, {artist.city}
                  </s.Atag>
                </s.Portfolio>
                <s.Line className="horizontal dark" />
              </s.Portfolio>

              <s.Portfolio className="header-profile">
                <s.Portfolio className="header-profile-box">
                  <s.StyledP className="small">Email</s.StyledP>
                  <s.Atag
                    href="mailto:{artist.email}"
                    title="메일 보내기"
                    className="artist-contact"
                  >
                    {artist.email}
                  </s.Atag>
                </s.Portfolio>
                <s.Line className="horizontal dark" />
              </s.Portfolio>

              <s.Button
                className="Round reserve"
                onClick={() => handleNavigation()}
              >
                작가에게 문의하기
              </s.Button>
            </s.Portfolio>
          </s.Portfolio>
        </s.Portfolio>

        <s.Image
          src={artist.randomImage}
          alt="image"
          className="artist-page-profile"
        />

        <s.Portfolio className="mid-wrapper">
          <s.Portfolio className="header-container">
            <s.Portfolio className="mid-box-left">
              <s.StyledH2 className="artist-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                dicta ut, fugit neque explicabo totam tenetur eum et odit ipsa
                nulla repudiandae commodi voluptas quos molestiae nostrum autem
                hic itaque?
              </s.StyledH2>
            </s.Portfolio>

            <s.Line className="vertical dark display" />

            <s.Portfolio className="mid-box-right">연락처</s.Portfolio>
          </s.Portfolio>
        </s.Portfolio>

        <s.Portfolio className="work-wrapper-line">
          <s.Line className="horizontal dark margin-h" />
          <s.Portfolio className="work-wrapper">
            <s.Portfolio className="work-container-left">
              <s.StyledH3 className="work-title">What I do</s.StyledH3>
              <s.ArrowIcon />
            </s.Portfolio>

            <s.Line className="vertical dark margin-v " />

            <ArtistSkillComponent hash={artist.hash || []} />
          </s.Portfolio>
          <s.Line className="horizontal dark margin-h" />
        </s.Portfolio>

        <s.Portfolio className="img-wrapper">
          <s.Image
            className="artist-page-portfolio"
            src={artist.randomImage01}
            alt="image"
          />
          <s.Image
            className="artist-page-portfolio"
            src={artist.randomImage02}
            alt="image"
          />
          <s.Image
            className="artist-page-portfolio"
            src={artist.randomImage03}
            alt="image"
          />
          <s.Image
            className="artist-page-portfolio"
            src={artist.randomImage04}
            alt="image"
          />
        </s.Portfolio>
      </s.Portfolio>
    </>
  );
};

export default ArtistProfile;
