import React, { useEffect } from "react";
import { connect } from "react-redux";

import Post from "./components/Post";
import Loading from "../home.page/components/Loading";
import { fetchPostStart } from "../../redux/post.page/actions";

const PostPage = ({
  match: {
    params: { postId },
  },
  loading,
  getPost,
  post,
  error,
}) => {
  useEffect(() => {
    const link = postId.split("-");
    getPost(link[link.length - 1]);
  }, []);

  return <>{!loading ? <Post post={post} /> : <Loading />}</>;
};

const mapStateToProps = ({ postPageReducer: { loading, post, error } }) => ({
  loading,
  post,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  getPost: (id) => dispatch(fetchPostStart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
