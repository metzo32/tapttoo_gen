import styled from "styled-components";
import { ReactComponent as Home } from '../assets/icons/home.svg'
import { ReactComponent as Search } from '../assets/icons/search.svg'
import { ReactComponent as Profile} from '../assets/icons/profile.svg'
import { ReactComponent as Hamburger } from '../assets/icons/hamburger.svg'
import { ReactComponent as News } from '../assets/icons/news.svg'
import { ReactComponent as FaceBook } from '../assets/icons/fb.svg'
import { ReactComponent as Tiktok } from '../assets/icons/tiktok.svg'
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg'
import { ReactComponent as Youtube } from '../assets/icons/youtube.svg'
import { ReactComponent as Logo } from '../assets/icons/v.svg'


// 배경색 #eeedeb; 초록 #2C822B; 회색 #6e6560;

const TotalWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #eeedeb;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
    position: sticky;
    top: 0px;
`

const SectionFrame = styled.div`
    display: flex;
`

const BrandTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &.MarginBottom {
        margin-bottom: 200px;
    }
`
const StyledH1 = styled.h1 ` 
    font-family: 'DM Serif Display', serif;
    color: #2C822B;
    font-size: 18em; 
    letter-spacing : -0.05em;
    font-weight: 400;
    line-height: 110px;
    margin : 0px;
    margin-bottom: 160px;

    transform: scaleX(1.0);
    transform-origin: center;
`

const StyledH2 = styled.h2 ` 
    width: 90%;
    font-family: 'DM Serif Display', serif;
    font-size: 50px; 
    letter-spacing : -0.05em;
    font-weight: 400;
    line-height: 55px;
    padding: 0;
    margin: 0 auto;
    margin-top: 120px;
    margin-bottom: 200px;

    transform: scaleX(1.0);
    transform-origin: center;

    background: 
    -webkit-linear-gradient(170deg, rgba(46,116,47,1) 40%, rgba(141,194,139,1) 60%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  
    background: 
    linear-gradient(170deg, rgba(46,116,47,1) 40%, rgba(141,194,139,1) 60%);
    background-clip: text;
    color: transparent;

    &.boldTitle {
        width: 100%;
        font-size: 120px;
        line-height: 135px;
        padding: 0 20px 50px 20px;
        margin-bottom: 0px;
    }
`

const StyledH3 = styled.h3 ` 
    display: flex;
    font-family: 'DM Serif Display', serif;
    color: #2C822B;
    font-size: 40px; 
    letter-spacing : -0.05em;
    font-weight: 400;
    white-space: nowrap;
    padding: 0;
    margin: 0;

    transform: scaleX(1.0);
    transform-origin: center;
`

const StyledH4 = styled.h4 ` 
    width: 90%;
    font-family: 'DM Serif Display', serif;
    color: #2C822B;
    font-size: 40px; 
    letter-spacing : -0.05em;
    line-height: 40px;
    font-weight: 400;
    text-align: left;
    white-space: nowrap;
    padding: 0;
    margin: 0;
`
const StyledTitleP = styled.p `
    width: 70%;
    color: #6e6560;
    font-size: 20px; 
    text-align: center;

    &.coloredP {
        color: #2C822B;
        font-weight: bold;
    }
`

const StyledP = styled.p `
    width: 100%;
    color: #6e6560;
    text-align: left;
`


const BrandMidTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ServiceWrapper = styled.div`
    width: 29.48%;
    display: flex;
    flex-direction: column;
`

const ServiceDescriptionWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`

const ServiceDescription = styled.div`
    width: 100%
`

const SectionWrapper = styled.div`
    display: flex;
    justify-content: flex-start;

    &.alignRight {
        justify-content: flex-end;
    }
`

const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 20px;
    justify-content: space-between;
`
const ColumnWrapper = styled.div`  
    width: 57.80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const StyledUl = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    margin; 0;
`
const StyledLi = styled.li`
    color: #2C822B;
    margin-bottom: 5px;
`

const Image = styled.img`
    width: 100%;
    margin-bottom: 300px;

    &.BrandMidImage{
        height: auto; 
        object-fit: cover;
    }
`

const TestPage = styled.div`
    width: 100%;
    heigth: 1000px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

const MainPageImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 1000px;
    // background-color: #b3b3b3;
    overflow: hidden;
`

const MainPageImage = styled.img`

    &.LayeredImage01 {
        width: 52%;
        position: absolute;
        left: 10%;
        bottom: -200px;
        z-index: 2;
    }

    &.LayeredImage02 {
        width: 50%;
        position: absolute;
        left: 40%;
        bottom: 0px;
        z-index: 1;
    }
`

const Circle = styled.div`
    width: 1100px;
    height: 1100px;
    border-radius: 100%;
    background-color: #F66900;
    position: absolute;
    left: 50%;
    bottom: -100%;
    transform: translate(-50%, -50%);
    z-index: 0;
`

const MainImage = styled.img`
    width: 100%;
    border-bottom-right-radius: 800px 480px ;
    border-bottom-left-radius: 800px 480px ;
    margin-top: 20px;
`

const FooterColumnWrapper = styled.div`
    width: 100%;
    heigt: 170px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`

const FooterRowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const BrandWrapper = styled.div`
    color: #6e6560;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 60px;
`

const BrandLogo = styled(Logo)`
    width: 1.5em;
    height: 1.5em;
    fill: #6e6560;
`

