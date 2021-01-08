import React from "react";
import { connect } from "react-redux";

import InputComment from "../input_comment_component/InputComment";
import IndividualComment from "../individual_comment_component/IndividualComment";
import { CommentsContainer } from "./Comments_styles";

const Comments = ({ comments, post_id }) => {
  return (
    <>
      <CommentsContainer>
        <InputComment post_id={post_id} />
        {comments.map((individual_comment) => {
          return (
            <IndividualComment
              data={individual_comment[0]}
              id={individual_comment[1]}
              key={individual_comment[1]}
            />
          );
        })}
      </CommentsContainer>
    </>
  );
};

// redux
const mapStateToProps = ({ post_reducer: { comments } }) => ({
  comments,
});

export default connect(mapStateToProps, null)(Comments);
