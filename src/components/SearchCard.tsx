import s from "../stores/styling";

interface SearchCardProps {
  imageMain: string;
  imageSub: string;
  desMain: string;
  desSub: string;
}


const SearchCard: React.FC<SearchCardProps> = ({ imageMain, imageSub, desMain, desSub }) => {
  return (
    <s.Search className="top-container">
      <s.Search className="extra-margin">
        <s.Search className="mid-conatiner left">
          <s.Image src={imageMain} alt="image" className="search-square" />
        </s.Search>
        <s.Search className="mid-conatiner right">
          <s.Image src={imageSub} alt="image" className="search-square" />
          <s.Search className="item-box">
            <s.Search className="text-box">{desMain}</s.Search>
            <s.Search className="text-box">{desSub}</s.Search>
          </s.Search>
        </s.Search>
      </s.Search>
    </s.Search>
  );
}

export default SearchCard;