const BrandText = styled.div`
    font-size: 24px;
    font-weight: 600;
    margin-left: 5px;
`

const FooterCopyrightWrapper = styled.div`
    color: #6e6560;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    white-space: nowrap;
    margin-top: 10px;
`

const hr = styled.hr`
    width: 100%;
    height: 1px;
    background-color: #acafb0;
    border: none;
    margin: 0 2% 0 2%;
`

const PolicyWrapper = styled.div`
    width: 220px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`


const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`

const ButtonBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
`

const ContactWrapper = styled.div`
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`

const LoginPageWrapper = styled.div`
    width: 30%;
    height: 60vh;
    margin-bottom: 200px;
    transform: translateY(20%);
`

const InputWrapper = styled.div`
    width: 300px;
    position: relative;
    display: flex;
    border-bottom: 2px solid #6e6560;
    margin: 25px 0;
`

const CheckboxWrapper = styled.div`
    color: #6e6560;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin: 15px 0;
`

const RememberLabel = styled.label`
    font-size: 0.8em;

`;

const Input = styled.input`
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
`

const Label = styled.label`
    position: absolute;
    top: 20%;
    left: 5px;
    transform: translateY(-50%);
    pointer-events: none;
    transition: 0.3s ease;

    ${Input}:focus + &,
    ${Input}:valid + &
    {
        top: -25px;  
        transform: translateY(0%); 
        color: #6E6560;
    }
`;

const SubmitButton = styled.button`
    width: 50%;
    font-size: 0.8em;
    background-color: transparent;
    border: 2px solid #40a93e;
    border-radius: 50px;
    color: #40a93e;
    padding: 10px 20px;
    text-align: center;
    margin: 20px 2px;
    cursor: pointer;

    &.Round {
        border: 2px solid #2C822B;
        border-radius: 100px;
        margin-top: 20px;
    }

    &:hover {
        color: #276E27;
        border-color: #276E27;
    
  }
`

const Button = styled.button`
    background-color: rgba(0, 0, 0, 0);
    color: #6e6560;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;

    &.Round {
        border: 2px solid #40a93e;
        color: #40a93e;
        border-radius: 100px;
        margin-top: 20px;

        &:hover {
            color: #276E27;
            border-color: #276E27;
      }
    
    }

    &:hover {
        color: #272423;
  }

`;

const StyledGrid = styled.div`
    width: 100%;
    min-width: 100%;
    height: 800px;
    display: grid;
    grid-template-columns: repeat(5, 1fr)); 
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin-bottom: 300px;
` 
const GridImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;

    &.gridimg01 {
        grid-column: 1 / 4;
        grid-row: 1;
    }

    &.gridimg02 {
        grid-column: 4 / 6;
        grid-row: 1;
    }

    &.gridimg03 {
        grid-column: 1 / 6;
        grid-row: 2;
    }

    &.gridimg04 {
        grid-column: 1 / 3;
        grid-row: 3;
    }

    &.gridimg05 {
        grid-column: 3 / 6;
        grid-row: 3;
    }
`

//icons
const iconStyle = <T extends React.ComponentType<React.SVGProps<SVGSVGElement>>>(Component: T) => styled(Component)`
  width: 1.5em;
  height: 1.5em;
  fill: #6e6560;
  &:hover {
    fill: #272423;
  }
`;

const HomeIcon = iconStyle(Home);
const SearchIcon = iconStyle(Search);
const ProfileIcon = iconStyle(Profile);
const HamburgerIcon = iconStyle(Hamburger);
const NewsIcon = iconStyle(News);

const contactStyle = <T extends React.ComponentType<React.SVGProps<SVGSVGElement>>>(Component: T) => styled(Component)`
  width: 1.5em;
  height: 1.5em;
  fill: #6e6560;
  border: 1px solid #6e6560;
  border-radius: 100%;
  padding: 5px;
  &:hover {
    fill: #272423;
    border: 1px solid #272423;
    cursor: pointer;
  }
`;

const FaceBookIcon = contactStyle(FaceBook);
const TiktokIcon = contactStyle(Tiktok);
const InstagramIcon = contactStyle(Instagram);
const YoutubeIcon = contactStyle(Youtube);



const s = {
    TotalWrapper,
    SectionFrame,
    BrandTitleWrapper,
    ServiceWrapper,
    BrandMidTitleWrapper,
    ServiceDescriptionWrapper,
    ServiceDescription,
    SectionWrapper,
    RowWrapper,
    ColumnWrapper,
    StyledH1,
    StyledH2,
    StyledH3,
    StyledH4,
    StyledTitleP,
    StyledP,
    StyledUl,
    StyledLi,
    Image,
    TestPage,
    MainPageImageWrapper,
    MainPageImage,
    Circle,
    MainImage,
    FooterColumnWrapper,
    FooterRowWrapper,
    BrandWrapper,
    BrandText,
    FooterCopyrightWrapper,
    hr,
    PolicyWrapper,
    ButtonWrapper,
    ButtonBox,
    ContactWrapper,
    FormWrapper,
    LoginPageWrapper,
    InputWrapper,
    CheckboxWrapper,
    RememberLabel,
    Input,
    Label,
    SubmitButton,
    Button,
    StyledGrid,
    GridImage,
    BrandLogo,
    HomeIcon,
    SearchIcon,
    ProfileIcon,
    HamburgerIcon,
    NewsIcon,
    FaceBookIcon,
    TiktokIcon,
    InstagramIcon,
    YoutubeIcon,
}

export default s;