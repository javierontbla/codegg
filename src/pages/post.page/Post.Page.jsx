import React, { useEffect } from "react";
import { connect } from "react-redux";

import Post from "./components/Post";
import { fetchPostStart } from "../../redux/post.page/actions";

const PostPage = ({
  match: {
    params: { postId },
  },
  loading,
  getPost,
  post,
}) => {
  useEffect(() => {
    getPost(postId);
  }, []);

  return <>{!loading ? <Post post={post} /> : null}</>;
};

const mapStateToProps = ({ postPageReducer: { loading, post } }) => ({
  loading,
  post,
});

const mapDispatchToProps = (dispatch) => ({
  getPost: (id) => dispatch(fetchPostStart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
