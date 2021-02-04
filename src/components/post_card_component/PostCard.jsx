import React, { useState, useRef } from "react";
import moment from "moment";
import { connect } from "react-redux";

import Spinner from "../spinner_component/Spinner";
import Comments from "./components/comments_component/Comments";
import LoadingComments from "../loading_components/loading_comments/LoadingComments";
import {
  BottomContainer,
  Container,
  PostContainer,
  TopContainer,
  UserDataContainer,
  ProfileImage,
  NamesContainer,
  Name,
  DateContainer,
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
  LinkContainer,
} from "./PostCard_styles";
import UpIcon from "./media/up_button.svg";
import CommentsIcon from "./media/comments_button.svg";
import {
  request_all_comments_start_action,
  request_more_comments_start_action,
  close_comments_section_action,
} from "../../redux/post/actions";
import { open_modal_action } from "../../redux/modal/actions";
import { votes_async } from "../../firebase/functions/votes";

const PostCard = ({
  data,
  id,
  user_firebase,
  loading_comments,
  current_post_id,
  comments,
  last_comment,
  request_all_comments,
  request_more_comments,
  close_comments_section,
  remaining_comments,
  loading_more_comments,
  open_modal,
}) => {
  moment.locale("en");
  const [votes, set_votes] = useState(data.votes);
  const vote_ref = useRef(false);

  const display_comments = () => {
    if (current_post_id !== id) request_all_comments(id);
    else close_comments_section(); // it's the same so close comments section
  };

  const vote_post_card_to_firebase = async () => {
    if (user_firebase) {
      const { user_id } = user_firebase.user_data;
      if (vote_ref.current === true) return;

      vote_ref.current = true; // start
      const response = await votes_async({
        doc_path: `posts/${id}`,
        doc_votes_path: `posts/${id}/votes/${user_id}`,
      });

      set_votes(response[0].votes);
      vote_ref.current = false; // end
    } else {
      open_modal();
    }
  };

  const request_more_comments_to_firebase = () => {
    if (remaining_comments) {
      request_more_comments({
        comments,
        last_comment,
        post_id: id,
      });
    }
  };

  return (
    <>
      <Container>
        <PostContainer>
          <TopContainer>
            <LinkContainer to={`/users/${data.user_id}`}>
              <ProfileImage profile_image_url={data.profile_image} />
            </LinkContainer>
            <UserDataContainer>
              <LinkContainer to={`/users/${data.user_id}`}>
                <NamesContainer>
                  <Name>{data.user.toLowerCase()}</Name>
                </NamesContainer>
              </LinkContainer>
              <DateContainer>
                {moment.utc(data.date.toDate()).fromNow()}
              </DateContainer>
            </UserDataContainer>
          </TopContainer>
          <MiddleContainer>
            <Description>{data.description}</Description>
          </MiddleContainer>
          <PostImageContainer post_image_url={data.post_image} />
          <BottomContainer display_comments={current_post_id === id}>
            <TrendsContainer>
              <TrendContainer>
                <TrendIcon
                  src={UpIcon}
                  onClick={() => vote_post_card_to_firebase()}
                />
              </TrendContainer>
              <CountContainer>{votes}</CountContainer>
            </TrendsContainer>
            <CommentsIconContainer>
              <TrendIcon
                src={CommentsIcon}
                comment={"true"}
                onClick={() => display_comments()}
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
        <LoadMoreComments
          display_comments={current_post_id === id}
          onClick={() => request_more_comments_to_firebase()}
        >
          {remaining_comments ? `Show more comments` : `No more comments`}
          {loading_more_comments ? <Spinner /> : null}
        </LoadMoreComments>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  home_page_reducer: { posts },
  post_reducer: {
    loading_comments,
    current_post_id,
    update,
    comments,
    last_comment,
    remaining_comments,
    loading_more_comments,
  },
  user_reducer: { user_firebase },
}) => ({
  posts,
  loading_comments,
  current_post_id,
  user_firebase,
  update,
  comments,
  last_comment,
  remaining_comments,
  loading_more_comments,
});

const mapDispatchToProps = (dispatch) => ({
  request_all_comments: (post_id) =>
    dispatch(request_all_comments_start_action(post_id)),
  request_more_comments: (comments) =>
    dispatch(request_more_comments_start_action(comments)),
  close_comments_section: () => dispatch(close_comments_section_action()),
  open_modal: () => dispatch(open_modal_action()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
