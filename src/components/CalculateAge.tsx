import { useState, useEffect } from "react";
import s from "../stores/styling";

interface CalculateAgeProps {
  isAdult: (isValid: boolean | null) => void;
  handleOpenModal : () => void; //모달 열기. 모달을 열어야할 때 해당 함수 호출
  onBirthdateChange: (year: string, month: string, day: string) => void;
}

const CalculateAge: React.FC<CalculateAgeProps> = ({ isAdult, handleOpenModal, onBirthdateChange }) => {
  const [year, setYear] = useState(""); // 원래는 빈 문자열을 쓰다가 null로 바꾸었다. 그렇지 않으면 초기값이 현재 연도의 1월 1일인데, 이미 valid 상태로 선택됨
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  //드롭다운 메뉴에 들어갈 연원일을 문자열 형태의 배열로 저장
  const years = [];
  for (let i = new Date().getFullYear(); i >= 1900; i--) {
    years.push(i);
  }

  const months = [];
  for (let i = 1; i <= 12; i++) {
    months.push(i);
  }

  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }

  const yearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(event.target.value)
  }

  const monthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(event.target.value)
  }

  const dayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDay(event.target.value)
  }

  useEffect(() => {
    const validateDate = () => {
      if (!year || !month || !day) {  // 입력 값이 모두 들어왔는지
        setIsValid(null); // 검사할 수 없을 때는 null
        isAdult(null);
        return;
      }

      const monthInt = parseInt(month, 10);
      const dayInt = parseInt(day, 10);
      const yearInt = parseInt(year, 10);

      const daysInMonth = new Date(yearInt, monthInt, 0).getDate(); // 실제로 유효한 날짜인지 검사 (30, 31일, 28일 및 윤년)
      if (dayInt > daysInMonth) {
        setIsValid(false);
        isAdult(null);
        return;
      }
      
      
      // 19세 미만
      const today = new Date();
      const birthDay = new Date(yearInt, monthInt - 1, dayInt)  // 월 객체는 0 ~ 11이므로 사용자가 입력한 월에서 -1
      let age = today.getFullYear() - birthDay.getFullYear()
      let monthAge = today.getMonth() - birthDay.getMonth()
      let dayAge = today.getDate() - birthDay.getDate()
      
      if ( monthAge < 0 || (monthAge === 0 && dayAge < 0)) {
        age--;
      }
      
      if (age < 19) {
        setIsValid(true)
        isAdult(false);
        handleOpenModal()
        return
      }

      setIsValid(true);
      isAdult(true);
    };

    validateDate();
    onBirthdateChange(year, month, day)

  }, [year, month, day]); //입력이 바뀔 때마다 유효성 검사

  const classValid = () => {
    if (isValid === null) {
      return "";
    }
    else if (isValid === true) {
      return "valid";
    }
    else {
      return "invalid";
    }
  }


  return (
    <s.LoginDiv
      className={`calandar-container ${classValid()}`}
    >
      <s.LoginDiv className="calandar-item-box">
        <s.Select
          name={"year"}
          id={"year"}
          value={year}
          onChange={yearChange}
          required
        >
       <s.Option value="" disabled hidden>년</s.Option>
          {years.map((year) => (
            <s.Option key={year} value={year}>
              {year}
            </s.Option>
          ))}
        </s.Select>
      </s.LoginDiv>
      <s.LoginDiv className="calandar-item-box">
        <s.Select
          name={"month"}
          id={"month"}
          value={month}
          onChange={monthChange}
          required
        >
          <s.Option value="" disabled hidden>월</s.Option>
          {months.map((month) => (
            <s.Option key={month} value={month}>
              {month}
            </s.Option>
          ))}
        </s.Select>
      </s.LoginDiv>
      <s.LoginDiv className="calandar-item-box">
        <s.Select
          name={"day"}
          id={"day"}
          value={day}
          onChange={dayChange}
          required
        >
          <s.Option value="" disabled hidden>일</s.Option>
          {days.map((day) => (
            <s.Option key={day} value={day}>
              {day}
            </s.Option>
          ))}
        </s.Select>
      </s.LoginDiv>
    </s.LoginDiv>
  );
};

export default CalculateAge;
