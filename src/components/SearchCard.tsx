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
      <s.Search className="sub-container extra-margin">
        <s.Search className="mid-container left">
          <s.Image src={imageMain} alt="image" className="search-square" />
        </s.Search>
        <s.Search className="mid-container right">
          <s.Image src={imageSub} alt="image" className="search-square" />
          <s.Search className="item-box">
            <s.StyledP className="search-top-des-main">{desMain}</s.StyledP>
            <s.StyledP className="search-top-des-sub">{desSub}</s.StyledP>
          </s.Search>
        </s.Search>
      </s.Search>
    </s.Search>
  );
}

export default SearchCard;
