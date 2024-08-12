interface UserProfileProps {
  userData: {
    email: string;
    fullname: string;
    nickname: string;
    phonenumber: string;
    countryCode: string;
    isValidAge: boolean;
    gender: string;
    birthYear: string;    // 생년월일 추가
    birthMonth: string;   // 생년월일 추가
    birthDay: string;     // 생년월일 추가

  };
}

const CurrentUserData: React.FC<UserProfileProps> = ({ userData }) => {
  return (
    <div>
      <h1>사용자 프로필</h1>
      <p>이름: {userData.fullname}</p>
      <p>닉네임: {userData.nickname}</p>
      <p>이메일: {userData.email}</p>
      <p>전화번호: {userData.countryCode} {userData.phonenumber}</p>
      <p>성인여부: {userData.isValidAge ? "성인" : "미성년자"}</p>
      <p>성별: {userData.gender}</p>
      <p>생년월일: {`${userData.birthYear}-${userData.birthMonth}-${userData.birthDay}`}</p>
    </div>
  );
};

export default CurrentUserData;
