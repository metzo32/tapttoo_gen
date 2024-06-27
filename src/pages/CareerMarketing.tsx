import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const CareerMarketing = () => {

  const data = useContext(AuthContext)
  console.log('대박', data)

  return (
    <div>CareerMarketing</div>
  )
}


export default CareerMarketing