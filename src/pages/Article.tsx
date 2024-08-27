import React, { useState, useEffect } from "react";
import s from "../stores/styling";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import ArtistData from "../assets/datas/artitst_data";
import WishList from "../components/WishList";
import SortButtons from "../components/SortButtons";
import { getRandomImage } from "../assets/datas/getRandomImages";
import StartFromTop from "../components/StartFromTop";
import { PopUpBelow } from "../components/FramerMotions/scrollMotions";

const Article: React.FC = () => {
  const [articles, setArticles] = useState<number[]>([0, 1, 2, 3]);
  const [sortedData, setSortedData] = useState(
    ArtistData.map((artist) => ({
      ...artist,
      randomImage: getRandomImage(),
    }))
  );

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

  //위시리스트
  useEffect(() => {
    const fetchWishlist = async () => {
      const user = auth.currentUser;
      if (user) {
        // firebase db에 설정한 users컬렉션의 현재 로그인한 사용자의 문서를 참조
        const userRef = doc(db, "users", user.uid); //현재 사용자를 가리키는 잠조
        const userDoc = await getDoc(userRef); //이 데이터를 포함한 객체

        if (userDoc.exists()) {
          //문서가 있는 경우
          // "wishList" 필드 호출
          const wishlistedIds = userDoc.data()?.wishList || []; //userDoc.data() : 데이터를 객체로 변환
          //?. : 옵셔널 체이닝. wishList 필드가 존재하지 않으면 빈 배열을 반환 -> 에러 차단
          setSortedData(
            (
              prevData //이전 상태를 기반으로 업데이트 해야하는 경우, 콜백을 인수로 받음
            ) =>
              //prevData: sort 이전 상태
              prevData.map((artist) => ({
                //각 아티스트 객체에 isWishlisted 속성 추가 (포함 여부)
                ...artist,
                isWishlisted: wishlistedIds.includes(artist.id), //유저의 위시리스트(wishlistedIds)에 포함 여부 저장
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

  //실제로 보여질 데이터를 업데이트하는 함수
  const handleSort = (sortedArray: typeof ArtistData) => {
    const sortedWithImages = sortedArray.map((artist) => ({
      ...artist,
      randomImage: getRandomImage(),
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


  return (
    <>
      <StartFromTop />
      <s.ArticleDiv className="wrapper">

        <SortButtons sortBefore={sortedData} sortHandle={handleSort} />


        <s.ArticleDiv className="mid-wrapper">
          {articles.map((index) => {
            const artist = sortedData[index]; // index로 접근

            if (!artist) return null; // artist가 undefined일 경우 null 반환

            return (
              <PopUpBelow delay={0}>
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
                  <s.Image
                    src={artist.randomImage}
                    alt={`${artist.nickname}`}
                    className="article-random-image"
                  />
                </s.ArticleDiv>
                <s.ArticleDiv className="article-text-container">
                  <s.StyledH1 className="article-name">
                    {artist.nickname}
                  </s.StyledH1>
                </s.ArticleDiv>
              </s.ArticleDiv>
              </PopUpBelow>
            );
          })}
        </s.ArticleDiv>
      </s.ArticleDiv>
    </>
  );
};

export default Article;
