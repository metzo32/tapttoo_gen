import React, { useState, useEffect } from "react";
import s from "../stores/styling";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import ArtistData from "../assets/datas/artitst_data";
import ScrollToTop from "../components/ScrollToTop";
import WishList from "../components/WishList";
import SortButtons from "../components/SortButtons";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Helper function to generate random image URL
const generateRandomImage = (id: number) =>
  `https://picsum.photos/1440/900?random=${id}`;

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

  // Fetch wishlist on component mount
  useEffect(() => {
    const fetchWishlist = async () => {
      const user = auth.currentUser;
      if (user) {
        // "users" 컬렉션의 현재 사용자의 문서 참조
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          // "wishList" 필드를 가져옵니다.
          const wishlistedIds = userDoc.data()?.wishList || [];
          setSortedData((prevData) =>
            prevData.map((artist) => ({
              ...artist,
              isWishlisted: wishlistedIds.includes(artist.id),
            }))
          );
        }
      }
    };

    fetchWishlist();
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

  const toggleWishlist = (artistId: number) => {
    setSortedData((prevData) =>
      prevData.map((artist) =>
        artist.id === artistId
          ? { ...artist, isWishlisted: !artist.isWishlisted }
          : artist
      )
    );
  };

  // 현재 위시리스트에 포함된 아티스트들을 필터링
  const wishlistedArtists = sortedData.filter(artist => artist.isWishlisted);

  return (
    <s.ArticleDiv className="wrapper">
      <ScrollToTop />

      {/* 위시리스트를 표시하는 섹션 */}
      <div>
        <h2>Wishlist</h2>
        {wishlistedArtists.length === 0 ? (
          <p>No artists in wishlist.</p>
        ) : (
          <ul>
            {wishlistedArtists.map(artist => (
              <li key={artist.id}>{artist.id}</li>
            ))}
          </ul>
        )}
      </div>

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
              <WishList
                artistId={artist.id}
                isWishlisted={!!artist.isWishlisted} // isWishlisted를 불리언 값으로 변환하여 전달
                onToggleWishlist={() => toggleWishlist(artist.id)}
              />
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
