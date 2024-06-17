import React, { useState, useEffect, useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import s from '../stores/styling';
import AuthContext from '../context/AuthContext';

import RegisterPage from './RegisterPage';
import ForgotId from './ForgotId';
import ForgotPassword from './ForgotPassword';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false)
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
      setRememberMe(true);
    }
  }, [])

  const handleNavigation = (path: string) => {
    navigate(path)
  }

  const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Checkbox status:', event.target.checked); 
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 폼 제출시 페이지 새로고침 방지 (불필요한 리로드 방지)
      login(); // 로그인 상태 업데이트
      if (rememberMe) {
        localStorage.setItem('username', username);
      } else {
        localStorage.removeItem('username');
      }
      navigate('/');   
  };

  return (
    <s.LoginPageWrapper>
      <h1>Sign in</h1>
        <s.FormWrapper onSubmit={handleSubmit}>
          <s.InputWrapper>
            <s.Input 
              type="text" 
              id="username" 
              value={username} 
              onChange={handleUsernameChange} 
              required
            />
            <s.Label>Account</s.Label>
          </s.InputWrapper>
          <s.InputWrapper>
            <s.Input
              type="password" 
              id="password" 
              value={password} 
              onChange={handlePasswordChange}
              minLength={8}
              required
            />
            <s.Label>Password</s.Label>
          </s.InputWrapper>
          <s.CheckboxWrapper>
              <input 
                type='checkbox'
                checked={rememberMe}
                onChange={handleRememberMeChange}
                className='check'
              />
              <s.RememberLabel>
                Remember me
              </s.RememberLabel>
          </s.CheckboxWrapper>
          <s.SubmitButton type='submit'>
            SUBMIT
          </s.SubmitButton>
        </s.FormWrapper>
        <s.ButtonBox>
        <s.Button onClick={() => handleNavigation('/register')}>Sign up</s.Button>
          <s.Button>Forgot password?</s.Button>
        </s.ButtonBox>
      <Outlet />
    </s.LoginPageWrapper>
  );
}
