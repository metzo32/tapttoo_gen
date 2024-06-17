import React, { useState, useEffect } from 'react'
import s from '../stores/styling'
import artistdata from '../assets/datas/artitst_data'
import ScrollToTop from '../components/ScrollToTop'
import FetchNews from '../components/FetchNews'
import FetchImages from '../components/FetchImage'
import WishList from '../components/WishList'


const Article: React.FC = () => {
  const [articles, setArticles] = useState<number[]>([1, 2, 3, 4])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        setArticles(prevArticles => [
          ...prevArticles,
          prevArticles.length + 1,
          prevArticles.length + 2
        ])
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <s.ArticleWrapper>
      <ScrollToTop />
      <s.ArticleMidWrapper>
        {articles.map((article, index) => (
          <s.ArticleDiv key={index} className='article-cards'>
            <WishList />
            <s.ArticleDiv className='article-grid-image'>
            {/* <FetchImages /> */}
            <s.Image src={artistdata[index].randomImage} alt={`${artistdata[index].nickname}`}/>
            </s.ArticleDiv>
            <s.ArticleDiv className='article-hover-box'>
              {/* <s.ArticleDiv key={index} className='article-test'>
                호버 시 blur 및 톤다운 {article} 
              </s.ArticleDiv> */}
              <s.ArticleDiv className='article-name'>
                {artistdata[index].nickname}
              </s.ArticleDiv>
              <s.ArticleDiv className='article-text-container'>
                <s.StyledP className='article-text'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla labore laborum deleniti  explicabo laboriosam aliquam culpa voluptas nostrum.
                </s.StyledP>              
              </s.ArticleDiv>
              {/* <FetchNews/> */}
            </s.ArticleDiv>
            

          </s.ArticleDiv>
        ))}
      </s.ArticleMidWrapper>
    </s.ArticleWrapper>
  )
}


export default Article