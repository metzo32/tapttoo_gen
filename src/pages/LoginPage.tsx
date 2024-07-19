import React, { useState, useEffect, useContext } from "react";
import s from "../stores/styling";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();

  const { currentlyLoggedIn, setCurrentlyLoggedIn } = useContext(AuthContext);

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPw, setSignInPw] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (currentlyLoggedIn) {
      navigate("/profile"); // 이미 로그인된 상태라면 프로필 페이지로
    }
  }, [currentlyLoggedIn, navigate]);

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, signInEmail, signInPw)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;

        if (rememberMe) {
          //체크된 경우
          localStorage.setItem("username", signInEmail);
        } else {
          localStorage.removeItem("username");
        }
        setCurrentlyLoggedIn(true);
        setIsLoggedIn(true);
        navigate("/"); // 성공 시 홈으로 이동
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`로그인 실패: ${errorCode}, ${errorMessage}`);
        setCurrentlyLoggedIn(false);
        setIsLoggedIn(false);
      });
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  // 아이디 기억하기
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setSignInEmail(savedUsername);
      setRememberMe(true);
    }
  }, []);

  const handleRememberMeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = event.target.checked;
    setRememberMe(isChecked);

    if (!isChecked) {
      localStorage.removeItem("username");
    }
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
        <s.Form className="login" onSubmit={handleSignIn}>
          <s.LoginDiv className="container login-page">
            <s.LoginDiv className="input-wrapper login-page-box">
              <s.LoginDiv className="input-box">
                <s.Input
                  name="email"
                  type="email"
                  id="useremail"
                  value={signInEmail}
                  onChange={(event) => setSignInEmail(event.target.value)}
                  onBlur={handleBlur}
                  required
                />
                <s.Label
                  className={`login-info ${signInEmail ? "active" : ""}`}
                >
                  Email
                </s.Label>
              </s.LoginDiv>
              <s.LoginDiv className="input-box">
                <s.Input
                  name="password"
                  type="password"
                  id="password"
                  value={signInPw}
                  minLength={6}
                  onChange={(event) => setSignInPw(event.target.value)}
                  onBlur={handleBlur}
                  required
                />
                <s.Label className={`login-info ${signInPw ? "active" : ""}`}>
                  Password
                </s.Label>
              </s.LoginDiv>
            </s.LoginDiv>
            <s.LoginDiv className="button-wrapper login">
              <s.LoginDiv className="checkbox-box">
                <s.Label className="remember">Remember me</s.Label>
                <s.Input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  className="check"
                />
              </s.LoginDiv>
              <s.Button type="submit" className="Round">
                로그인
              </s.Button>
              <s.Button type="button" onClick={() => handleNavigation("/register")}>
                가입하기
              </s.Button>
            </s.LoginDiv>
          </s.LoginDiv>
        </s.Form>
      </s.LoginDiv>
    </>
  );
};

export default LoginPage;
