// ProtectedRouterHoc.tsx
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


//Protected Router Higher-Order-Component는 자식 컴포넌트를 감싸 로그인 상태 확인
const ProtectedRouterHoc = ({ children }: { children: JSX.Element }) => {
  const { currentlyLoggedIn } = useContext(AuthContext);

  if (!currentlyLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;  //로그인 상태라면 자식 컴포넌트 (/profile) 렌더링
};

export default ProtectedRouterHoc;
