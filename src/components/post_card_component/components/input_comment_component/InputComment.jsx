import React, { useState } from "react";
import { connect } from "react-redux";

import Spinner from "../../../spinner_component/Spinner";
import {
  Container,
  InputContainer,
  ProfileImage,
  TextInput,
  CommentButtonContainer,
  CommentButton,
} from "./InputComment_styles";
import { send_new_comment_start_action } from "../../../../redux/post/actions";
import { open_modal_action } from "../../../../redux/modal/actions";

const InputComment = ({
  send_new_comment,
  post_id,
  user_firebase,
  comments,
  loading_send_comment,
  open_modal,
}) => {
  const [comment, set_comment] = useState("");

  const handle_input_comment = (input) => {
    set_comment(input);
  };

  const send_new_comment_to_firebase = () => {
    if (user_firebase) {
      if (!comment) return; // avoid empty comments
      const { user, user_id, profile_image } = user_firebase.user_data;
      send_new_comment({
        user,
        user_id,
        profile_image,
        comment,
        post_id,
        comments, // all comments, to unshift new comment
      });

      set_comment("");
    } else {
      open_modal();
    }
  };

  return (
    <>
      <Container>
        <ProfileImage
          profile_image={
            user_firebase
              ? user_firebase.user_data.profile_image
              : "https://firebasestorage.googleapis.com/v0/b/avgguido.appspot.com/o/default%2Fdefault_profile.png?alt=media&token=7cf456f5-a10b-40cf-a644-9f927bec6535"
          }
        />
        <InputContainer>
          <TextInput
            minRows="1"
            placeholder="Got some thoughts?"
            value={comment}
            onChange={(e) => handle_input_comment(e.target.value)}
          />
          <CommentButtonContainer>
            <CommentButton onClick={() => send_new_comment_to_firebase()}>
              Comment
            </CommentButton>
            {loading_send_comment ? <Spinner /> : null}
          </CommentButtonContainer>
        </InputContainer>
      </Container>
    </>
  );
};

// redux
const mapStateToProps = ({
  user_reducer: { user_firebase },
  post_reducer: { comments, loading_send_comment },
}) => ({
  user_firebase,
  comments,
  loading_send_comment,
});

const mapDispatchToProps = (dispatch) => ({
  send_new_comment: (comment) =>
    dispatch(send_new_comment_start_action(comment)),
  open_modal: () => dispatch(open_modal_action()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputComment);
