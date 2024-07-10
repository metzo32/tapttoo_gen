import { useEffect, useRef, useState } from 'react'
import s from '../stores/styling'
import { CarouselItem, CarouselProps } from '../types/CarouselType'


const Carousel: React.FC<CarouselProps> = ({ items, renderItem }) => {

  const [currentIndex, setCurrentIndex] = useState(2)
  const fakeData = 2;
  const [offTransition, setOffTransition] = useState(false) //슬라이드 전환 애니메이션을 잠시 비활성화
  const [disabled, setDisabled] = useState(false) //버튼 클릭을 일시적으로 비활성화
  const direction = useRef('left')  //슬라이드 이동 방향 추적

  const setSliders = () => {  // fake 슬라이드를 통해 무한루프처럼 구현
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

  const handlerSlider = (index: number) => {  //슬라이드 인덱스 업데이트
    if (index < 0) {
      index = slides.length - 1;
    } 
    else if (index >= slides.length) {
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

  useEffect(() => { //슬라이드 인덱스가 업데이트 될때마다 애니메이션 비활성화
    console.log('Slide ID:', slides[currentIndex].id)

    if (currentIndex === 1 && direction.current === 'left') {
      setTimeout(() => {
        setOffTransition(true)
        setCurrentIndex(slides.length - 3)
      }, 500)

      setTimeout(() => {
        setOffTransition(false)
      }, 600)
    } 

    else if (currentIndex === slides.length - 2 && direction.current === 'right') {
      setTimeout(() => {
        setOffTransition(true)
        setCurrentIndex(2)
      }, 500)

      setTimeout(() => {
        setOffTransition(false)
      }, 600)
    }
  }, [currentIndex, slides.length]) //slides.length를 추가하여 아이템 갯수와 상관없이 구현 가능하도록

  const transition = offTransition ? '0s' : '0.5s';

  return (
    <s.Carousel className='carousel-wrapper'>
      <s.Button 
        className='carousel-btn-left'
        disabled={disabled}
        onClick={() => {
          direction.current = 'left'
          handleSwipe('left')
          buttonControll()
        }}>
        <s.LeftIcon/>
      </s.Button>

        <s.Carousel 
          className='carousel-box' 
          style={{transform: `translateX(${-100 * currentIndex}%)`, transition}}
        >
          {slides.map((item, idx) => (
            <s.Carousel 
              key={idx} 
              className='carousel-item' 
            >
              {renderItem(item)}
            </s.Carousel>
          ))}
        </s.Carousel>

      <s.Button 
        className='carousel-btn-right'
        disabled={disabled}
        onClick={() => {
          direction.current = 'right'
          handleSwipe('right')
          buttonControll()
        }}>
        <s.RightIcon/>
      </s.Button>
    </s.Carousel>
  )
}


export default Carousel;