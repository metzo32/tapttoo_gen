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
  const [offTransition, setOffTransition] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const direction = useRef('left')

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

  const slides = setSliders()

  const handlerSlider = (index: number) => {
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }
    setCurrentIndex(index)
  }
  
  const handleSwipe = (direction: 'left'|'right') => {
    console.log('클릭')
    const newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1
    handlerSlider(newIndex)
  }

  const buttonControll = () => {
    setDisabled(true)
    setTimeout(() => setDisabled(false), 1000)
  }

  useEffect(() => {
    console.log('Slide ID:', slides[currentIndex].id)
    if (currentIndex === 1 && direction.current === 'left') {
      setTimeout(() => {
        setOffTransition(true)
        setCurrentIndex(slides.length - 3)
      }, 500)

      setTimeout(() => {
        setOffTransition(false)
      }, 600)
    } else if (currentIndex === slides.length - 2 && direction.current === 'right') {
      setTimeout(() => {
        setOffTransition(true)
        setCurrentIndex(2)
      }, 500)

      setTimeout(() => {
        setOffTransition(false)
      }, 600)
    }
  }, [currentIndex])

  const transition = offTransition ? '0s' : '0.5s';

  return (
    <s.Carousel className='carousel-container'>
      <s.Button 
        className='carousel-btn-left'
        disabled={disabled}
        onClick={() => {
          direction.current = 'left'
          handleSwipe('left')
          buttonControll()
        }}>
        이전
      </s.Button>

      <s.Carousel className='carousel-wrapper'>
        <s.Carousel 
          className='carousel-box' 
          style={{transform: `translateX(${-100 * currentIndex}%)`, transition}}
        >
          {slides.map(({ url, id }, idx) => (
            <s.Carousel 
              key={idx} 
              className='carousel-item' 
              style={{backgroundImage: `url(${url})`}}
            >
              {id}
            </s.Carousel>
          ))}
        </s.Carousel>
      </s.Carousel>

      <s.Button 
        className='carousel-btn-right'
        disabled={disabled}
        onClick={() => {
          direction.current = 'right'
          handleSwipe('right')
          buttonControll()
        }}>
        다음
      </s.Button>
    </s.Carousel>
  )
}