import React, { useEffect } from 'react'
import s from '../stores/styling'

import BrandTitle from '../components/BrandTitle';
import BrandMidTitle from '../components/BrandMidTitle';
import Description from '../components/Description';
import GridBrand from '../components/GridBrand';
import BrandTitleBottom from '../components/BrandTitleBottom';
import WideImage from '../components/WideImage';
import ScrollToTop from '../components/ScrollToTop';

import BrandMidImage from '../assets/images/15.jpg';
import BrandMidImage02 from '../assets/images/mid.jpg';
import MidImage from '../assets/images/11.jpg'




export default function Section() {

  return (
    <>
    <ScrollToTop />
      <s.SectionContainer className='section-main'>
        <s.SectionFrame>
          <BrandTitle />
        </s.SectionFrame>
        <s.SectionFrame>
          <BrandMidTitle />
        </s.SectionFrame>
          <WideImage image={BrandMidImage} alt="photo"/> 
          {/* 캐러셀 */}
        <s.SectionFrame>
          <Description  
            alignRight={false}
            title={<>Harmony of Heritage and <br />Sustainability</>}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic modi dicta velit, magni corporis quisquam rem quos illum, quibusdam, dolore quae aliquid labore iure a? Debitis, soluta."
          />
        </s.SectionFrame>
          <WideImage image={MidImage} alt="photo"/>
        <s.SectionFrame>
          <Description 
            alignRight={true}
            title={<>Designs created by<br />Enthusiastic artitst</>}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam a ipsa iste, animi quaerat velit. Nulla est temporibus inventore iure. Nemo tempore, nam quidem fuga commodi enim maiores eos a."
          />
        </s.SectionFrame>
        <GridBrand />
        <s.SectionFrame>
          <Description 
            alignRight={false}
            title={<>Explore our other<br />Collaborative works</>}
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia amet dicta saepe cum vel sunt officia delectus adipisci recusandae cupiditate, neque eaque aperiam. A aut tempore dolore dolorum deserunt veniam!"
          />
        </s.SectionFrame>
          <WideImage image={BrandMidImage02} alt="photo"/> 
        <s.SectionFrame>
          <BrandTitleBottom />
        </s.SectionFrame>
      </s.SectionContainer>
    </>
  )
}
