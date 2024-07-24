import LogoutButton from "../components/Logout"

export default function Profile() {
  return (
    <LogoutButton/>
  )
}


// import React, { useEffect, useState } from "react";
// import { auth, db } from "../firebase/firebaseConfig";
// import { onAuthStateChanged } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import LogoutButton from "../components/Logout";

// const UserProfile: React.FC = () => {
//   const [userInfo, setUserInfo] = useState<any>(null);

//   useEffect(() => {
//     const fetchUserData = async (userId: string) => {
//       const userDoc = await getDoc(doc(db, "users", userId));
//       if (userDoc.exists()) {
//         setUserInfo(userDoc.data());
//       } else {
//         console.log("No such document!");
//       }
//     };

//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         fetchUserData(user.uid);
//       } else {
//         console.log("User is not logged in");
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   if (!userInfo) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <LogoutButton/>
//       <p>Full Name: {userInfo.fullname}</p>
//       <p>Nickname: {userInfo.nickname}</p>
//       <p>Email: {userInfo.email}</p>
//       <p>Phone Number: {userInfo.phonenumber}</p>
//       <p>Country Code: {userInfo.countryCode}</p>
//     </div>
//   );
// };

// export default UserProfile;
