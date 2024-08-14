import React, { useEffect } from 'react';
import s from '../stores/styling';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';

const CircularText = () => {
  useEffect(() => {
    const results = Splitting();
    console.log(results); // Splitting 결과를 콘솔에 출력
  }, []);

  return (
    <s.Div className="cir-text-wrapper">
      <s.CirText className="splitting">Hello World</s.CirText>
    </s.Div>
  );
};

export default CircularText;
