// import React, { useState, useEffect } from "react";
// import s from "../../stores/styling";
// import ArtistData from "../../assets/datas/artitst_data";
// import ScrollToTop from "../../components/ScrollToTop";
// import WishList from "../../components/WishList";
// import SortButtons from "../../components/SortButtons";


// const Article: React.FC = () => {

//   const [articles, setArticles] = useState<number[]>([1, 2, 3, 4]);
//   const [sortedData, setSortedData] = useState(ArtistData);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + window.scrollY >=
//         document.body.offsetHeight - 1500
//       ) {
//         setArticles((prevArticles) => [
//           ...prevArticles, //useState에 사용된 articles의 최신 상태를 참조
//           prevArticles.length + 1,
//           prevArticles.length + 2,
//         ]);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []); //컴포넌트가 마운트될 때 이벤트 리스너 추가

//   const handleCardRedirect = (nickname: string) => {
//     const url = `/profile_artist_${nickname}`;
//     if (url) {
//       window.location.href = url;
//     } else {
//       console.error("URL 찾을 수 없음");
//     }
//   };

//   const handleSort = (sortedArray: typeof ArtistData) => {
//     setSortedData(sortedArray);
//   };

//   return (
//     <s.ArticleDiv className="wrapper">
//       <ScrollToTop />

//       <SortButtons sortedData={sortedData} sortDone={handleSort} />

//       <s.ArticleDiv className="mid-wrapper">
//         {articles.map((nickname) => {
//           const artist = sortedData[nickname]; // 정렬된 새로운 배열을 할당하여 업데이트
//           return (
//             <s.ArticleDiv
//               key={artist.id}
//               className="article-cards"
//               onClick={() => handleCardRedirect(artist.nickname)}
//             >
//               <WishList />
//               <s.ArticleDiv className="article-grid-image">
//                 <s.Image src={artist.randomImage} alt={`${artist.nickname}`} />
//               </s.ArticleDiv>
//               <s.ArticleDiv className="article-text-container">
//                 <s.StyledH1 className="article-name">
//                   {artist.nickname}
//                 </s.StyledH1>
//               </s.ArticleDiv>
//             </s.ArticleDiv>
//           );
//         })}
//       </s.ArticleDiv>
//     </s.ArticleDiv>
//   );
// };

// export default Article;
import React from 'react'

export default function ArticleOld2() {
  return (
    <div>
      
    </div>
  )
}
