import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import s from '../stores/styling'
import AuthContext from '../context/AuthContext'


export default function Header() {

  const navigate = useNavigate()
  const { isLoggedIn } = useContext(AuthContext);

  const handleNavigation = (path: string) => {
    if (isLoggedIn) {
      navigate('/profile')
    } else {
      navigate(path)
    }
  }

  return (
    <s.TotalWrapper>
      <s.ButtonWrapper>
        <s.Button onClick={() => handleNavigation('/')}>
          <s.HomeIcon />
        </s.Button>
        <s.Button onClick={() => handleNavigation('/login')}>
          <s.HamburgerIcon />
        </s.Button>
        <s.Button onClick={() => handleNavigation('/login')}>
          <s.NewsIcon />
        </s.Button>
        <s.Button onClick={() => handleNavigation('/login')}>
          <s.SearchIcon />
        </s.Button>
      </s.ButtonWrapper>

        <s.ButtonWrapper>
        <s.Button>en</s.Button>
        <s.Button>다크</s.Button>
        <s.Button 
          className='Round'
          onClick={() => handleNavigation('/login')}
        ><s.ProfileIcon/></s.Button>
      </s.ButtonWrapper>
    </s.TotalWrapper>
  )
}
