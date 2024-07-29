import React, { useState, useEffect } from "react";
import "./App.css";
import s from "./stores/styling";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { AuthContext } from "./context/AuthContext";
import ProtectedRouteHoc from "./components/ProtectedRouteHoc";
import CustomThemeProvider from "./context/\bCustomThemeProvider";

import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Article from "./pages/Article";
import SearchPage from "./pages/SearchPage";
import Career from "./pages/Career";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import ArtistProfile from "./pages/ArtistProfile";
import RegisterTerms from "./pages/RegisterTerms";
import RegisterPage from "./pages/RegisterPage";
import CareerMarketing from "./pages/CareerMarketing";
import SearchNew from "./pages/SearchNew";
import ScrollTest from "./pages/ScrollTest";
import ArtistData from "./assets/datas/artitst_data";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Modal from "./components/Modal";
import GenerateImage from "./pages/GenerateImage";

const App: React.FC = () => {
  const [currentlyLoggedIn, setCurrentlyLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // 추가

  useEffect(() => {
    // 로컬 스토리지에서 사용자 정보를 확인하여 로그인 상태 설정
    const savedLoggedIn = localStorage.getItem("currentlyLoggedIn");
    if (savedLoggedIn === "true") {
      setCurrentlyLoggedIn(true);
    }
    setIsLoading(false); // 로딩 완료 시 상태 변경
  }, []);

  // 로그인 상태 변경 시 로컬 스토리지에 반영
  useEffect(() => {
    localStorage.setItem("currentlyLoggedIn", currentlyLoggedIn.toString());
  }, [currentlyLoggedIn]);

  // 초기 로딩 중이면 로딩 표시
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AuthContext.Provider value={{ currentlyLoggedIn, setCurrentlyLoggedIn }}>
        <CustomThemeProvider>
          <s.Div className="App">
            <Router>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/article" element={<Article />} />

                <Route path="/search" element={<SearchPage />} />
                <Route path="/career" element={<Career />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/joinartist" element={<ArtistRegister />} /> */}
                <Route
                  path="/profile"
                  element={
                    <ProtectedRouteHoc>
                      <Profile />
                    </ProtectedRouteHoc>
                  }
                />
                <Route path="/registerterms" element={<RegisterTerms />} />
                <Route path="/register" element={<RegisterPage />} />
                
                <Route path="/careermarketing" element={<CareerMarketing />} />
                <Route path="/searchnew" element={<SearchNew />} />
                <Route path="/your_custom_tattoo" element={<GenerateImage />} />
                <Route path="/scroll" element={<ScrollTest />} />
                {ArtistData.map((artist) => (
                  <Route
                    key={artist.id}
                    path={`/profile_artist_${artist.nickname}`}
                    element={<ArtistProfile artist={artist} />}
                  />
                ))}
              </Routes>
              <ScrollToTopButton />
              <FooterWrapper />
            </Router>
          </s.Div>
        </CustomThemeProvider>
      </AuthContext.Provider>
    </>
  );
};

const FooterWrapper: React.FC = () => {
  const location = useLocation();
  const showFooter = location.pathname !== "/careerengineering";

  return showFooter ? <Footer /> : null;
};

export default App;
