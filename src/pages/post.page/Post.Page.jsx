import React, { useEffect } from "react";
import { connect } from "react-redux";

import Post from "./components/Post";
import Loading from "../../components/loading.component/Loading";
import Error from "../../components/error.component/Error";
import { fetchPostStart } from "../../redux/post.page/actions";

const PostPage = ({
  match: {
    params: { postId },
  },
  postLoading,
  getPost,
  post,
  error,
}) => {
  useEffect(() => {
    const link = postId.split("-");
    getPost(link[link.length - 1]);
  }, []);

  return (
    <>
      {!postLoading && !error ? (
        <Post post={post} />
      ) : !error ? (
        <Loading />
      ) : (
        <Error />
      )}
    </>
  );
};

const mapStateToProps = ({
  postPageReducer: { postLoading, post, error },
}) => ({
  postLoading,
  post,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  getPost: (id) => dispatch(fetchPostStart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
