import React, { useEffect } from "react";
import { connect } from "react-redux";

import Post from "../../components/post_component/Post";
import CallCard from "../../components/call_card_component/CallCard";
import ArticlePreview from "./components/article_preview/ArticlePreview";
import PostDashboard from "../../components/upload_dashboards_components/post_dashboard/PostDashboard";
import CallDashboard from "../../components/upload_dashboards_components/call_dashboard/CallDashboard";
import {
  request_latest_trades_action_start,
  request_posts_action_start,
} from "../../redux/home_page/actions";
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

const HomePage = ({
  latest_trades,
  request_latest_trades,
  posts,
  request_posts,
}) => {
  useEffect(() => {
    document.title = `Codegg - Make Smart Investments`;
    request_latest_trades();
    request_posts();
  }, []);

  return (
    <>
      {console.log(posts)}
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
              {latest_trades.map((trade_card) => {
                return (
                  <CallCard
                    home_page={"true"}
                    data={trade_card[0]}
                    id={trade_card[1]}
                  />
                );
              })}
            </TradesContainer>
          </LeftContainer>
          <MiddleContainer>
            <UploadDashboardContainer>
              <PostDashboard />
            </UploadDashboardContainer>
            <PostsContainer>
              {posts.map((post) => {
                return <Post data={post[0]} id={post[1]} />;
              })}
            </PostsContainer>
          </MiddleContainer>
          <RightContainer>
            <RightTitle>Trending</RightTitle>
            <ArticlesPreviewContainer>
              {[1, 2, 3, 4, 5, 6].map((article_preview) => {
                return <ArticlePreview />;
              })}
            </ArticlesPreviewContainer>
          </RightContainer>
        </MainContainer>
      </HomePageContainer>
    </>
  );
};

// redux
const mapStateToProps = ({ home_page_reducer: { latest_trades, posts } }) => ({
  latest_trades,
  posts,
});

const mapDispatchToProps = (dispatch) => ({
  request_latest_trades: () => dispatch(request_latest_trades_action_start()),
  request_posts: () => dispatch(request_posts_action_start()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
