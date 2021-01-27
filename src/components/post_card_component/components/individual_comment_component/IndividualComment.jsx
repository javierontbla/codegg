import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import moment from "moment";

import {
  IndividualCommentContainer,
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

const IndividualComment = ({ post_id, data, id, user_firebase }) => {
  const [votes, set_votes] = useState(data.votes);
  const vote_ref = useRef(false);

  const vote_individual_comment_to_firebase = async () => {
    const { user_id } = user_firebase.user_data;
    if (vote_ref.current === true) return;

    vote_ref.current = true; // start
    const response = await votes_async({
      doc_path: `posts/${post_id}/comments/${id}`,
      doc_votes_path: `posts/${post_id}/comments/${id}/votes/${user_id}`,
    });

    set_votes(response[0].votes);
    vote_ref.current = false; // end
  };

  return (
    <>
      <IndividualCommentContainer>
        <TopContainer>
          <ProfileImage profile_image_url={data.profile_image} />
          <UserContainer>
            <User>{data.user}</User>
            <Date>{moment(data.date.toDate()).startOf("hour").fromNow()}</Date>
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

export default connect(mapStateToProps, null)(IndividualComment);
