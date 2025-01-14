import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import ThemeProvider from "./context/ThemeProvider";
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
      <ThemeProvider>
        <MobileProvider>
          <GlobalStyle />
          <Wrapper>
            <Header />
            <ScrollToTopButton />
            <GenerateImage />
            <Footer />
          </Wrapper>
        </MobileProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
