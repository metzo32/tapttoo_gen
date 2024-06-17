import React from 'react'
import s from '../stores/styling'
import GridImage01 from '../assets/grid images/01.jpg';
import GridImage02 from '../assets/grid images/02.jpg';
import GridImage03 from '../assets/grid images/03.jpg';

export default function GridLike() {
  return (
    <s.ProfileGrid>
        <s.GridImage src={GridImage01} className="gridlikeimg01" alt="Image 1" />
        <s.GridImage src={GridImage02} className="gridlikeimg02" alt="Image 2" />
        <s.GridImage src={GridImage03} className="gridlikeimg03" alt="Image 3" />
    </s.ProfileGrid>
    )
}
