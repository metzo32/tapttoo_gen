import React from 'react'
import s from '../stores/styling'
import new01 from '../assets/images/new01.jpg'
import new02 from '../assets/images/new02.jpg'
import new03 from '../assets/images/new03.jpg'

export default function SearchNew() {
  return (
    <>
        <s.Div className='search-new-wrapper'>
            {/* <s.StyledH1 className='new-artists-title'>
                Lastest Artists
            </s.StyledH1> */}
            <s.StyledH2 className='artist-name'>
                COCINAMADRE
            </s.StyledH2>
            <s.StyledP className='hashtag'>
                #핸드포크 #섬세한 #개성있는
            </s.StyledP>
            <s.Div className='new-img-box'>
                <s.Image src={new01} alt='photo' className='new-artist-img'/>
                <s.Image src={new02} alt='photo' className='new-artist-img'/>
                <s.Image src={new03} alt='photo' className='new-artist-img'/>
            </s.Div>
        </s.Div>
    </>
  )
}
