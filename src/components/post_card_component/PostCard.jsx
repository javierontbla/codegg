import React from "react";
import moment from "moment";
import { connect } from "react-redux";

import Comments from "./components/comments_component/Comments";
import Premium from "../premium_component/Premium";
import LoadingComments from "../loading_components/loading_comments/LoadingComments";
import {
  BottomContainer,
  Container,
  PostContainer,
  TopContainer,
  PremiumContainer,
  UserDataContainer,
  ProfileImageContainer,
  NamesContainer,
  Name,
  NameLink,
  Date,
  MiddleContainer,
  Description,
  PostImageContainer,
  TrendsContainer,
  TrendContainer,
  TrendIcon,
  CountContainer,
  CommentsIconContainer,
  CommentsContainer,
  LoadMoreComments,
} from "./PostCard_styles";
import UpIcon from "./media/up_button.svg";
import DownIcon from "./media/down_button.svg";
import CommentsIcon from "./media/comments_button.svg";
import { request_all_comments_start_action } from "../../redux/post/actions";

const PostCard = ({
  data,
  id,
  loading_comments,
  current_post_id,
  request_all_comments,
}) => {
  moment.locale("es");

  const display_all_comments = () => {
    if (current_post_id !== id) request_all_comments(id);
  };

  return (
    <>
      <Container>
        <PostContainer>
          <PremiumContainer>
            <Premium />
          </PremiumContainer>
          <TopContainer>
            <ProfileImageContainer profile_image_url={data.profile_image} />
            <UserDataContainer>
              <NamesContainer>
                <Name>{data.user.toLowerCase()}</Name>
                <NameLink>@{data.username}</NameLink>
              </NamesContainer>
              <Date>
                {moment(data.date.toDate()).startOf("hour").fromNow()}
              </Date>
            </UserDataContainer>
          </TopContainer>
          <MiddleContainer>
            <Description>{data.description}</Description>
          </MiddleContainer>
          <PostImageContainer post_image_url={data.post_image} />
          <BottomContainer display_comments={current_post_id === id}>
            <TrendsContainer>
              <TrendContainer>
                <TrendIcon src={UpIcon} />
              </TrendContainer>
              <CountContainer>
                {data.up_trends - data.down_trends}
              </CountContainer>
              <TrendContainer>
                <TrendIcon src={DownIcon} />
              </TrendContainer>
            </TrendsContainer>
            <CommentsIconContainer>
              <TrendIcon
                src={CommentsIcon}
                comment={"true"}
                onClick={() => display_all_comments()}
              />
            </CommentsIconContainer>
          </BottomContainer>
          <CommentsContainer display_comments={current_post_id === id}>
            {loading_comments ? (
              <LoadingComments />
            ) : current_post_id === id ? (
              <Comments post_id={id} />
            ) : null}
          </CommentsContainer>
        </PostContainer>
        <LoadMoreComments display_comments={current_post_id === id}>
          Show more comments
        </LoadMoreComments>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  post_reducer: { loading_comments, current_post_id },
}) => ({
  loading_comments,
  current_post_id,
});

const mapDispatchToProps = (dispatch) => ({
  request_all_comments: (post_id) =>
    dispatch(request_all_comments_start_action(post_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
