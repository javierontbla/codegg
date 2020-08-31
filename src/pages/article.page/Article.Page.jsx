import React, { useEffect } from "react";
import { connect } from "react-redux";

import Post from "./components/Article";
import Loading from "../../components/loading.component/Loading";
import Error from "../../components/error.component/Error";
import { fetchArticleStart } from "../../redux/article.page/actions";

const ArticlePage = ({
  match: {
    params: { postId },
  },
  loading,
  getArticle,
  article,
  error,
}) => {
  useEffect(() => {
    // getting id doc from the url, using react router
    const url = postId.split("-");
    getArticle(url[url.length - 1]);
    console.log("FETCH");
  }, []);

  return (
    <>
      {!loading && !error ? (
        <Post article={article} />
      ) : !error ? (
        <Loading />
      ) : (
        <Error />
      )}
    </>
  );
};

const mapStateToProps = ({
  articlePageReducer: { loading, article, error },
}) => ({
  loading,
  article,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  getArticle: (id) => dispatch(fetchArticleStart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
