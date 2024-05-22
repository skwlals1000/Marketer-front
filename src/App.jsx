import React from "react";
import Main from "./page/Main";
import KakaoMap from "../src/page/Map/KaKaoMap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/page/Map/Home";
import Header from "./page/Header";
import ServicePage from "./page/ServicePage";
import MainReviewPages from "./page/Review/MainReviewPages";
import CategoryReviewPage from "./page/Review/CategoryReivewPage";
import ReviewPage from "./page/Review/ReviewPage";
import CommunityPage from "./page/Community/Community";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHN />} />
        <Route path="/food" element={<FoodHN />} />
        <Route path="/service" element={<ServiceHN />} />
        <Route path="/review/" element={<FullReviewHN />} />
        <Route path="/review/:id" element={<ReviewHN />} />
        <Route path="/community" element={<CommunityHN />} />
        <Route path="/category/:category" element={<CategoryReviewHN />} />
      </Routes>
    </BrowserRouter>
  );
}

const MainHN = () => (
  <div>
    <Header />
    <Main />
  </div>
);
const ReviewHN = () => (
  <div>
    <Header />
    <ReviewPage />
  </div>
);

const FullReviewHN = () => (
  <div>
    <Header />
    <MainReviewPages />
  </div>
);

const FoodHN = () => (
  <div>
    <Header />
    <Home />
    <KakaoMap />
  </div>
);

const ServiceHN = () => (
  <div>
    <Header />
    <ServicePage />
  </div>
);


const CommunityHN = () => (
  <div>
    <Header />
    <CommunityPage />
  </div>
);

const CategoryReviewHN = () => (
  <div>
    <Header />
    <CategoryReviewPage />
  </div>
);
export default App;