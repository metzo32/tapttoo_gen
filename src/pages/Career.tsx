import s from "../stores/styling";
import businessbg from "../assets/images/business-bg.jpg";
import Accordion from "../components/CareerAccordion";

export default function Career() {
  return (
    <>
      <s.CareerDetail className="career-detail-wrapper">
        <s.StyledH1 className="career-detail-title">
          WE'RE NOT NEW HERE, <br />
          BUT WE'RE CONSTANTLY EVOLVING
        </s.StyledH1>
        <s.CareerDetail className="img-container">
          <s.Image src={businessbg} alt="photo" className="" />
        </s.CareerDetail>

        <Accordion />

      </s.CareerDetail>
    </>
  );
}
