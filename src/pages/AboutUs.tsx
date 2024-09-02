import s from "../stores/styling";
import { useNavigate } from "react-router-dom";
import BrandTopTitle from "../components/BrandTopTitle";
import BrandMidTitle from "../components/BrandMidTitle";
import BrandDropDescription from "../components/BrandDropDescription";
import GridBrand from "../components/GridBrand";
import BrandBottomTitle from "../components/BrandTitleBottom";
import StartFromTop from "../components/StartFromTop";
import CustomCarousel from "../components/CustomCarousel";
import HoverButton from "../components/HoverButton";

import MidImage from "../assets/images/about_02.jpg";
import BrandLastImage from "../assets/images/about_01.jpg";

import DrawLetter from "../components/DrawLetter";

import { ScrollEvent } from "../components/FramerMotions/scrollMotions";

export default function AboutUs() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
      {/* <StartFromTop /> */}
      <s.AboutDiv className="wrapper">
        {/* <DrawLetter/> */}
        <BrandTopTitle />

        <BrandMidTitle />

        <CustomCarousel />

        <BrandDropDescription
          title={"Harmony of Heritage and Sustainability"}
          text={
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic modi
              dicta velit, magni corporis quisquam rem quos illum, quibusdam,
              dolore quae aliquid labore iure a? Debitis, soluta.
            </>
          }
        />

        <ScrollEvent>
          <s.Image className="BrandMidImage" src={MidImage} alt="photo" />
        </ScrollEvent>

        <BrandDropDescription
          title={"Designs created by Enthusiastic artitst"}
          text={
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam a
              ipsa iste, animi quaerat velit. Nulla est temporibus inventore
              iure. Nemo tempore, nam quidem fuga commodi enim maiores eos a.
            </>
          }
        />

        <s.AboutDiv className="about-button-box">
          <HoverButton
            onClick={() => handleNavigation("/article")}
            circle={true}
            text="바로 둘러보기"
          />
        </s.AboutDiv>

        <GridBrand />

        <BrandDropDescription
          title={"Explore our other Collaborative works"}
          text={
            <>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              amet dicta saepe cum vel sunt officia delectus adipisci recusandae
              cupiditate, neque eaque aperiam. A aut tempore dolore dolorum
              deserunt veniam!
            </>
          }
        />

        <s.Image className="BrandMidImage" src={BrandLastImage} alt="photo" />
        <BrandBottomTitle />
      </s.AboutDiv>
    </>
  );
}
