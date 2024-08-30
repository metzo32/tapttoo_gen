import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import s from "../stores/styling";
import LogoutButton from "../components/Logout";
import profileBanner from "../assets/images/profile-banner.jpg";
import StartFromTop from "../components/StartFromTop";

export default function Profile() {
  const { currentlyLoggedIn } = useContext(AuthContext);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userDocRef = doc(db, "users", auth.currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          console.log("No such document!");
        }
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
      <StartFromTop />
      <s.ProfileDiv className="wrapper">
        <s.ProfileDiv className="profile-wrapper">
          <s.Image className="proflie-label" src={profileBanner} alt="photo" />
          <s.ProfileDiv className="profile-section">
            <LogoutButton iconStyle={true} />
            <s.ProfileDiv className="user-image">
              <s.PlusIcon />
            </s.ProfileDiv>
            <s.ProfileDiv className="profile-text-container">
              <s.ProfileDiv className="profile-name-box">
                <s.StyledH2 className="profile-name">
                  {userData ? userData.fullname : "Loading..."}
                </s.StyledH2>
                <s.StyledH3 className="profile-nickname">
                  {userData ? userData.nickname : "Loading..."}
                </s.StyledH3>
              </s.ProfileDiv>

              <s.ProfileDiv className="profile-text-box">
                <s.StyledH4 className="profile-details">
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

              <s.ProfileDiv className="profile-like-box">
                <s.StyledH4 className="profile-likes">
                  {userData ? userData.wishList.length : "Loading..."}
                </s.StyledH4>
                <s.StyledH4 className="profile-details">Likes</s.StyledH4>
              </s.ProfileDiv>

              <LogoutButton iconStyle={false} />
            </s.ProfileDiv>
          </s.ProfileDiv>
        </s.ProfileDiv>
        {/* {userData ? <CurrentUserData userData={userData} /> : <p>Loading...</p>} */}
      </s.ProfileDiv>
    </>
  );
}
