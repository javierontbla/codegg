import React, { useState } from "react";
import { connect } from "react-redux";

import {
  Container,
  InputCommentContainer,
  ProfileImage,
  TextArea,
  CommentButton,
} from "./InputComment_styles";
import { send_new_comment_start_action } from "../../../../redux/post/actions";

const InputComment = ({
  send_new_comment,
  post_id,
  active_user_database,
  comments,
}) => {
  const [comment, set_comment] = useState("");

  const handle_input_comment = (input) => {
    set_comment(input);
  };

  const send_new_comment_to_firebase = () => {
    if (!comment) return; // avoid empty comments

    const { user, user_id, profile_image } = active_user_database.user_data;
    send_new_comment({
      user,
      user_id,
      profile_image,
      comment,
      post_id,
      comments, // all comments, to unshift new comment
    });

    set_comment("");
  };

  return (
    <>
      <Container>
        <ProfileImage
          profile_image_url={
            "https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          }
        />
        <InputCommentContainer>
          <TextArea
            rows="3"
            placeholder="Write a comment"
            value={comment}
            onChange={(e) => handle_input_comment(e.target.value)}
          />
          <CommentButton onClick={() => send_new_comment_to_firebase()}>
            Comment
          </CommentButton>
        </InputCommentContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  user_reducer: { active_user_database },
  post_reducer: { comments },
}) => ({
  active_user_database,
  comments,
});

const mapDispatchToProps = (dispatch) => ({
  send_new_comment: (comment) =>
    dispatch(send_new_comment_start_action(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputComment);
