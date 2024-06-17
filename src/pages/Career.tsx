import s from '../stores/styling'
import SimpleSlider from '../components/Carousel'
import businessImage from '../assets/images/business.jpg'
import engineeringImage from '../assets/images/engineering.jpg'
import designImage from '../assets/images/design.jpg'
import csImage from '../assets/images/cs.jpg'
import careerMainImage from '../assets/images/career-main.jpg'
import artistImage from '../assets/images/artist.jpg'
import internImage from '../assets/images/intern.jpg'


export default function Career() {

  const handleCareerDetail = (url: string) => {
    window.location.href = url;
  }

  return (
    <s.PageWrapper className='career-wrapper'>
      <s.LongImgWrapper>
        <s.Image src={careerMainImage} alt="photo" className='LongImage'/>
      </s.LongImgWrapper>
      <s.SectionFrame>
        <s.CareerDiv className="career-row">
          <s.CareerDiv className="career-column">
            <s.StyledH1 className='career-title'>
              We are hiring
            </s.StyledH1>
            <s.StyledP className='career-info'>    
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cum deserunt quod modi nisi? Quidem, ducimus sunt. Iusto culpa natus doloremque sit nemo nesciunt necessitatibus. Saepe vero tempora dolorem explicabo?
            </s.StyledP>
          </s.CareerDiv>
        </s.CareerDiv>
      </s.SectionFrame>
      <s.SectionFrame className='carousel-frame'>
        <SimpleSlider />
      </s.SectionFrame>
      <s.SectionFrame className='career-img-wrapper'>
        <s.CareerItem onClick={() => handleCareerDetail('/careerbusiness')}>
          <s.CareerP>Business</s.CareerP>
          <s.Image src={businessImage} alt="photo" />
        </s.CareerItem>
        <s.CareerItem onClick={() => handleCareerDetail('/careerengineering')}>
        <s.CareerP>Engineering</s.CareerP>
          <s.Image src={engineeringImage} alt="photo" />
        </s.CareerItem>
        <s.CareerItem onClick={() => handleCareerDetail('/careerdesign')}>
          <s.CareerP>Design</s.CareerP>
          <s.Image src={designImage} alt="photo" />
        </s.CareerItem>
        <s.CareerItem onClick={() => handleCareerDetail('/careermarketing')}>
          <s.CareerP>Marketing</s.CareerP>
          <s.Image src={csImage} alt="photo" />
        </s.CareerItem>
      </s.SectionFrame>

      <s.SectionFrame className='career-img-wrapper'>
        <s.CareerItem className='half' onClick={() => handleCareerDetail('/joinartist')}>
          <s.CareerP>Register as Tattooist</s.CareerP>
          <s.Image src={artistImage} alt="photo" />
        </s.CareerItem>
        <s.CareerItem className='half' onClick={() => handleCareerDetail('/')}>
          <s.CareerP>Register as Model</s.CareerP>
          <s.Image src={internImage} alt="photo" />
        </s.CareerItem>
      </s.SectionFrame>
    </s.PageWrapper>
  )
}
