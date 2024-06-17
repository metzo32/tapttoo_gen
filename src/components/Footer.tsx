import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from '../stores/styling'


export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path)
  }

  return (
    <s.FooterColumnWrapper>
      <s.FooterRowWrapper>
        <s.BrandWrapper>
          <s.BrandLogo />
          <s.BrandText>
          Tabtoo
          </s.BrandText>
        </s.BrandWrapper>
        <s.ButtonWrapper>
          <s.Button onClick={() => handleNavigation('/')}>Home</s.Button>
          <s.Button onClick={() => handleNavigation('/aboutus')}>About us</s.Button>
          <s.Button onClick={() => handleNavigation('/Service')}>Service</s.Button>
          <s.Button onClick={() => handleNavigation('/Career')}>Career</s.Button>
          <s.Button onClick={() => handleNavigation('/Contact')}>Contact</s.Button>
        </s.ButtonWrapper>
        <s.ContactWrapper>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <s.FaceBookIcon />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <s.TiktokIcon />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <s.InstagramIcon />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <s.YoutubeIcon />
          </a>
        </s.ContactWrapper>
      </s.FooterRowWrapper>
      <s.FooterCopyrightWrapper>
          <div>{'\u00A9'} 2024 Tabttoo All Rights Reserved</div>
          <s.hr />
          <s.PolicyWrapper>
            <div>Terms of Use</div>
            <div>Privacy Policy</div>
          </s.PolicyWrapper>
      </s.FooterCopyrightWrapper>
    </s.FooterColumnWrapper>
    
    )
}
