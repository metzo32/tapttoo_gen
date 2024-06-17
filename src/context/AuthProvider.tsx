import { useState, useEffect } from 'react';
import AuthContext from './AuthContext';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(storedLoginStatus);
  }, []);

  const login = () => {
    localStorage.setItem('isLoggedIn', 'true')
    setIsLoggedIn(true);
    console.log('로그인 성공')
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
    console.log('로그아웃 성공')
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      { children }
    </AuthContext.Provider>
  );
};

export default AuthProvider;
