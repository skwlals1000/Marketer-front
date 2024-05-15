import { useState, useEffect } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DeviceFrameset } from "react-device-frameset";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReviewCard from "../../components/Review/ReviewCard";

function CategoryReviewPage() {
  const location = useLocation();

  const { restaurants } = location.state || { restaurants: [] };
  console.log(restaurants);

  const [isLoading, setIsLoading] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleIconClick = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 100);
  };
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading) {
      // 스크롤이 하단에 도달했을 때 추가 데이터를 불러옵니다.
      setIsLoading(true);
      // 여기에서 추가 데이터를 불러오는 함수 호출
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [cardInfo, setCardInfo] = useState({
    reviewCount: 0,
    viewCount: 0,
    rating: 0,
  });

  useEffect(() => {
    if (location.state) {
      setCardInfo({
        reviewCount: location.state.reviewCount,
        viewCount: location.state.viewCount,
        rating: location.state.rating,
      });
    }
  }, [location.state]);

  return (
    <ReveiwP>
      <ReviewPageWrapper>
        <DeviceFrameset
          device="iPad Mini"
          color="black"
          width="93%"
          height="75%"
        >
          <Header>
            <Link to="/review/">
              <PressableIcon
                icon={faArrowLeft}
                size="3x"
                onClick={handleIconClick}
                pressed={isPressed}
              />
            </Link>
            <Title>리뷰 목록</Title>
          </Header>
          <Input />
          <TagsContainer>
            {restaurants.map((restaurant, index) => (
              <div key={index}>
                {restaurant.menus &&
                  restaurant.menus.length > 0 &&
                  restaurant.menus.map((menu, menuIndex) => (
                    <TagButton key={menuIndex}>{menu}</TagButton>
                  ))}
              </div>
            ))}
          </TagsContainer>
          <ReviewCardContainer>
            <div>
              {restaurants.map((restaurant, index) => (
                <ReviewCard restaurant={restaurant} />
              ))}
            </div>
            {isLoading && <div>Loading...</div>}
          </ReviewCardContainer>
        </DeviceFrameset>
      </ReviewPageWrapper>
    </ReveiwP>
  );
}

export default CategoryReviewPage;

const ReveiwP = styled.div`
  background: linear-gradient(#f0f0c3, #e7e7c9);
`;

const ReviewPageWrapper = styled.div`
  max-width: 800px;
  height: 800px;
  padding: 20px;
  margin: 0 auto;
`;

const Header = styled.div`
  max-width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  height: 10%;
  display: flex;
  gap: 520px;
  border-bottom: 3px solid black;
`;

const Input = styled.input`
  width: 90%;
  height: 10%;
  margin: 5%;
  background-color: #a6e3e9;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border: none;
  border-radius: 10px;
`;

const TagsContainer = styled.div`
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  white-space: nowrap; /* 자식 요소들을 가로로 나열 */
  display: flex;
  overflow-x: auto; /* 가로 스크롤 활성화 */

  /* 스크롤바 스타일 */
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.1); /* Firefox */
  &::-webkit-scrollbar {
    width: 6px; /* Chrome, Safari, Edge */
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2); /* 스크롤바 색상 */
    border-radius: 3px; /* 스크롤바 모양 */
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1); /* 스크롤바 트랙 색상 */
  }
`;

const TagButton = styled.button`
  padding: 5px;
  font-size: 32px;
  font-weight: bold;
  border: 3px solid #a6e3e9;
  background-color: white;
  border-radius: 20px;
  margin-right: 10px;
  color: #000;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-family: "Uiyeun", sans-serif;

  &:hover {
    background-color: #f0f0f0;
    color: #000;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-family: "Uiyeun", sans-serif;
`;

const PressableIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  transition: transform 0.1s ease;

  &:active {
    transform: scale(0.9);
  }
`;

const ReviewCardContainer = styled.div`
  max-width: 90%;
  margin: 5%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  overflow-y: auto;
`;
