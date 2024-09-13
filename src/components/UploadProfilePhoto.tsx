// src/components/UploadProfilePhoto.tsx
import React, { useState, useEffect } from "react";
import s from "../stores/styling";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";

const UploadProfilePhoto: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [photoURL, setPhotoURL] = useState<string | null>(null); // photoURL 상태 추가
  const [isUploading, setIsUploading] = useState(false);

  // Firestore에서 사용자 사진 URL 가져오기
  const getUserPhotoURL = async (): Promise<void> => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const data = userDoc.data();
        if (data.photoURL) {
          setPhotoURL(data.photoURL);  // Firestore에서 가져온 URL로 상태 업데이트
        }
      }
    }
  };

  // 페이지 진입 시 Firestore에서 기존의 프로필 사진 URL 가져오기
  useEffect(() => {
    getUserPhotoURL();
  }, []);

  // 사진 업로드 처리 함수
  const uploadPhoto = async (file: File) => {
    const storage = getStorage();
    const storageRef = ref(storage, `profile_pictures/${file.name}`);
    setIsUploading(true);

    try {
      // 파일 업로드
      await uploadBytes(storageRef, file);

      // 업로드 후 다운로드 URL 가져오기
      const photoURL = await getDownloadURL(storageRef);

      // Firestore에 사용자 프로필에 photoURL 저장
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        await updateDoc(userDocRef, { photoURL });
      }

      setPhotoURL(photoURL);  // 업로드된 URL을 상태에 저장
    } catch (error) {
      console.error("파일 업로드 실패:", error);
    } finally {
      setIsUploading(false);
    }
  };

  // 파일 선택 시 즉시 업로드
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      await uploadPhoto(file);  // 파일 선택 시 즉시 업로드
    }
  };

  return (
    <s.ProfileDiv className="user-image-wrapper">
      <s.ProfileDiv className="user-image-container">
        {/* 선택된 파일이 있고 아직 업로드된 URL이 없을 때 임시로 파일을 보여줌 */}
        {selectedFile && !photoURL && (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected Profile"
            style={{ width: "100%", height: "auto" }}
          />
        )}

        {/* 업로드된 URL이 있으면 그 사진을 보여줌 */}
        {photoURL && (
          <img src={photoURL} alt="Uploaded Profile" style={{ width: "100%", height: "auto" }} />
        )}

        {/* 파일 선택을 위한 Input 영역. PlusIcon을 클릭하면 파일 선택 창이 열림 */}
        <s.PlusIcon onClick={() => document.getElementById('fileInput')?.click()} />
        <s.Input
          id="fileInput"
          className="photo-add"
          type="file"
          onChange={handleFileChange}
          style={{ display: 'none' }} // 숨김 처리하여 PlusIcon이 파일 선택 버튼처럼 작동
        />
      </s.ProfileDiv>
    </s.ProfileDiv>
  );
};

export default UploadProfilePhoto;
