import { useState, useEffect } from "react";
import s from "../stores/styling";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { storage, db } from "../firebase/firebaseConfig";


interface PhotoProps {
  userDataProp: string | null; // userData는 null일 수 있음 + 부모 컴포넌트에서 userData를 받았고, 그 중 email만 여기 전달
}

const UploadProfilePicture = ({ userDataProp }: PhotoProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [photoURL, setPhotoURL] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);


  useEffect(() => {
    if (userDataProp) {
      console.log("Received user email: ", userDataProp);
    } else {
      console.log("No user email found.");
    }
  }, [userDataProp]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file && userDataProp) {
      setUploading(true);
      const storageRef = ref(storage, `profile_pictures/${file.name}`);
      try {
        // Firebase Storage에 업로드 (실제 파일)
        await uploadBytes(storageRef, file);
        // 업로드된 파일의 URL 가져오기
        const url = await getDownloadURL(storageRef);
        setPhotoURL(url);

        // Firestore에 URL 저장 (외부 접근 및 다운로드 가능)
        const userDoc = doc(db, "users", userDataProp);
        await updateDoc(userDoc, {
          photoURL: url,
        });
      } catch (error) {
        console.error("Upload failed", error);
        alert("사진 업로드에 실패했습니다.");
      } finally {
        setUploading(false);
      }
    } else {
      // userData 또는 email이 null일 때
      alert("로그인이 필요합니다.");
    }
  };

  return (
    <s.ProfileDiv className="user-image-wrapper">
      <s.ProfileDiv className="user-image-container">
      {file && !photoURL && (
        <img
          src={URL.createObjectURL(file)}
          alt="Selected Profile"
          style={{ width: "100%", height: "auto" }}
        />
      )}

      {photoURL && (
        <img src={photoURL} alt="Uploaded Profile" style={{ width: "100%", height: "auto" }} />
      )}
      <s.PlusIcon />
      <s.Input className="photo-add" type="file" onChange={handleFileChange}/>
        {/* <s.Button onClick={handleUpload} disabled={uploading}>
        <s.PlusIcon />
        </s.Button> */}
{/* 
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Photo"}
      </button>
      {photoURL && <img src={photoURL} alt="Uploaded Profile" />} */}
    </s.ProfileDiv>
    </s.ProfileDiv>
  );
};

export default UploadProfilePicture;
