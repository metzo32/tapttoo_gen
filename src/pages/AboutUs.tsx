import React, { useEffect } from "react";
import s from "../stores/styling";

import BrandTopTitle from "../components/BrandTopTitle";
import BrandMidTitle from "../components/BrandMidTitle";
import Description from "../components/Description";
import GridBrand from "../components/GridBrand";
import BrandBottomTitle from "../components/BrandTitleBottom";
import WideImage from "../components/WideImage";
import ScrollToTop from "../components/ScrollToTop";

import BrandMidImage from "../assets/images/15.jpg";
import BrandMidImage02 from "../assets/images/mid.jpg";
import MidImage from "../assets/images/11.jpg";

export default function AboutUs() {

  return (
    <>
      <ScrollToTop />
      <s.AboutDiv className="wrapper">
        <s.AboutDiv>
          <BrandTopTitle />
        </s.AboutDiv>
        <s.AboutDiv>
          <BrandMidTitle />
        </s.AboutDiv>
        <WideImage image={BrandMidImage} alt="photo" />
        {/* 캐러셀 */}
        <s.AboutDiv>
          <Description
            alignRight={false}
            title={
              <>
                Harmony of Heritage and <br />
                Sustainability
              </>
            }
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic modi dicta velit, magni corporis quisquam rem quos illum, quibusdam, dolore quae aliquid labore iure a? Debitis, soluta."
          />
        </s.AboutDiv>
        <WideImage image={MidImage} alt="photo" />
        <s.AboutDiv className="box">
          <Description
            alignRight={true}
            title={
              <>
                Designs created by
                <br />
                Enthusiastic artitst
              </>
            }
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam a ipsa iste, animi quaerat velit. Nulla est temporibus inventore iure. Nemo tempore, nam quidem fuga commodi enim maiores eos a."
          />
          <s.AboutDiv className="button-box">
            <s.Button className="Round">바로 둘러보기</s.Button>
          </s.AboutDiv>
        </s.AboutDiv>
        <GridBrand />
        <s.AboutDiv className="box">
          <Description
            alignRight={false}
            title={
              <>
                Explore our other
                <br />
                Collaborative works
              </>
            }
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia amet dicta saepe cum vel sunt officia delectus adipisci recusandae cupiditate, neque eaque aperiam. A aut tempore dolore dolorum deserunt veniam!"
          />
        </s.AboutDiv>
        <WideImage image={BrandMidImage02} alt="photo" />
        <s.AboutDiv>
          <BrandBottomTitle />
        </s.AboutDiv>
        {/* 여기 */}
      </s.AboutDiv>
    </>
  );
}
