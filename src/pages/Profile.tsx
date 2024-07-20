import s from "../stores/styling";
import LogoutButton from "../components/Logout";
import artistImage01 from "../assets/images/artist_profile_01.jpg";

export default function Profile() {
  return (
    <>
      <LogoutButton />

      <s.Portfolio className="wrapper">
        <s.Portfolio className="header-wrapper">
          <s.StyledH1 className="artist-page-title">작가 이름</s.StyledH1>

          <s.Portfolio className="header-container">
            <s.Portfolio className="mid-box-left">
              <s.StyledH2 className="artist-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                dicta ut, fugit neque explicabo totam tenetur eum et odit ipsa
                nulla repudiandae commodi voluptas quos molestiae nostrum autem
                hic itaque?
              </s.StyledH2>
            </s.Portfolio>

            <s.Portfolio className="mid-box-right">
              <s.Portfolio className="header-profile">
                <s.StyledP>경력</s.StyledP>
                <s.StyledP>테스트</s.StyledP>
              </s.Portfolio>
              <s.Line className="horizontal dark" />
              <s.Portfolio className="header-profile">
                <s.StyledP>지역</s.StyledP>
                <s.StyledP>내용</s.StyledP>
              </s.Portfolio>
              <s.Line className="horizontal dark" />
              <s.Portfolio className="header-profile">
                <s.StyledP>스타일</s.StyledP>
                <s.StyledP>해시태그</s.StyledP>
              </s.Portfolio>
              <s.Line className="horizontal dark" />
              <s.Portfolio className="header-profile">
                <s.StyledP>리뷰</s.StyledP>
                <s.StyledP>모아보기</s.StyledP>
              </s.Portfolio>
              <s.Line className="horizontal dark" />
            </s.Portfolio>
          </s.Portfolio>
        </s.Portfolio>

        <s.Image src={artistImage01} alt="image" className="artist-page-profile"/>

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

            <s.Line className="vertical dark" />

            <s.Portfolio className="mid-box-right">연락처</s.Portfolio>
          </s.Portfolio>
        </s.Portfolio>
        <s.Line className="horizontal dark" />

        <s.Portfolio className="work-wrapper">
          <s.Portfolio className="work-container-left">
            <s.StyledH3 className="work-title">What I do</s.StyledH3>
          </s.Portfolio>

          <s.Line className="vertical dark margin-v" />

          <s.Portfolio className="work-container-right">
            <s.Portfolio className="work-box">
              <s.Portfolio className="work-div">
                <s.StyledH4 className="work">제목</s.StyledH4>
                <s.StyledP className="work-description">Lorem, ipsum dolor sit amet consectetur quaerat minus aliquam vel nostru.</s.StyledP>
              </s.Portfolio>
              <s.Line className="vertical dark margin-v" />
              <s.Portfolio className="work-div">
                <s.StyledH4 className="work">제목</s.StyledH4>
                <s.StyledP className="work-description">Lorem, ipsum dolor sit amet consectetur quaerat minus aliquam vel nostru.</s.StyledP>
              </s.Portfolio>
            </s.Portfolio>

            <s.Line className="horizontal dark margin-h" />

            <s.Portfolio className="work-box">
              <s.Portfolio className="work-div">
                <s.StyledH4 className="work">제목</s.StyledH4>
                <s.StyledP className="work-description">Lorem, ipsum dolor sit amet consectetur quaerat minus aliquam vel nostru.</s.StyledP>
              </s.Portfolio>
              <s.Line className="vertical dark margin-v" />
              <s.Portfolio className="work-div">
                <s.StyledH4 className="work">제목</s.StyledH4>
                <s.StyledP className="work-description">Lorem, ipsum dolor sit amet consectetur quaerat minus aliquam vel nostru.</s.StyledP>
              </s.Portfolio>
            </s.Portfolio>
          </s.Portfolio>
        </s.Portfolio>
        <s.Portfolio className="mid-wrapper">테스트</s.Portfolio>
      </s.Portfolio>
    </>
  );
}
