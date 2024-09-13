import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import s from "../stores/styling";
import LogoutButton from "../components/Logout";
import profileBanner from "../assets/images/profile-banner.jpg";
import StartFromTop from "../components/StartFromTop";
import UploadProfilePhoto from "../components/UploadProfilePhoto";
import { PopUpBelow } from "../components/FramerMotions/scrollMotions";

interface WishProps {
  artistNickname?: string;
  artistRandomImage?: string;
}

const Profile: React.FC<WishProps> = ({ artistNickname, artistRandomImage }) => {
  const { currentlyLoggedIn } = useContext(AuthContext);
  const [userData, setUserData] = useState<any>(null);
  const [photoURL, setPhotoURL] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(5); // 처음에 5개만 보여주기

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userDocRef = doc(db, "users", auth.currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const data = userDoc.data();
          setUserData(data);
          setPhotoURL(data.photoURL);

        } else {
          console.log("No such document!");
        }
      }
    };
    fetchUserData();
  }, []);
  
  const handlePhotoUpload = (newPhotoURL: string) => {
    setPhotoURL(newPhotoURL);  // 업로드 후 새로운 사진 URL을 상태에 반영
  };


  const handleCardRedirect = (nickname: string) => {
    const url = `/profile_artist_${nickname}`;
    if (url) {
      window.location.href = url;
    } else {
      console.error("URL 찾을 수 없음");
    }
  };

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5); // 더보기 버튼을 누르면 5개씩 더 보여줌
  };

  const groupedWishlist = [];
  for (let i = 0; i < visibleCount && i < userData?.wishList?.length; i += 5) {
    groupedWishlist.push(userData.wishList.slice(i, i + 5)); // 5개씩 묶음
  }

  const removeWish = async (artistId: number) => {
    if (!auth.currentUser) {
      console.error("로그인이 필요합니다.");
      return;
    }

    const userRef = doc(db, "users", auth.currentUser.uid);
    const currentWishlist = userData.wishList || [];

    const updatedWishlist = currentWishlist.filter((wish: any) => wish.id !== artistId);

    try {
      // Firestore에 위시리스트 업데이트
      await updateDoc(userRef, { wishList: updatedWishlist });

      // 로컬 상태 업데이트
      setUserData((prevUserData: any) => ({
        ...prevUserData,
        wishList: updatedWishlist,
      }));
    } catch (error) {
      console.error("위시리스트 업데이트 중 오류 발생:", error);
    }
  };


  return (
    <>
      <StartFromTop />

        <s.Image className="profile-label" src={profileBanner} alt="photo" />
      <s.ProfileDiv className="profile-wrapper">
        <s.ProfileDiv className="profile-section">
          <LogoutButton/>

          {/* {userData ? (
            <UploadProfilePhoto />
          ) : (
            <p>Loading profile...</p>
          )} */}

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


              <s.ProfileDiv className="profile-element-box">
                <s.StyledH4 className="liked">
                  {userData ? userData.wishList?.length : "Loading..."}
                </s.StyledH4>
                <s.StyledH4 className="profile-details bold">Likes</s.StyledH4>
              </s.ProfileDiv>


            {groupedWishlist.map((group, groupIndex) => (
              <PopUpBelow key ={groupIndex}>
              <s.ProfileDiv key={groupIndex} className="profile-like-info">
                {group.map((wish: any, index: number) => (
                  <s.ProfileDiv key={index} className="likes-card">
                    <s.Button className="delete" onClick={() => removeWish(wish.id)}>
                      <s.RemoveIcon />
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
                ))}
              </s.ProfileDiv>
              </PopUpBelow>
            ))}

            {visibleCount < userData?.wishList?.length && (
              <s.Button onClick={loadMore} className="outlined">더보기</s.Button>
            )}


          </s.ProfileDiv>
        </s.ProfileDiv>
      </s.ProfileDiv>
    </>
  );
};

export default Profile;
