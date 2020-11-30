import React, { useEffect } from "react";
import { connect } from "react-redux";

import Article from "./components/Article";
import Error from "../../components/error.component/Error";
import { fetchArticleStart } from "../../redux/article.page/actions";

const ArticlePage = ({
  match: {
    params: { articleId },
  },
  loading,
  getArticle,
  article,
  error,
}) => {
  useEffect(() => {
    // getting to the top of the page when component renders
    window.scrollTo(0, 0);
    // getting id doc from the url, using react router
    const url = articleId.split("-");
    getArticle(url[url.length - 1]);
  }, [getArticle, articleId]);

  return (
    <>
      {!loading && !error ? (
        <Article article={article} />
      ) : !error ? null : (
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
