// RestaurantCard.js

import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

function RestaurantCard({
  handleCardHover,
  handleCardLeave,
  showCardInfo,
  cardInfo,
  restaurants,
  choiceTag,
  images,
}) {
  return (
    <CardWrapper onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
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
        {showCardInfo ? "클릭하여 리뷰보기" : `${restaurants}`}
      </CardTitle>
      <CardHashTag showInfo={showCardInfo}>
        {showCardInfo ? "" : choiceTag}
      </CardHashTag>
      <CardImg backgroundImage={images[0]} />
    </CardWrapper>
  );
}

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

export default RestaurantCard;
