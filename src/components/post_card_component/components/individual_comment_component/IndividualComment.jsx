import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import moment from "moment";

import {
  IndividualCommentContainer,
  HyperLink,
  TopContainer,
  ProfileImage,
  UserContainer,
  User,
  Date,
  CommentContainer,
  Comment,
  Trends,
  TrendIcon,
  Votes,
} from "./IndividualComment_styles";
import UpIcon from "../../media/up_button.svg";
import { votes_async } from "../../../../firebase/functions/votes";
import { open_modal_action } from "../../../../redux/modal/actions";

const IndividualComment = ({
  post_id,
  data,
  id,
  user_firebase,
  open_modal,
}) => {
  const [votes, set_votes] = useState(data.votes);
  const vote_ref = useRef(false);

  const vote_individual_comment_to_firebase = async () => {
    if (user_firebase) {
      const { user_id } = user_firebase.user_data;
      if (vote_ref.current === true) return;

      vote_ref.current = true; // start
      const response = await votes_async({
        doc_path: `posts/${post_id}/comments/${id}`,
        doc_votes_path: `posts/${post_id}/comments/${id}/votes/${user_id}`,
        user_id,
      });

      set_votes(response[0].votes);
      vote_ref.current = false; // end
    } else {
      open_modal();
    }
  };

  return (
    <>
      <IndividualCommentContainer>
        <TopContainer>
          <HyperLink to={`/users/${data.user_id}`}>
            <ProfileImage profile_image_url={data.profile_image} />
          </HyperLink>
          <UserContainer>
            <HyperLink to={`/users/${data.user_id}`}>
              <User>{data.user}</User>
            </HyperLink>
            <Date>{moment(data.date.toDate()).fromNow()}</Date>
          </UserContainer>
        </TopContainer>
        <CommentContainer>
          <Comment>{data.comment}</Comment>
          <Trends>
            <TrendIcon
              src={UpIcon}
              onClick={() => vote_individual_comment_to_firebase()}
            />
            <Votes>{votes}</Votes>
          </Trends>
        </CommentContainer>
      </IndividualCommentContainer>
    </>
  );
};

// redux
const mapStateToProps = ({ user_reducer: { user_firebase } }) => ({
  user_firebase,
});

const mapDispatchToProps = (dispatch) => ({
  open_modal: () => dispatch(open_modal_action()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndividualComment);
