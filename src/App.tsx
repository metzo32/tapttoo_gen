import "./App.css";
import styled, { createGlobalStyle } from "styled-components";

import CustomThemeProvider from "./context/CustomThemeProvider";
import { MobileProvider } from "./context/MobileContext";

import Header from "./components/Header/Header";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Footer from "./components/Footer/Footer";
import GenerateImage from "./pages/GenerateImage";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    height: 100%;
    background-color: ${(props) => props.theme.Light};
  }
`;

const Wrapper = styled.div`
  min-width: 320px;
  height: auto;
  background-color: ${(props) => props.theme.Light};
  position: relative;
  overflow: hidden;
`;

const App = () => {
  return (
    <>
      <CustomThemeProvider>
        <MobileProvider>
          <GlobalStyle />
          <Wrapper>
            <Header />
            <ScrollToTopButton />
            <GenerateImage />
            <Footer />
          </Wrapper>
        </MobileProvider>
      </CustomThemeProvider>
    </>
  );
};

export default App;
