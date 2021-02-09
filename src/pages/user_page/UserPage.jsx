import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router-dom";

import InfiniteScroll from "react-infinite-scroll-component";
import LoadingUserPage from "../../components/loading_components/loading_user_page/LoadingUserPage";
import UserCard from "./components/user_card_component/UserCard";
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
import "./UserPage.css";
import {
  request_user_start_action,
  request_user_recommended_start_action,
  request_user_posts_start_action,
  request_user_reviews_start_action,
  request_more_user_recommended_start_action,
  request_more_user_posts_start_action,
  request_more_user_reviews_start_action,
  validate_subscriber_start_action,
  clear_user_action,
} from "../../redux/user_page/actions";

const UserPage = ({
  user_firebase,

  loading_user,
  loading_user_recommended,
  loading_user_posts,
  loading_user_reviews,

  user,
  user_recommended,
  user_posts,
  user_reviews,

  request_user_to_firebase,
  request_user_recommended_to_firebase,
  request_user_posts_to_firebase,
  request_user_reviews_to_firebase,

  last_user_recommended,
  last_user_post,
  last_user_review,

  request_more_user_recommended_to_firebase,
  request_more_user_posts_to_firebase,
  request_more_user_reviews_to_firebase,

  remaining_user_posts,
  remaining_user_recommended,
  remaining_user_reviews,

  validate_subscriber,
  clear_user,
}) => {
  const {
    params: { user_id },
  } = useRouteMatch();

  useEffect(() => {
    if (user.length === 0) request_user_to_firebase({ user_id });
    if (user_recommended.length === 0)
      request_user_recommended_to_firebase({ user_id });
    if (user_posts.length === 0) request_user_posts_to_firebase({ user_id });
    if (user_reviews.length === 0)
      request_user_reviews_to_firebase({ user_id });

    return () => {
      clear_user();
    };
  }, []);

  useEffect(() => {
    // useEffect only for user_firebase because
    // it was triggering the return function above
    if (user_firebase) {
      validate_subscriber({
        user_id,
        subscriber_id: user_firebase.user_data.user_id,
      });
    }
  }, [user_firebase]);

  const request_more_user_posts = () => {
    /*
    if (remaining_user_posts) {
      request_more_user_posts({
        user_posts,
        last_user_post,
        user_id,
      });
    }
    */
  };

  const request_more_user_recommended = () => {
    /*
    if (remaining_user_recommended) {
      request_more_user_recommended_to_firebase({
        last_user_recommended,
        user_recommended,
        user_id,
      });
    }
    */
  };

  const request_more_user_reviews = () => {
    /*
    if (remaining_user_reviews) {
      request_more_user_reviews_to_firebase({
        last_user_review,
        user_reviews,
        user_id,
      });
    }
    */
  };

  return (
    <>
      <Container>
        <LeftContainer>
          <ProfileCardContainer>
            {user.length > 0 ? <UserCard data={user[0]} id={user[1]} /> : null}
          </ProfileCardContainer>
        </LeftContainer>
        <RightContainer>
          {user_recommended.length === 0 ? null : (
            <TopContainer>
              {user.length > 0 ? (
                <Title>{`${user[0].user.split(" ")[0]}'s Recommended`}</Title>
              ) : null}
              <RecommendedContainer>
                <InfiniteScroll
                  dataLength={user_recommended.length}
                  next={() => request_more_user_recommended()}
                  hasMore={remaining_user_recommended}
                  className="recommended-container"
                >
                  {user_recommended.map((doc) => {
                    return <TradeCard data={doc[0]} id={doc[1]} key={doc[1]} />;
                  })}
                </InfiniteScroll>
              </RecommendedContainer>
            </TopContainer>
          )}
          <Division />
          <BottomContainer>
            <PostsContainer>
              <InfiniteScroll
                dataLength={user_posts.length}
                next={() => request_more_user_posts()}
                hasMore={remaining_user_posts}
              >
                {user_posts.map((doc) => {
                  return <PostCard data={doc[0]} id={doc[1]} />;
                })}
              </InfiniteScroll>
            </PostsContainer>
            <ArticlesContainer>
              <InfiniteScroll
                dataLength={user_reviews.length}
                next={() => request_more_user_reviews()}
                hasMore={remaining_user_reviews}
              >
                {user_reviews.map((doc) => {
                  return <ArticleCardTitle data={doc[0]} id={doc[1]} />;
                })}
              </InfiniteScroll>
            </ArticlesContainer>
          </BottomContainer>
        </RightContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  user_reducer: { user_firebase },
  user_page_reducer: {
    loading_user,
    loading_user_recommended,
    loading_user_posts,
    loading_user_reviews,

    user,
    user_recommended,
    user_posts,
    user_reviews,

    last_user_recommended,
    last_user_post,
    last_user_review,

    remaining_user_posts,
    remaining_user_recommended,
    remaining_user_reviews,
  },
}) => ({
  user_firebase,

  loading_user,
  loading_user_recommended,
  loading_user_posts,
  loading_user_reviews,

  user,
  user_recommended,
  user_posts,
  user_reviews,

  last_user_recommended,
  last_user_post,
  last_user_review,

  remaining_user_posts,
  remaining_user_recommended,
  remaining_user_reviews,
});

const mapDispatchToProps = (dispatch) => ({
  request_user_to_firebase: (user_id) =>
    dispatch(request_user_start_action(user_id)),
  request_user_recommended_to_firebase: (user_id) =>
    dispatch(request_user_recommended_start_action(user_id)),
  request_user_posts_to_firebase: (user_id) =>
    dispatch(request_user_posts_start_action(user_id)),
  request_user_reviews_to_firebase: (user_id) =>
    dispatch(request_user_reviews_start_action(user_id)),

  request_more_user_posts_to_firebase: (posts) =>
    dispatch(request_more_user_posts_start_action(posts)),
  request_more_user_recommended_to_firebase: (recommended) =>
    dispatch(request_more_user_recommended_start_action(recommended)),
  request_more_user_reviews_to_firebase: (reviews) =>
    dispatch(request_more_user_reviews_start_action(reviews)),

  validate_subscriber: (subscriber_id) =>
    dispatch(validate_subscriber_start_action(subscriber_id)),
  clear_user: () => dispatch(clear_user_action()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
