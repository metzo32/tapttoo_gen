import React, { useEffect, useState } from 'react';
import s from "../stores/styling";

interface Article {
  author: string | null;
  content: string | null;
  description: string | null;
  publishedAt: string;
  source: {
    id: string | null;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string | null;
}

function FetchNews() {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getNews = () => {
    fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f84bcedb0ad741ab8c26bb8796e80f66')
      .then(res => res.json())
      .then(json => {
        setNews(json.articles);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching news:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getNews();
    console.log(news)
  }, []);


  return (
    <>
      {loading ? (
        <s.ArticleDiv className='article-grid-text'>Loading...</s.ArticleDiv>
      ) : (
        <s.ArticleDiv className='article-grid-text'>
          {news.map((article, index) => (
            <s.ArticleDiv key={index}>
              {article.description}
            </s.ArticleDiv>
          ))}
        </s.ArticleDiv>
      )}
    </>
  );
}
  
export default FetchNews;