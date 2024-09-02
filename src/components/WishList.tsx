import { doc, getDoc, updateDoc } from "firebase/firestore";
import s from "../stores/styling";
import { useState, useEffect } from "react";
import { auth, db } from "../firebase/firebaseConfig";

interface WishListProps {
  artistId: number; // 아티스트 ID를 전달받기 위한 prop
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}

const WishList: React.FC<WishListProps> = ({ artistId, isWishlisted, onToggleWishlist }) => {
  const [wishButton, setWishButton] = useState<boolean>(isWishlisted);
  const [hovered, setHovered] = useState(false); 

  useEffect(() => {
    const fetchWishlistStatus = async () => {
      const user = auth.currentUser;
      if (!user) {
        console.error("로그인이 필요합니다.");
        return;
      }

      const userRef = doc(db, "users", user.uid);
      try {
        const userDoc = await getDoc(userRef);
        const currentWishlist = userDoc.data()?.wishList || [];
        const isAlreadyWishlisted = currentWishlist.includes(artistId);

        setWishButton(isAlreadyWishlisted); // DB에 있는지 여부에 따라 초기값 설정
      } catch (error) {
        console.error("위시리스트 상태를 가져오는 중 오류 발생:", error);
      }
    };
    fetchWishlistStatus();
  }, [artistId]);

  useEffect(() => {
    setHovered(false); // 상태 변경 시 hover 상태 초기화
  }, [isWishlisted]);

  const handleWishlistToggle = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.error("로그인이 필요합니다.");
      return;
    }

    const userRef = doc(db, "users", user.uid);
    const maxWishlistSize = 100; // 최대 위시리스트 크기 설정

    try {
      const userDoc = await getDoc(userRef);
      const currentWishlist = userDoc.data()?.wishList || [];

      let updatedWishlist;

      if (wishButton) {
        // 이미 위시리스트에 포함되어 있으면 제거
        updatedWishlist = currentWishlist.filter(
          (id: number) => id !== artistId
        );
      } else {
        updatedWishlist = [artistId, ...currentWishlist];  // 중복 없이 배열 앞에 추가

        if (updatedWishlist.length > maxWishlistSize) {
          updatedWishlist = updatedWishlist.slice(0, maxWishlistSize); // 최대 크기를 넘으면 마지막 요소를 제거
        }
      }
      await updateDoc(userRef, { wishList: updatedWishlist });

      setWishButton(!wishButton); // 상태 업데이트
      onToggleWishlist(); // 부모 컴포넌트에서 상태를 업데이트하도록 콜백 실행
    } 
    catch (error) {
      console.error("위시리스트 업데이트 중 오류 발생:", error);
    }
  };

  const handleMouseClick = ( event: React.MouseEvent<HTMLDivElement, MouseEvent> ) => {
    event.stopPropagation();
    handleWishlistToggle();
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    event.stopPropagation();
    handleWishlistToggle();
  };

  const handleMouseEnter = () => {
      setHovered(true);
  };

  const handleMouseLeave = () => {
      setHovered(false);
  };

  const renderIcon = () => {
    if (wishButton) {
      return <s.WishIconClicked />;
    } else if (hovered) {
      return <s.WishIconHover />;
    } else {
      return <s.WishIconLine />;
    }
  };

  return (
    <s.ArticleDiv
      className="heart-wrapper"
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
      onClick={handleMouseClick}
      onTouchStart={handleTouchStart}
    >
      {renderIcon()}
    </s.ArticleDiv>
  );
};

export default WishList;
