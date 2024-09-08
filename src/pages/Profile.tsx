import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import s from "../stores/styling";
import LogoutButton from "../components/Logout";
import profileBanner from "../assets/images/profile-banner.jpg";
import StartFromTop from "../components/StartFromTop";
import UploadProfilePicture from "../components/UploadProfilePhoto";

interface WishProps {
  artistNickname?: string;
  artistRandomImage?: string;
}

const Profile: React.FC<WishProps> = ({
  artistNickname,
  artistRandomImage,
}) => {
  const { currentlyLoggedIn } = useContext(AuthContext);
  const [userData, setUserData] = useState<any>(null);
  const [photoURL, setPhotoURL] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userDocRef = doc(db, "users", auth.currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const data = userDoc.data();
          setUserData(data);

          // photoURL이 존재하면 설정
          if (data.photoURL) {
            setPhotoURL(data.photoURL);
          }
        } 
        else {
          console.log("No such document!");
        }
      }
    };

    fetchUserData();
  }, []);

  const handleCardRedirect = (nickname: string) => {
    const url = `/profile_artist_${nickname}`;
    if (url) {
      window.location.href = url;
    } else {
      console.error("URL 찾을 수 없음");
    }
  };

  return (
    <>
      <StartFromTop />

      <s.ProfileDiv className="profile-wrapper">
        <s.Image className="profile-label" src={profileBanner} alt="photo" />

        <s.ProfileDiv className="profile-section">
          <LogoutButton iconStyle={true} />

          {/* userData가 null이 아닐 때만 UploadProfilePicture 컴포넌트 렌더링 */}
          {userData ? (
            <UploadProfilePicture userDataProp={userData.email} />
          ) : (
            <p>Loading profile...</p>
          )}

          <s.ProfileDiv className="profile-padding-wrapper">
            <s.ProfileDiv className="profile-text-container">
              <s.ProfileDiv className="profile-element-box">
                <s.StyledH2 className="profile-name">
                  {userData ? userData.fullname : "Loading..."}
                </s.StyledH2>
                <s.StyledH3 className="profile-nickname">
                  {userData ? userData.nickname : "Loading..."}
                </s.StyledH3>
              </s.ProfileDiv>

              <s.ProfileDiv className="profile-element-box">
                <s.StyledH4 className="profile-details margin">
                  {userData ? userData.email : "Loading..."}
                </s.StyledH4>

                <s.ProfileDiv className="profile-contact-container">
                  <s.ProfileDiv className="profile-contact-box">
                    <s.PhoneIcon />
                    <s.StyledH4 className="profile-details">
                      +{userData ? userData.countryCode : "Loading..."}{" "}
                      {userData ? userData.phonenumber : "Loading..."}
                    </s.StyledH4>
                  </s.ProfileDiv>

                  <s.ProfileDiv className="profile-contact-box">
                    <s.BdIcon />
                    <s.StyledH4 className="profile-details">
                      {userData ? userData.birthYear : "Loading..."}.
                      {userData ? userData.birthMonth : "Loading..."}.
                      {userData ? userData.birthDay : "Loading..."}
                    </s.StyledH4>
                  </s.ProfileDiv>
                </s.ProfileDiv>
              </s.ProfileDiv>
            </s.ProfileDiv>

            <s.ProfileDiv className="profile-like-container">
              <s.ProfileDiv className="profile-element-box">
                <s.StyledH4 className="liked">
                  {userData ? userData.wishList?.length : "Loading..."}
                </s.StyledH4>
                <s.StyledH4 className="profile-details">Likes</s.StyledH4>
              </s.ProfileDiv>

            </s.ProfileDiv>
            
              <s.ProfileDiv className="profile-like-info">
                {userData && userData.wishList && userData.wishList.length > 0
                  ? userData.wishList.map((wish: any, index: number) => (
                      <s.ProfileDiv key={index} className="likes-card">
                        <s.Button className="delete">
                          <s.RemoveIcon/>
                        </s.Button>
                        <s.Image
                          className="profile-likes-card"
                          src={wish.randomImage}
                          alt={wish.nickname}
                          onClick={() => handleCardRedirect(wish.nickname)}
                        />
                        <s.StyledH4 className="profile-like-name">
                          {wish.nickname}
                        </s.StyledH4>
                      </s.ProfileDiv>
                    ))
                  : null}
              </s.ProfileDiv>

            <LogoutButton iconStyle={false} />
          </s.ProfileDiv>
        </s.ProfileDiv>
      </s.ProfileDiv>
    </>
  );
};

export default Profile;
