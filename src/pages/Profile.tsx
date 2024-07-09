import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "../firebase/firebaseConfig";
import s from "../stores/styling";
import LogoutButton from "../components/Logout";
import ProfileSideBar from "../components/ProfileSideBar";
import GridLike from "../components/GridLike";

export default function Profile() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>("사진 추가");
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<any>(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        try {
          const userDoc = await getDoc(doc(firestore, "users", auth.currentUser.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
        navigate("/login");
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFileName("사진 추가");
    }
  };

  return (
    <s.ProfileWrapper>
      <ProfileSideBar />
      <s.PageWrapper>
        <s.ColumnWrapper className="profileinfo">
          <s.Div className="profile-container">
            <label
              htmlFor="profile-image-input"
              className="profile-image-circle"
            >
              {profileImage ? (
                <s.Div
                  className="profile-image"
                  style={{ backgroundImage: `url(${profileImage})` }}
                />
              ) : (
                <s.Div className="profile-placeholder">+</s.Div>
              )}
              {/* 플레이스홀더 내용 */}
            </label>
            <s.Input
              id="profile-image-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="input-hide"
            />
          </s.Div>
          <LogoutButton />
        </s.ColumnWrapper>
        <hr />
        <s.ColumnWrapper className="profile">
          <s.Username>{userData.email} 님</s.Username>
          <s.Div>{userData.fullname}</s.Div>
          <s.Div>{userData.nickname}</s.Div>
          <s.Div>
            {userData.countryCode} {userData.phonenumber}
          </s.Div>
          <s.Div>{userData.ageValid ? "Yes" : "No"}</s.Div>
        </s.ColumnWrapper>
        <s.ColumnWrapper>
          <s.Div>나의 관심</s.Div>
          <s.Div>나의 구독</s.Div>
        </s.ColumnWrapper>

        <hr />
        <s.Div>최근 좋아요</s.Div>
        <s.Div className="profile-grid-wrapper">
          <GridLike />
        </s.Div>
        <hr />
        <s.Div>최근 확인한</s.Div>
        <hr />
        <s.Div>추천 스타일</s.Div>
        <hr />
        <s.Div>오늘의 아티클</s.Div>
      </s.PageWrapper>
    </s.ProfileWrapper>
  );
}
