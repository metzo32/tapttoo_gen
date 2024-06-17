import React from 'react'
import { useNavigate } from 'react-router-dom';
import s from '../stores/styling'

import BrandTitle from '../components/BrandTitle';
import BrandMidTitle from '../components/BrandMidTitle';
import Description from '../components/Description';
import Grid from '../components/Grid';
import BrandTitleBottom from '../components/BrandTitleBottom';
import WideImage from '../components/WideImage';

import BrandMidImage from '../assets/images/15.jpg';
import BrandMidImage02 from '../assets/images/mid.jpg';
import MidImage from '../assets/images/11.jpg'
export default function Section() {
  return (
    <>
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
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic modi dicta velit, magni corporis quisquam perferendis aspernatur veritatis rem quos illum, quibusdam, dolore quae aliquid labore iure a? Debitis, soluta."
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
      <Grid />
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
    </>
  )
}
