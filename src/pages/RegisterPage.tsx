import React, { useContext, useState } from "react";
import s from "../stores/styling";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import RegisterInputItems from "../components/RegisterInputItems";
import RegisterTerms from "./RegisterTerms";
import CalculateAge from "../components/CalculateAge";
import GenderSelect from "../components/GenderSelect";
import countrycode from "../assets/datas/country_code";
import Modal from "../components/Modal";

const LoginPage = () => {
  const navigate = useNavigate();

  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPw, setRegisterPw] = useState<string>("");
  const [registerPwConfirm, setRegisterPwConfirm] = useState<string>("");
  const [PwMatch, SetPwMatch] = useState(false);
  const [registerNickname, setRegisterNickname] = useState<string>("");
  const [registerFullname, setRegisterFullname] = useState<string>("");
  const [registerPhonenumber, setRegisterPhonenumber] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("");
  const [isUnderAge, setIsUnderAge] = useState(false);

  const nicknameRule =
    /^(([a-zA-Z]+[0-9]*|[0-9]*[a-zA-Z]+)[a-zA-Z0-9]*|([가-힣]+[0-9]*|[0-9]*[가-힣]+)[가-힣0-9]*)$/;
  //3~15자의 영문자, 한글, 숫자(숫자는 반드시 문자와 조합할 것)
  const fullnameRule = /^([a-zA-Z]{3,15}|[가-힣]{2,15})$/;
  //2~15자의 영자, 3~15자의 한글, 알파벳과 한글 병기 금지, 띄어쓰기 허용

  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault();
    if (registerPw !== registerPwConfirm) {
      SetPwMatch(false);
      return;
    }
    if (!validateForm()) {
      alert("필수 입력사항을 모두 입력해주세요.");
    } else {
      handleNavigation("/profile");
    }

    createUserWithEmailAndPassword(auth, registerEmail, registerPw)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        console.error("Failed to sign up:", error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  //유효한 입력인지 확인
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const target = event.target;
    target.classList.remove("active"); //focus out시 클래스 제거

    if (!target.value) {
      return; // 입력 필드가 비어 있으면 클래스 변화를 발생시키지 않음
    }

    const label = target.nextElementSibling as HTMLLabelElement | null; // 이벤트 타겟의 바로 다음 형제 요소
    if (label) {
      //타입가드
      if (
        !target.checkValidity() ||
        (target.name === "passwordConfirm" &&
          registerPw !== registerPwConfirm) ||
        (target.name === "nickname" && !nicknameRule.test(target.value)) ||
        (target.name === "fullname" && !fullnameRule.test(target.value))
      ) {
        label.classList.add("invalid");
      } else {
        label.classList.remove("invalid");
        label.classList.add("valid");
      }
    }
  };

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const capitalizedNickName = value.charAt(0).toUpperCase() + value.slice(1);
    setRegisterNickname(capitalizedNickName);
  };

  const handleFullnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const capitalizedName = value.charAt(0).toUpperCase() + value.slice(1);
    setRegisterFullname(capitalizedName);
  };

  const handlePhonenumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setRegisterPhonenumber(value);
  };

  const handleCountryCode = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(event.target.value);
  };

  const validateForm = () => {
    return (
      registerEmail.length > 0 &&
      registerPw.length > 0 &&
      registerPwConfirm.length > 0 &&
      registerFullname.length > 0 &&
      registerPhonenumber.length > 0 &&
      registerNickname.length > 0
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <s.LoginDiv className="wrapper">
        <s.Button className="Round" onClick={handleOpenModal}>
          모달띄우기
        </s.Button>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          modalTitle={"잠깐!"}
          showCheckbox={true}
          checkboxText={"이해했습니다."}
        >
          <s.StyledP className="modal">
            19세 미만 회원의 경우,
            <br />
            예약 및 시술이 제한될 수 있습니다.
          </s.StyledP>
        </Modal>

        <s.Form className="login" onSubmit={handleSignUp}>
          <s.LoginDiv className="container">
            <RegisterInputItems
              name={"email"}
              type={"email"}
              id={"useremail"}
              value={registerEmail}
              minLength={6}
              onChange={(event) => setRegisterEmail(event.target.value)}
              onBlur={handleBlur}
              required={true}
              label={"이메일"}
            />

            <RegisterInputItems
              name={"password"}
              type={"password"}
              id={"password"}
              value={registerPw}
              minLength={6}
              onChange={(event) => setRegisterPw(event.target.value)}
              onBlur={handleBlur}
              required={true}
              label={"비밀번호"}
            />

            <RegisterInputItems
              name={"passwordConfirm"}
              type={"password"}
              id={"passwordConfirm"}
              value={registerPwConfirm}
              minLength={6}
              onChange={(event) => setRegisterPwConfirm(event.target.value)}
              onBlur={handleBlur}
              required={true}
              label={"비밀번호 확인"}
            />
          </s.LoginDiv>

          <s.LoginDiv className="container">
            <RegisterInputItems
              name={"fullname"}
              type={"text"}
              id={"fullname"}
              value={registerFullname}
              onChange={handleFullnameChange}
              onBlur={handleBlur}
              required={true}
              label={"이름"}
              placeholder={"자신의 주민등록상 이름"}
            />
            <RegisterInputItems
              name={"nickname"}
              type={"text"}
              id={"nickname"}
              value={registerNickname}
              minLength={2}
              onChange={handleNicknameChange}
              onBlur={handleBlur}
              required={true}
              label={"닉네임"}
              placeholder={"한글 또는 영문, 숫자 조합"}
            />

            <CalculateAge />

            <GenderSelect />

            <s.LoginDiv className={`number-box ${countryCode ? "valid" : ""}`}>
              <s.LoginDiv className="countrycode-box">
                <s.Select
                  name={"countrycode"}
                  id={"countrycode"}
                  defaultValue={"countrycode"}
                  onChange={handleCountryCode}
                  required
                >
                  <s.Option value="">국가</s.Option>
                  {countrycode.map((item) => (
                    <s.Option
                      key={`${item.country}-${item.code}`}
                      value={item.code}
                    >
                      ({item.code}) {item.country}
                    </s.Option>
                  ))}
                </s.Select>
              </s.LoginDiv>

              <RegisterInputItems
                name={"phonenumber"}
                type={"tel"}
                id={"phonenumber"}
                value={registerPhonenumber}
                minLength={8}
                onChange={handlePhonenumberChange}
                onBlur={handleBlur}
                required={true}
                label={"전화번호"}
                placeholder={"'-' 없이 입력"}
                extraClass={"phonenumber-box"}
              />
            </s.LoginDiv>

            <s.Button type="submit" className="Round">
              가입하기
            </s.Button>
            <s.Button onClick={() => handleNavigation("/login")}>
              이미 계정이 있으신가요?
            </s.Button>
          </s.LoginDiv>
          <s.LoginDiv className="container">
            <RegisterTerms />
          </s.LoginDiv>
        </s.Form>
      </s.LoginDiv>
    </>
  );
};

export default LoginPage;
