import {
  Div,
  H4,
  P,
  FaceBookIcon,
  TiktokIcon,
  InstagramIcon,
  YoutubeIcon,
} from "./Footer.style";

export default function Footer() {
  return (
    <Div className="wrapper">
      <Div className="container">
        <Div className="brand-wrapper">
          {/* <BrandLogo /> */}
          <H4>Tapttoo</H4>
        </Div>

        <Div className="footer-icon-box">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaceBookIcon className="outlined" />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiktokIcon className="outlined" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="outlined" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeIcon className="outlined" />
          </a>
        </Div>
      </Div>

      <Div className="copyright">
        <Div className="footer-box-left">
          <P>{"\u00A9"} 2024 Tapttoo All Rights Reserved</P>
        </Div>


        <Div className="footer-box-right">
          <P>Terms of Use</P>
          <P>Privacy Policy</P>
        </Div>
      </Div>
    </Div>
  );
}
