import "./App.css";
import s from "./stores/styling";

import CustomThemeProvider from "./context/CustomThemeProvider";
import { MobileProvider } from "./context/MobileContext";

import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer/Footer";
import GenerateImage from "./pages/GenerateImage";

const App = () => {
  return (
    <>
      <CustomThemeProvider>
        <MobileProvider>
          <s.GlobalStyle />
          <s.App className="wrapper">
            <Header />
            <ScrollToTopButton />
            <GenerateImage />
            <Footer />
          </s.App>
        </MobileProvider>
      </CustomThemeProvider>
    </>
  );
};

export default App;
