import React, { useEffect } from 'react';
import s from '../stores/styling';

interface LoadingScreenProps {
    onLoadComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadComplete();
    }, 500); // 0.5초 후 로딩 완료

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        Loading...
      </div>
    </div>
  );
};

export default LoadingScreen;
