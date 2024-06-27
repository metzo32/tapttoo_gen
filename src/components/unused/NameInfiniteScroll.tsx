import React, { useState, useEffect } from 'react';
import s from '../../stores/styling'
import FetchName from '../unused/FetchName'

const Article: React.FC = () => {
  const [articles, setArticles] = useState<{ id: number, name: string | null }[]>([
    { id: 1, name: null }, 
    { id: 2, name: null }
  ]);
  const [names, setNames] = useState<string[]>([]);
  const [fetchNamesFlag, setFetchNamesFlag] = useState<boolean>(true);

  const handleNamesFetch = (fetchedNames: string[]) => {
    setNames(prevNames => [...prevNames, ...fetchedNames]);
    setFetchNamesFlag(true); // 이름을 가져왔으면 플래그를 true로 설정
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        setArticles(prevArticles => [
          ...prevArticles,
          { id: prevArticles.length + 1, name: null },
          { id: prevArticles.length + 2, name: null }
        ]);
        setFetchNamesFlag(true); // 새로운 상자가 추가되었을 때 플래그를 true로
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setArticles(prevArticles => {
      return prevArticles.map((article, index) => {
        if (article.name === null && names[index]) {
          return { ...article, name: names[index] };
        }
        return article;
      });
    });
  }, [names]);

  useEffect(() => {
    if (fetchNamesFlag && articles.some(article => article.name === null)) {
      setFetchNamesFlag(false); // 이름을 또 가져오기 전에 플래그를 false로
    }
  }, [articles, fetchNamesFlag]);

  return (
    <></>
    // <s.ArticleWrapper>
    //   <h1>Article</h1>
    //   <s.ArticleMidWrapper>
    //     {fetchNamesFlag && <FetchName onNamesFetch={handleNamesFetch} />}
    //     {articles.map((article) => (
    //       <s.ArticleDiv key={article.id} className='article-cards'>
    //         {article.name ? article.name : `Loading name...`}
    //       </s.ArticleDiv>
    //     ))}
    //   </s.ArticleMidWrapper>
    // </s.ArticleWrapper>
  );
}

export default Article;
