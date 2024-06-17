import React, { useEffect, useRef, useState } from 'react'
import s from '../stores/styling'

export default function Carousel() {

    const [items, setItems] = useState([
        { id: 1, url: 'https://images.app.goo.gl/gvhe3VaycwCW6JfZ6' },
        { id: 2, url: 'https://images.app.goo.gl/8bM8GiwpkkzfaSnK7' },
        { id: 3, url: 'https://images.app.goo.gl/SfhtK1KJouYkoAp76' },
        { id: 4, url: 'https://images.app.goo.gl/Xtgy3ug9XT7RxY9n9' },
        { id: 5, url: 'https://images.app.goo.gl/rv8qvSwbz8NWjTi67' },
      ])

    const [currentIndex, setCurrentIndex] = useState(2)
    const fakeData = 2;
    const setSliders = () => {
        const fakeFront = []
        const fakeLast = []

        let index = 0;
        while (index < fakeData) {
            fakeLast.push(items[index % items.length])
            fakeFront.unshift(items[items.length - 1 - (index % items.length)])
            index++
        }
    return [...fakeFront, ...items, ...fakeLast]
    }

  const handlerSlider = (index: number) => {
    if (index < 0) {
      direction.current = 'left'
      index = slides.length - 1;
      setOffTransition(true)
    } else if (index === slides.length - 1) {
      direction.current = 'right'
      index = slides.length - 1;
      setOffTransition(true)
    }
    setCurrentIndex(index)
  }
  
  //방향 판별
  const handleSwipe = (direction: 'left' | 'right') => {
    console.log('클릭')
    const newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1
    handlerSlider(newIndex)
  }

  const slides = setSliders()
  const [offTransition, setOffTransition] = useState(false)
  const direction = useRef('left')
  const transition = offTransition ? '0s' : '0.5s'; //슬라이딩 속도
  const [disabled, setDisabled] = useState(false)

  const buttonControll = () => {
    //버튼 사용 직후 1초간 비활성화 (연타 방지)
    setDisabled(true)
    setTimeout(() => setDisabled(false), 1000)
  }
  

  useEffect(() => {
    console.log('Slide ID:', slides[currentIndex].id)
     //오른쪽 마지막 인덱스일 경우
    if ( direction.current === 'right' && currentIndex === slides.length - 1 ) {
      //transition 잠시 껐다가 0번 인덱스로
      setTimeout(() => {
        setOffTransition(true)
        setCurrentIndex(2)  // fakedata가 2개이기 때문에 index(2)가 첫번째 id
      }, 1000)

      //0.1초 후 transition 다시 켜기
      setTimeout(() => {
        setOffTransition(false)
      }, 1100)

    //0번에서 마지막으로 넘어갈 경우
    } else if ( direction.current === 'left' && currentIndex === slides.length - 1 ) {
      //위 조건과 겹치지 않도록 먼저 transition을 끄고 넘어간 뒤 0.01초 후 켜서 눈속임
      setTimeout(() => {
        setOffTransition(false)
        setCurrentIndex(slides.length - 2)
      }, 10)
    }
  }, [currentIndex])

  return (
    <>
      <s.Button 
        disabled={disabled}
        onClick={() => {
          handleSwipe('left')
          buttonControll()
        }}>
      이전
      </s.Button>

      <s.Carousel className='carousel-wrapper'>
        <s.Carousel 
          className='carousel-box' 
          style={{transform: `translateX(${-100 * currentIndex}%)`, transition}}
          //각 슬라이드를 전체 화면 너비의 100%만큼 이동
        >
          {slides.map( ({ url, id }, idx) => {
            return (
              <s.Carousel 
                key={idx} 
                className='carousel-items' 
                style={{backgroundImage: `url(${url})`}}
              >
                {id}
              </s.Carousel>
            )
          })}
        </s.Carousel>
      </s.Carousel>

      <s.Button 
        disabled={disabled}
        onClick={() => {
          handleSwipe('right')
          buttonControll()
        }}>
      다음
      </s.Button>
    </>
  )
}