import React, { useContext, useState } from "react";
import s from "../stores/styling";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import RegisterInputItems from "../components/RegisterInputItems";
import RegisterTerms from "./RegisterTerms";
import CalculateAge from "../components/CalculateAge";

const LoginPage = () => {
  const navigate = useNavigate();

  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPw, setRegisterPw] = useState<string>("");
  const [registerPwConfirm, setRegisterPwConfirm] = useState<string>("");
  const [PwMatch, SetPwMatch] = useState(false);
  const [registerNickname, setRegisterNickname] = useState<string>("");
  const [registerFullname, setRegisterFullname] = useState<string>("");
  const [registerPhonenumber, setRegisterPhonenumber] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("");

  const nicknameRule = /^(([a-zA-Z]+[0-9]+|[0-9]+[a-zA-Z]+)[a-zA-Z0-9]*|([가-힣]+[0-9]+|[0-9]+[가-힣]+)[가-힣0-9]*)$/;
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
        console.log(userCredential);
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        console.error("Error signing up:", error);
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
    setRegisterNickname(value);
  };

  const handleFullnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setRegisterFullname(value);
  };

  const handlePhonenumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setRegisterPhonenumber(value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const gender = event.target.value;
    setSelectedGender(gender);
    console.log(gender, "checked");
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

  return (
    <>
      <s.LoginDiv className="wrapper">
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
              label={"비밀번호 확인 나중에 뜨게 하는게 좋을듯"}
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
              placeholder={" 자신의 주민등록상 이름"}
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
              placeholder={" 한글 및 영문, 숫자 조합"}
            />

            <CalculateAge />

            <s.LoginDiv className="radio-container">
              <s.LoginDiv className="radio-box">
                <s.Input
                  name="gender"
                  type="radio"
                  id="gender-male"
                  value="male"
                  checked={selectedGender === "male"}
                  onChange={handleGenderChange}
                  className="radio"
                />
                <s.Span className="checkmark"></s.Span>
                <s.Label>Male</s.Label>
              </s.LoginDiv>

              <s.LoginDiv className="radio-box">
                <s.Input
                  name="gender"
                  type="radio"
                  id="gender-female"
                  value="female"
                  checked={selectedGender === "female"}
                  onChange={handleGenderChange}
                />
                <s.Span className="checkmark"></s.Span>
                <s.Label>Female</s.Label>
              </s.LoginDiv>

              <s.LoginDiv className="radio-box">
                <s.Input
                  name="gender"
                  type="radio"
                  id="gender-other"
                  value="other"
                  checked={selectedGender === "other"}
                  onChange={handleGenderChange}
                />
                <s.Span className="checkmark"></s.Span>
                <s.Label>Other</s.Label>
              </s.LoginDiv>
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
              label={"전화번호 외국인 어카지"}
              placeholder={" '-' 없이 입력"}
            />
            <s.Button
              type="submit"
              className="Round"
              onClick={() => handleNavigation("/profile")}
            >
              가입하기
            </s.Button>
            <s.Button onClick={() => handleNavigation("/login")}>
              로그인
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
