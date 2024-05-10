import styled from "styled-components";

function MainReviewPages() {
  return (
    <ReveiwP>
      <HeaderContainer>
        <Title>전체 식당 리뷰</Title>
      </HeaderContainer>

      <Container></Container>
    </ReveiwP>
  );
}

export default MainReviewPages;

const ReveiwP = styled.div`
  background: linear-gradient(#f0f0c3, #e7e7c9);
`;

const Container = styled.div`
  max-width: 1280px;
  height: 100rem;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  gap: 100px;
`;
const HeaderContainer = styled.header`
  max-width: 100%;

  padding: 0 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background: linear-gradient(#e7e78b, #f0f0c3);
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: bold;
  padding: 20px;
  margin: 0 auto;
  margin-right: 60px;
  flex: 1;
  text-align: center;
`;
