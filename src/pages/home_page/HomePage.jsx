import React, { useEffect } from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

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
  request_more_recommended_start_action,
  request_posts_action_start,
  request_more_posts_start_action,
  request_article_previews_action_start,
  request_more_article_previews_start_action,
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
  ScrollEnd,
} from "./HomePage_styles";

const HomePage = ({
  loading_articles_preview,
  loading_recommended,
  loading_posts,
  request_latest_trades,
  request_more_recommended,
  request_posts,
  request_more_posts,
  request_article_previews,
  request_more_article_previews,
  recommended,
  last_recommended,
  posts,
  last_post,
  remaining_posts,
  remaining_recommended,
  article_previews,
  last_article_preview,
  remaining_article_previews,
}) => {
  useEffect(() => {
    document.title = `Codegg - Where Music Lives`;
    if (recommended.length === 0) request_latest_trades();
    if (posts.length === 0) request_posts();
    if (article_previews.length === 0) request_article_previews();
  }, []);

  const request_more_recommended_to_firebase = () => {
    // only if there are remaining recommended
    //request_more_recommended({ recommended, last_recommended });
  };

  const request_more_posts_to_firebase = () => {
    // only if there are remaining posts
    //request_more_posts({ posts, last_post });
  };

  const request_more_articles_to_firebase = () => {
    //request_more_article_previews({ article_previews, last_article_preview });
  };

  return (
    <>
      <HomePageContainer className="container">
        <MainContainer>
          <LeftContainer>
            <Title title={"Recommended"} />
            <TradeDashboard />
            {loading_recommended ? (
              <LoadingLatestTrades />
            ) : (
              <InfiniteScroll
                dataLength={recommended.length}
                next={() => request_more_recommended_to_firebase()}
                hasMore={last_recommended}
                style={{ height: "100vh" }}
              >
                <TradesContainer>
                  {recommended.map((recommended) => {
                    return (
                      <TradeCard
                        home_page={"true"}
                        data={recommended[0]}
                        id={recommended[1]}
                        key={recommended[1]}
                      />
                    );
                  })}
                </TradesContainer>
              </InfiniteScroll>
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
              <InfiniteScroll
                dataLength={posts.length}
                next={() => request_more_posts_to_firebase()}
                hasMore={remaining_posts}
              >
                <PostsContainer>
                  {posts.map((post) => {
                    return (
                      <PostCard data={post[0]} id={post[1]} key={post[1]} />
                    );
                  })}
                </PostsContainer>
              </InfiniteScroll>
            )}
          </MiddleContainer>
          <RightContainer>
            <Title title={"Reviews"} />
            {loading_articles_preview ? (
              <LoadingArticlesPreview />
            ) : (
              <InfiniteScroll
                dataLength={article_previews.length}
                next={() => request_more_articles_to_firebase()}
                hasMore={remaining_article_previews}
                style={{ height: "100vh" }}
              >
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
              </InfiniteScroll>
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
    loading_recommended,
    loading_posts,
    recommended,
    last_recommended,
    posts,
    last_post,
    remaining_recommended,
    remaining_posts,
    article_previews,
    last_article_preview,
    remaining_article_previews,
  },
}) => ({
  loading_articles_preview,
  loading_recommended,
  loading_posts,
  recommended,
  last_recommended,
  posts,
  last_post,
  remaining_posts,
  remaining_recommended,
  article_previews,
  last_article_preview,
  remaining_article_previews,
});

const mapDispatchToProps = (dispatch) => ({
  request_latest_trades: () => dispatch(request_latest_trades_action_start()),
  request_more_recommended: (recommended) =>
    dispatch(request_more_recommended_start_action(recommended)),
  request_posts: () => dispatch(request_posts_action_start()),
  request_more_posts: (posts) =>
    dispatch(request_more_posts_start_action(posts)),
  request_article_previews: () =>
    dispatch(request_article_previews_action_start()),
  request_more_article_previews: (article_previews) =>
    dispatch(request_more_article_previews_start_action(article_previews)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
