import mainImage from "../assets/images/main.jpg";
import s from "../stores/styling";
import { motion, useInView, useAnimation } from "framer-motion";
import { PopUpBelow, PopUpRight } from "./FramerMotions/scrollMotions";

export default function BrandTopTitle() {
  return (
    <>
      <s.AboutDiv className="title-container">
        <PopUpRight delay={0.6}>
          <s.StyledH1 className="brand-title">
            We are Visionary
            <br />
            Craftsmen
          </s.StyledH1>
        </PopUpRight>

        <PopUpBelow delay={0.8}>
          <s.StyledP className="about-first-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit maiores
            placeat nihil commodi animi illo. <br /> Doloribus sint, explicabo
            rem quasi at dolore exercitationem aliquid obcaecati fuga neque
            recusandae xplicabo, ea id.
          </s.StyledP>
        </PopUpBelow>

        <PopUpBelow  delay={1.2}>
          <s.MainImage src={mainImage} alt="photo" />
        </PopUpBelow>

        <PopUpBelow  delay={0.5}>
          <s.StyledH2 className="gradient-title">
            Lorem ipsum dolor sit, amet consectetur ad assumenda est quas
            possimus adipisicing. <br />
            Voluptatum ex, sint consequatur tempore praesentium nesciunt quam et
            reiciendis fuga a exercitationem.
          </s.StyledH2>
        </PopUpBelow>

      </s.AboutDiv>
    </>
  );
}
