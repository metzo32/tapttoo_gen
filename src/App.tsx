import React, { useState, useEffect } from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import s from "./stores/styling";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { AuthContext } from "./context/AuthContext";
import ProtectedRouteHoc from "./components/ProtectedRouteHoc";

import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Article from "./pages/Article";
import SearchPage from "./pages/SearchPage";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import ArtistRegister from "./pages/ArtistRegister";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import ProfileSet from "./pages/ProfileSet";
import RegisterTerms from "./pages/RegisterTerms";
import RegisterPage from "./pages/RegisterPage";
import CareerBusiness from "./pages/CareerBusiness";
import CareerDesign from "./pages/CareerDesign";
import CareerEngineering from "./pages/CareerEngineering";
import CareerMarketing from "./pages/CareerMarketing";
import SearchNew from "./pages/SearchNew";
import ScrollTest from "./pages/ScrollTest";
import ArtistData from "./assets/datas/artitst_data";
import ArtistDetailPageComponent from "./components/ArtistDetailPageComponent";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Modal from "./components/Modal";
import ModalPage from "./pages/ModalTest";

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
        {/* useContext로 넘겨줄 props */}
        <s.Div className="App">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/modal" element={<ModalPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/password" element={<ForgotPassword />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/article" element={<Article />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/career" element={<Career />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/joinartist" element={<ArtistRegister />} />
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
              <Route path="/profileset" element={<ProfileSet />} />
              <Route path="/careerbusiness" element={<CareerBusiness />} />
              <Route path="/careerdesign" element={<CareerDesign />} />
              <Route
                path="/careerengineering"
                element={<CareerEngineering />}
              />
              <Route path="/careermarketing" element={<CareerMarketing />} />
              <Route path="/searchnew" element={<SearchNew />} />
              <Route path="/scroll" element={<ScrollTest />} />
              {ArtistData.map((artist) => (
                <Route
                  key={artist.id}
                  path={`/${artist.nickname}`}
                  element={<ArtistDetailPageComponent artist={artist} />}
                />
              ))}
            </Routes>
            <ScrollToTopButton />
            <FooterWrapper />
          </Router>
        </s.Div>
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
