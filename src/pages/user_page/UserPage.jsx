import React, { useEffect } from "react";
import { connect } from "react-redux";

import ProfileCard from "./components/profile_card_component/ProfileCard";
import TradeCard from "../../components/trade_card_component/TradeCard";
import PostCard from "../../components/post_card_component/PostCard";
import ArticleCardTitle from "./components/article_card_title_component/ArticleCardTitle";
import {
  Container,
  LeftContainer,
  ProfileCardContainer,
  RightContainer,
  TopContainer,
  Title,
  RecommendedContainer,
  Division,
  BottomContainer,
  PostsContainer,
  ArticlesContainer,
} from "./UserPage_styles";
import {
  request_investor_profile_start_action,
  request_trades_start_action,
  request_posts_start_action,
  request_user_articles_start_action,
  request_trades_success_action,
  request_user_articles_success_action,
  request_posts_success_action,
  request_investor_profile_success_action,
} from "../../redux/investor_page/actions";

const UserPage = ({
  match: {
    params: { user_id },
  },
  request_user,
  request_trades,
  request_posts,
  request_articles,
  investor,
  trades,
  posts,
  articles,
  reset_trades,
  reset_posts,
  reset_articles,
  reset_user_profile,
}) => {
  useEffect(() => {
    request_trades(user_id);
    request_posts(user_id);
    request_articles({ user_id });
    request_user(user_id);

    return () => {
      reset_trades([]);
      reset_user_profile([]);
      reset_articles([]);
      reset_posts([]);
    };
  }, []);

  return (
    <>
      <Container>
        <LeftContainer>
          <ProfileCardContainer>
            {investor.length > 0 ? (
              <ProfileCard data={investor[0]} id={investor[1]} />
            ) : null}
          </ProfileCardContainer>
        </LeftContainer>
        <RightContainer>
          <TopContainer>
            {investor.length > 0 ? (
              <Title>{`${investor[0].user.split(" ")[0]}'s Recommended`}</Title>
            ) : null}
            <RecommendedContainer>
              {trades.map((trade_card) => {
                return (
                  <TradeCard
                    data={trade_card[0]}
                    id={trade_card[1]}
                    key={trade_card[1]}
                  />
                );
              })}
            </RecommendedContainer>
          </TopContainer>
          <Division />
          <BottomContainer>
            <PostsContainer>
              {posts.map((post) => {
                return <PostCard data={post[0]} id={post[1]} />;
              })}
            </PostsContainer>
            <ArticlesContainer>
              {articles.map((article_card_title) => {
                return (
                  <ArticleCardTitle
                    data={article_card_title[0]}
                    id={article_card_title[1]}
                  />
                );
              })}
            </ArticlesContainer>
          </BottomContainer>
        </RightContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  investor_page_reducer: { investor, trades, posts, articles },
}) => ({
  investor,
  trades,
  posts,
  articles,
});

const mapDispatchToProps = (dispatch) => ({
  request_user: (user_id) =>
    dispatch(request_investor_profile_start_action(user_id)),
  request_trades: (user_id) => dispatch(request_trades_start_action(user_id)),
  request_posts: (user_id) => dispatch(request_posts_start_action(user_id)),
  request_articles: (user_id) =>
    dispatch(request_user_articles_start_action(user_id)),
  reset_trades: (bool) => dispatch(request_trades_success_action(bool)),
  reset_articles: (bool) => dispatch(request_posts_success_action(bool)),
  reset_posts: (bool) => dispatch(request_user_articles_success_action(bool)),
  reset_user_profile: (bool) =>
    dispatch(request_investor_profile_success_action(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
