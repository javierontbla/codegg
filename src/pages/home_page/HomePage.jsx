import React, { useEffect } from "react";

import Post from "../../components/post_component/Post";
import CallCard from "../../components/call_card_component/CallCard";
import ArticlePreview from "./components/article_preview/ArticlePreview";
import PostDashboard from "../../components/upload_dashboards_components/post_dashboard/PostDashboard";
import CallDashboard from "../../components/upload_dashboards_components/call_dashboard/CallDashboard";
import {
  HomePageContainer,
  SelectionContainer,
  PrivateButton,
  PublicButton,
  MainContainer,
  LeftContainer,
  TradesContainer,
  MiddleContainer,
  PostsContainer,
  RightContainer,
  UploadDashboardContainer,
  ArticlesPreviewContainer,
  RightTitle,
  LeftTitle,
} from "./HomePage_styles";

const HomePage = () => {
  useEffect(() => {
    document.title = `Codegg | Amplifying Smart Investments`;
  }, []);

  return (
    <>
      <HomePageContainer className="container">
        <SelectionContainer>
          <PublicButton>Public</PublicButton>
          <PrivateButton>Premium</PrivateButton>
        </SelectionContainer>
        <MainContainer>
          <LeftContainer>
            <LeftTitle>Latest Trades</LeftTitle>
            <CallDashboard />
            <TradesContainer>
              {[1, 2, 3, 4, 5].map((card) => {
                return <CallCard home_page={"true"} />;
              })}
            </TradesContainer>
          </LeftContainer>
          <MiddleContainer>
            <UploadDashboardContainer>
              <PostDashboard />
            </UploadDashboardContainer>
            <PostsContainer>
              {[1, 2, 3].map((post) => {
                return <Post no_image={post === 1 ? "true" : null} />;
              })}
            </PostsContainer>
          </MiddleContainer>
          <RightContainer>
            <RightTitle>Trending</RightTitle>
            <ArticlesPreviewContainer>
              {[1, 2, 3, 4, 5, 6].map((article) => {
                return <ArticlePreview />;
              })}
            </ArticlesPreviewContainer>
          </RightContainer>
        </MainContainer>
      </HomePageContainer>
    </>
  );
};

export default HomePage;
