
import React, { useEffect } from 'react';
import { analytics } from '../firebase/firebaseConfig';

const ForgotPassword: React.FC = () => {
  useEffect(() => {
    // 필요 시 여기에서 analytics를 사용할 수 있습니다.
    console.log('Firebase Analytics 초기화:', analytics);
   ;
  }, []);

  return (
    <div>ForgotPassword</div>
  );
}

export default ForgotPassword;
