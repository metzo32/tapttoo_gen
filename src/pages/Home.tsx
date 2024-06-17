import { useState } from 'react'
import s from '../stores/styling'
import LoadingScreen from '../components/LoadingScreen';
import MainPageImage01 from '../assets/images/main_page_png01_low.png';
import MainPageImage02 from '../assets/images/main_page_png02_low.png';

const TestPage = () => {

  const [loading, setLoading] = useState(true)
  
  const handleLoadingComplete = () => {
    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <LoadingScreen onLoadComplete={handleLoadingComplete} />
      ) : (
        <s.Home className="home-wrapper">
          <s.Home className='image-wrapper'>
            <s.HomeImage className='LayeredImage01' src={MainPageImage01} alt="photo"/> 
            
            <s.Mask className='mask-wrapper'>
              <s.Mask className='mask-container'>
                <s.MaskText>Tapttoo</s.MaskText>
              </s.Mask>

              <s.Mask className='circle-mask' aria-hidden="true" data-hero>
                <s.MaskText className='masked'>Tapttoo</s.MaskText>
              </s.Mask>
            </s.Mask>
            <s.HomeImage className='LayeredImage02' src={MainPageImage02} alt="photo"/> 
          </s.Home>
        </s.Home>
      )}
    </>
  )
}


export default TestPage;