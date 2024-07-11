import s from "./styling";
import searchMainImage1 from "../assets/images/carousel_searchmain_01.png";
import searchMainImage2 from "../assets/images/carousel_searchmain_02.png";
import searchMainImage3 from "../assets/images/carousel_searchmain_03.png";
import searchMainImage4 from "../assets/images/carousel_searchmain_04.png";
import searchMainImage5 from "../assets/images/carousel_searchmain_05.png";

const searchMainImages = [
  <s.Carousel className="data">
    <s.Image src={searchMainImage1} alt="image" />
    <s.StyledH3 className="carousel-title">
      We can deliver <br/>new way to express yourself
    </s.StyledH3>
    <s.Line className="light"/>
  </s.Carousel>,

  <s.Carousel className="data">
    <s.Image src={searchMainImage2} alt="image" />
    <s.StyledH3 className="carousel-title">
      We can deliver new way to express yourself
    </s.StyledH3>
    <s.Line className="light"/>
  </s.Carousel>,

  <s.Carousel className="data">
    <s.Image src={searchMainImage3} alt="image" />
    <s.StyledH3 className="carousel-title">
      We can deliver new way to express yourself
    </s.StyledH3>
    <s.Line className="light"/>
  </s.Carousel>,

  <s.Carousel className="data">
    <s.Image src={searchMainImage4} alt="image" />
    <s.StyledH3 className="carousel-title">
      We can deliver new way to express yourself
    </s.StyledH3>
    <s.Line className="light"/>
  </s.Carousel>,

  <s.Carousel className="data">
    <s.Image src={searchMainImage5} alt="image" />
    <s.StyledH3 className="carousel-title">
      We can deliver new way to express yourself
    </s.StyledH3>
    <s.Line className="light"/>
  </s.Carousel>,
];

export default searchMainImages;
