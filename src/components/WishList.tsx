import { doc, getDoc, updateDoc } from "firebase/firestore";
import s from "../stores/styling";
import { useState, useEffect } from "react";
import { auth, db } from "../firebase/firebaseConfig";

interface WishListProps {
  artistId: number; // 아티스트 ID를 전달받기 위한 prop
  artistNickname: string;
  artistRandomImage: string;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}

const WishList: React.FC<WishListProps> = ({
  artistId,
  artistNickname,
  artistRandomImage,
  isWishlisted,
  onToggleWishlist,
}) => {
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
        const isAlreadyWishlisted = currentWishlist.some(
          (item: { id: number }) => item.id === artistId
        );
  
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
        // 새로운 위시리스트 아이템 생성
        const newWishlistItem = {
          id: artistId,
          nickname: artistNickname, // 여기서 전달받은 nickname 사용
          randomImage: artistRandomImage, // 여기서 전달받은 randomImage 사용
        };

        updatedWishlist = [newWishlistItem, ...currentWishlist];

        if (updatedWishlist.length > maxWishlistSize) {
          updatedWishlist = updatedWishlist.slice(0, maxWishlistSize);
        }
      }

      await updateDoc(userRef, { wishList: updatedWishlist });

      setWishButton(!wishButton);
      onToggleWishlist();
    } catch (error) {
      console.error("위시리스트 업데이트 중 오류 발생:", error);
    }
  };

  const handleMouseClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
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
