import React, { useState } from "react";
import { DeviceFrameset } from "react-device-frameset";

import styled from "styled-components";
import RatingStars from "../../components/Review/RatingStars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const images = [
  "../../images/food1.png",
  // 추가 이미지 주소를 여기에 추가할 수 있습니다
];

const tagsData = {
  한식: ["#김치찌개", "#비빔밥", "#불고기", "#된장찌개"],
  일식: ["#초밥", "#라멘", "#돈부리", "#우동"],
  중식: ["#짜장면", "#탕수육", "#마파두부", "#양장피"],
};

function MainReviewPages() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cardInfo, setCardInfo] = useState({
    reviewCount: 123,
    viewCount: 456,
    rating: 4.5,
  });
  const [showCardInfo, setShowCardInfo] = useState(false);

  const handleCardHover = () => {
    setShowCardInfo(true);
  };

  const handleCardLeave = () => {
    setShowCardInfo(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <ReveiwP>
      <HeaderContainer>
        <Title>식당 리뷰</Title>
      </HeaderContainer>

      <ReviewPageWrapper>
        <DeviceFrameset
          device="iPad Mini"
          color="black"
          width="100%"
          height="75%"
        >
          <CategoryContainer>
            {Object.keys(tagsData).map((category, index) => (
              <CategoryButton
                key={index}
                onClick={() => handleCategorySelect(category)}
                active={selectedCategory === category}
              >
                {category}
              </CategoryButton>
            ))}
          </CategoryContainer>
          <TagsContainer>
            {selectedCategory &&
              tagsData[selectedCategory].map((tag, index) => (
                <TagButton key={index}>{tag}</TagButton>
              ))}
          </TagsContainer>

          <ReviewCardContainer>
            <CardWrapper
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              {showCardInfo && (
                <CardInfoBox>
                  <ReviewCount>리뷰 {cardInfo.reviewCount}개</ReviewCount>
                  <ViewCount>조회 {cardInfo.viewCount}회</ViewCount>
                  <Rating>
                    {" "}
                    <FontAwesomeIcon
                      icon={solidStar}
                      flip="horizontal"
                      size="2x"
                      style={{ color: "#FFD43B" }}
                    />{" "}
                    2.5{" "}
                  </Rating>
                </CardInfoBox>
              )}

              <CardTitle showInfo={showCardInfo}>
                {showCardInfo ? "클릭하여 리뷰보기" : "식당 이름"}
              </CardTitle>
              <CardHashTag showInfo={showCardInfo}>
                {showCardInfo ? "" : "# 브런치"}
              </CardHashTag>
              <CardImg backgroundImage={images[0]} />
            </CardWrapper>

            <CardWrapper>
              <h2>식당 이름</h2>
              <div># 브런치</div>
              <CardImg backgroundImage={images[0]} />
            </CardWrapper>
            <CardWrapper>
              <h2>식당 이름</h2>
              <div># 브런치</div>
              <CardImg backgroundImage={images[0]} />
            </CardWrapper>
          </ReviewCardContainer>
        </DeviceFrameset>
      </ReviewPageWrapper>
    </ReveiwP>
  );
}

export default MainReviewPages;

const ReveiwP = styled.div`
  background: linear-gradient(#f0f0c3, #e7e7c9);
`;
const ReviewPageWrapper = styled.div`
  max-width: 800px;
  height: 800px;
  padding: 20px;
  gap: 100px;
  margin: 0 auto;
`;

const HeaderContainer = styled.header`
  padding: 20px;
  background: linear-gradient(#e7e78b, #f0f0c3);
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: bold;
  margin: 0;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  padding: 20px;
  margin: 0 20%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CategoryButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? "#dd5746" : "#f0f0f0")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ active }) => (active ? "#c33a1d" : "#e0e0e0")};
    color: ${({ active }) => (active ? "#fff" : "#000")};
  }
`;

const TagsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TagButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  background-color: #f0f0f0;
  color: #000;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #e0e0e0;
    color: #000;
  }
`;

const ReviewCardContainer = styled.div`
  max-width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
`;

const CardWrapper = styled.div`
  width: 200px;
  height: 250px;
  padding: 20px;

  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  margin: 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: column-reverse;
  transition: transform 0.3s ease-in-out;
  position: relative;

  h2 {
    margin-bottom: 10px;
    color: #666;
  }

  p {
    color: #666;
  }

  &:hover {
    background: linear-gradient(#f0f0c3, #e7e7c9);
  }
`;

const CardInfoBox = styled.div`
  position: absolute;
  bottom: 5%;
  left: 0;
  width: 100%;
  background-color: #fffbda;

  padding: 15px;
  display: flex;
  justify-content: space-around; /* 컨텐츠를 가운데 정렬 */
  border-radius: 50px;
  align-items: center;
  font-family: "Comic Sans MS", cursive;
  font-size: 16px; /* 폰트 사이즈 조정 */
  font-weight: bold;
  color: #153448;
  z-index: 100;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: translateY(70px);
    opacity: 1;
  }
`;

const ReviewCount = styled.div`
  flex: 1;
  text-align: center;
`;

const ViewCount = styled.div`
  flex: 1;
  text-align: center;
`;

const Rating = styled.div`
  flex: 1;
  text-align: center;
`;

const CardImg = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 100px; /* Optional: If you want rounded corners */
  background-image: url(${(props) => props.backgroundImage});
  background-size: contain; /* 이미지가 잘리지 않고 전체를 보여줌 */
  background-repeat: no-repeat; /* 이미지 반복 방지 */
  background-position: center; /* 이미지 중앙 정렬 */

  position: relative;
  flex: 1;
`;

const CardTitle = styled.h2`
  margin-bottom: 10px;
  color: ${({ showInfo }) => (showInfo ? "#666" : "#009688")};
  font-size: ${({ showInfo }) => (showInfo ? "18px" : "18px")};
`;

const CardHashTag = styled.div`
  color: ${({ showInfo }) => (showInfo ? "#666" : "#009688")};
  font-size: ${({ showInfo }) => (showInfo ? "14px" : "14px")};
`;
