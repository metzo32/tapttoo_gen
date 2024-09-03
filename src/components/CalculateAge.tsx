import { useState, useEffect } from "react";
import s from "../stores/styling";
import Modal from "../components/Modal";

interface CalculateAgeProps {
  isAdult: (isValid: boolean | null) => void;
  onBirthdateChange: (year: string, month: string, day: string) => void;
}

const CalculateAge: React.FC<CalculateAgeProps> = ({
  isAdult,
  onBirthdateChange,
}) => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalInvalid, setIsModalInvalid] = useState(false);

  const years = Array.from(
    { length: new Date().getFullYear() - 1899 },
    (_, i) => new Date().getFullYear() - i
  );
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const yearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(event.target.value);
    setIsValid(null); // 값이 변경될 때만 유효성 검사를 다시 수행하게 설정
  };

  const monthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(event.target.value);
    setIsValid(null); // 값이 변경될 때만 유효성 검사를 다시 수행하게 설정
  };

  const dayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDay(event.target.value);
    setIsValid(null); // 값이 변경될 때만 유효성 검사를 다시 수행하게 설정
  };

  useEffect(() => {
    const validateDate = () => {
      if (!year || !month || !day) {
        setIsValid(null);
        isAdult(null);
        return;
      }

      const birthDate = new Date(
        parseInt(year, 10),
        parseInt(month, 10) - 1,
        parseInt(day, 10)
      );
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const isUnder19 =
        age < 19 ||
        (age === 19 &&
          (today.getMonth() < birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() &&
              today.getDate() < birthDate.getDate())));

      if (isUnder19) {
        setIsModalOpen(true);
        setIsValid(false);
        isAdult(false);
      } else {
        setIsValid(true);
        isAdult(true);
      }
    };

    if (isValid === null) {
      validateDate(); // 날짜가 변경된 경우에만 유효성 검사 수행
    }
    onBirthdateChange(year, month, day);
  }, [year, month, day]);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsModalInvalid(false);
    setIsValid(true); // 모달이 닫힐 때 유효성을 true로 설정
  };

  const handleInvalid = () => {
    setIsModalInvalid(true);
  };

  const handleCheckboxChange = () => {
    setIsValid(true); // 체크박스가 체크되면 isValid 상태를 true로 설정
    setIsModalInvalid(false); // invalid 상태 해제
  };

  return (
    <>
      <s.LoginDiv
        className={`calandar-container ${
          isValid === true ? "valid" : ""
        } ${isValid === false ? "invalid" : ""}`}
      >
        <s.LoginDiv className="calandar-item-box">
          <s.Select name="year" value={year} onChange={yearChange} required>
            <s.Option value="" disabled hidden>
              년
            </s.Option>
            {years.map((year) => (
              <s.Option key={year} value={year}>
                {year}
              </s.Option>
            ))}
          </s.Select>
        </s.LoginDiv>
        <s.LoginDiv className="calandar-item-box">
          <s.Select name="month" value={month} onChange={monthChange} required>
            <s.Option value="" disabled hidden>
              월
            </s.Option>
            {months.map((month) => (
              <s.Option key={month} value={month}>
                {month}
              </s.Option>
            ))}
          </s.Select>
        </s.LoginDiv>
        <s.LoginDiv className="calandar-item-box">
          <s.Select name="day" value={day} onChange={dayChange} required>
            <s.Option value="" disabled hidden>
              일
            </s.Option>
            {days.map((day) => (
              <s.Option key={day} value={day}>
                {day}
              </s.Option>
            ))}
          </s.Select>
        </s.LoginDiv>
      </s.LoginDiv>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onInvalid={handleInvalid}
        onCheckboxChange={handleCheckboxChange} // 체크박스 상태가 변경될 때 호출되는 함수
        modalTitle="잠깐!"
        showCheckbox={true}
        checkboxText="이해했습니다."
        modalButtonClose="닫기"
        addButton={false}
        isInvalid={isModalInvalid}
        text={
          <>
            <s.StyledP className="modal-text">19세 미만 회원의 경우,</s.StyledP>
            <s.StyledP className="modal-text">
              예약 또는 시술이 제한될 수 있습니다.
            </s.StyledP>
          </>
        }
      />
    </>
  );
};

export default CalculateAge;
