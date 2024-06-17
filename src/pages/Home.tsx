import React from 'react'
import s from '../stores/styling'
import MainPageImage01 from '../assets/images/main_page_png01_1.png';
import MainPageImage02 from '../assets/images/main_page_png02.png';

export default function TestPage() {
  return (
    <s.TestPage>
      <div>TestPage</div>
      <s.MainPageImageWrapper>
        <s.MainPageImage className='LayeredImage01' src={MainPageImage01} alt="photo"/> 
        <s.Circle />
        <s.MainPageImage className='LayeredImage02' src={MainPageImage02} alt="photo"/> 
      </s.MainPageImageWrapper>
    </s.TestPage>
  )
}
