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
  request_article_previews_action_start,
} from "../../redux/home_page/actions";
import {
  HomePageContainer,
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
  request_latest_trades,
  request_posts,
  request_article_previews,
  latest_trades,
  posts,
  article_previews,
}) => {
  useEffect(() => {
    document.title = `Codegg - Inversiones Inteligentes`;
    request_latest_trades();
    request_posts();
    request_article_previews();
  }, []);

  return (
    <>
      <HomePageContainer className="container">
        <MainContainer>
          <LeftContainer>
            <LeftTitle>Últimas Operaciones</LeftTitle>
            <CallDashboard />
            <TradesContainer>
              {latest_trades.map((trade_card) => {
                return (
                  <CallCard
                    home_page={"true"}
                    data={trade_card[0]}
                    id={trade_card[1]}
                    key={trade_card[1]}
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
                return <Post data={post[0]} id={post[1]} key={post[1]} />;
              })}
            </PostsContainer>
          </MiddleContainer>
          <RightContainer>
            <RightTitle>Tendencias</RightTitle>
            <ArticlesPreviewContainer>
              {article_previews.map((article_preview) => {
                return (
                  <ArticlePreview
                    data={article_preview[0]}
                    id={article_preview[1]}
                    key={article_preview[1]}
                  />
                );
              })}
            </ArticlesPreviewContainer>
          </RightContainer>
        </MainContainer>
      </HomePageContainer>
    </>
  );
};

// redux
const mapStateToProps = ({
  home_page_reducer: { latest_trades, posts, article_previews },
}) => ({
  latest_trades,
  posts,
  article_previews,
});

const mapDispatchToProps = (dispatch) => ({
  request_latest_trades: () => dispatch(request_latest_trades_action_start()),
  request_posts: () => dispatch(request_posts_action_start()),
  request_article_previews: () =>
    dispatch(request_article_previews_action_start()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
