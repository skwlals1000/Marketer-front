import React, { useState } from "react";
import styled from "styled-components";

const Community = () => {
  const [dummyPosts, setDummyPosts] = useState([
    { id: 1, content: "첫번째 포스트", author: "나지민" },
    { id: 2, content: "두번째 포스트", author: "백민기" },
    { id: 3, content: "세번째 포스트", author: "김동욱" },
  ]);
  const [newPost, setNewPost] = useState("");
  const [username, setUsername] = useState("나지민#맵찔이");
  const [bio, setBio] = useState("안녕하세요 ");
  const [searchTerm, setSearchTerm] = useState("");

  const createPost = (e) => {
    e.preventDefault();
    const newPostData = {
      id: dummyPosts.length + 1,
      content: newPost,
      author: username,
    };
    setDummyPosts([...dummyPosts, newPostData]);
    setNewPost(""); // Clear input field
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = dummyPosts.filter(post =>
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Header>
        <h1>마시써유</h1>
        <SearchBarContainer>
        <SearchBar
          type="text"
          placeholder="검색어를 입력하세요..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </SearchBarContainer>
      </Header>
      <NavBar>
        <NavButton>음식 레시피 공유</NavButton>
        <NavButton>오늘의 식사</NavButton>
        <NavButton></NavButton>
        <NavButton>맛집 정보 공유</NavButton>
      </NavBar>
      
      <MainContent>
        <Sidebar>
          <UserProfile>
            <ProfilePic src="https://via.placeholder.com/100" alt="내 프로필" />
            <UserName>{username}</UserName>
            <Bio>{bio}</Bio>
            <EditProfileButton>프로필 수정</EditProfileButton>
          </UserProfile>
          <Navigation>
            <NavItem>마이 홈</NavItem>
            <NavItem>로그아웃</NavItem>
            <NavItem>설정</NavItem>
          </Navigation>
        </Sidebar>
        <Content>
          <PostForm onSubmit={createPost}>
            <PostInput
              type="text"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="글 쓰기"
            />
            <PostButton type="submit">글 작성</PostButton>
          </PostForm>
          <PostList>
            {filteredPosts.map((post) => (
              <Post key={post.id}>
                <PostContent>{post.content}</PostContent>
                <PostFooter>
                  <PostAuthor>By {post.author}</PostAuthor>
                  <PostActions>
                    <LikeButton>좋아요</LikeButton>
                    <CommentButton>댓글</CommentButton>
                  </PostActions>
                </PostFooter>
              </Post>
            ))}
          </PostList>
        </Content>
      </MainContent>
      <Footer>
        <FooterText>© 2024 Community Matketer. All rights reserved.</FooterText>
      </Footer>
    </Container>
  );
};

export default Community;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f2f5;
`;

const Header = styled.header`
  padding: 20px;
  background-color: #4a90e2;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const NavButton = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  font-size: 1rem;
  background-color: #357ab7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #285a8e;
    transform: translateY(-2px);

  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
`;

const SearchBar = styled.input`
  width: 60%;
  padding: 10px 20px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const MainContent = styled.main`
  display: flex;
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
`;

const Sidebar = styled.aside`
  width: 250px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
`;

const UserProfile = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const UserName = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

const Bio = styled.p`
  font-size: 1rem;
  color: #666;
`;

const EditProfileButton = styled.button`
  padding: 5px 10px;
  font-size: 0.8rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #357ab7;
    transform: translateY(-2px);
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NavItem = styled.div`
  padding: 10px;
  background-color: #4a90e2;
  color: white;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #357ab7;
    transform: translateY(-2px);
  }
`;

const Content = styled.div`
  flex: 1;
`;

const PostForm = styled.form`
  display: flex;
  margin-bottom: 20px;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PostInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const PostButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #357ab7;
    transform: translateY(-2px);
  }
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Post = styled.div`
  padding: 15px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const PostContent = styled.p`
  margin: 0 0 10px 0;
  font-size: 1.2rem;
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostAuthor = styled.span`
  font-size: 1rem;
  color: #555;
`;

const PostActions = styled.div`
  display: flex;
  gap: 10px;
`;

const LikeButton = styled.button`
  padding: 5px 10px;
  font-size: 0.8rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #218838;
    transform: translateY(-2px);
  }
`;

const CommentButton = styled.button`
  padding: 5px 10px;
  font-size: 0.8rem;
  background-color: #ffc107;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #e0a800;
    transform: translateY(-2px);
  }
`;

const Footer = styled.footer`
  padding: 20px;
  background-color: #4a90e2;
  color: white;
  text-align: center;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
`;

const FooterText = styled.p`
  margin: 0;
`;
