import s from "../stores/styling";
import ArtistData from "../assets/datas/artitst_data";

const SearchProfiles = () => {
  const limitedData = ArtistData.slice(50, 60);

  return (
    <>
      {limitedData.map((artist) => (
        <s.Search className="circle-profile-box">
          <s.Image
            key={artist.id}
            src={artist.randomImage}
            alt={artist.nickname}
            className="search-circle-profile"
          />
          <s.StyledP>{artist.nickname}</s.StyledP>
        </s.Search>
      ))}
    </>
  );
};

export default SearchProfiles;
