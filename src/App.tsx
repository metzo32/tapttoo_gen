import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';

import Header from './components/Header';
import Section from './pages/Section';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import Service from './pages/Service';
import Career from './pages/Career';
import Contact from './pages/Contact';
import ArtistRegister from './pages/ArtistRegister';
import Footer from './components/Footer';
import Profile from './pages/Profile';


export default function App():React.ReactElement {


return (
  <AuthProvider>
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/password' element={<ForgotPassword />} />
          <Route path='/aboutus' element={<Section />} />
          <Route path='/service' element={<Service />} />
          <Route path='/career' element={<Career />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/joinus' element={<ArtistRegister />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  </AuthProvider>

);
}


