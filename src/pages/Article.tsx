import React, { useState, useEffect } from "react";
import s from "../stores/styling";
import ArtistData from "../assets/datas/artitst_data";
import ScrollToTop from "../components/ScrollToTop";
import WishList from "../components/WishList";

const Article: React.FC = () => {
  const [articles, setArticles] = useState<number[]>([1, 2, 3, 4]);
  const [sortedData, setSortedData] = useState(ArtistData)

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1500
      ) {
        setArticles((prevArticles) => [
          ...prevArticles, //useState에 사용된 articles의 최신 상태를 참조
          prevArticles.length + 1,
          prevArticles.length + 2,
        ]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); //컴포넌트가 마운트될 때 이벤트 리스너 추가


  const handleCardRedirect = (index: number) => {
    const url = `/profile_artist_${ArtistData[index].nickname}`
    if (url) {
      window.location.href = url;
    } else {
      console.error("URL 찾을 수 없음");
    }
  };

  const handleSortAlphabet = () => {
    const sorted = [...sortedData].sort((a, b) => a.nickname.localeCompare(b.nickname))
    setSortedData(sorted)
  }

  const handleSortAlphabetReverse = () => {
    const sorted = [...sortedData].sort((a, b) => b.nickname.localeCompare(a.nickname))
    setSortedData(sorted)
  }

  const handleSortOld = () => {
    const sorted = [...sortedData].sort((a, b) => a.id - b.id)
    setSortedData(sorted)
  }

  const handleSortNew = () => {
    const sorted = [...sortedData].sort((a, b) => b.id - a.id)
    setSortedData(sorted)
  }


  return (
    <s.ArticleDiv className="wrapper">
      <ScrollToTop />
      <s.Button className="Round" onClick={handleSortAlphabet}>abc순</s.Button>
      <s.Button className="Round" onClick={handleSortAlphabetReverse}>abc역순</s.Button>
      <s.Button className="Round" onClick={handleSortOld}>오래된순</s.Button>
      <s.Button className="Round" onClick={handleSortNew}>신규순</s.Button>
      <s.ArticleDiv className="mid-wrapper">
        {articles.map((index) => (
          <s.ArticleDiv
            key={index}
            className="article-cards"
            onClick={() => handleCardRedirect(index)}
          >
            <WishList />
            <s.ArticleDiv className="article-grid-image">
              <s.Image
                src={ArtistData[index].randomImage}
                alt={`${ArtistData[index].nickname}`}
              />
            </s.ArticleDiv>
            <s.ArticleDiv className="article-text-container">
              <s.StyledH1 className="article-name">
                {ArtistData[index].nickname}
              </s.StyledH1>
              <s.StyledP className="article-text">
                #손그림 &nbsp; #섬세한 &nbsp; #과감한
              </s.StyledP>
            </s.ArticleDiv>
          </s.ArticleDiv>
        ))}
      </s.ArticleDiv>
    </s.ArticleDiv>
  );
};

export default Article;
