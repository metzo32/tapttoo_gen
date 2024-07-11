import s from "../stores/styling";
import ArtistData from "../assets/datas/artitst_data";

export default function SearchEventProfile() {
  const eventData = ArtistData.slice(71, 76);

  return (
    <>
      {eventData.map((profile) => (
        <s.Search className="event-wrapper">
          <s.Search className="event-container">
            <s.Search className="event-title-box">
            <s.StyledH4 className="event-title">이름</s.StyledH4>
            </s.Search>
            <s.Search className="event-image-box">
            <s.Image
              key={profile.id}
              src={profile.randomImage}
              alt={profile.nickname}
              className="search-circle-profile"
            />
            </s.Search>
            <s.Search className="event-text-box">
              <s.StyledP className="event-name">{profile.nickname}</s.StyledP>
              <s.StyledP className="event-city">
                {profile.street_address}, {profile.city}
              </s.StyledP>
            </s.Search>
          </s.Search>
          <s.Line className="dark" />
        </s.Search>
      ))}
    </>
  );
}
