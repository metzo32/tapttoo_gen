import React from 'react'
import s from '../stores/styling'

import background from '../assets/images/artistregister-background.jpg'

export default function ArtistRegister() {
  return (
    <s.ArtistReg className="artist-wrapper">
      <s.ArtistReg className="bg-filter"/>
      <s.Image src={background} alt="photo" className="artist-bg"/>
    </s.ArtistReg>
  )
}
