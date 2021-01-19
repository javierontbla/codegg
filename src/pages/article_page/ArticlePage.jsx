import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Article from "./components/article_component/Article";
import { request_article_start_action } from "../../redux/article_page/actions";

const ArticlePage = ({
  match: {
    params: { article_id },
  },
  request_article,
  loading_article,
  article,
  error_article,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0); // getting to the top of the page when component renders
    const url = article_id.split("-"); // getting id doc from the url, using react router

    request_article(url[url.length - 1]);
  }, [article_id]);

  return (
    <>
      {error_article ? (
        console.log("Error!")
      ) : loading_article ? (
        console.log("Loading...")
      ) : (
        <Article data={article} />
      )}
    </>
  );
};

const mapStateToProps = ({
  article_page_reducer: { loading_article, article, error_article },
}) => ({
  loading_article,
  article,
  error_article,
});

const mapDispatchToProps = (dispatch) => ({
  request_article: (id) => dispatch(request_article_start_action(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ArticlePage)
);
