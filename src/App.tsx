import React from 'react';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import s from './stores/styling';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';

import Header from './components/Header';
import Section from './pages/Section';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import Article from './pages/Article';
import SearchPage from './pages/SearchPage';
import Career from './pages/Career';
import Contact from './pages/Contact';
import ArtistRegister from './pages/ArtistRegister';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import ProfileSet from './pages/ProfileSet';
import RegisterTerms from './pages/RegisterTerms';
import RegisterPage from './pages/RegisterPage';
import CareerBusiness from './pages/CareerBusiness';
import CareerDesign from './pages/CareerDesign';
import CareerEngineering from './pages/CareerEngineering';
import CareerMarketing from './pages/CareerMarketing';
import SearchNew from './pages/SearchNew';
import ScrollTest from './pages/ScrollTest';


export default function App():React.ReactElement {
  

//   const GlobalStyle = createGlobalStyle`
//   * {
//     outline: 1px solid red;
//   }
// `;

return (
  <AuthProvider>
    <s.Div className='App'>
      <Router>
        {/* <GlobalStyle /> */}
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/password' element={<ForgotPassword />} />
          <Route path='/aboutus' element={<Section />} />
          <Route path='/article' element={<Article />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/career' element={<Career />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/joinartist' element={<ArtistRegister />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/registerterms' element={<RegisterTerms />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/profileset' element={<ProfileSet />} />
          <Route path='/careerbusiness' element={<CareerBusiness />} />
          <Route path='/careerdesign' element={<CareerDesign />} />
          <Route path='/careerengineering' element={<CareerEngineering />} />
          <Route path='/careermarketing' element={<CareerMarketing />} />
          <Route path='/searchnew' element={<SearchNew />} />
          <Route path='/scroll' element={<ScrollTest />} />
        </Routes>
      <Footer />
      </Router>
    </s.Div>
  </AuthProvider>

);
}


