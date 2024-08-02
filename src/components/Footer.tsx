import { useNavigate } from "react-router-dom";
import s from "../stores/styling";

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <s.Footer className="footer-wrapper">
      <s.Footer className="footer-container">
         <s.Footer className="brand-wrapper">
          <s.BrandLogo />
          <s.BrandText>Tapttoo</s.BrandText>
        </s.Footer>
        <s.Footer className="footer-button-wrapper">
          <s.Button onClick={() => handleNavigation("/")}>Home</s.Button>
          <s.Button onClick={() => handleNavigation("/aboutus")}>
            About us
          </s.Button>
          <s.Button onClick={() => handleNavigation("/Career")}>
            Career
          </s.Button>
          <s.Button onClick={() => handleNavigation("/Contact")}>
            Contact
          </s.Button>
        </s.Footer>
        <s.Footer className="footer-icon-box">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <s.FaceBookIcon className="outlined"/>
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <s.TiktokIcon className="outlined"/>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <s.InstagramIcon className="outlined"/>
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <s.YoutubeIcon className="outlined"/>
          </a>
        </s.Footer>
      </s.Footer>

      <s.Footer className="copyright">
        <s.Footer className="footer-box-left">
          <s.StyledP className="footer-copyright">
            {"\u00A9"} 2024 Tabttoo All Rights Reserved
          </s.StyledP>
        </s.Footer>

        <s.Line className="horizontal footer" />

        <s.Footer className="footer-box-right">
          <s.StyledP className="footer-copyright">Terms of Use</s.StyledP>
          <s.StyledP className="footer-copyright">Privacy Policy</s.StyledP>
        </s.Footer>
      </s.Footer>
    </s.Footer>
  );
}
