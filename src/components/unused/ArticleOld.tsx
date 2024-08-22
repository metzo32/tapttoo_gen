import React, { useState, useEffect } from "react";
import s from "../../stores/styling";
import ArtistData from "../../assets/datas/artitst_data";
import ScrollToTop from "../StartFromTop";
import WishList from "../WishList";

const ArticleOld: React.FC = () => {
  const [articles, setArticles] = useState<number[]>([1, 2, 3, 4]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 500
      ) {
        setArticles((prevArticles) => [
          ...prevArticles,
          prevArticles.length + 1,
          prevArticles.length + 2,
        ]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCardRedirect = (index: number) => {
    const url = ArtistData[index].url
    
    if (url) {
      window.location.href = url;
    }
    else {
      console.error("URL 찾을 수 없음")
    }
  }

  return (
    <></>
    // <s.ArticleWrapper>
    //   <ScrollToTop />
    //   <s.ArticleMidWrapper>
    //     {articles.map((index) => (
    //       <s.ArticleDiv key={index} className="article-cards" onClick={() => handleCardRedirect(index)}>
    //         <WishList />
    //         <s.ArticleDiv className="article-grid-image">
    //           <s.Image
    //             src={ArtistData[index].randomImage}
    //             alt={`${ArtistData[index].nickname}`}
    //           />
    //         </s.ArticleDiv>
    //         <s.ArticleDiv className="article-text-container">
    //           <s.StyledH1 className="article-name">
    //             {ArtistData[index].nickname}
    //           </s.StyledH1>
    //           <s.StyledP className="article-text">
    //             #손그림 &nbsp; #섬세한 &nbsp; #과감한
    //           </s.StyledP>
    //         </s.ArticleDiv>
    //       </s.ArticleDiv>
    //     ))}
    //   </s.ArticleMidWrapper>
    // </s.ArticleWrapper>
  );
};

export default ArticleOld;
