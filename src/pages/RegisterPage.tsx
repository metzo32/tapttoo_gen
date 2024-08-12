import s from "../stores/styling";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../firebase/firebaseConfig";
import { setDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";

import { nicknameRule, fullnameRule } from "../stores/NameRule";
import RegisterInputItems from "../components/RegisterInputItems";
import CalculateAge from "../components/CalculateAge";
import GenderSelect from "../components/GenderSelect";
import countrycode from "../assets/datas/country_code";

import Modal from "../components/Modal";
import useModal from "../hooks/ModalHook";


const RegisterPage = () => {

  const navigate = useNavigate();

  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPw, setRegisterPw] = useState<string>("");
  const [registerPwConfirm, setRegisterPwConfirm] = useState<string>("");
  const [registerNickname, setRegisterNickname] = useState<string>("");
  const [registerFullname, setRegisterFullname] = useState<string>("");
  const [registerPhonenumber, setRegisterPhonenumber] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("");
  const [isValidAge, setIsValidAge] = useState<boolean | null>(null);
  const [step, setStep] = useState(1);

  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();


  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (registerPw !== registerPwConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!validateForm()) {
      alert("필수 입력사항을 모두 입력해주세요.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPw);
      const user = userCredential.user;
      console.log('User registered:', userCredential.user);

      // 사용자 정보 firestore에 저장하기
      await setDoc(doc(db, "users", user.uid), {  // user 컬렉션 하위의 각 사용자의 고유 uid를 문서 id로 설정
        email: registerEmail,
        fullname: registerFullname,
        nickname: registerNickname,
        phonenumber: registerPhonenumber,
        countryCode: countryCode,
        isValidAge: isValidAge
      });

      navigate("/profile");
    } 
    catch (error) {
      console.error("Failed to sign up:", error);
      alert(`회원가입 중 오류가 발생했습니다: ${(error as Error).message}`);
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const target = event.target;
    target.classList.remove("active");
    if (!target.value) return;

    const label = target.nextElementSibling as HTMLLabelElement | null;
    if (label) {
      if (
        !target.checkValidity() ||
        (target.name === "passwordConfirm" && registerPw !== registerPwConfirm) ||
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

  const handlePhonenumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setRegisterPhonenumber(value);
  };

  const handleCountryCode = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(event.target.value);
  };

  const handleAgeValidation = (isValid: boolean | null) => {
    setIsValidAge(!isValid);
  };

  const handleNextStep = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (validateStepOne()) {
      setStep(step + 1);
    } else {
      alert("필수 입력 사항을 확인해주세요.");
    }
  };

  const validateStepOne = () => {
    return (
      registerEmail.length > 0 &&
      registerPw.length > 0 &&
      registerPwConfirm.length > 0 &&
      registerPw === registerPwConfirm &&
      registerPw.length >= 8
    );
  };

  const validateForm = () => {
    return (
      validateStepOne() &&
      registerFullname.length > 0 &&
      registerPhonenumber.length > 0 &&
      registerNickname.length > 0 &&
      countryCode.length > 0
    );
  };

  return (
    <>
      <s.LoginDiv className="wrapper">
        
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
          {step === 1 && (
            <s.LoginDiv className="container step01">
              <s.LoginDiv className="input-wrapper step01">
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
                  minLength={8}
                  onChange={(event) => setRegisterPw(event.target.value)}
                  onBlur={handleBlur}
                  required={true}
                  label={"비밀번호"}
                  placeholder={"8자 이상의 영문 또는 숫자"}
                  autocomplete="new-password"
                />

                <RegisterInputItems
                  name={"passwordConfirm"}
                  type={"password"}
                  id={"passwordConfirm"}
                  value={registerPwConfirm}
                  minLength={8}
                  onChange={(event) => setRegisterPwConfirm(event.target.value)}
                  onBlur={handleBlur}
                  required={true}
                  label={"비밀번호 확인"}
                  autocomplete="new-password"
                />
              </s.LoginDiv>

              <s.LoginDiv className="button-wrapper">
                <s.Button
                  type="button"
                  className="Round"
                  onClick={handleNextStep}
                  value="next"
                >
                  다음
                </s.Button>

                <s.Button type="button" onClick={() => handleNavigation("/login")}>
                  이미 계정이 있으신가요?
                </s.Button>
              </s.LoginDiv>
            </s.LoginDiv>
          )}

          {step === 2 && (
            <s.LoginDiv className="container step02">
              <s.LoginDiv className="input-wrapper step02">
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

                <s.LoginDiv className="item-box register">
                  <CalculateAge
                    isAdult={handleAgeValidation}
                    handleOpenModal={handleOpenModal}
                  />

                  <GenderSelect />

                  <s.LoginDiv
                    className={`number-box ${countryCode ? "valid" : ""}`}
                  >
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
                </s.LoginDiv>
              </s.LoginDiv>
              <s.LoginDiv className="button-wrapper">
                <s.Button type="submit" className="Round" value="submit">
                  가입하기
                </s.Button>
                <s.Button type="button" onClick={() => handleNavigation("/login")}>
                  이미 계정이 있으신가요?
                </s.Button>
              </s.LoginDiv>
            </s.LoginDiv>
          )}
        </s.Form>
      </s.LoginDiv>
    </>
  );
};

export default RegisterPage;
