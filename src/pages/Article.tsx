import React, { useState, useEffect } from "react";
import s from "../stores/styling";
import ArtistData from "../assets/datas/artitst_data";
import ScrollToTop from "../components/ScrollToTop";
import WishList from "../components/WishList";
import SortButtons from "../components/SortButtons";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Helper function to generate random image URL
const generateRandomImage = (id: number) => `https://picsum.photos/1440/900?random=${id}`;

const Article: React.FC = () => {
  // Initialize state with random images
  const [sortedData, setSortedData] = useState(
    ArtistData.map((artist) => ({
      ...artist,
      randomImage: generateRandomImage(artist.id), 
    }))
  );

  const [articles, setArticles] = useState<number[]>([0, 1, 2, 3]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1500
      ) {
        setArticles((prevArticles) => [
          ...prevArticles, 
          prevArticles.length, 
          prevArticles.length + 1,
        ]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCardRedirect = (nickname: string) => {
    const url = `/profile_artist_${nickname}`;
    if (url) {
      window.location.href = url;
    } else {
      console.error("URL 찾을 수 없음");
    }
  };

  const handleSort = (sortedArray: typeof ArtistData) => {
    const sortedWithImages = sortedArray.map((artist) => ({
      ...artist,
      randomImage: generateRandomImage(artist.id),
    }));
    setSortedData(sortedWithImages);
  };

  return (
    <s.ArticleDiv className="wrapper">
      <ScrollToTop />

      <SortButtons sortedData={sortedData} sortDone={handleSort} />

      <s.ArticleDiv className="mid-wrapper">
        {articles.map((index) => {
          const artist = sortedData[index]; // index로 접근

          if (!artist) return null; // artist가 undefined일 경우 null 반환

          return (
            <s.ArticleDiv
              key={artist.id}
              className="article-cards"
              onClick={() => handleCardRedirect(artist.nickname)}
            >
              <WishList />
              <s.ArticleDiv className="article-grid-image">
                <s.Image src={artist.randomImage} alt={`${artist.nickname}`} />
              </s.ArticleDiv>
              <s.ArticleDiv className="article-text-container">
                <s.StyledH1 className="article-name">
                  {artist.nickname}
                </s.StyledH1>
              </s.ArticleDiv>
            </s.ArticleDiv>
          );
        })}
      </s.ArticleDiv>
    </s.ArticleDiv>
  );
};

export default Article;
