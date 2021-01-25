import React, { useEffect } from "react";
import { connect } from "react-redux";

import PostCard from "../../components/post_card_component/PostCard";
import TradeCard from "../../components/trade_card_component/TradeCard";
import ArticleCardPreview from "./components/article_card_preview_component/ArticleCardPreview";
import Title from "../../components/title_component/Title";
import PostDashboard from "../../components/dashboard_components/post_dashboard/PostDashboard";
import TradeDashboard from "../../components/dashboard_components/trade_dashboard/TradeDashboard";
import LoadingArticlesPreview from "../../components/loading_components/loading_home_page/LoadingArticlesPreview";
import LoadingLatestTrades from "../../components/loading_components/loading_home_page/LoadingLatestTrades";
import LoadingPosts from "../../components/loading_components/loading_home_page/LoadingPosts";
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
  Division,
  PostsContainer,
  RightContainer,
  UploadDashboardContainer,
  ArticlesPreviewContainer,
} from "./HomePage_styles";

const HomePage = ({
  loading_articles_preview,
  loading_latest_trades,
  loading_posts,
  request_latest_trades,
  request_posts,
  request_article_previews,
  latest_trades,
  posts,
  article_previews,
}) => {
  useEffect(() => {
    document.title = `Codegg - Where Music Lives`;
    if (latest_trades.length === 0) request_latest_trades();
    if (posts.length === 0) request_posts();
    if (article_previews.length === 0) request_article_previews();
  }, []);

  return (
    <>
      <HomePageContainer className="container">
        <MainContainer>
          <LeftContainer>
            <Title title={"Recommended"} />
            <TradeDashboard />
            {loading_latest_trades ? (
              <LoadingLatestTrades />
            ) : (
              <TradesContainer>
                {latest_trades.map((trade_card) => {
                  return (
                    <TradeCard
                      home_page={"true"}
                      data={trade_card[0]}
                      id={trade_card[1]}
                      key={trade_card[1]}
                    />
                  );
                })}
              </TradesContainer>
            )}
          </LeftContainer>
          <MiddleContainer>
            <UploadDashboardContainer>
              <PostDashboard />
            </UploadDashboardContainer>
            <Division />
            {loading_posts ? (
              <LoadingPosts />
            ) : (
              <PostsContainer>
                {posts.map((post) => {
                  return <PostCard data={post[0]} id={post[1]} key={post[1]} />;
                })}
              </PostsContainer>
            )}
          </MiddleContainer>
          <RightContainer>
            <Title title={"Reviews"} />
            {loading_articles_preview ? (
              <LoadingArticlesPreview />
            ) : (
              <ArticlesPreviewContainer>
                {article_previews.map((article_preview) => {
                  return (
                    <ArticleCardPreview
                      data={article_preview[0]}
                      id={article_preview[1]}
                      key={article_preview[1]}
                    />
                  );
                })}
              </ArticlesPreviewContainer>
            )}
          </RightContainer>
        </MainContainer>
      </HomePageContainer>
    </>
  );
};

// redux
const mapStateToProps = ({
  home_page_reducer: {
    loading_articles_preview,
    loading_latest_trades,
    loading_posts,
    latest_trades,
    posts,
    article_previews,
  },
}) => ({
  loading_articles_preview,
  loading_latest_trades,
  loading_posts,
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
