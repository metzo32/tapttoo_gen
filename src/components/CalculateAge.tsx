// date.tsx
import { useState } from 'react';
import s from '../stores/styling';
import CalculateYear from './CalculateYear';

const CalculateAge = () => {
  const [selectedDate, setSelectedDate] = useState('');
  
  const minDate = '1900-01-01'; // 표시할 최소 날짜
  const maxDate = new Date().toISOString().split('T')[0]; // 현재 날짜
  
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
    
    const nineteenYearsOld = CalculateYear(19);
    
    if (new Date(selectedDate) > new Date(nineteenYearsOld)) {
      alert('19세 미만 회원의 경우, 시술 및 예약이 제한될 수 있습니다.');
    }
  };

  return (
      <s.Input
        type="date"
        id="birthday"
        min={minDate}
        max={maxDate}
        value={selectedDate}
        onChange={handleDateChange}
      />
  );
};

export default CalculateAge;
