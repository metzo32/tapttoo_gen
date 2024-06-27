import React, { useContext, useState } from "react";
import s from "../stores/styling";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();


  const [RegisterEmail, setRegisterEmail] = useState("");
  const [RegisterPw, setRegisterPw] = useState("");


  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, RegisterEmail, RegisterPw)
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
      if (!target.checkValidity()) {
        label.classList.add("invalid");
      } else {
        label.classList.remove("invalid");
        label.classList.add("valid");
      }
    }
  };


  return (
    <>
      <s.LoginDiv className="wrapper">
        <s.LoginDiv className="container">
          {/* <s.StyledH1 className="login-title">Tapttoo</s.StyledH1> */}
          <s.Form className="login" onSubmit={handleSignUp}>
            <s.LoginDiv className="input-box">
              <s.Input
                name="email"
                type="email"
                id="useremail"
                value={RegisterEmail}
                onChange={(event) => setRegisterEmail(event.target.value)}
                onBlur={handleBlur}
                required
              />
              <s.Label className={`login-info ${RegisterEmail ? 'active' : ''}`}>
                Email
              </s.Label>
            </s.LoginDiv>
            <s.LoginDiv className="input-box">
              <s.Input
                name="password"
                type="password"
                id="password"
                value={RegisterPw}
                minLength={6}
                onChange={(event) => setRegisterPw(event.target.value)}
                onBlur={handleBlur}
                required
              />
              <s.Label className={`login-info ${RegisterPw ? 'active' : ''}`}>
                Password
              </s.Label>
            </s.LoginDiv>

            <s.Button type="submit" className="Round">
              가입하기
            </s.Button>
            <s.Button onClick={() => handleNavigation("/login")}>
              로그인
            </s.Button>
          </s.Form>
        </s.LoginDiv>
      </s.LoginDiv>
    </>
  );
};

export default LoginPage;
