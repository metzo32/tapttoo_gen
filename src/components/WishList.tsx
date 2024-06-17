import React, { useState } from 'react'
import s from '../stores/styling'

const WishList: React.FC = () => {

  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  const handleMouseClick = () => {
    setClicked(!clicked)
  }

  const renderIcon = () => {
    if (clicked) {
      return <s.WishIconClicked/>
    } 
    else if (hovered) {
      return <s.WishIconHover/>
    }
    else {
      return <s.WishIconLine/>
    }
  }

  return (
    <s.WishIconContainer 
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
      onClick={handleMouseClick}
    >
     {renderIcon()}
    </s.WishIconContainer>
  )
}

export default WishList