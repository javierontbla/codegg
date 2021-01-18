import React from "react";
import { Route, Switch } from "react-router-dom";

import ArticlesCollection from "./components/articles_collection_component/ArticlesCollection";
import WritePage from "../write_page/WritePage";
import ArticlePage from "../article_page/ArticlePage";
import { Container } from "./ArticlesPage_styles";

const ArticlesPage = ({ match }) => {
  return (
    <>
      <Container className="container">
        <Switch>
          <Route exact path={`${match.path}`} component={ArticlesCollection} />
          <Route exact path={`${match.path}/write`} component={WritePage} />
          <Route
            exact
            path={`/${match.path}/:article_id`}
            component={ArticlePage}
          />
        </Switch>
      </Container>
    </>
  );
};

export default ArticlesPage;
